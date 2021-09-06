import {
  injectable,
  inject,
  optional,
  multiInject,
  ContainerModule,
  Container,
} from 'inversify';
import {
  isObject as isObject$1,
  warn,
  isArray as isArray$1,
  toCamelCase,
  ensure,
  toDashed,
  isUndefined,
  isString,
  EMPTY_OBJ,
  isFunction as isFunction$1,
  internalComponents,
  controlledComponent,
  defaultReconciler,
  noop,
  isBoolean,
} from '@tarojs/shared';

/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/** https://github.com/rbuckton/reflect-metadata */

if (process.env.TARO_ENV === 'h5') {
  require('reflect-metadata');
} else {
  // var Reflect;
  (function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
      // var root = typeof global === "object" ? global :
      //     typeof self === "object" ? self :
      //         typeof this === "object" ? this :
      //             Function("return this;")();
      var exporter = makeExporter(Reflect);
      // if (typeof root.Reflect === "undefined") {
      //     root.Reflect = Reflect;
      // }
      // else {
      //     exporter = makeExporter(root.Reflect, exporter);
      // }
      factory(exporter);
      function makeExporter(target, previous) {
        return function (key, value) {
          if (typeof target[key] !== 'function') {
            Object.defineProperty(target, key, {
              configurable: true,
              writable: true,
              value: value,
            });
          }
          if (previous) previous(key, value);
        };
      }
    })(function (exporter) {
      var hasOwn = Object.prototype.hasOwnProperty;
      // feature test for Symbol support
      var supportsSymbol = typeof Symbol === 'function';
      var toPrimitiveSymbol =
        supportsSymbol && typeof Symbol.toPrimitive !== 'undefined'
          ? Symbol.toPrimitive
          : '@@toPrimitive';
      var iteratorSymbol =
        supportsSymbol && typeof Symbol.iterator !== 'undefined'
          ? Symbol.iterator
          : '@@iterator';
      var supportsCreate = typeof Object.create === 'function'; // feature test for Object.create support
      var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
      var downLevel = !supportsCreate && !supportsProto;
      var HashMap = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: supportsCreate
          ? function () {
              return MakeDictionary(Object.create(null));
            }
          : supportsProto
          ? function () {
              return MakeDictionary({ __proto__: null });
            }
          : function () {
              return MakeDictionary({});
            },
        has: downLevel
          ? function (map, key) {
              return hasOwn.call(map, key);
            }
          : function (map, key) {
              return key in map;
            },
        get: downLevel
          ? function (map, key) {
              return hasOwn.call(map, key) ? map[key] : undefined;
            }
          : function (map, key) {
              return map[key];
            },
      };
      // Load global or shim versions of Map, Set, and WeakMap
      var functionPrototype = Object.getPrototypeOf(Function);
      var usePolyfill =
        typeof process === 'object' &&
        process.env &&
        process.env['REFLECT_METADATA_USE_MAP_POLYFILL'] === 'true';
      var _Map =
        !usePolyfill &&
        typeof Map === 'function' &&
        typeof Map.prototype.entries === 'function'
          ? Map
          : CreateMapPolyfill();
      var _Set =
        !usePolyfill &&
        typeof Set === 'function' &&
        typeof Set.prototype.entries === 'function'
          ? Set
          : CreateSetPolyfill();
      var _WeakMap =
        !usePolyfill && typeof WeakMap === 'function'
          ? WeakMap
          : CreateWeakMapPolyfill();
      // [[Metadata]] internal slot
      // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
      var Metadata = new _WeakMap();
      /**
       * Applies a set of decorators to a property of a target object.
       * @param decorators An array of decorators.
       * @param target The target object.
       * @param propertyKey (Optional) The property key to decorate.
       * @param attributes (Optional) The property descriptor for the target key.
       * @remarks Decorators are applied in reverse order.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     Example = Reflect.decorate(decoratorsArray, Example);
       *
       *     // property (on constructor)
       *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
       *
       *     // property (on prototype)
       *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
       *
       *     // method (on constructor)
       *     Object.defineProperty(Example, "staticMethod",
       *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
       *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
       *
       *     // method (on prototype)
       *     Object.defineProperty(Example.prototype, "method",
       *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
       *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
       *
       */
      function decorate(decorators, target, propertyKey, attributes) {
        if (!IsUndefined(propertyKey)) {
          if (!IsArray(decorators)) throw new TypeError();
          if (!IsObject(target)) throw new TypeError();
          if (
            !IsObject(attributes) &&
            !IsUndefined(attributes) &&
            !IsNull(attributes)
          )
            throw new TypeError();
          if (IsNull(attributes)) attributes = undefined;
          propertyKey = ToPropertyKey(propertyKey);
          return DecorateProperty(decorators, target, propertyKey, attributes);
        } else {
          if (!IsArray(decorators)) throw new TypeError();
          if (!IsConstructor(target)) throw new TypeError();
          return DecorateConstructor(decorators, target);
        }
      }
      exporter('decorate', decorate);
      // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
      // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
      /**
       * A default metadata decorator factory that can be used on a class, class member, or parameter.
       * @param metadataKey The key for the metadata entry.
       * @param metadataValue The value for the metadata entry.
       * @returns A decorator function.
       * @remarks
       * If `metadataKey` is already defined for the target and target key, the
       * metadataValue for that key will be overwritten.
       * @example
       *
       *     // constructor
       *     @Reflect.metadata(key, value)
       *     class Example {
       *     }
       *
       *     // property (on constructor, TypeScript only)
       *     class Example {
       *         @Reflect.metadata(key, value)
       *         static staticProperty;
       *     }
       *
       *     // property (on prototype, TypeScript only)
       *     class Example {
       *         @Reflect.metadata(key, value)
       *         property;
       *     }
       *
       *     // method (on constructor)
       *     class Example {
       *         @Reflect.metadata(key, value)
       *         static staticMethod() { }
       *     }
       *
       *     // method (on prototype)
       *     class Example {
       *         @Reflect.metadata(key, value)
       *         method() { }
       *     }
       *
       */
      function metadata(metadataKey, metadataValue) {
        function decorator(target, propertyKey) {
          if (!IsObject(target)) throw new TypeError();
          if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
            throw new TypeError();
          OrdinaryDefineOwnMetadata(
            metadataKey,
            metadataValue,
            target,
            propertyKey,
          );
        }
        return decorator;
      }
      exporter('metadata', metadata);
      /**
       * Define a unique metadata entry on the target.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param metadataValue A value that contains attached metadata.
       * @param target The target object on which to define metadata.
       * @param propertyKey (Optional) The property key for the target.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     Reflect.defineMetadata("custom:annotation", options, Example);
       *
       *     // property (on constructor)
       *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
       *
       *     // property (on prototype)
       *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
       *
       *     // method (on constructor)
       *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
       *
       *     // method (on prototype)
       *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
       *
       *     // decorator factory as metadata-producing annotation.
       *     function MyAnnotation(options): Decorator {
       *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
       *     }
       *
       */
      function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryDefineOwnMetadata(
          metadataKey,
          metadataValue,
          target,
          propertyKey,
        );
      }
      exporter('defineMetadata', defineMetadata);
      /**
       * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.hasMetadata("custom:annotation", Example);
       *
       *     // property (on constructor)
       *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
       *
       */
      function hasMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasMetadata(metadataKey, target, propertyKey);
      }
      exporter('hasMetadata', hasMetadata);
      /**
       * Gets a value indicating whether the target object has the provided metadata key defined.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
       *
       *     // property (on constructor)
       *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
       *
       */
      function hasOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter('hasOwnMetadata', hasOwnMetadata);
      /**
       * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.getMetadata("custom:annotation", Example);
       *
       *     // property (on constructor)
       *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
       *
       */
      function getMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetMetadata(metadataKey, target, propertyKey);
      }
      exporter('getMetadata', getMetadata);
      /**
       * Gets the metadata value for the provided metadata key on the target object.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.getOwnMetadata("custom:annotation", Example);
       *
       *     // property (on constructor)
       *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
       *
       */
      function getOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter('getOwnMetadata', getOwnMetadata);
      /**
       * Gets the metadata keys defined on the target object or its prototype chain.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns An array of unique metadata keys.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.getMetadataKeys(Example);
       *
       *     // property (on constructor)
       *     result = Reflect.getMetadataKeys(Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.getMetadataKeys(Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.getMetadataKeys(Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.getMetadataKeys(Example.prototype, "method");
       *
       */
      function getMetadataKeys(target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryMetadataKeys(target, propertyKey);
      }
      exporter('getMetadataKeys', getMetadataKeys);
      /**
       * Gets the unique metadata keys defined on the target object.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns An array of unique metadata keys.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.getOwnMetadataKeys(Example);
       *
       *     // property (on constructor)
       *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
       *
       */
      function getOwnMetadataKeys(target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryOwnMetadataKeys(target, propertyKey);
      }
      exporter('getOwnMetadataKeys', getOwnMetadataKeys);
      /**
       * Deletes the metadata entry from the target object with the provided key.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns `true` if the metadata entry was found and deleted; otherwise, false.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.deleteMetadata("custom:annotation", Example);
       *
       *     // property (on constructor)
       *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
       *
       */
      function deleteMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        var metadataMap = GetOrCreateMetadataMap(
          target,
          propertyKey,
          /*Create*/ false,
        );
        if (IsUndefined(metadataMap)) return false;
        if (!metadataMap.delete(metadataKey)) return false;
        if (metadataMap.size > 0) return true;
        var targetMetadata = Metadata.get(target);
        targetMetadata.delete(propertyKey);
        if (targetMetadata.size > 0) return true;
        Metadata.delete(target);
        return true;
      }
      exporter('deleteMetadata', deleteMetadata);
      function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsConstructor(decorated)) throw new TypeError();
            target = decorated;
          }
        }
        return target;
      }
      function DecorateProperty(decorators, target, propertyKey, descriptor) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target, propertyKey, descriptor);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsObject(decorated)) throw new TypeError();
            descriptor = decorated;
          }
        }
        return descriptor;
      }
      function GetOrCreateMetadataMap(O, P, Create) {
        var targetMetadata = Metadata.get(O);
        if (IsUndefined(targetMetadata)) {
          if (!Create) return undefined;
          targetMetadata = new _Map();
          Metadata.set(O, targetMetadata);
        }
        var metadataMap = targetMetadata.get(P);
        if (IsUndefined(metadataMap)) {
          if (!Create) return undefined;
          metadataMap = new _Map();
          targetMetadata.set(P, metadataMap);
        }
        return metadataMap;
      }
      // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
      function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn) return true;
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent)) return OrdinaryHasMetadata(MetadataKey, parent, P);
        return false;
      }
      // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
      function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
        if (IsUndefined(metadataMap)) return false;
        return ToBoolean(metadataMap.has(MetadataKey));
      }
      // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
      function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent)) return OrdinaryGetMetadata(MetadataKey, parent, P);
        return undefined;
      }
      // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
      function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
        if (IsUndefined(metadataMap)) return undefined;
        return metadataMap.get(MetadataKey);
      }
      // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
      function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
        metadataMap.set(MetadataKey, MetadataValue);
      }
      // 3.1.6.1 OrdinaryMetadataKeys(O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
      function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (parent === null) return ownKeys;
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0) return ownKeys;
        if (ownKeys.length <= 0) return parentKeys;
        var set = new _Set();
        var keys = [];
        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
          var key = ownKeys_1[_i];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        for (
          var _a = 0, parentKeys_1 = parentKeys;
          _a < parentKeys_1.length;
          _a++
        ) {
          var key = parentKeys_1[_a];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        return keys;
      }
      // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
      function OrdinaryOwnMetadataKeys(O, P) {
        var keys = [];
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
        if (IsUndefined(metadataMap)) return keys;
        var keysObj = metadataMap.keys();
        var iterator = GetIterator(keysObj);
        var k = 0;
        while (true) {
          var next = IteratorStep(iterator);
          if (!next) {
            keys.length = k;
            return keys;
          }
          var nextValue = IteratorValue(next);
          try {
            keys[k] = nextValue;
          } catch (e) {
            try {
              IteratorClose(iterator);
            } finally {
              throw e;
            }
          }
          k++;
        }
      }
      // 6 ECMAScript Data Typ0es and Values
      // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
      function Type(x) {
        if (x === null) return 1 /* Null */;
        switch (typeof x) {
          case 'undefined':
            return 0 /* Undefined */;
          case 'boolean':
            return 2 /* Boolean */;
          case 'string':
            return 3 /* String */;
          case 'symbol':
            return 4 /* Symbol */;
          case 'number':
            return 5 /* Number */;
          case 'object':
            return x === null ? 1 /* Null */ : 6 /* Object */;
          default:
            return 6 /* Object */;
        }
      }
      // 6.1.1 The Undefined Type
      // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
      function IsUndefined(x) {
        return x === undefined;
      }
      // 6.1.2 The Null Type
      // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
      function IsNull(x) {
        return x === null;
      }
      // 6.1.5 The Symbol Type
      // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
      function IsSymbol(x) {
        return typeof x === 'symbol';
      }
      // 6.1.7 The Object Type
      // https://tc39.github.io/ecma262/#sec-object-type
      function IsObject(x) {
        return typeof x === 'object' ? x !== null : typeof x === 'function';
      }
      // 7.1 Type Conversion
      // https://tc39.github.io/ecma262/#sec-type-conversion
      // 7.1.1 ToPrimitive(input [, PreferredType])
      // https://tc39.github.io/ecma262/#sec-toprimitive
      function ToPrimitive(input, PreferredType) {
        switch (Type(input)) {
          case 0 /* Undefined */:
            return input;
          case 1 /* Null */:
            return input;
          case 2 /* Boolean */:
            return input;
          case 3 /* String */:
            return input;
          case 4 /* Symbol */:
            return input;
          case 5 /* Number */:
            return input;
        }
        var hint =
          PreferredType === 3 /* String */
            ? 'string'
            : PreferredType === 5 /* Number */
            ? 'number'
            : 'default';
        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
        if (exoticToPrim !== undefined) {
          var result = exoticToPrim.call(input, hint);
          if (IsObject(result)) throw new TypeError();
          return result;
        }
        return OrdinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
      }
      // 7.1.1.1 OrdinaryToPrimitive(O, hint)
      // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
      function OrdinaryToPrimitive(O, hint) {
        if (hint === 'string') {
          var toString_1 = O.toString;
          if (IsCallable(toString_1)) {
            var result = toString_1.call(O);
            if (!IsObject(result)) return result;
          }
          var valueOf = O.valueOf;
          if (IsCallable(valueOf)) {
            var result = valueOf.call(O);
            if (!IsObject(result)) return result;
          }
        } else {
          var valueOf = O.valueOf;
          if (IsCallable(valueOf)) {
            var result = valueOf.call(O);
            if (!IsObject(result)) return result;
          }
          var toString_2 = O.toString;
          if (IsCallable(toString_2)) {
            var result = toString_2.call(O);
            if (!IsObject(result)) return result;
          }
        }
        throw new TypeError();
      }
      // 7.1.2 ToBoolean(argument)
      // https://tc39.github.io/ecma262/2016/#sec-toboolean
      function ToBoolean(argument) {
        return !!argument;
      }
      // 7.1.12 ToString(argument)
      // https://tc39.github.io/ecma262/#sec-tostring
      function ToString(argument) {
        return '' + argument;
      }
      // 7.1.14 ToPropertyKey(argument)
      // https://tc39.github.io/ecma262/#sec-topropertykey
      function ToPropertyKey(argument) {
        var key = ToPrimitive(argument, 3 /* String */);
        if (IsSymbol(key)) return key;
        return ToString(key);
      }
      // 7.2 Testing and Comparison Operations
      // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
      // 7.2.2 IsArray(argument)
      // https://tc39.github.io/ecma262/#sec-isarray
      function IsArray(argument) {
        return Array.isArray
          ? Array.isArray(argument)
          : argument instanceof Object
          ? argument instanceof Array
          : Object.prototype.toString.call(argument) === '[object Array]';
      }
      // 7.2.3 IsCallable(argument)
      // https://tc39.github.io/ecma262/#sec-iscallable
      function IsCallable(argument) {
        // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
        return typeof argument === 'function';
      }
      // 7.2.4 IsConstructor(argument)
      // https://tc39.github.io/ecma262/#sec-isconstructor
      function IsConstructor(argument) {
        // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
        return typeof argument === 'function';
      }
      // 7.2.7 IsPropertyKey(argument)
      // https://tc39.github.io/ecma262/#sec-ispropertykey
      function IsPropertyKey(argument) {
        switch (Type(argument)) {
          case 3 /* String */:
            return true;
          case 4 /* Symbol */:
            return true;
          default:
            return false;
        }
      }
      // 7.3 Operations on Objects
      // https://tc39.github.io/ecma262/#sec-operations-on-objects
      // 7.3.9 GetMethod(V, P)
      // https://tc39.github.io/ecma262/#sec-getmethod
      function GetMethod(V, P) {
        var func = V[P];
        if (func === undefined || func === null) return undefined;
        if (!IsCallable(func)) throw new TypeError();
        return func;
      }
      // 7.4 Operations on Iterator Objects
      // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
      function GetIterator(obj) {
        var method = GetMethod(obj, iteratorSymbol);
        if (!IsCallable(method)) throw new TypeError(); // from Call
        var iterator = method.call(obj);
        if (!IsObject(iterator)) throw new TypeError();
        return iterator;
      }
      // 7.4.4 IteratorValue(iterResult)
      // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
      function IteratorValue(iterResult) {
        return iterResult.value;
      }
      // 7.4.5 IteratorStep(iterator)
      // https://tc39.github.io/ecma262/#sec-iteratorstep
      function IteratorStep(iterator) {
        var result = iterator.next();
        return result.done ? false : result;
      }
      // 7.4.6 IteratorClose(iterator, completion)
      // https://tc39.github.io/ecma262/#sec-iteratorclose
      function IteratorClose(iterator) {
        var f = iterator['return'];
        if (f) f.call(iterator);
      }
      // 9.1 Ordinary Object Internal Methods and Internal Slots
      // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
      // 9.1.1.1 OrdinaryGetPrototypeOf(O)
      // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
      function OrdinaryGetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== 'function' || O === functionPrototype) return proto;
        // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
        // Try to determine the superclass constructor. Compatible implementations
        // must either set __proto__ on a subclass constructor to the superclass constructor,
        // or ensure each class has a valid `constructor` property on its prototype that
        // points back to the constructor.
        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
        // This is the case when in ES6 or when using __proto__ in a compatible browser.
        if (proto !== functionPrototype) return proto;
        // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
        var prototype = O.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype)
          return proto;
        // If the constructor was not a function, then we cannot determine the heritage.
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== 'function') return proto;
        // If we have some kind of self-reference, then we cannot determine the heritage.
        if (constructor === O) return proto;
        // we have a pretty good guess at the heritage.
        return constructor;
      }
      // naive Map shim
      function CreateMapPolyfill() {
        var cacheSentinel = {};
        var arraySentinel = [];
        var MapIterator = /** @class */ (function () {
          function MapIterator(keys, values, selector) {
            this._index = 0;
            this._keys = keys;
            this._values = values;
            this._selector = selector;
          }
          MapIterator.prototype['@@iterator'] = function () {
            return this;
          };
          MapIterator.prototype[iteratorSymbol] = function () {
            return this;
          };
          MapIterator.prototype.next = function () {
            var index = this._index;
            if (index >= 0 && index < this._keys.length) {
              var result = this._selector(
                this._keys[index],
                this._values[index],
              );
              if (index + 1 >= this._keys.length) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
              } else {
                this._index++;
              }
              return { value: result, done: false };
            }
            return { value: undefined, done: true };
          };
          MapIterator.prototype.throw = function (error) {
            if (this._index >= 0) {
              this._index = -1;
              this._keys = arraySentinel;
              this._values = arraySentinel;
            }
            throw error;
          };
          MapIterator.prototype.return = function (value) {
            if (this._index >= 0) {
              this._index = -1;
              this._keys = arraySentinel;
              this._values = arraySentinel;
            }
            return { value: value, done: true };
          };
          return MapIterator;
        })();
        return /** @class */ (function () {
          function Map() {
            this._keys = [];
            this._values = [];
            this._cacheKey = cacheSentinel;
            this._cacheIndex = -2;
          }
          Object.defineProperty(Map.prototype, 'size', {
            get: function () {
              return this._keys.length;
            },
            enumerable: true,
            configurable: true,
          });
          Map.prototype.has = function (key) {
            return this._find(key, /*insert*/ false) >= 0;
          };
          Map.prototype.get = function (key) {
            var index = this._find(key, /*insert*/ false);
            return index >= 0 ? this._values[index] : undefined;
          };
          Map.prototype.set = function (key, value) {
            var index = this._find(key, /*insert*/ true);
            this._values[index] = value;
            return this;
          };
          Map.prototype.delete = function (key) {
            var index = this._find(key, /*insert*/ false);
            if (index >= 0) {
              var size = this._keys.length;
              for (var i = index + 1; i < size; i++) {
                this._keys[i - 1] = this._keys[i];
                this._values[i - 1] = this._values[i];
              }
              this._keys.length--;
              this._values.length--;
              if (key === this._cacheKey) {
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              }
              return true;
            }
            return false;
          };
          Map.prototype.clear = function () {
            this._keys.length = 0;
            this._values.length = 0;
            this._cacheKey = cacheSentinel;
            this._cacheIndex = -2;
          };
          Map.prototype.keys = function () {
            return new MapIterator(this._keys, this._values, getKey);
          };
          Map.prototype.values = function () {
            return new MapIterator(this._keys, this._values, getValue);
          };
          Map.prototype.entries = function () {
            return new MapIterator(this._keys, this._values, getEntry);
          };
          Map.prototype['@@iterator'] = function () {
            return this.entries();
          };
          Map.prototype[iteratorSymbol] = function () {
            return this.entries();
          };
          Map.prototype._find = function (key, insert) {
            if (this._cacheKey !== key) {
              this._cacheIndex = this._keys.indexOf((this._cacheKey = key));
            }
            if (this._cacheIndex < 0 && insert) {
              this._cacheIndex = this._keys.length;
              this._keys.push(key);
              this._values.push(undefined);
            }
            return this._cacheIndex;
          };
          return Map;
        })();
        function getKey(key, _) {
          return key;
        }
        function getValue(_, value) {
          return value;
        }
        function getEntry(key, value) {
          return [key, value];
        }
      }
      // naive Set shim
      function CreateSetPolyfill() {
        return /** @class */ (function () {
          function Set() {
            this._map = new _Map();
          }
          Object.defineProperty(Set.prototype, 'size', {
            get: function () {
              return this._map.size;
            },
            enumerable: true,
            configurable: true,
          });
          Set.prototype.has = function (value) {
            return this._map.has(value);
          };
          Set.prototype.add = function (value) {
            return this._map.set(value, value), this;
          };
          Set.prototype.delete = function (value) {
            return this._map.delete(value);
          };
          Set.prototype.clear = function () {
            this._map.clear();
          };
          Set.prototype.keys = function () {
            return this._map.keys();
          };
          Set.prototype.values = function () {
            return this._map.values();
          };
          Set.prototype.entries = function () {
            return this._map.entries();
          };
          Set.prototype['@@iterator'] = function () {
            return this.keys();
          };
          Set.prototype[iteratorSymbol] = function () {
            return this.keys();
          };
          return Set;
        })();
      }
      // naive WeakMap shim
      function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var keys = HashMap.create();
        var rootKey = CreateUniqueKey();
        return /** @class */ (function () {
          function WeakMap() {
            this._key = CreateUniqueKey();
          }
          WeakMap.prototype.has = function (target) {
            var table = GetOrCreateWeakMapTable(target, /*create*/ false);
            return table !== undefined ? HashMap.has(table, this._key) : false;
          };
          WeakMap.prototype.get = function (target) {
            var table = GetOrCreateWeakMapTable(target, /*create*/ false);
            return table !== undefined
              ? HashMap.get(table, this._key)
              : undefined;
          };
          WeakMap.prototype.set = function (target, value) {
            var table = GetOrCreateWeakMapTable(target, /*create*/ true);
            table[this._key] = value;
            return this;
          };
          WeakMap.prototype.delete = function (target) {
            var table = GetOrCreateWeakMapTable(target, /*create*/ false);
            return table !== undefined ? delete table[this._key] : false;
          };
          WeakMap.prototype.clear = function () {
            // NOTE: not a real clear, just makes the previous data unreachable
            this._key = CreateUniqueKey();
          };
          return WeakMap;
        })();
        function CreateUniqueKey() {
          var key;
          do key = '@@WeakMap@@' + CreateUUID();
          while (HashMap.has(keys, key));
          keys[key] = true;
          return key;
        }
        function GetOrCreateWeakMapTable(target, create) {
          if (!hasOwn.call(target, rootKey)) {
            if (!create) return undefined;
            Object.defineProperty(target, rootKey, { value: HashMap.create() });
          }
          return target[rootKey];
        }
        function FillRandomBytes(buffer, size) {
          for (var i = 0; i < size; ++i) buffer[i] = (Math.random() * 0xff) | 0;
          return buffer;
        }
        function GenRandomBytes(size) {
          if (typeof Uint8Array === 'function') {
            if (typeof crypto !== 'undefined')
              return crypto.getRandomValues(new Uint8Array(size));
            if (typeof msCrypto !== 'undefined')
              return msCrypto.getRandomValues(new Uint8Array(size));
            return FillRandomBytes(new Uint8Array(size), size);
          }
          return FillRandomBytes(new Array(size), size);
        }
        function CreateUUID() {
          var data = GenRandomBytes(UUID_SIZE);
          // mark as random - RFC 4122 § 4.4
          data[6] = (data[6] & 0x4f) | 0x40;
          data[8] = (data[8] & 0xbf) | 0x80;
          var result = '';
          for (var offset = 0; offset < UUID_SIZE; ++offset) {
            var byte = data[offset];
            if (offset === 4 || offset === 6 || offset === 8) result += '-';
            if (byte < 16) result += '0';
            result += byte.toString(16).toLowerCase();
          }
          return result;
        }
      }
      // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
      function MakeDictionary(obj) {
        obj.__ = undefined;
        delete obj.__;
        return obj;
      }
    });
  })(Reflect || (Reflect = {}));
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r =
      c < 3
        ? target
        : desc === null
        ? (desc = Object.getOwnPropertyDescriptor(target, key))
        : desc,
    d;
  if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if ((d = decorators[i]))
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
    return Reflect.metadata(metadataKey, metadataValue);
}

const SERVICE_IDENTIFIER = {
  TaroElement: 'TaroElement',
  TaroElementFactory: 'Factory<TaroElement>',
  TaroText: 'TaroText',
  TaroTextFactory: 'Factory<TaroText>',
  TaroNodeImpl: 'TaroNodeImpl',
  TaroElementImpl: 'TaroElementImpl',
  Hooks: 'hooks',
  onRemoveAttribute: 'onRemoveAttribute',
  getLifecycle: 'getLifecycle',
  getPathIndex: 'getPathIndex',
  getEventCenter: 'getEventCenter',
  isBubbleEvents: 'isBubbleEvents',
  getSpecialNodes: 'getSpecialNodes',
  eventCenter: 'eventCenter',
  modifyMpEvent: 'modifyMpEvent',
  modifyTaroEvent: 'modifyTaroEvent',
  batchedEventUpdates: 'batchedEventUpdates',
  mergePageInstance: 'mergePageInstance',
  createPullDownComponent: 'createPullDownComponent',
  getDOMNode: 'getDOMNode',
  initNativeApi: 'initNativeApi',
  modifyHydrateData: 'modifyHydrateData',
  modifySetAttrPayload: 'modifySetAttrPayload',
  modifyRmAttrPayload: 'modifyRmAttrPayload',
  onAddEvent: 'onAddEvent',
  patchElement: 'patchElement',
};

const PROPERTY_THRESHOLD = 2046;
const HOOKS_APP_ID = 'taro-app';
const SET_DATA = '小程序 setData';
const PAGE_INIT = '页面初始化';
const ROOT_STR = 'root';
const HTML = 'html';
const HEAD = 'head';
const BODY = 'body';
const APP = 'app';
const CONTAINER = 'container';
const DOCUMENT_ELEMENT_NAME = '#document';
const DOCUMENT_FRAGMENT = 'document-fragment';
const ID = 'id';
const UID = 'uid';
const CLASS = 'class';
const STYLE = 'style';
const FOCUS = 'focus';
const VIEW = 'view';
const STATIC_VIEW = 'static-view';
const PURE_VIEW = 'pure-view';
const PROPS = 'props';
const DATASET = 'dataset';
const OBJECT = 'object';
const VALUE = 'value';
const INPUT = 'input';
const CHANGE = 'change';
const CUSTOM_WRAPPER = 'custom-wrapper';
const TARGET = 'target';
const CURRENT_TARGET = 'currentTarget';
const TYPE = 'type';
const CONFIRM = 'confirm';
const TIME_STAMP = 'timeStamp';
const KEY_CODE = 'keyCode';
const TOUCHMOVE = 'touchmove';
const DATE = 'Date';
const SET_TIMEOUT = 'setTimeout';
const CATCHMOVE = 'catchMove';
const CATCH_VIEW = 'catch-view';
const COMMENT = 'comment';

const incrementId = () => {
  let id = 0;
  return () => (id++).toString();
};
function isElement(node) {
  return node.nodeType === 1 /* ELEMENT_NODE */;
}
function isText(node) {
  return node.nodeType === 3 /* TEXT_NODE */;
}
function isComment(node) {
  return node.nodeName === COMMENT;
}
function isHasExtractProp(el) {
  const res = Object.keys(el.props).find((prop) => {
    return !(/^(class|style|id)$/.test(prop) || prop.startsWith('data-'));
  });
  return Boolean(res);
}
/**
 * 往上寻找组件树直到 root，寻找是否有祖先组件绑定了同类型的事件
 * @param node 当前组件
 * @param type 事件类型
 */
function isParentBinded(node, type) {
  var _a;
  let res = false;
  while (
    (node === null || node === void 0 ? void 0 : node.parentElement) &&
    node.parentElement._path !== ROOT_STR
  ) {
    if (
      (_a = node.parentElement.__handlers[type]) === null || _a === void 0
        ? void 0
        : _a.length
    ) {
      res = true;
      break;
    }
    node = node.parentElement;
  }
  return res;
}
function shortcutAttr(key) {
  switch (key) {
    case STYLE:
      return 'st' /* Style */;
    case ID:
      return UID;
    case CLASS:
      return 'cl' /* Class */;
    default:
      return key;
  }
}

let TaroEventTarget = class TaroEventTarget {
  constructor(hooks) { // eslint-disable-next-line @typescript-eslint/indent
    this.__handlers = {};
    this.hooks = hooks;
  }
  addEventListener(type, handler, options) {
    var _a, _b;
    (_b = (_a = this.hooks).onAddEvent) === null || _b === void 0
      ? void 0
      : _b.call(_a, type, handler, options, this);
    if (type === 'regionchange') {
      // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
      this.addEventListener('begin', handler, options);
      this.addEventListener('end', handler, options);
      return;
    }
    type = type.toLowerCase();
    const handlers = this.__handlers[type];
    let isCapture = Boolean(options);
    let isOnce = false;
    if (isObject$1(options)) {
      isCapture = Boolean(options.capture);
      isOnce = Boolean(options.once);
    }
    if (isOnce) {
      const wrapper = function () {
        handler.apply(this, arguments); // this 指向 Element
        this.removeEventListener(type, wrapper);
      };
      this.addEventListener(
        type,
        wrapper,
        Object.assign(Object.assign({}, options), { once: false }),
      );
      return;
    }
    process.env.NODE_ENV !== 'production' &&
      warn(isCapture, 'Taro 暂未实现 event 的 capture 特性。');
    if (isArray$1(handlers)) {
      handlers.push(handler);
    } else {
      this.__handlers[type] = [handler];
    }
  }
  removeEventListener(type, handler) {
    type = type.toLowerCase();
    if (handler == null) {
      return;
    }
    const handlers = this.__handlers[type];
    if (!isArray$1(handlers)) {
      return;
    }
    const index = handlers.indexOf(handler);
    process.env.NODE_ENV !== 'production' &&
      warn(index === -1, `事件: '${type}' 没有注册在 DOM 中，因此不会被移除。`);
    handlers.splice(index, 1);
  }
  isAnyEventBinded() {
    const handlers = this.__handlers;
    const isAnyEventBinded = Object.keys(handlers).find(
      (key) => handlers[key].length,
    );
    return Boolean(isAnyEventBinded);
  }
};
TaroEventTarget = __decorate(
  [
    injectable(),
    __param(0, inject(SERVICE_IDENTIFIER.Hooks)),
    __metadata('design:paramtypes', [Object]),
  ],
  TaroEventTarget,
);

/**
 * React also has a fancy function's name for this: `hydrate()`.
 * You may have been heard `hydrate` as a SSR-related function,
 * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
 * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
 */
function hydrate(node) {
  var _a, _b;
  const nodeName = node.nodeName;
  if (isText(node)) {
    return {
      ['v' /* Text */]: node.nodeValue,
      ['nn' /* NodeName */]: nodeName,
    };
  }
  const data = {
    ['nn' /* NodeName */]: nodeName,
    uid: node.uid,
  };
  const { props } = node;
  const SPECIAL_NODES = node.hooks.getSpecialNodes();
  if (!node.isAnyEventBinded() && SPECIAL_NODES.indexOf(nodeName) > -1) {
    data['nn' /* NodeName */] = `static-${nodeName}`;
    if (nodeName === VIEW && !isHasExtractProp(node)) {
      data['nn' /* NodeName */] = PURE_VIEW;
    }
  }
  for (const prop in props) {
    const propInCamelCase = toCamelCase(prop);
    if (
      !prop.startsWith('data-') && // 在 node.dataset 的数据
      prop !== CLASS &&
      prop !== STYLE &&
      prop !== ID &&
      propInCamelCase !== CATCHMOVE
    ) {
      data[propInCamelCase] = props[prop];
    }
    if (
      nodeName === VIEW &&
      propInCamelCase === CATCHMOVE &&
      props[prop] !== false
    ) {
      data['nn' /* NodeName */] = CATCH_VIEW;
    }
  }
  let { childNodes } = node;
  // 过滤 comment 节点
  childNodes = childNodes.filter((node) => !isComment(node));
  if (childNodes.length > 0) {
    data['cn' /* Childnodes */] = childNodes.map(hydrate);
  } else {
    data['cn' /* Childnodes */] = [];
  }
  if (node.className !== '') {
    data['cl' /* Class */] = node.className;
  }
  if (node.cssText !== '' && nodeName !== 'swiper-item') {
    data['st' /* Style */] = node.cssText;
  }
  (_b = (_a = node.hooks).modifyHydrateData) === null || _b === void 0
    ? void 0
    : _b.call(_a, data);
  return data;
}

const eventSource = new Map();

var ElementNames;
(function (ElementNames) {
  ElementNames['Element'] = 'Element';
  ElementNames['Document'] = 'Document';
  ElementNames['RootElement'] = 'RootElement';
  ElementNames['FormElement'] = 'FormElement';
})(ElementNames || (ElementNames = {}));

const nodeId = incrementId();
let TaroNode = class TaroNode extends TaroEventTarget {
  constructor(impl, getElement, hooks) { // eslint-disable-next-line @typescript-eslint/indent
    super(hooks);
    this.parentNode = null;
    this.childNodes = [];
    this.hydrate = (node) => () => hydrate(node);
    impl.bind(this);
    this._getElement = getElement;
    this.uid = `_n_${nodeId()}`;
    eventSource.set(this.uid, this);
  }
  /**
   * like jQuery's $.empty()
   */
  _empty() {
    while (this.childNodes.length > 0) {
      const child = this.childNodes[0];
      child.parentNode = null;
      eventSource.delete(child.uid);
      this.childNodes.shift();
    }
  }
  get _root() {
    var _a;
    return (
      ((_a = this.parentNode) === null || _a === void 0 ? void 0 : _a._root) ||
      null
    );
  }
  findIndex(refChild) {
    const index = this.childNodes.indexOf(refChild);
    ensure(
      index !== -1,
      'The node to be replaced is not a child of this node.',
    );
    return index;
  }
  get _path() {
    const parentNode = this.parentNode;
    if (parentNode) {
      // 计算路径时，先过滤掉 comment 节点
      const list = parentNode.childNodes.filter((node) => !isComment(node));
      const indexOfNode = list.indexOf(this);
      const index = this.hooks.getPathIndex(indexOfNode);
      return `${parentNode._path}.${'cn' /* Childnodes */}.${index}`;
    }
    return '';
  }
  get nextSibling() {
    const parentNode = this.parentNode;
    return (
      (parentNode === null || parentNode === void 0
        ? void 0
        : parentNode.childNodes[parentNode.findIndex(this) + 1]) || null
    );
  }
  get previousSibling() {
    const parentNode = this.parentNode;
    return (
      (parentNode === null || parentNode === void 0
        ? void 0
        : parentNode.childNodes[parentNode.findIndex(this) - 1]) || null
    );
  }
  get parentElement() {
    const parentNode = this.parentNode;
    if (
      (parentNode === null || parentNode === void 0
        ? void 0
        : parentNode.nodeType) === 1 /* ELEMENT_NODE */
    ) {
      return parentNode;
    }
    return null;
  }
  get firstChild() {
    return this.childNodes[0] || null;
  }
  get lastChild() {
    const childNodes = this.childNodes;
    return childNodes[childNodes.length - 1] || null;
  }
  /**
   * @textContent 目前只能置空子元素
   * @TODO 等待完整 innerHTML 实现
   */
  set textContent(text) {
    this._empty();
    if (text === '') {
      this.enqueueUpdate({
        path: `${this._path}.${'cn' /* Childnodes */}`,
        value: () => [],
      });
    } else {
      const document = this._getElement(ElementNames.Document)();
      this.appendChild(document.createTextNode(text));
    }
  }
  insertBefore(newChild, refChild, isReplace) {
    if (newChild.nodeName === DOCUMENT_FRAGMENT) {
      newChild.childNodes.reduceRight((previousValue, currentValue) => {
        this.insertBefore(currentValue, previousValue);
        return currentValue;
      }, refChild);
      return newChild;
    }
    newChild.remove();
    newChild.parentNode = this;
    let payload;
    if (refChild) {
      const index = this.findIndex(refChild);
      this.childNodes.splice(index, 0, newChild);
      if (isReplace) {
        payload = {
          path: newChild._path,
          value: this.hydrate(newChild),
        };
      } else {
        payload = {
          path: `${this._path}.${'cn' /* Childnodes */}`,
          value: () => {
            const childNodes = this.childNodes.filter(
              (node) => !isComment(node),
            );
            return childNodes.map(hydrate);
          },
        };
      }
    } else {
      this.childNodes.push(newChild);
      payload = {
        path: newChild._path,
        value: this.hydrate(newChild),
      };
    }
    this.enqueueUpdate(payload);
    if (!eventSource.has(newChild.uid)) {
      eventSource.set(newChild.uid, newChild);
    }
    return newChild;
  }
  appendChild(child) {
    this.insertBefore(child);
  }
  replaceChild(newChild, oldChild) {
    if (oldChild.parentNode === this) {
      this.insertBefore(newChild, oldChild, true);
      oldChild.remove(true);
      return oldChild;
    }
  }
  removeChild(child, isReplace) {
    const index = this.findIndex(child);
    this.childNodes.splice(index, 1);
    if (!isReplace) {
      this.enqueueUpdate({
        path: `${this._path}.${'cn' /* Childnodes */}`,
        value: () => {
          const childNodes = this.childNodes.filter((node) => !isComment(node));
          return childNodes.map(hydrate);
        },
      });
    }
    child.parentNode = null;
    eventSource.delete(child.uid);
    // @TODO: eventSource memory overflow
    // child._empty()
    return child;
  }
  remove(isReplace) {
    var _a;
    (_a = this.parentNode) === null || _a === void 0
      ? void 0
      : _a.removeChild(this, isReplace);
  }
  hasChildNodes() {
    return this.childNodes.length > 0;
  }
  enqueueUpdate(payload) {
    var _a;
    (_a = this._root) === null || _a === void 0
      ? void 0
      : _a.enqueueUpdate(payload);
  }
  contains(node) {
    let isContains = false;
    this.childNodes.some((childNode) => {
      const { uid } = childNode;
      if (uid === node.uid || uid === node.id || childNode.contains(node)) {
        isContains = true;
        return true;
      }
    });
    return isContains;
  }
  get ownerDocument() {
    const document = this._getElement(ElementNames.Document)();
    return document;
  }
};
TaroNode = __decorate(
  [
    injectable(),
    __param(0, inject(SERVICE_IDENTIFIER.TaroNodeImpl)),
    __param(1, inject(SERVICE_IDENTIFIER.TaroElementFactory)),
    __param(2, inject(SERVICE_IDENTIFIER.Hooks)),
    __metadata('design:paramtypes', [Function, Function, Function]),
  ],
  TaroNode,
);

let TaroText = class TaroText extends TaroNode {
  constructor(nodeImpl, getElement, hooks) { // eslint-disable-next-line @typescript-eslint/indent
    super(nodeImpl, getElement, hooks);
    this.nodeType = 3 /* TEXT_NODE */;
    this.nodeName = '#text';
  }
  set textContent(text) {
    this._value = text;
    this.enqueueUpdate({
      path: `${this._path}.${'v' /* Text */}`,
      value: text,
    });
  }
  get textContent() {
    return this._value;
  }
  set nodeValue(text) {
    this.textContent = text;
  }
  get nodeValue() {
    return this._value;
  }
};
TaroText = __decorate(
  [
    injectable(),
    __param(0, inject(SERVICE_IDENTIFIER.TaroNodeImpl)),
    __param(1, inject(SERVICE_IDENTIFIER.TaroElementFactory)),
    __param(2, inject(SERVICE_IDENTIFIER.Hooks)),
    __metadata('design:paramtypes', [Function, Function, Function]),
  ],
  TaroText,
);

/*
 *
 * https://www.w3.org/Style/CSS/all-properties.en.html
 */
const styleProperties = [
  'all',
  'appearance',
  'blockOverflow',
  'blockSize',
  'bottom',
  'clear',
  'contain',
  'content',
  'continue',
  'cursor',
  'direction',
  'display',
  'filter',
  'float',
  'gap',
  'height',
  'inset',
  'isolation',
  'left',
  'letterSpacing',
  'lightingColor',
  'markerSide',
  'mixBlendMode',
  'opacity',
  'order',
  'position',
  'quotes',
  'resize',
  'right',
  'rowGap',
  'tabSize',
  'tableLayout',
  'top',
  'userSelect',
  'verticalAlign',
  'visibility',
  'voiceFamily',
  'volume',
  'whiteSpace',
  'widows',
  'width',
  'zIndex',
  /** 非常用 style */
  // 'azimuth',
  // 'backfaceVisibility',
  // 'baselineShift',
  // 'captionSide',
  // 'chains',
  // 'dominantBaseline',
  // 'elevation',
  // 'emptyCells',
  // 'forcedColorAdjust',
  // 'glyphOrientationVertical',
  // 'hangingPunctuation',
  // 'hyphenateCharacter',
  // 'hyphens',
  // 'imageOrientation',
  // 'imageResolution',
  // 'orphans',
  // 'playDuring',
  // 'pointerEvents',
  // 'regionFragment',
  // 'richness',
  // 'running',
  // 'scrollBehavior',
  // 'speechRate',
  // 'stress',
  // 'stringSet',
  // 'unicodeBidi',
  // 'willChange',
  // 'writingMode',
];
// 减少文件体积
function combine(prefix, list, excludeSelf) {
  !excludeSelf && styleProperties.push(prefix);
  list.forEach((item) => {
    styleProperties.push(prefix + item);
  });
}
const color = 'Color';
const style = 'Style';
const width = 'Width';
const image = 'Image';
const size = 'Size';
const color_style_width = [color, style, width];
const fitlength_fitwidth_image = ['FitLength', 'FitWidth', image];
const fitlength_fitwidth_image_radius = [...fitlength_fitwidth_image, 'Radius'];
const color_style_width_fitlength_fitwidth_image = [
  ...color_style_width,
  ...fitlength_fitwidth_image,
];
const endRadius_startRadius = ['EndRadius', 'StartRadius'];
const bottom_left_right_top = ['Bottom', 'Left', 'Right', 'Top'];
const end_start = ['End', 'Start'];
const content_items_self = ['Content', 'Items', 'Self'];
const blockSize_height_inlineSize_width = [
  'BlockSize',
  'Height',
  'InlineSize',
  width,
];
const after_before = ['After', 'Before'];
combine('borderBlock', color_style_width);
combine('borderBlockEnd', color_style_width);
combine('borderBlockStart', color_style_width);
combine('outline', [...color_style_width, 'Offset']);
combine('border', [
  ...color_style_width,
  'Boundary',
  'Break',
  'Collapse',
  'Radius',
  'Spacing',
]);
combine('borderFit', ['Length', width]);
combine('borderInline', color_style_width);
combine('borderInlineEnd', color_style_width);
combine('borderInlineStart', color_style_width);
combine('borderLeft', color_style_width_fitlength_fitwidth_image);
combine('borderRight', color_style_width_fitlength_fitwidth_image);
combine('borderTop', color_style_width_fitlength_fitwidth_image);
combine('borderBottom', color_style_width_fitlength_fitwidth_image);
combine('textDecoration', [color, style, 'Line']);
combine('textEmphasis', [color, style, 'Position']);
combine('scrollMargin', bottom_left_right_top);
combine('scrollPadding', bottom_left_right_top);
combine('padding', bottom_left_right_top);
combine('margin', [...bottom_left_right_top, 'Trim']);
combine('scrollMarginBlock', end_start);
combine('scrollMarginInline', end_start);
combine('scrollPaddingBlock', end_start);
combine('scrollPaddingInline', end_start);
combine('gridColumn', end_start);
combine('gridRow', end_start);
combine('insetBlock', end_start);
combine('insetInline', end_start);
combine('marginBlock', end_start);
combine('marginInline', end_start);
combine('paddingBlock', end_start);
combine('paddingInline', end_start);
combine('pause', after_before);
combine('cue', after_before);
combine('mask', [
  'Clip',
  'Composite',
  image,
  'Mode',
  'Origin',
  'Position',
  'Repeat',
  size,
  'Type',
]);
combine('borderImage', [
  'Outset',
  'Repeat',
  'Slice',
  'Source',
  'Transform',
  width,
]);
combine('maskBorder', ['Mode', 'Outset', 'Repeat', 'Slice', 'Source', width]);
combine('font', [
  'Family',
  'FeatureSettings',
  'Kerning',
  'LanguageOverride',
  'MaxSize',
  'MinSize',
  'OpticalSizing',
  'Palette',
  size,
  'SizeAdjust',
  'Stretch',
  style,
  'Weight',
  'VariationSettings',
]);
combine('fontSynthesis', ['SmallCaps', style, 'Weight']);
combine('transform', ['Box', 'Origin', style]);
combine('background', [
  color,
  image,
  'Attachment',
  'BlendMode',
  'Clip',
  'Origin',
  'Position',
  'Repeat',
  size,
]);
combine('listStyle', [image, 'Position', 'Type']);
combine('scrollSnap', ['Align', 'Stop', 'Type']);
combine('grid', ['Area', 'AutoColumns', 'AutoFlow', 'AutoRows']);
combine('gridTemplate', ['Areas', 'Columns', 'Rows']);
combine('overflow', ['Block', 'Inline', 'Wrap', 'X', 'Y']);
combine('transition', ['Delay', 'Duration', 'Property', 'TimingFunction']);
combine('lineStacking', ['Ruby', 'Shift', 'Strategy']);
combine('color', ['Adjust', 'InterpolationFilters', 'Scheme']);
combine('textAlign', ['All', 'Last']);
combine('page', ['BreakAfter', 'BreakBefore', 'BreakInside']);
combine('speak', ['Header', 'Numeral', 'Punctuation']);
combine('animation', [
  'Delay',
  'Direction',
  'Duration',
  'FillMode',
  'IterationCount',
  'Name',
  'PlayState',
  'TimingFunction',
]);
combine('flex', ['Basis', 'Direction', 'Flow', 'Grow', 'Shrink', 'Wrap']);
combine('offset', [
  ...after_before,
  ...end_start,
  'Anchor',
  'Distance',
  'Path',
  'Position',
  'Rotate',
]);
combine('fontVariant', [
  'Alternates',
  'Caps',
  'EastAsian',
  'Emoji',
  'Ligatures',
  'Numeric',
  'Position',
]);
combine('perspective', ['Origin']);
combine('pitch', ['Range']);
combine('clip', ['Path', 'Rule']);
combine('flow', ['From', 'Into']);
combine('align', ['Content', 'Items', 'Self'], true);
combine('alignment', ['Adjust', 'Baseline'], true);
combine('bookmark', ['Label', 'Level', 'State'], true);
combine('borderStart', endRadius_startRadius, true);
combine('borderEnd', endRadius_startRadius, true);
combine('borderCorner', ['Fit', image, 'ImageTransform'], true);
combine('borderTopLeft', fitlength_fitwidth_image_radius, true);
combine('borderTopRight', fitlength_fitwidth_image_radius, true);
combine('borderBottomLeft', fitlength_fitwidth_image_radius, true);
combine('borderBottomRight', fitlength_fitwidth_image_radius, true);
combine(
  'column',
  [
    's',
    'Count',
    'Fill',
    'Gap',
    'Rule',
    'RuleColor',
    'RuleStyle',
    'RuleWidth',
    'Span',
    width,
  ],
  true,
);
combine('break', [...after_before, 'Inside'], true);
combine('wrap', [...after_before, 'Flow', 'Inside', 'Through'], true);
combine('justify', content_items_self, true);
combine('place', content_items_self, true);
combine('max', [...blockSize_height_inlineSize_width, 'Lines'], true);
combine('min', blockSize_height_inlineSize_width, true);
combine('line', ['Break', 'Clamp', 'Grid', 'Height', 'Padding', 'Snap'], true);
combine('inline', ['BoxAlign', size, 'Sizing'], true);
combine(
  'text',
  [
    'CombineUpright',
    'GroupAlign',
    'Height',
    'Indent',
    'Justify',
    'Orientation',
    'Overflow',
    'Shadow',
    'SpaceCollapse',
    'SpaceTrim',
    'Spacing',
    'Transform',
    'UnderlinePosition',
    'Wrap',
  ],
  true,
);
combine('shape', ['ImageThreshold', 'Inside', 'Margin', 'Outside'], true);
combine('word', ['Break', 'Spacing', 'Wrap'], true);
combine('nav', ['Down', 'Left', 'Right', 'Up'], true);
combine('object', ['Fit', 'Position'], true);
combine('box', ['DecorationBreak', 'Shadow', 'Sizing', 'Snap'], true);

function setStyle(newVal, styleKey) {
  const old = this[styleKey];
  if (newVal) {
    this._usedStyleProp.add(styleKey);
  }
  process.env.NODE_ENV !== 'production' &&
    warn(
      isString(newVal) && newVal.length > PROPERTY_THRESHOLD,
      `Style 属性 ${styleKey} 的值数据量过大，可能会影响渲染性能，考虑使用 CSS 类或其它方案替代。`,
    );
  if (old !== newVal) {
    this._value[styleKey] = newVal;
    this._element.enqueueUpdate({
      path: `${this._element._path}.${'st' /* Style */}`,
      value: this.cssText,
    });
  }
}
function initStyle(ctor) {
  const properties = {};
  for (let i = 0; i < styleProperties.length; i++) {
    const styleKey = styleProperties[i];
    properties[styleKey] = {
      get() {
        return this._value[styleKey] || '';
      },
      set(newVal) {
        setStyle.call(this, newVal, styleKey);
      },
    };
  }
  Object.defineProperties(ctor.prototype, properties);
}
function isCssVariable(propertyName) {
  return /^--/.test(propertyName);
}
class Style {
  constructor(element) {
    this._element = element;
    this._usedStyleProp = new Set();
    this._value = {};
  }
  setCssVariables(styleKey) {
    this.hasOwnProperty(styleKey) ||
      Object.defineProperty(this, styleKey, {
        enumerable: true,
        configurable: true,
        get: () => {
          return this._value[styleKey] || '';
        },
        set: (newVal) => {
          setStyle.call(this, newVal, styleKey);
        },
      });
  }
  get cssText() {
    let text = '';
    this._usedStyleProp.forEach((key) => {
      const val = this[key];
      if (!val) return;
      const styleName = isCssVariable(key) ? key : toDashed(key);
      text += `${styleName}: ${val};`;
    });
    return text;
  }
  set cssText(str) {
    if (str == null) {
      str = '';
    }
    this._usedStyleProp.forEach((prop) => {
      this.removeProperty(prop);
    });
    if (str === '') {
      return;
    }
    const rules = str.split(';');
    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i].trim();
      if (rule === '') {
        continue;
      }
      // 可能存在 'background: url(http:x/y/z)' 的情况
      const [propName, ...valList] = rule.split(':');
      const val = valList.join(':');
      if (isUndefined(val)) {
        continue;
      }
      this.setProperty(propName.trim(), val.trim());
    }
  }
  setProperty(propertyName, value) {
    if (propertyName[0] === '-') {
      // 支持 webkit 属性或 css 变量
      this.setCssVariables(propertyName);
    } else {
      propertyName = toCamelCase(propertyName);
    }
    if (isUndefined(value)) {
      return;
    }
    if (value === null || value === '') {
      this.removeProperty(propertyName);
    } else {
      this[propertyName] = value;
    }
  }
  removeProperty(propertyName) {
    propertyName = toCamelCase(propertyName);
    if (!this._usedStyleProp.has(propertyName)) {
      return '';
    }
    const value = this[propertyName];
    this[propertyName] = '';
    this._usedStyleProp.delete(propertyName);
    return value;
  }
  getPropertyValue(propertyName) {
    propertyName = toCamelCase(propertyName);
    const value = this[propertyName];
    if (!value) {
      return '';
    }
    return value;
  }
}
initStyle(Style);

function returnTrue() {
  return true;
}
function treeToArray(root, predict) {
  const array = [];
  const filter = predict !== null && predict !== void 0 ? predict : returnTrue;
  let object = root;
  while (object) {
    if (object.nodeType === 1 /* ELEMENT_NODE */ && filter(object)) {
      array.push(object);
    }
    object = following(object, root);
  }
  return array;
}
function following(el, root) {
  const firstChild = el.firstChild;
  if (firstChild) {
    return firstChild;
  }
  let current = el;
  do {
    if (current === root) {
      return null;
    }
    const nextSibling = current.nextSibling;
    if (nextSibling) {
      return nextSibling;
    }
    current = current.parentElement;
  } while (current);
  return null;
}

class ClassList extends Set {
  constructor(className, el) {
    super();
    className.trim().split(/\s+/).forEach(super.add.bind(this));
    this.el = el;
  }
  get value() {
    return [...this].join(' ');
  }
  add(s) {
    super.add(s);
    this._update();
    return this;
  }
  get length() {
    return this.size;
  }
  remove(s) {
    super.delete(s);
    this._update();
  }
  toggle(s) {
    if (super.has(s)) {
      super.delete(s);
    } else {
      super.add(s);
    }
    this._update();
  }
  replace(s1, s2) {
    super.delete(s1);
    super.add(s2);
    this._update();
  }
  contains(s) {
    return super.has(s);
  }
  toString() {
    return this.value;
  }
  _update() {
    this.el.className = this.value;
  }
}

let TaroElement = class TaroElement extends TaroNode {
  constructor(nodeImpl, getElement, hooks, elementImpl) { // eslint-disable-next-line @typescript-eslint/indent
    super(nodeImpl, getElement, hooks);
    this.props = {};
    this.dataset = EMPTY_OBJ;
    elementImpl.bind(this);
    this.nodeType = 1 /* ELEMENT_NODE */;
    this.style = new Style(this);
    hooks.patchElement(this);
  }
  _stopPropagation(event) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let target = this;
    // eslint-disable-next-line no-cond-assign
    while ((target = target.parentNode)) {
      const listeners = target.__handlers[event.type];
      if (!isArray$1(listeners)) {
        continue;
      }
      for (let i = listeners.length; i--; ) {
        const l = listeners[i];
        l._stop = true;
      }
    }
  }
  get id() {
    return this.getAttribute(ID);
  }
  set id(val) {
    this.setAttribute(ID, val);
  }
  get className() {
    return this.getAttribute(CLASS) || '';
  }
  set className(val) {
    this.setAttribute(CLASS, val);
  }
  get cssText() {
    return this.getAttribute(STYLE) || '';
  }
  get classList() {
    return new ClassList(this.className, this);
  }
  get children() {
    return this.childNodes.filter(isElement);
  }
  get attributes() {
    const props = this.props;
    const propKeys = Object.keys(props);
    const style = this.style.cssText;
    const attrs = propKeys.map((key) => ({ name: key, value: props[key] }));
    return attrs.concat(style ? { name: STYLE, value: style } : []);
  }
  get textContent() {
    let text = '';
    const childNodes = this.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
      text += childNodes[i].textContent;
    }
    return text;
  }
  set textContent(text) {
    super.textContent = text;
  }
  hasAttribute(qualifiedName) {
    return !isUndefined(this.props[qualifiedName]);
  }
  hasAttributes() {
    return this.attributes.length > 0;
  }
  focus() {
    this.setAttribute(FOCUS, true);
  }
  blur() {
    this.setAttribute(FOCUS, false);
  }
  setAttribute(qualifiedName, value) {
    var _a, _b;
    process.env.NODE_ENV !== 'production' &&
      warn(
        isString(value) && value.length > PROPERTY_THRESHOLD,
        `元素 ${this.nodeName} 的 属性 ${qualifiedName} 的值数据量过大，可能会影响渲染性能。考虑降低图片转为 base64 的阈值或在 CSS 中使用 base64。`,
      );
    const isPureView =
      this.nodeName === VIEW &&
      !isHasExtractProp(this) &&
      !this.isAnyEventBinded();
    switch (qualifiedName) {
      case STYLE:
        this.style.cssText = value;
        break;
      case ID:
        eventSource.delete(this.uid);
        value = String(value);
        this.props[qualifiedName] = this.uid = value;
        eventSource.set(value, this);
        break;
      default:
        this.props[qualifiedName] = value;
        if (qualifiedName.startsWith('data-')) {
          if (this.dataset === EMPTY_OBJ) {
            this.dataset = Object.create(null);
          }
          this.dataset[toCamelCase(qualifiedName.replace(/^data-/, ''))] =
            value;
        }
        break;
    }
    qualifiedName = shortcutAttr(qualifiedName);
    const payload = {
      path: `${this._path}.${toCamelCase(qualifiedName)}`,
      value,
    };
    (_b = (_a = this.hooks).modifySetAttrPayload) === null || _b === void 0
      ? void 0
      : _b.call(_a, this, qualifiedName, payload);
    this.enqueueUpdate(payload);
    if (this.nodeName === VIEW) {
      if (toCamelCase(qualifiedName) === CATCHMOVE) {
        // catchMove = true: catch-view
        // catchMove = false: view or static-view
        this.enqueueUpdate({
          path: `${this._path}.${'nn' /* NodeName */}`,
          value: value
            ? CATCH_VIEW
            : this.isAnyEventBinded()
            ? VIEW
            : STATIC_VIEW,
        });
      } else if (isPureView && isHasExtractProp(this)) {
        // pure-view => static-view
        this.enqueueUpdate({
          path: `${this._path}.${'nn' /* NodeName */}`,
          value: STATIC_VIEW,
        });
      }
    }
  }
  removeAttribute(qualifiedName) {
    var _a, _b, _c, _d;
    const isStaticView =
      this.nodeName === VIEW &&
      isHasExtractProp(this) &&
      !this.isAnyEventBinded();
    if (qualifiedName === STYLE) {
      this.style.cssText = '';
    } else {
      const isInterrupt =
        (_b = (_a = this.hooks).onRemoveAttribute) === null || _b === void 0
          ? void 0
          : _b.call(_a, this, qualifiedName);
      if (isInterrupt) {
        return;
      }
      if (!this.props.hasOwnProperty(qualifiedName)) {
        return;
      }
      delete this.props[qualifiedName];
    }
    qualifiedName = shortcutAttr(qualifiedName);
    const payload = {
      path: `${this._path}.${toCamelCase(qualifiedName)}`,
      value: '',
    };
    (_d = (_c = this.hooks).modifyRmAttrPayload) === null || _d === void 0
      ? void 0
      : _d.call(_c, this, qualifiedName, payload);
    this.enqueueUpdate(payload);
    if (this.nodeName === VIEW) {
      if (toCamelCase(qualifiedName) === CATCHMOVE) {
        // catch-view => view or static-view or pure-view
        this.enqueueUpdate({
          path: `${this._path}.${'nn' /* NodeName */}`,
          value: this.isAnyEventBinded()
            ? VIEW
            : isHasExtractProp(this)
            ? STATIC_VIEW
            : PURE_VIEW,
        });
      } else if (isStaticView && !isHasExtractProp(this)) {
        // static-view => pure-view
        this.enqueueUpdate({
          path: `${this._path}.${'nn' /* NodeName */}`,
          value: PURE_VIEW,
        });
      }
    }
  }
  getAttribute(qualifiedName) {
    const attr =
      qualifiedName === STYLE ? this.style.cssText : this.props[qualifiedName];
    return attr !== null && attr !== void 0 ? attr : '';
  }
  getElementsByTagName(tagName) {
    return treeToArray(this, (el) => {
      return el.nodeName === tagName || (tagName === '*' && this !== el);
    });
  }
  getElementsByClassName(className) {
    return treeToArray(this, (el) => {
      const classList = el.classList;
      const classNames = className.trim().split(/\s+/);
      return classNames.every((c) => classList.has(c));
    });
  }
  dispatchEvent(event) {
    const cancelable = event.cancelable;
    const listeners = this.__handlers[event.type];
    if (!isArray$1(listeners)) {
      return false;
    }
    for (let i = listeners.length; i--; ) {
      const listener = listeners[i];
      let result;
      if (listener._stop) {
        listener._stop = false;
      } else {
        result = listener.call(this, event);
      }
      if ((result === false || event._end) && cancelable) {
        event.defaultPrevented = true;
      }
      if (event._end && event._stop) {
        break;
      }
    }
    if (event._stop) {
      this._stopPropagation(event);
    } else {
      event._stop = true;
    }
    return listeners != null;
  }
  addEventListener(type, handler, options) {
    const name = this.nodeName;
    const SPECIAL_NODES = this.hooks.getSpecialNodes();
    if (!this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
      this.enqueueUpdate({
        path: `${this._path}.${'nn' /* NodeName */}`,
        value: name,
      });
    }
    super.addEventListener(type, handler, options);
  }
  removeEventListener(type, handler) {
    super.removeEventListener(type, handler);
    const name = this.nodeName;
    const SPECIAL_NODES = this.hooks.getSpecialNodes();
    if (!this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
      this.enqueueUpdate({
        path: `${this._path}.${'nn' /* NodeName */}`,
        value: isHasExtractProp(this) ? `static-${name}` : `pure-${name}`,
      });
    }
  }
};
TaroElement = __decorate(
  [
    injectable(),
    __param(0, inject(SERVICE_IDENTIFIER.TaroNodeImpl)),
    __param(1, inject(SERVICE_IDENTIFIER.TaroElementFactory)),
    __param(2, inject(SERVICE_IDENTIFIER.Hooks)),
    __param(3, inject(SERVICE_IDENTIFIER.TaroElementImpl)),
    __metadata('design:paramtypes', [Function, Function, Function, Function]),
  ],
  TaroElement,
);

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/** Detect free variable `global` from Node.js. */
var freeGlobal =
  typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf =
  typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol$1 = root.Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
    tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
  undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag$1 && symToStringTag$1 in Object(value)
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return (
    typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag)
  );
}

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (
    type == 'number' ||
    type == 'symbol' ||
    type == 'boolean' ||
    value == null ||
    isSymbol(value)
  ) {
    return true;
  }
  return (
    reIsPlainProp.test(value) ||
    !reIsDeepProp.test(value) ||
    (object != null && value in Object(object))
  );
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function () {
  var uid = /[^.]+$/.exec(
    (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || '',
  );
  return uid ? 'Symbol(src)_1.' + uid : '';
})();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
  objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp(
  '^' +
    funcToString$1
      .call(hasOwnProperty$1)
      .replace(reRegExpChar, '\\$&')
      .replace(
        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
        '$1.*?',
      ) +
    '$',
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate
    ? data[key] !== undefined
    : hasOwnProperty$3.call(data, key);
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
  return this;
}

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
    index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root, 'Map');

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    hash: new Hash(),
    map: new (Map$1 || ListCache)(),
    string: new Hash(),
  };
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' ||
    type == 'number' ||
    type == 'symbol' ||
    type == 'boolean'
    ? value !== '__proto__'
    : value === null;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
    size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (
    typeof func != 'function' ||
    (resolver != null && typeof resolver != 'function')
  ) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function () {
    var args = arguments,
      key = resolver ? resolver.apply(this, args) : args[0],
      cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/** Used to match property names within property paths. */
var rePropName =
  /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function (string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(
      quote ? subString.replace(reEscapeChar, '$1') : number || match,
    );
  });
  return result;
});

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length,
    result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
  symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
    length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : undefined;
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

const options = {
  prerender: true,
  debug: false,
};

class Performance {
  constructor() {
    this.recorder = new Map();
  }
  start(id) {
    if (!options.debug) {
      return;
    }
    this.recorder.set(id, Date.now());
  }
  stop(id) {
    if (!options.debug) {
      return;
    }
    const now = Date.now();
    const prev = this.recorder.get(id);
    const time = now - prev;
    // eslint-disable-next-line no-console
    console.log(`${id} 时长： ${time}ms`);
  }
}
const perf = new Performance();

const eventIncrementId = incrementId();
let TaroRootElement = class TaroRootElement extends TaroElement {
  constructor(nodeImpl, getElement, hooks, elementImpl, eventCenter) { // eslint-disable-next-line @typescript-eslint/indent
    super(nodeImpl, getElement, hooks, elementImpl);
    this.pendingFlush = false;
    this.updatePayloads = [];
    this.updateCallbacks = [];
    this.pendingUpdate = false;
    this.ctx = null;
    this.nodeName = ROOT_STR;
    this.eventCenter = eventCenter;
  }
  get _path() {
    return ROOT_STR;
  }
  get _root() {
    return this;
  }
  enqueueUpdate(payload) {
    this.updatePayloads.push(payload);
    if (!this.pendingUpdate && this.ctx !== null) {
      this.performUpdate();
    }
  }
  performUpdate(initRender = false, prerender) {
    this.pendingUpdate = true;
    const ctx = this.ctx;
    setTimeout(() => {
      perf.start(SET_DATA);
      const data = Object.create(null);
      const resetPaths = new Set(
        initRender ? ['root.cn.[0]', 'root.cn[0]'] : [],
      );
      while (this.updatePayloads.length > 0) {
        const { path, value } = this.updatePayloads.shift();
        if (path.endsWith('cn' /* Childnodes */)) {
          resetPaths.add(path);
        }
        data[path] = value;
      }
      for (const path in data) {
        resetPaths.forEach((p) => {
          // 已经重置了数组，就不需要分别再设置了
          if (path.includes(p) && path !== p) {
            delete data[path];
          }
        });
        const value = data[path];
        if (isFunction$1(value)) {
          data[path] = value();
        }
      }
      if (isFunction$1(prerender)) {
        prerender(data);
      } else {
        this.pendingUpdate = false;
        const customWrapperUpdate = [];
        const customWrapperMap = new Map();
        const normalUpdate = {};
        if (!initRender) {
          for (const p in data) {
            const dataPathArr = p.split('.');
            let hasCustomWrapper = false;
            for (let i = dataPathArr.length; i > 0; i--) {
              const allPath = dataPathArr.slice(0, i).join('.');
              const getData = get(ctx.__data__ || ctx.data, allPath);
              if (getData && getData.nn && getData.nn === CUSTOM_WRAPPER) {
                const customWrapperId = getData.uid;
                const customWrapper = ctx.selectComponent(
                  `#${customWrapperId}`,
                );
                const splitedPath = dataPathArr.slice(i).join('.');
                if (customWrapper) {
                  hasCustomWrapper = true;
                  customWrapperMap.set(
                    customWrapper,
                    Object.assign(
                      Object.assign(
                        {},
                        customWrapperMap.get(customWrapper) || {},
                      ),
                      { [`i.${splitedPath}`]: data[p] },
                    ),
                  );
                }
                break;
              }
            }
            if (!hasCustomWrapper) {
              normalUpdate[p] = data[p];
            }
          }
          if (customWrapperMap.size > 0) {
            customWrapperMap.forEach((data, ctx) => {
              customWrapperUpdate.push({ ctx, data });
            });
          }
        }
        const updateArrLen = customWrapperUpdate.length;
        if (updateArrLen) {
          const eventId = `${this._path}_update_${eventIncrementId()}`;
          const eventCenter = this.eventCenter;
          let executeTime = 0;
          eventCenter.once(
            eventId,
            () => {
              executeTime++;
              if (executeTime === updateArrLen + 1) {
                perf.stop(SET_DATA);
                if (!this.pendingFlush) {
                  this.flushUpdateCallback();
                }
                if (initRender) {
                  perf.stop(PAGE_INIT);
                }
              }
            },
            eventCenter,
          );
          customWrapperUpdate.forEach((item) => {
            if (process.env.NODE_ENV !== 'production' && options.debug) {
              // eslint-disable-next-line no-console
              console.log('custom wrapper setData: ', item.data);
            }
            item.ctx.setData(item.data, () => {
              eventCenter.trigger(eventId);
            });
          });
          if (Object.keys(normalUpdate).length) {
            if (process.env.NODE_ENV !== 'production' && options.debug) {
              // eslint-disable-next-line no-console
              console.log('setData:', normalUpdate);
            }
            ctx.setData(normalUpdate, () => {
              eventCenter.trigger(eventId);
            });
          }
        } else {
          if (process.env.NODE_ENV !== 'production' && options.debug) {
            // eslint-disable-next-line no-console
            console.log('setData:', data);
          }
          ctx.setData(data, () => {
            perf.stop(SET_DATA);
            if (!this.pendingFlush) {
              this.flushUpdateCallback();
            }
            if (initRender) {
              perf.stop(PAGE_INIT);
            }
          });
        }
      }
    }, 0);
  }
  enqueueUpdateCallback(cb, ctx) {
    this.updateCallbacks.push(() => {
      ctx ? cb.call(ctx) : cb();
    });
  }
  flushUpdateCallback() {
    this.pendingFlush = false;
    const copies = this.updateCallbacks.slice(0);
    this.updateCallbacks.length = 0;
    for (let i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }
};
TaroRootElement = __decorate(
  [
    injectable(),
    __param(0, inject(SERVICE_IDENTIFIER.TaroNodeImpl)),
    __param(1, inject(SERVICE_IDENTIFIER.TaroElementFactory)),
    __param(2, inject(SERVICE_IDENTIFIER.Hooks)),
    __param(3, inject(SERVICE_IDENTIFIER.TaroElementImpl)),
    __param(4, inject(SERVICE_IDENTIFIER.eventCenter)),
    __metadata('design:paramtypes', [
      Function,
      Function,
      Function,
      Function,
      Function,
    ]),
  ],
  TaroRootElement,
);

class FormElement extends TaroElement {
  get value() {
    // eslint-disable-next-line dot-notation
    const val = this.props[VALUE];
    return val == null ? '' : val;
  }
  set value(val) {
    this.setAttribute(VALUE, val);
  }
  dispatchEvent(event) {
    if (event.mpEvent) {
      const val = event.mpEvent.detail.value;
      if (event.type === CHANGE) {
        this.props.value = val;
      } else if (event.type === INPUT) {
        // Web 规范中表单组件的 value 应该跟着输入改变
        // 只是改 this.props.value 的话不会进行 setData，因此这里修改 this.value。
        // 只测试了 React、Vue、Vue3 input 组件的 onInput 事件，onChange 事件不确定有没有副作用，所以暂不修改。
        this.value = val;
      }
    }
    return super.dispatchEvent(event);
  }
}

// for Vue3
class SVGElement extends TaroElement {}

function initPosition() {
  return {
    index: 0,
    column: 0,
    line: 0,
  };
}
function feedPosition(position, str, len) {
  const start = position.index;
  const end = (position.index = start + len);
  for (let i = start; i < end; i++) {
    const char = str.charAt(i);
    if (char === '\n') {
      position.line++;
      position.column = 0;
    } else {
      position.column++;
    }
  }
}
function jumpPosition(position, str, end) {
  const len = end - position.index;
  return feedPosition(position, str, len);
}
function copyPosition(position) {
  return {
    index: position.index,
    line: position.line,
    column: position.column,
  };
}
const whitespace = /\s/;
function isWhitespaceChar(char) {
  return whitespace.test(char);
}
const equalSign = /=/;
function isEqualSignChar(char) {
  return equalSign.test(char);
}
function shouldBeIgnore(tagName) {
  const name = tagName.toLowerCase();
  if (options.html.skipElements.has(name)) {
    return true;
  }
  return false;
}
const alphanumeric = /[A-Za-z0-9]/;
function findTextEnd(str, index) {
  while (true) {
    const textEnd = str.indexOf('<', index);
    if (textEnd === -1) {
      return textEnd;
    }
    const char = str.charAt(textEnd + 1);
    if (char === '/' || char === '!' || alphanumeric.test(char)) {
      return textEnd;
    }
    index = textEnd + 1;
  }
}
function isWordEnd(cursor, wordBegin, html) {
  if (!isWhitespaceChar(html.charAt(cursor))) return false;
  const len = html.length;
  // backwrad
  for (let i = cursor - 1; i > wordBegin; i--) {
    const char = html.charAt(i);
    if (!isWhitespaceChar(char)) {
      if (isEqualSignChar(char)) return false;
      break;
    }
  }
  // forward
  for (let i = cursor + 1; i < len; i++) {
    const char = html.charAt(i);
    if (!isWhitespaceChar(char)) {
      if (isEqualSignChar(char)) return false;
      return true;
    }
  }
}
class Scaner {
  constructor(html) {
    this.tokens = [];
    this.position = initPosition();
    this.html = html;
  }
  scan() {
    const { html, position } = this;
    const len = html.length;
    while (position.index < len) {
      const start = position.index;
      this.scanText();
      if (position.index === start) {
        const isComment = html.startsWith('!--', start + 1);
        if (isComment) {
          this.scanComment();
        } else {
          const tagName = this.scanTag();
          if (shouldBeIgnore(tagName)) {
            this.scanSkipTag(tagName);
          }
        }
      }
    }
    return this.tokens;
  }
  scanText() {
    const type = 'text';
    const { html, position } = this;
    let textEnd = findTextEnd(html, position.index);
    if (textEnd === position.index) {
      return;
    }
    if (textEnd === -1) {
      textEnd = html.length;
    }
    const start = copyPosition(position);
    const content = html.slice(position.index, textEnd);
    jumpPosition(position, html, textEnd);
    const end = copyPosition(position);
    this.tokens.push({ type, content, position: { start, end } });
  }
  scanComment() {
    const type = 'comment';
    const { html, position } = this;
    const start = copyPosition(position);
    feedPosition(position, html, 4); // "<!--".length
    let contentEnd = html.indexOf('-->', position.index);
    let commentEnd = contentEnd + 3; // "-->".length
    if (contentEnd === -1) {
      contentEnd = commentEnd = html.length;
    }
    const content = html.slice(position.index, contentEnd);
    jumpPosition(position, html, commentEnd);
    this.tokens.push({
      type,
      content,
      position: {
        start,
        end: copyPosition(position),
      },
    });
  }
  scanTag() {
    this.scanTagStart();
    const tagName = this.scanTagName();
    this.scanAttrs();
    this.scanTagEnd();
    return tagName;
  }
  scanTagStart() {
    const type = 'tag-start';
    const { html, position } = this;
    const secondChar = html.charAt(position.index + 1);
    const close = secondChar === '/';
    const start = copyPosition(position);
    feedPosition(position, html, close ? 2 : 1);
    this.tokens.push({ type, close, position: { start } });
  }
  scanTagEnd() {
    const type = 'tag-end';
    const { html, position } = this;
    const firstChar = html.charAt(position.index);
    const close = firstChar === '/';
    feedPosition(position, html, close ? 2 : 1);
    const end = copyPosition(position);
    this.tokens.push({ type, close, position: { end } });
  }
  scanTagName() {
    const type = 'tag';
    const { html, position } = this;
    const len = html.length;
    let start = position.index;
    while (start < len) {
      const char = html.charAt(start);
      const isTagChar = !(
        isWhitespaceChar(char) ||
        char === '/' ||
        char === '>'
      );
      if (isTagChar) break;
      start++;
    }
    let end = start + 1;
    while (end < len) {
      const char = html.charAt(end);
      const isTagChar = !(
        isWhitespaceChar(char) ||
        char === '/' ||
        char === '>'
      );
      if (!isTagChar) break;
      end++;
    }
    jumpPosition(position, html, end);
    const tagName = html.slice(start, end);
    this.tokens.push({
      type,
      content: tagName,
    });
    return tagName;
  }
  scanAttrs() {
    const { html, position, tokens } = this;
    let cursor = position.index;
    let quote = null; // null, single-, or double-quote
    let wordBegin = cursor; // index of word start
    const words = []; // "key", "key=value", "key='value'", etc
    const len = html.length;
    while (cursor < len) {
      const char = html.charAt(cursor);
      if (quote) {
        const isQuoteEnd = char === quote;
        if (isQuoteEnd) {
          quote = null;
        }
        cursor++;
        continue;
      }
      const isTagEnd = char === '/' || char === '>';
      if (isTagEnd) {
        if (cursor !== wordBegin) {
          words.push(html.slice(wordBegin, cursor));
        }
        break;
      }
      if (isWordEnd(cursor, wordBegin, html)) {
        if (cursor !== wordBegin) {
          words.push(html.slice(wordBegin, cursor));
        }
        wordBegin = cursor + 1;
        cursor++;
        continue;
      }
      const isQuoteStart = char === "'" || char === '"';
      if (isQuoteStart) {
        quote = char;
        cursor++;
        continue;
      }
      cursor++;
    }
    jumpPosition(position, html, cursor);
    const wLen = words.length;
    const type = 'attribute';
    for (let i = 0; i < wLen; i++) {
      const word = words[i];
      const isNotPair = word.includes('=');
      if (isNotPair) {
        const secondWord = words[i + 1];
        if (secondWord && secondWord.startsWith('=')) {
          if (secondWord.length > 1) {
            const newWord = word + secondWord;
            tokens.push({ type, content: newWord });
            i += 1;
            continue;
          }
          const thirdWord = words[i + 2];
          i += 1;
          if (thirdWord) {
            const newWord = word + '=' + thirdWord;
            tokens.push({ type, content: newWord });
            i += 1;
            continue;
          }
        }
      }
      if (word.endsWith('=')) {
        const secondWord = words[i + 1];
        if (secondWord && !secondWord.includes('=')) {
          const newWord = word + secondWord;
          tokens.push({ type, content: newWord });
          i += 1;
          continue;
        }
        const newWord = word.slice(0, -1);
        tokens.push({ type, content: newWord });
        continue;
      }
      tokens.push({ type, content: word });
    }
  }
  scanSkipTag(tagName) {
    const { html, position } = this;
    const safeTagName = tagName.toLowerCase();
    const len = html.length;
    while (position.index < len) {
      const nextTag = html.indexOf('</', position.index);
      if (nextTag === -1) {
        this.scanText();
        break;
      }
      jumpPosition(position, html, nextTag);
      const name = this.scanTag();
      if (safeTagName === name.toLowerCase()) {
        break;
      }
    }
  }
}

function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  const list = str.split(',');
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? (val) => !!map[val.toLowerCase()]
    : (val) => !!map[val];
}
const specialMiniElements = {
  img: 'image',
  iframe: 'web-view',
};
const internalCompsList = Object.keys(internalComponents)
  .map((i) => i.toLowerCase())
  .join(',');
// https://developers.weixin.qq.com/miniprogram/dev/component
const isMiniElements = makeMap(internalCompsList, true);
// https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
const isInlineElements = makeMap(
  'a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b',
  true,
);
// https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
const isBlockElements = makeMap(
  'address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt',
  true,
);

function unquote(str) {
  const car = str.charAt(0);
  const end = str.length - 1;
  const isQuoteStart = car === '"' || car === "'";
  if (isQuoteStart && car === str.charAt(end)) {
    return str.slice(1, end);
  }
  return str;
}

const LEFT_BRACKET = '{';
const RIGHT_BRACKET = '}';
const CLASS_SELECTOR = '.';
const ID_SELECTOR = '#';
const CHILD_COMBINATOR = '>';
const GENERAL_SIBLING_COMBINATOR = '~';
const ADJACENT_SIBLING_COMBINATOR = '+';
class StyleTagParser {
  constructor() {
    this.styles = [];
  }
  extractStyle(src) {
    const REG_STYLE = /<style\s?[^>]*>((.|\n|\s)+?)<\/style>/g;
    let html = src;
    // let html = src.replace(/\n/g, '')
    html = html.replace(REG_STYLE, (_, $1) => {
      const style = $1.trim();
      this.stringToSelector(style);
      return '';
    });
    return html.trim();
  }
  stringToSelector(style) {
    let lb = style.indexOf(LEFT_BRACKET);
    while (lb > -1) {
      const rb = style.indexOf(RIGHT_BRACKET);
      const selectors = style.slice(0, lb).trim();
      let content = style.slice(lb + 1, rb);
      content = content.replace(/:(.*);/g, function (_, $1) {
        const t = $1.trim().replace(/ +/g, '+++');
        return `:${t};`;
      });
      content = content.replace(/ /g, '');
      content = content.replace(/\+\+\+/g, ' ');
      if (!/;$/.test(content)) {
        content += ';';
      }
      selectors.split(',').forEach((src) => {
        const selectorList = this.parseSelector(src);
        this.styles.push({
          content,
          selectorList,
        });
      });
      style = style.slice(rb + 1);
      lb = style.indexOf(LEFT_BRACKET);
    }
    // console.log('res this.styles: ', this.styles)
  }
  parseSelector(src) {
    // todo: 属性选择器里可以带空格：[a = "b"]，这里的 split(' ') 需要作兼容
    const list = src
      .trim()
      .replace(/ *([>~+]) */g, ' $1')
      .replace(/ +/g, ' ')
      .split(' ');
    const selectors = list.map((item) => {
      const firstChar = item.charAt(0);
      const selector = {
        isChild: firstChar === CHILD_COMBINATOR,
        isGeneralSibling: firstChar === GENERAL_SIBLING_COMBINATOR,
        isAdjacentSibling: firstChar === ADJACENT_SIBLING_COMBINATOR,
        tag: null,
        id: null,
        class: [],
        attrs: [],
      };
      item = item.replace(/^[>~+]/, '');
      // 属性选择器
      item = item.replace(/\[(.+?)\]/g, function (_, $1) {
        const [key, value] = $1.split('=');
        const all = $1.indexOf('=') === -1;
        const attr = {
          all,
          key,
          value: all ? null : value,
        };
        selector.attrs.push(attr);
        return '';
      });
      item = item.replace(/([.#][A-Za-z0-9-_]+)/g, function (_, $1) {
        if ($1[0] === ID_SELECTOR) {
          // id 选择器
          selector.id = $1.substr(1);
        } else if ($1[0] === CLASS_SELECTOR) {
          // class 选择器
          selector.class.push($1.substr(1));
        }
        return '';
      });
      // 标签选择器
      if (item !== '') {
        selector.tag = item;
      }
      return selector;
    });
    return selectors;
  }
  matchStyle(tagName, el, list) {
    const res = sortStyles(this.styles).reduce(
      (str, { content, selectorList }, i) => {
        let idx = list[i];
        let selector = selectorList[idx];
        const nextSelector = selectorList[idx + 1];
        if (
          (nextSelector === null || nextSelector === void 0
            ? void 0
            : nextSelector.isGeneralSibling) ||
          (nextSelector === null || nextSelector === void 0
            ? void 0
            : nextSelector.isAdjacentSibling)
        ) {
          selector = nextSelector;
          idx += 1;
          list[i] += 1;
        }
        let isMatch = this.matchCurrent(tagName, el, selector);
        if (isMatch && selector.isGeneralSibling) {
          let prev = getPreviousElement(el);
          while (prev) {
            if (
              prev.h5tagName &&
              this.matchCurrent(prev.h5tagName, prev, selectorList[idx - 1])
            ) {
              isMatch = true;
              break;
            }
            prev = getPreviousElement(prev);
            isMatch = false;
          }
        }
        if (isMatch && selector.isAdjacentSibling) {
          const prev = getPreviousElement(el);
          if (!prev || !prev.h5tagName) {
            isMatch = false;
          } else {
            const isSiblingMatch = this.matchCurrent(
              prev.h5tagName,
              prev,
              selectorList[idx - 1],
            );
            if (!isSiblingMatch) {
              isMatch = false;
            }
          }
        }
        if (isMatch) {
          if (idx === selectorList.length - 1) {
            return str + content;
          } else if (idx < selectorList.length - 1) {
            list[i] += 1;
          }
        } else {
          // 直接子代组合器: >
          if (selector.isChild && idx > 0) {
            list[i] -= 1;
            if (this.matchCurrent(tagName, el, selectorList[list[i]])) {
              list[i] += 1;
            }
          }
        }
        return str;
      },
      '',
    );
    return res;
  }
  matchCurrent(tagName, el, selector) {
    // 标签选择器
    if (selector.tag && selector.tag !== tagName) return false;
    // id 选择器
    if (selector.id && selector.id !== el.id) return false;
    // class 选择器
    if (selector.class.length) {
      const classList = el.className.split(' ');
      for (let i = 0; i < selector.class.length; i++) {
        const cls = selector.class[i];
        if (classList.indexOf(cls) === -1) {
          return false;
        }
      }
    }
    // 属性选择器
    if (selector.attrs.length) {
      for (let i = 0; i < selector.attrs.length; i++) {
        const { all, key, value } = selector.attrs[i];
        if (all && !el.hasAttribute(key)) {
          return false;
        } else {
          const attr = el.getAttribute(key);
          if (attr !== unquote(value || '')) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
function getPreviousElement(el) {
  const parent = el.parentElement;
  if (!parent) return null;
  const prev = el.previousSibling;
  if (!prev) return null;
  if (prev.nodeType === 1 /* ELEMENT_NODE */) {
    return prev;
  } else {
    return getPreviousElement(prev);
  }
}
// 根据 css selector 权重排序: 权重大的靠后
// @WARN 不考虑伪类
// https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity_2
function sortStyles(styles) {
  return styles.sort((s1, s2) => {
    const hundreds1 = getHundredsWeight(s1.selectorList);
    const hundreds2 = getHundredsWeight(s2.selectorList);
    if (hundreds1 !== hundreds2) return hundreds1 - hundreds2;
    const tens1 = getTensWeight(s1.selectorList);
    const tens2 = getTensWeight(s2.selectorList);
    if (tens1 !== tens2) return tens1 - tens2;
    const ones1 = getOnesWeight(s1.selectorList);
    const ones2 = getOnesWeight(s2.selectorList);
    return ones1 - ones2;
  });
}
function getHundredsWeight(selectors) {
  return selectors.reduce((pre, cur) => pre + (cur.id ? 1 : 0), 0);
}
function getTensWeight(selectors) {
  return selectors.reduce(
    (pre, cur) => pre + cur.class.length + cur.attrs.length,
    0,
  );
}
function getOnesWeight(selectors) {
  return selectors.reduce((pre, cur) => pre + (cur.tag ? 1 : 0), 0);
}

const closingTagAncestorBreakers = {
  li: ['ul', 'ol', 'menu'],
  dt: ['dl'],
  dd: ['dl'],
  tbody: ['table'],
  thead: ['table'],
  tfoot: ['table'],
  tr: ['table'],
  td: ['table'],
};
function hasTerminalParent(tagName, stack) {
  const tagParents = closingTagAncestorBreakers[tagName];
  if (tagParents) {
    let currentIndex = stack.length - 1;
    while (currentIndex >= 0) {
      const parentTagName = stack[currentIndex].tagName;
      if (parentTagName === tagName) {
        break;
      }
      if (tagParents && tagParents.includes(parentTagName)) {
        return true;
      }
      currentIndex--;
    }
  }
  return false;
}
function getTagName(tag) {
  if (options.html.renderHTMLTag) {
    return tag;
  }
  if (specialMiniElements[tag]) {
    return specialMiniElements[tag];
  } else if (isMiniElements(tag)) {
    return tag;
  } else if (isBlockElements(tag)) {
    return 'view';
  } else if (isInlineElements(tag)) {
    return 'text';
  }
  return 'view';
}
function splitEqual(str) {
  const sep = '=';
  const idx = str.indexOf(sep);
  if (idx === -1) return [str];
  const key = str.slice(0, idx).trim();
  const value = str.slice(idx + sep.length).trim();
  return [key, value];
}
function format(children, document, styleOptions, parent) {
  return children
    .filter((child) => {
      // 过滤注释和空文本节点
      if (child.type === 'comment') {
        return false;
      } else if (child.type === 'text') {
        return child.content !== '';
      }
      return true;
    })
    .map((child) => {
      // 文本节点
      if (child.type === 'text') {
        const text = document.createTextNode(child.content);
        if (isFunction$1(options.html.transformText)) {
          return options.html.transformText(text, child);
        }
        parent === null || parent === void 0
          ? void 0
          : parent.appendChild(text);
        return text;
      }
      const el = document.createElement(getTagName(child.tagName));
      el.h5tagName = child.tagName;
      parent === null || parent === void 0 ? void 0 : parent.appendChild(el);
      if (!options.html.renderHTMLTag) {
        el.className = `h5-${child.tagName}`;
      }
      for (let i = 0; i < child.attributes.length; i++) {
        const attr = child.attributes[i];
        const [key, value] = splitEqual(attr);
        if (key === 'class') {
          el.className += ' ' + unquote(value);
        } else if (key[0] === 'o' && key[1] === 'n') {
          continue;
        } else {
          el.setAttribute(key, value == null ? true : unquote(value));
        }
      }
      const { styleTagParser, descendantList } = styleOptions;
      const list = descendantList.slice();
      const style = styleTagParser.matchStyle(child.tagName, el, list);
      el.setAttribute('style', style + el.style.cssText);
      // console.log('style, ', style)
      format(
        child.children,
        document,
        {
          styleTagParser,
          descendantList: list,
        },
        el,
      );
      if (isFunction$1(options.html.transformElement)) {
        return options.html.transformElement(el, child);
      }
      return el;
    });
}
function parser(html, document) {
  const styleTagParser = new StyleTagParser();
  html = styleTagParser.extractStyle(html);
  const tokens = new Scaner(html).scan();
  const root = { tagName: '', children: [], type: 'element', attributes: [] };
  const state = { tokens, options, cursor: 0, stack: [root] };
  parse(state);
  return format(root.children, document, {
    styleTagParser,
    descendantList: Array(styleTagParser.styles.length).fill(0),
  });
}
function parse(state) {
  const { tokens, stack } = state;
  let { cursor } = state;
  const len = tokens.length;
  let nodes = stack[stack.length - 1].children;
  while (cursor < len) {
    const token = tokens[cursor];
    if (token.type !== 'tag-start') {
      // comment or text
      nodes.push(token);
      cursor++;
      continue;
    }
    const tagToken = tokens[++cursor];
    cursor++;
    const tagName = tagToken.content.toLowerCase();
    if (token.close) {
      let index = stack.length;
      let shouldRewind = false;
      while (--index > -1) {
        if (stack[index].tagName === tagName) {
          shouldRewind = true;
          break;
        }
      }
      while (cursor < len) {
        const endToken = tokens[cursor];
        if (endToken.type !== 'tag-end') break;
        cursor++;
      }
      if (shouldRewind) {
        stack.splice(index);
        break;
      } else {
        continue;
      }
    }
    const isClosingTag = options.html.closingElements.has(tagName);
    let shouldRewindToAutoClose = isClosingTag;
    if (shouldRewindToAutoClose) {
      shouldRewindToAutoClose = !hasTerminalParent(tagName, stack);
    }
    if (shouldRewindToAutoClose) {
      let currentIndex = stack.length - 1;
      while (currentIndex > 0) {
        if (tagName === stack[currentIndex].tagName) {
          stack.splice(currentIndex);
          const previousIndex = currentIndex - 1;
          nodes = stack[previousIndex].children;
          break;
        }
        currentIndex = currentIndex - 1;
      }
    }
    const attributes = [];
    let attrToken;
    while (cursor < len) {
      attrToken = tokens[cursor];
      if (attrToken.type === 'tag-end') break;
      attributes.push(attrToken.content);
      cursor++;
    }
    cursor++;
    const children = [];
    const element = {
      type: 'element',
      tagName: tagToken.content,
      attributes,
      children,
    };
    nodes.push(element);
    const hasChildren = !(
      attrToken.close || options.html.voidElements.has(tagName)
    );
    if (hasChildren) {
      stack.push({ tagName, children });
      const innerState = { tokens, cursor, stack };
      parse(innerState);
      cursor = innerState.cursor;
    }
  }
  state.cursor = cursor;
}

options.html = {
  skipElements: new Set(['style', 'script']),
  voidElements: new Set([
    '!doctype',
    'area',
    'base',
    'br',
    'col',
    'command',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
  ]),
  closingElements: new Set([
    'html',
    'head',
    'body',
    'p',
    'dt',
    'dd',
    'li',
    'option',
    'thead',
    'th',
    'tbody',
    'tr',
    'td',
    'tfoot',
    'colgroup',
  ]),
  renderHTMLTag: false,
};
function setInnerHTML(element, html, getDoc) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  const children = parser(html, getDoc());
  for (let i = 0; i < children.length; i++) {
    element.appendChild(children[i]);
  }
}

/**
 * An implementation of `Element.insertAdjacentHTML()`
 * to support Vue 3 with a version of or greater than `vue@3.1.2`
 */
function insertAdjacentHTMLImpl(position, html, getDoc) {
  var _a, _b;
  const parsedNodes = parser(html, getDoc());
  for (let i = 0; i < parsedNodes.length; i++) {
    const n = parsedNodes[i];
    switch (position) {
      case 'beforebegin':
        (_a = this.parentNode) === null || _a === void 0
          ? void 0
          : _a.insertBefore(n, this);
        break;
      case 'afterbegin':
        if (this.hasChildNodes()) {
          this.insertBefore(n, this.childNodes[0]);
        } else {
          this.appendChild(n);
        }
        break;
      case 'beforeend':
        this.appendChild(n);
        break;
      case 'afterend':
        (_b = this.parentNode) === null || _b === void 0
          ? void 0
          : _b.appendChild(n);
        break;
    }
  }
}
function cloneNode(ctx, getDoc, isDeep = false) {
  const document = getDoc();
  let newNode;
  if (ctx.nodeType === 1 /* ELEMENT_NODE */) {
    newNode = document.createElement(ctx.nodeName);
  } else if (ctx.nodeType === 3 /* TEXT_NODE */) {
    newNode = document.createTextNode('');
  }
  for (const key in this) {
    const value = this[key];
    if ([PROPS, DATASET].includes(key) && typeof value === OBJECT) {
      newNode[key] = Object.assign({}, value);
    } else if (key === '_value') {
      newNode[key] = value;
    } else if (key === STYLE) {
      newNode.style._value = Object.assign({}, value._value);
      newNode.style._usedStyleProp = new Set(Array.from(value._usedStyleProp));
    }
  }
  if (isDeep) {
    newNode.childNodes = ctx.childNodes.map((node) => node.cloneNode(true));
  }
  return newNode;
}

let TaroNodeImpl = class TaroNodeImpl {
  constructor(getElement) { // eslint-disable-next-line @typescript-eslint/indent
    this.getDoc = () => getElement(ElementNames.Document)();
  }
  bind(ctx) {
    const getDoc = this.getDoc;
    if (ENABLE_INNER_HTML) {
      bindInnerHTML(ctx, getDoc);
      if (ENABLE_ADJACENT_HTML) {
        bindAdjacentHTML(ctx, getDoc);
      }
    }
    if (ENABLE_CLONE_NODE) {
      ctx.cloneNode = cloneNode.bind(ctx, ctx, getDoc);
    }
  }
};
TaroNodeImpl = __decorate(
  [
    injectable(),
    __param(0, inject(SERVICE_IDENTIFIER.TaroElementFactory)),
    __metadata('design:paramtypes', [Function]),
  ],
  TaroNodeImpl,
);
function bindInnerHTML(ctx, getDoc) {
  Object.defineProperty(ctx, 'innerHTML', {
    configurable: true,
    enumerable: true,
    set(html) {
      setInnerHTML.call(ctx, ctx, html, getDoc);
    },
    get() {
      return '';
    },
  });
}
function bindAdjacentHTML(ctx, getDoc) {
  ctx.insertAdjacentHTML = function (position, html) {
    insertAdjacentHTMLImpl.call(ctx, position, html, getDoc);
  };
}

function getBoundingClientRectImpl() {
  if (!options.miniGlobal) return Promise.resolve(null);
  return new Promise((resolve) => {
    const query = options.miniGlobal.createSelectorQuery();
    query
      .select(`#${this.uid}`)
      .boundingClientRect((res) => {
        resolve(res);
      })
      .exec();
  });
}
function getTemplateContent(ctx) {
  if (ctx.nodeName === 'template') {
    const content = ctx._getElement(ElementNames.Element)(DOCUMENT_FRAGMENT);
    content.childNodes = ctx.childNodes;
    ctx.childNodes = [content];
    content.parentNode = ctx;
    content.childNodes.forEach((nodes) => {
      nodes.parentNode = content;
    });
    return content;
  }
}

let TaroElementImpl = class TaroElementImpl {
  bind(ctx) {
    if (ENABLE_SIZE_APIS) {
      ctx.getBoundingClientRect = async function (...args) {
        return await getBoundingClientRectImpl.apply(ctx, args);
      };
    }
    if (ENABLE_TEMPLATE_CONTENT) {
      bindContent(ctx);
    }
  }
};
TaroElementImpl = __decorate([injectable()], TaroElementImpl);
function bindContent(ctx) {
  Object.defineProperty(ctx, 'content', {
    configurable: true,
    enumerable: true,
    get() {
      return getTemplateContent(ctx);
    },
  });
}

let TaroDocument = class TaroDocument extends TaroElement {
  constructor(nodeImpl, getElement, hooks, elementImpl, getText) { // eslint-disable-next-line @typescript-eslint/indent
    super(nodeImpl, getElement, hooks, elementImpl);
    this._getText = getText;
    this.nodeType = 9 /* DOCUMENT_NODE */;
    this.nodeName = DOCUMENT_ELEMENT_NAME;
  }
  createElement(type) {
    if (type === ROOT_STR) {
      return this._getElement(ElementNames.RootElement)();
    }
    if (controlledComponent.has(type)) {
      return this._getElement(ElementNames.FormElement)(type);
    }
    return this._getElement(ElementNames.Element)(type);
  }
  // an ugly fake createElementNS to deal with @vue/runtime-dom's
  // support mounting app to svg container since vue@3.0.8
  createElementNS(_svgNS, type) {
    return this.createElement(type);
  }
  createTextNode(text) {
    return this._getText(text);
  }
  getElementById(id) {
    const el = eventSource.get(id);
    return isUndefined(el) ? null : el;
  }
  querySelector(query) {
    // 为了 Vue3 的乞丐版实现
    if (/^#/.test(query)) {
      return this.getElementById(query.slice(1));
    }
    return null;
  }
  querySelectorAll() {
    // fake hack
    return [];
  }
  // @TODO: @PERF: 在 hydrate 移除掉空的 node
  createComment() {
    const textnode = this._getText('');
    textnode.nodeName = COMMENT;
    return textnode;
  }
};
TaroDocument = __decorate(
  [
    injectable(),
    __param(0, inject(SERVICE_IDENTIFIER.TaroNodeImpl)),
    __param(1, inject(SERVICE_IDENTIFIER.TaroElementFactory)),
    __param(2, inject(SERVICE_IDENTIFIER.Hooks)),
    __param(3, inject(SERVICE_IDENTIFIER.TaroElementImpl)),
    __param(4, inject(SERVICE_IDENTIFIER.TaroTextFactory)),
    __metadata('design:paramtypes', [
      Function,
      Function,
      Function,
      Function,
      Function,
    ]),
  ],
  TaroDocument,
);

let Hooks = class Hooks {
  modifyMpEvent(e) {
    var _a;
    (_a = this.modifyMpEventImpls) === null || _a === void 0
      ? void 0
      : _a.forEach((fn) => fn(e));
  }
  modifyTaroEvent(e, element) {
    var _a;
    (_a = this.modifyTaroEventImpls) === null || _a === void 0
      ? void 0
      : _a.forEach((fn) => fn(e, element));
  }
  initNativeApi(taro) {
    var _a;
    (_a = this.initNativeApiImpls) === null || _a === void 0
      ? void 0
      : _a.forEach((fn) => fn(taro));
  }
  patchElement(element) {
    var _a;
    (_a = this.patchElementImpls) === null || _a === void 0
      ? void 0
      : _a.forEach((fn) => fn(element));
  }
};
__decorate(
  [
    inject(SERVICE_IDENTIFIER.getLifecycle),
    __metadata('design:type', Function),
  ],
  Hooks.prototype,
  'getLifecycle',
  void 0,
);
__decorate(
  [
    inject(SERVICE_IDENTIFIER.getPathIndex),
    __metadata('design:type', Function),
  ],
  Hooks.prototype,
  'getPathIndex',
  void 0,
);
__decorate(
  [
    inject(SERVICE_IDENTIFIER.getEventCenter),
    __metadata('design:type', Function),
  ],
  Hooks.prototype,
  'getEventCenter',
  void 0,
);
__decorate(
  [
    inject(SERVICE_IDENTIFIER.isBubbleEvents),
    __metadata('design:type', Function),
  ],
  Hooks.prototype,
  'isBubbleEvents',
  void 0,
);
__decorate(
  [
    inject(SERVICE_IDENTIFIER.getSpecialNodes),
    __metadata('design:type', Function),
  ],
  Hooks.prototype,
  'getSpecialNodes',
  void 0,
);
__decorate(
  [
    inject(SERVICE_IDENTIFIER.onRemoveAttribute),
    optional(),
    __metadata('design:type', Function),
  ],
  Hooks.prototype,
  'onRemoveAttribute',
  void 0,
);
__decorate(
  [
    inject(SERVICE_IDENTIFIER.batchedEventUpdates),
    optional(),
    __metadata('design:type', Function),
  ],
  Hooks.prototype,
  'batchedEventUpdates',
  void 0,
);
__decorate(
  [
    inject(SERVICE_IDENTIFIER.mergePageInstance),
    optional(),
    __metadata('design:type', Function),
  ],
  Hooks.prototype,
  'mergePageInstance',
  void 0,
);
__decorate(
  [
    inject(SERVICE_IDENTIFIER.createPullDownComponent),
    optional(),
    __metadata('design:type', Function),
  ],
  Hooks.prototype,
  'createPullDownComponent',
  void 0,
);
__decorate(
  [
    inject(SERVICE_IDENTIFIER.getDOMNode),
    optional(),
    __metadata('design:type', Function),
  ],
  Hooks.prototype,
  'getDOMNode',
  void 0,
);
__decorate(
  [
    inject(SERVICE_IDENTIFIER.modifyHydrateData),
    optional(),
    __metadata('design:type', Function),
  ],
  Hooks.prototype,
  'modifyHydrateData',
  void 0,
);
__decorate(
  [
    inject(SERVICE_IDENTIFIER.modifySetAttrPayload),
    optional(),
    __metadata('design:type', Function),
  ],
  Hooks.prototype,
  'modifySetAttrPayload',
  void 0,
);
__decorate(
  [
    inject(SERVICE_IDENTIFIER.modifyRmAttrPayload),
    optional(),
    __metadata('design:type', Function),
  ],
  Hooks.prototype,
  'modifyRmAttrPayload',
  void 0,
);
__decorate(
  [
    inject(SERVICE_IDENTIFIER.onAddEvent),
    optional(),
    __metadata('design:type', Function),
  ],
  Hooks.prototype,
  'onAddEvent',
  void 0,
);
__decorate(
  [
    multiInject(SERVICE_IDENTIFIER.modifyMpEvent),
    optional(),
    __metadata('design:type', Array),
  ],
  Hooks.prototype,
  'modifyMpEventImpls',
  void 0,
);
__decorate(
  [
    multiInject(SERVICE_IDENTIFIER.modifyTaroEvent),
    optional(),
    __metadata('design:type', Array),
  ],
  Hooks.prototype,
  'modifyTaroEventImpls',
  void 0,
);
__decorate(
  [
    multiInject(SERVICE_IDENTIFIER.initNativeApi),
    optional(),
    __metadata('design:type', Array),
  ],
  Hooks.prototype,
  'initNativeApiImpls',
  void 0,
);
__decorate(
  [
    multiInject(SERVICE_IDENTIFIER.patchElement),
    optional(),
    __metadata('design:type', Array),
  ],
  Hooks.prototype,
  'patchElementImpls',
  void 0,
);
Hooks = __decorate([injectable()], Hooks);

/**
 * 支持冒泡的事件, 除 支付宝小程序外，其余的可冒泡事件都和微信保持一致
 * 详见 见 https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html
 */
const BUBBLE_EVENTS = new Set([
  'touchstart',
  'touchmove',
  'touchcancel',
  'touchend',
  'touchforcechange',
  'tap',
  'longpress',
  'longtap',
  'transitionend',
  'animationstart',
  'animationiteration',
  'animationend',
]);

const getLifecycle = function (instance, lifecycle) {
  return instance[lifecycle];
};
const getPathIndex = function (indexOfNode) {
  return `[${indexOfNode}]`;
};
const getEventCenter = function (Events) {
  return new Events();
};
const isBubbleEvents = function (eventName) {
  return BUBBLE_EVENTS.has(eventName);
};
const getSpecialNodes = function () {
  return ['view', 'text', 'image'];
};
const DefaultHooksContainer = new ContainerModule((bind) => {
  bind(SERVICE_IDENTIFIER.getLifecycle).toFunction(getLifecycle);
  bind(SERVICE_IDENTIFIER.getPathIndex).toFunction(getPathIndex);
  bind(SERVICE_IDENTIFIER.getEventCenter).toFunction(getEventCenter);
  bind(SERVICE_IDENTIFIER.isBubbleEvents).toFunction(isBubbleEvents);
  bind(SERVICE_IDENTIFIER.getSpecialNodes).toFunction(getSpecialNodes);
});

function processPluginHooks(container) {
  const keys = Object.keys(defaultReconciler);
  keys.forEach((key) => {
    if (key in SERVICE_IDENTIFIER) {
      // is hooks
      const identifier = SERVICE_IDENTIFIER[key];
      const fn = defaultReconciler[key];
      if (isArray$1(fn)) {
        // is multi
        fn.forEach((item) => container.bind(identifier).toFunction(item));
      } else {
        if (container.isBound(identifier)) {
          // 之前有绑定过，需要重新绑定以覆盖前者
          container.rebind(identifier).toFunction(fn);
        } else {
          container.bind(identifier).toFunction(fn);
        }
      }
    }
  });
}

const container = new Container();
if (process.env.TARO_ENV !== 'h5') {
  container
    .bind(SERVICE_IDENTIFIER.TaroElement)
    .to(TaroElement)
    .whenTargetNamed(ElementNames.Element);
  container
    .bind(SERVICE_IDENTIFIER.TaroElement)
    .to(TaroDocument)
    .inSingletonScope()
    .whenTargetNamed(ElementNames.Document);
  container
    .bind(SERVICE_IDENTIFIER.TaroElement)
    .to(TaroRootElement)
    .whenTargetNamed(ElementNames.RootElement);
  container
    .bind(SERVICE_IDENTIFIER.TaroElement)
    .to(FormElement)
    .whenTargetNamed(ElementNames.FormElement);
  container.bind(SERVICE_IDENTIFIER.TaroElementFactory).toFactory((context) => {
    return (named) => (nodeName) => {
      const el = context.container.getNamed(
        SERVICE_IDENTIFIER.TaroElement,
        named,
      );
      if (nodeName) {
        el.nodeName = nodeName;
      }
      el.tagName = el.nodeName.toUpperCase();
      return el;
    };
  });
  container.bind(SERVICE_IDENTIFIER.TaroText).to(TaroText);
  container.bind(SERVICE_IDENTIFIER.TaroTextFactory).toFactory((context) => {
    return (text) => {
      const textNode = context.container.get(SERVICE_IDENTIFIER.TaroText);
      textNode._value = text;
      return textNode;
    };
  });
  container
    .bind(SERVICE_IDENTIFIER.TaroNodeImpl)
    .to(TaroNodeImpl)
    .inSingletonScope();
  container
    .bind(SERVICE_IDENTIFIER.TaroElementImpl)
    .to(TaroElementImpl)
    .inSingletonScope();
}
container.bind(SERVICE_IDENTIFIER.Hooks).to(Hooks).inSingletonScope();
container.load(DefaultHooksContainer);
processPluginHooks(container);

let hooks;
let getElement;
let document$1;
if (process.env.TARO_ENV !== 'h5') {
  hooks = container.get(SERVICE_IDENTIFIER.Hooks);
  getElement = container.get(SERVICE_IDENTIFIER.TaroElementFactory);
  document$1 = getElement(ElementNames.Document)();
}
// Taro 事件对象。以 Web 标准的事件对象为基础，加入小程序事件对象中携带的部分信息，并模拟实现事件冒泡。
class TaroEvent {
  constructor(type, opts, event) {
    this._stop = false;
    this._end = false;
    this.defaultPrevented = false;
    // timestamp can either be hi-res ( relative to page load) or low-res (relative to UNIX epoch)
    // here use hi-res timestamp
    this.timeStamp = Date.now();
    this.type = type.toLowerCase();
    this.mpEvent = event;
    this.bubbles = Boolean(opts && opts.bubbles);
    this.cancelable = Boolean(opts && opts.cancelable);
  }
  stopPropagation() {
    this._stop = true;
  }
  stopImmediatePropagation() {
    this._end = this._stop = true;
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
  get target() {
    var _a, _b, _c;
    const element = document$1.getElementById(
      (_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.target.id,
    );
    return Object.assign(
      Object.assign(
        Object.assign(
          {},
          (_b = this.mpEvent) === null || _b === void 0 ? void 0 : _b.target,
        ),
        (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.detail,
      ),
      { dataset: element !== null ? element.dataset : EMPTY_OBJ },
    );
  }
  get currentTarget() {
    var _a, _b, _c;
    const element = document$1.getElementById(
      (_a = this.mpEvent) === null || _a === void 0
        ? void 0
        : _a.currentTarget.id,
    );
    if (element === null) {
      return this.target;
    }
    return Object.assign(
      Object.assign(
        Object.assign(
          {},
          (_b = this.mpEvent) === null || _b === void 0
            ? void 0
            : _b.currentTarget,
        ),
        (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.detail,
      ),
      { dataset: element.dataset },
    );
  }
}
function createEvent(event, node) {
  if (typeof event === 'string') {
    // For Vue3 using document.createEvent
    return new TaroEvent(event, { bubbles: true, cancelable: true });
  }
  const domEv = new TaroEvent(
    event.type,
    { bubbles: true, cancelable: true },
    event,
  );
  for (const key in event) {
    if (
      key === CURRENT_TARGET ||
      key === TARGET ||
      key === TYPE ||
      key === TIME_STAMP
    ) {
      continue;
    } else {
      domEv[key] = event[key];
    }
  }
  if (
    domEv.type === CONFIRM &&
    (node === null || node === void 0 ? void 0 : node.nodeName) === INPUT
  ) {
    // eslint-disable-next-line dot-notation
    domEv[KEY_CODE] = 13;
  }
  return domEv;
}
const eventsBatch = {};
// 小程序的事件代理回调函数
function eventHandler(event) {
  var _a;
  (_a = hooks.modifyMpEvent) === null || _a === void 0
    ? void 0
    : _a.call(hooks, event);
  if (event.currentTarget == null) {
    event.currentTarget = event.target;
  }
  const node = document$1.getElementById(event.currentTarget.id);
  if (node) {
    const dispatch = () => {
      var _a;
      const e = createEvent(event, node);
      (_a = hooks.modifyTaroEvent) === null || _a === void 0
        ? void 0
        : _a.call(hooks, e, node);
      node.dispatchEvent(e);
    };
    if (typeof hooks.batchedEventUpdates === 'function') {
      const type = event.type;
      if (
        !hooks.isBubbleEvents(type) ||
        !isParentBinded(node, type) ||
        (type === TOUCHMOVE && !!node.props.catchMove)
      ) {
        // 最上层组件统一 batchUpdate
        hooks.batchedEventUpdates(() => {
          if (eventsBatch[type]) {
            eventsBatch[type].forEach((fn) => fn());
            delete eventsBatch[type];
          }
          dispatch();
        });
      } else {
        // 如果上层组件也有绑定同类型的组件，委托给上层组件调用事件回调
        (eventsBatch[type] || (eventsBatch[type] = [])).push(dispatch);
      }
    } else {
      dispatch();
    }
  }
}

const isBrowser = typeof document !== 'undefined' && !!document.scripts;
const doc = isBrowser ? document : EMPTY_OBJ;
const win = isBrowser ? window : EMPTY_OBJ;

function createDocument() {
  /**
   * <document>
   *   <html>
   *     <head></head>
   *     <body>
   *       <container>
   *         <app id="app" />
   *       </container>
   *     </body>
   *   </html>
   * </document>
   */
  const getElement = container.get(SERVICE_IDENTIFIER.TaroElementFactory);
  const doc = getElement(ElementNames.Document)();
  const documentCreateElement = doc.createElement.bind(doc);
  const html = documentCreateElement(HTML);
  const head = documentCreateElement(HEAD);
  const body = documentCreateElement(BODY);
  const app = documentCreateElement(APP);
  app.id = APP;
  const container$1 = documentCreateElement(CONTAINER); // 多包一层主要为了兼容 vue
  doc.appendChild(html);
  html.appendChild(head);
  html.appendChild(body);
  body.appendChild(container$1);
  container$1.appendChild(app);
  doc.documentElement = html;
  doc.head = head;
  doc.body = body;
  doc.createEvent = createEvent;
  return doc;
}
const document$2 = isBrowser ? doc : createDocument();

const machine = 'Macintosh';
const arch = 'Intel Mac OS X 10_14_5';
const engine =
  'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
const navigator = isBrowser
  ? win.navigator
  : {
      appCodeName: 'Mozilla',
      appName: 'Netscape',
      appVersion: '5.0 (' + machine + '; ' + arch + ') ' + engine,
      cookieEnabled: true,
      mimeTypes: [],
      onLine: true,
      platform: 'MacIntel',
      plugins: [],
      product: 'Taro',
      productSub: '20030107',
      userAgent: 'Mozilla/5.0 (' + machine + '; ' + arch + ') ' + engine,
      vendor: 'Joyent',
      vendorSub: '',
    };

// https://github.com/myrne/performance-now
let now;
(function () {
  let loadTime;
  if (
    typeof performance !== 'undefined' &&
    performance !== null &&
    performance.now
  ) {
    now = function () {
      return performance.now();
    };
  } else if (Date.now) {
    now = function () {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    now = function () {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }
})();
let lastTime = 0;
// https://gist.github.com/paulirish/1579671
// https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0
let raf =
  typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame !== null
    ? requestAnimationFrame
    : function (callback) {
        const _now = now();
        const nextTime = Math.max(lastTime + 16, _now); // First time will execute it immediately but barely noticeable and performance is gained.
        return setTimeout(function () {
          callback((lastTime = nextTime));
        }, nextTime - _now);
      };
let caf =
  typeof cancelAnimationFrame !== 'undefined' && cancelAnimationFrame !== null
    ? cancelAnimationFrame
    : clearTimeout;
if (typeof global !== 'undefined') {
  raf = raf.bind(global);
  caf = caf.bind(global);
}

function getComputedStyle(element) {
  return element.style;
}

const window$1 = isBrowser
  ? win
  : {
      navigator,
      document: document$2,
    };
if (!isBrowser) {
  const globalProperties = [
    ...Object.getOwnPropertyNames(global || win),
    ...Object.getOwnPropertySymbols(global || win),
  ];
  globalProperties.forEach((property) => {
    if (property === 'atob') return;
    if (!Object.prototype.hasOwnProperty.call(window$1, property)) {
      window$1[property] = global[property];
    }
  });
  document$2.defaultView = window$1;
}
if (process.env.TARO_ENV && process.env.TARO_ENV !== 'h5') {
  window$1.requestAnimationFrame = raf;
  window$1.cancelAnimationFrame = caf;
  window$1.getComputedStyle = getComputedStyle;
  window$1.addEventListener = function () {};
  window$1.removeEventListener = function () {};
  if (!(DATE in window$1)) {
    window$1.Date = Date;
  }
  if (!(SET_TIMEOUT in window$1)) {
    window$1.setTimeout = setTimeout;
  }
}

const Current = {
  app: null,
  router: null,
  page: null,
};
const getCurrentInstance = () => Current;

class Events {
  constructor(opts) {
    if (typeof opts !== 'undefined' && opts.callbacks) {
      this.callbacks = opts.callbacks;
    } else {
      this.callbacks = {};
    }
  }
  on(eventName, callback, context) {
    let event, node, tail, list;
    if (!callback) {
      return this;
    }
    eventName = eventName.split(Events.eventSplitter);
    this.callbacks || (this.callbacks = {});
    const calls = this.callbacks;
    while ((event = eventName.shift())) {
      list = calls[event];
      node = list ? list.tail : {};
      node.next = tail = {};
      node.context = context;
      node.callback = callback;
      calls[event] = {
        tail,
        next: list ? list.next : node,
      };
    }
    return this;
  }
  once(events, callback, context) {
    const wrapper = (...args) => {
      callback.apply(this, args);
      this.off(events, wrapper, context);
    };
    this.on(events, wrapper, context);
    return this;
  }
  off(events, callback, context) {
    let event, calls, node, tail, cb, ctx;
    if (!(calls = this.callbacks)) {
      return this;
    }
    if (!(events || callback || context)) {
      delete this.callbacks;
      return this;
    }
    events = events ? events.split(Events.eventSplitter) : Object.keys(calls);
    while ((event = events.shift())) {
      node = calls[event];
      delete calls[event];
      if (!node || !(callback || context)) {
        continue;
      }
      tail = node.tail;
      while ((node = node.next) !== tail) {
        cb = node.callback;
        ctx = node.context;
        if ((callback && cb !== callback) || (context && ctx !== context)) {
          this.on(event, cb, ctx);
        }
      }
    }
    return this;
  }
  trigger(events) {
    let event, node, calls, tail;
    if (!(calls = this.callbacks)) {
      return this;
    }
    events = events.split(Events.eventSplitter);
    const rest = [].slice.call(arguments, 1);
    while ((event = events.shift())) {
      if ((node = calls[event])) {
        tail = node.tail;
        while ((node = node.next) !== tail) {
          node.callback.apply(node.context || this, rest);
        }
      }
    }
    return this;
  }
}
Events.eventSplitter = /\s+/;
const hooks$1 = container.get(SERVICE_IDENTIFIER.Hooks);
const eventCenter = hooks$1.getEventCenter(Events);
container.bind(SERVICE_IDENTIFIER.eventCenter).toConstantValue(eventCenter);

/* eslint-disable dot-notation */
const instances = new Map();
const pageId = incrementId();
const hooks$2 = container.get(SERVICE_IDENTIFIER.Hooks);
function injectPageInstance(inst, id) {
  var _a;
  (_a = hooks$2.mergePageInstance) === null || _a === void 0
    ? void 0
    : _a.call(hooks$2, instances.get(id), inst);
  instances.set(id, inst);
}
function getPageInstance(id) {
  return instances.get(id);
}
function addLeadingSlash(path) {
  if (path == null) {
    return '';
  }
  return path.charAt(0) === '/' ? path : '/' + path;
}
function safeExecute(path, lifecycle, ...args) {
  const instance = instances.get(path);
  if (instance == null) {
    return;
  }
  const func = hooks$2.getLifecycle(instance, lifecycle);
  if (isArray$1(func)) {
    const res = func.map((fn) => fn.apply(instance, args));
    return res[0];
  }
  if (!isFunction$1(func)) {
    return;
  }
  return func.apply(instance, args);
}
function stringify(obj) {
  if (obj == null) {
    return '';
  }
  const path = Object.keys(obj)
    .map((key) => {
      return key + '=' + obj[key];
    })
    .join('&');
  return path === '' ? path : '?' + path;
}
function getPath(id, options) {
  let path = id;
  if (!isBrowser) {
    path = id + stringify(options);
  }
  return path;
}
function getOnReadyEventKey(path) {
  return path + '.' + 'onReady';
}
function getOnShowEventKey(path) {
  return path + '.' + 'onShow';
}
function getOnHideEventKey(path) {
  return path + '.' + 'onHide';
}
function createPageConfig(component, pageName, data, pageConfig) {
  var _a, _b;
  const id =
    pageName !== null && pageName !== void 0
      ? pageName
      : `taro_page_${pageId()}`;
  // 小程序 Page 构造器是一个傲娇小公主，不能把复杂的对象挂载到参数上
  let pageElement = null;
  let unmounting = false;
  let prepareMountList = [];
  const config = {
    onLoad(options, cb) {
      perf.start(PAGE_INIT);
      Current.page = this;
      this.config = pageConfig || {};
      options.$taroTimestamp = Date.now();
      // this.$taroPath 是页面唯一标识，不可变，因此页面参数 options 也不可变
      this.$taroPath = getPath(id, options);
      // this.$taroParams 作为暴露给开发者的页面参数对象，可以被随意修改
      if (this.$taroParams == null) {
        this.$taroParams = Object.assign({}, options);
      }
      const router = isBrowser ? this.$taroPath : this.route || this.__route__;
      Current.router = {
        params: this.$taroParams,
        path: addLeadingSlash(router),
        onReady: getOnReadyEventKey(id),
        onShow: getOnShowEventKey(id),
        onHide: getOnHideEventKey(id),
      };
      const mount = () => {
        Current.app.mount(component, this.$taroPath, () => {
          pageElement = document$2.getElementById(this.$taroPath);
          ensure(pageElement !== null, '没有找到页面实例。');
          safeExecute(this.$taroPath, 'onLoad', this.$taroParams);
          if (!isBrowser) {
            pageElement.ctx = this;
            pageElement.performUpdate(true, cb);
          } else {
            isFunction$1(cb) && cb();
          }
        });
      };
      if (unmounting) {
        prepareMountList.push(mount);
      } else {
        mount();
      }
    },
    onReady() {
      raf(() => {
        eventCenter.trigger(getOnReadyEventKey(id));
      });
      safeExecute(this.$taroPath, 'onReady');
      this.onReady.called = true;
    },
    onUnload() {
      unmounting = true;
      Current.app.unmount(this.$taroPath, () => {
        unmounting = false;
        instances.delete(this.$taroPath);
        if (pageElement) {
          pageElement.ctx = null;
        }
        if (prepareMountList.length) {
          prepareMountList.forEach((fn) => fn());
          prepareMountList = [];
        }
      });
    },
    onShow() {
      Current.page = this;
      this.config = pageConfig || {};
      const router = isBrowser ? this.$taroPath : this.route || this.__route__;
      Current.router = {
        params: this.$taroParams,
        path: addLeadingSlash(router),
        onReady: getOnReadyEventKey(id),
        onShow: getOnShowEventKey(id),
        onHide: getOnHideEventKey(id),
      };
      raf(() => {
        eventCenter.trigger(getOnShowEventKey(id));
      });
      safeExecute(this.$taroPath, 'onShow');
    },
    onHide() {
      Current.page = null;
      Current.router = null;
      safeExecute(this.$taroPath, 'onHide');
      eventCenter.trigger(getOnHideEventKey(id));
    },
    onPullDownRefresh() {
      return safeExecute(this.$taroPath, 'onPullDownRefresh');
    },
    onReachBottom() {
      return safeExecute(this.$taroPath, 'onReachBottom');
    },
    onPageScroll(options) {
      return safeExecute(this.$taroPath, 'onPageScroll', options);
    },
    onResize(options) {
      return safeExecute(this.$taroPath, 'onResize', options);
    },
    onTabItemTap(options) {
      return safeExecute(this.$taroPath, 'onTabItemTap', options);
    },
    onTitleClick() {
      return safeExecute(this.$taroPath, 'onTitleClick');
    },
    onOptionMenuClick() {
      return safeExecute(this.$taroPath, 'onOptionMenuClick');
    },
    onPopMenuClick() {
      return safeExecute(this.$taroPath, 'onPopMenuClick');
    },
    onPullIntercept() {
      return safeExecute(this.$taroPath, 'onPullIntercept');
    },
    onAddToFavorites() {
      return safeExecute(this.$taroPath, 'onAddToFavorites');
    },
  };
  // onShareAppMessage 和 onShareTimeline 一样，会影响小程序右上方按钮的选项，因此不能默认注册。
  if (
    component.onShareAppMessage ||
    ((_a = component.prototype) === null || _a === void 0
      ? void 0
      : _a.onShareAppMessage) ||
    component.enableShareAppMessage
  ) {
    config.onShareAppMessage = function (options) {
      const target =
        options === null || options === void 0 ? void 0 : options.target;
      if (target != null) {
        const id = target.id;
        const element = document$2.getElementById(id);
        if (element != null) {
          options.target.dataset = element.dataset;
        }
      }
      return safeExecute(this.$taroPath, 'onShareAppMessage', options);
    };
  }
  if (
    component.onShareTimeline ||
    ((_b = component.prototype) === null || _b === void 0
      ? void 0
      : _b.onShareTimeline) ||
    component.enableShareTimeline
  ) {
    config.onShareTimeline = function () {
      return safeExecute(this.$taroPath, 'onShareTimeline');
    };
  }
  config.eh = eventHandler;
  if (!isUndefined(data)) {
    config.data = data;
  }
  if (isBrowser) {
    config.path = id;
  }
  return config;
}
function createComponentConfig(component, componentName, data) {
  var _a, _b, _c;
  const id =
    componentName !== null && componentName !== void 0
      ? componentName
      : `taro_component_${pageId()}`;
  let componentElement = null;
  const config = {
    attached() {
      var _a;
      perf.start(PAGE_INIT);
      const path = getPath(id, {
        id:
          ((_a = this.getPageId) === null || _a === void 0
            ? void 0
            : _a.call(this)) || pageId(),
      });
      Current.app.mount(component, path, () => {
        componentElement = document$2.getElementById(path);
        ensure(componentElement !== null, '没有找到组件实例。');
        safeExecute(path, 'onLoad');
        if (!isBrowser) {
          componentElement.ctx = this;
          componentElement.performUpdate(true);
        }
      });
    },
    detached() {
      const path = getPath(id, { id: this.getPageId() });
      Current.app.unmount(path, () => {
        instances.delete(path);
        if (componentElement) {
          componentElement.ctx = null;
        }
      });
    },
    methods: {
      eh: eventHandler,
    },
  };
  if (!isUndefined(data)) {
    config.data = data;
  }
  config['options'] =
    (_a =
      component === null || component === void 0
        ? void 0
        : component['options']) !== null && _a !== void 0
      ? _a
      : EMPTY_OBJ;
  config['externalClasses'] =
    (_b =
      component === null || component === void 0
        ? void 0
        : component['externalClasses']) !== null && _b !== void 0
      ? _b
      : EMPTY_OBJ;
  config['behaviors'] =
    (_c =
      component === null || component === void 0
        ? void 0
        : component['behaviors']) !== null && _c !== void 0
      ? _c
      : EMPTY_OBJ;
  return config;
}
function createRecursiveComponentConfig(componentName) {
  return {
    properties: {
      i: {
        type: Object,
        value: {
          ['nn' /* NodeName */]: 'view',
        },
      },
      l: {
        type: String,
        value: '',
      },
    },
    options: {
      addGlobalClass: true,
      virtualHost: componentName !== 'custom-wrapper',
    },
    methods: {
      eh: eventHandler,
    },
  };
}

const hooks$3 = container.get(SERVICE_IDENTIFIER.Hooks);
function isClassComponent(R, component) {
  var _a;
  return (
    isFunction$1(component.render) ||
    !!((_a = component.prototype) === null || _a === void 0
      ? void 0
      : _a.isReactComponent) ||
    component.prototype instanceof R.Component
  ); // compat for some others react-like library
}
// 初始值设置为 any 主要是为了过 TS 的校验
let R = EMPTY_OBJ;
let PageContext = EMPTY_OBJ;
function connectReactPage(R, id) {
  const h = R.createElement;
  return (component) => {
    // eslint-disable-next-line dot-notation
    const isReactComponent = isClassComponent(R, component);
    const inject = (node) => node && injectPageInstance(node, id);
    const refs = isReactComponent
      ? { ref: inject }
      : {
          forwardedRef: inject,
          // 兼容 react-redux 7.20.1+
          reactReduxForwardedRef: inject,
        };
    if (PageContext === EMPTY_OBJ) {
      PageContext = R.createContext('');
    }
    return class Page extends R.Component {
      constructor() {
        super(...arguments);
        this.state = {
          hasError: false,
        };
      }
      static getDerivedStateFromError(error) {
        process.env.NODE_ENV !== 'production' && console.warn(error);
        return { hasError: true };
      }
      // React 16 uncaught error 会导致整个应用 crash，
      // 目前把错误缩小到页面
      componentDidCatch(error, info) {
        process.env.NODE_ENV !== 'production' && console.warn(error);
        process.env.NODE_ENV !== 'production' &&
          console.error(info.componentStack);
      }
      render() {
        const children = this.state.hasError
          ? []
          : h(
              PageContext.Provider,
              { value: id },
              h(component, Object.assign(Object.assign({}, this.props), refs)),
            );
        if (isBrowser) {
          return h('div', { id, className: 'taro_page' }, children);
        }
        return h('root', { id }, children);
      }
    };
  };
}
let ReactDOM;
function setReconciler() {
  const getLifecycle = function (instance, lifecycle) {
    lifecycle = lifecycle.replace(/^on(Show|Hide)$/, 'componentDid$1');
    return instance[lifecycle];
  };
  const modifyMpEvent = function (event) {
    event.type = event.type.replace(/-/g, '');
  };
  const batchedEventUpdates = function (cb) {
    ReactDOM.unstable_batchedUpdates(cb);
  };
  const mergePageInstance = function (prev, next) {
    if (!prev || !next) return;
    // 子组件使用 lifecycle hooks 注册了生命周期后，会存在 prev，里面是注册的生命周期回调。
    // prev 使用 Object.create(null) 创建，H5 的 fast-refresh 可能也会导致存在 prev，要排除这些意外产生的 prev
    if ('constructor' in prev) return;
    Object.keys(prev).forEach((item) => {
      if (isFunction$1(next[item])) {
        next[item] = [next[item], ...prev[item]];
      } else {
        next[item] = [...(next[item] || []), ...prev[item]];
      }
    });
  };
  hooks$3.getLifecycle = getLifecycle;
  hooks$3.modifyMpEvent = modifyMpEvent;
  hooks$3.batchedEventUpdates = batchedEventUpdates;
  hooks$3.mergePageInstance = mergePageInstance;
  if (process.env.TARO_ENV === 'h5') {
    hooks$3.createPullDownComponent = (el, _, R, customWrapper) => {
      const isReactComponent = isClassComponent(R, el);
      return R.forwardRef((props, ref) => {
        const newProps = Object.assign({}, props);
        const refs = isReactComponent
          ? { ref: ref }
          : {
              forwardedRef: ref,
              // 兼容 react-redux 7.20.1+
              reactReduxForwardedRef: ref,
            };
        return R.createElement(
          customWrapper || 'taro-pull-to-refresh',
          null,
          R.createElement(el, Object.assign(Object.assign({}, newProps), refs)),
        );
      });
    };
    hooks$3.getDOMNode = (inst) => {
      return ReactDOM.findDOMNode(inst);
    };
  }
}
const pageKeyId = incrementId();
function createReactApp(App, react, reactdom, config) {
  R = react;
  ReactDOM = reactdom;
  ensure(
    !!ReactDOM,
    "构建 React/Nerv 项目请把 process.env.FRAMEWORK 设置为 'react'/'nerv' ",
  );
  const ref = R.createRef();
  const isReactComponent = isClassComponent(R, App);
  setReconciler();
  class AppWrapper extends R.Component {
    constructor() {
      super(...arguments);
      // run createElement() inside the render function to make sure that owner is right
      this.pages = [];
      this.elements = [];
    }
    mount(component, id, cb) {
      const key = id + pageKeyId();
      const page = () => R.createElement(component, { key, tid: id });
      this.pages.push(page);
      this.forceUpdate(cb);
    }
    unmount(id, cb) {
      for (let i = 0; i < this.elements.length; i++) {
        const element = this.elements[i];
        if (element.props.tid === id) {
          this.elements.splice(i, 1);
          break;
        }
      }
      this.forceUpdate(cb);
    }
    render() {
      while (this.pages.length > 0) {
        const page = this.pages.pop();
        this.elements.push(page());
      }
      let props = null;
      if (isReactComponent) {
        props = { ref };
      }
      return R.createElement(
        App,
        props,
        isBrowser
          ? R.createElement('div', null, this.elements.slice())
          : this.elements.slice(),
      );
    }
  }
  let wrapper;
  if (!isBrowser) {
    // eslint-disable-next-line react/no-render-return-value
    wrapper = ReactDOM.render(
      R.createElement(AppWrapper),
      document$2.getElementById('app'),
    );
  }
  const app = Object.create(
    {
      render(cb) {
        wrapper.forceUpdate(cb);
      },
      mount(component, id, cb) {
        const page = connectReactPage(R, id)(component);
        wrapper.mount(page, id, cb);
      },
      unmount(id, cb) {
        wrapper.unmount(id, cb);
      },
    },
    {
      config: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: config,
      },
      onLaunch: {
        enumerable: true,
        writable: true,
        value(options) {
          Current.router = Object.assign(
            {
              params:
                options === null || options === void 0 ? void 0 : options.query,
            },
            options,
          );
          if (isBrowser) {
            // 由于 H5 路由初始化的时候会清除 app 下的 dom 元素，所以需要在路由初始化后执行 render
            // eslint-disable-next-line react/no-render-return-value
            wrapper = ReactDOM.render(
              R.createElement(AppWrapper),
              document$2.getElementById('app'),
            );
          }
          const app = ref.current;
          // For taroize
          // 把 App Class 上挂载的额外属性同步到全局 app 对象中
          if (app === null || app === void 0 ? void 0 : app.taroGlobalData) {
            const globalData = app.taroGlobalData;
            const keys = Object.keys(globalData);
            const descriptors = Object.getOwnPropertyDescriptors(globalData);
            keys.forEach((key) => {
              Object.defineProperty(this, key, {
                configurable: true,
                enumerable: true,
                get() {
                  return globalData[key];
                },
                set(value) {
                  globalData[key] = value;
                },
              });
            });
            Object.defineProperties(this, descriptors);
          }
          this.$app = app;
          if (app != null && isFunction$1(app.onLaunch)) {
            app.onLaunch(options);
          }
        },
      },
      onShow: {
        enumerable: true,
        writable: true,
        value(options) {
          const app = ref.current;
          Current.router = Object.assign(
            {
              params:
                options === null || options === void 0 ? void 0 : options.query,
            },
            options,
          );
          if (app != null && isFunction$1(app.componentDidShow)) {
            app.componentDidShow(options);
          }
          // app useDidShow
          triggerAppHook('onShow');
        },
      },
      onHide: {
        enumerable: true,
        writable: true,
        value(options) {
          const app = ref.current;
          if (app != null && isFunction$1(app.componentDidHide)) {
            app.componentDidHide(options);
          }
          // app useDidHide
          triggerAppHook('onHide');
        },
      },
      onPageNotFound: {
        enumerable: true,
        writable: true,
        value(res) {
          const app = ref.current;
          if (app != null && isFunction$1(app.onPageNotFound)) {
            app.onPageNotFound(res);
          }
        },
      },
    },
  );
  function triggerAppHook(lifecycle) {
    const instance = getPageInstance(HOOKS_APP_ID);
    if (instance) {
      const app = ref.current;
      const func = hooks$3.getLifecycle(instance, lifecycle);
      if (Array.isArray(func)) {
        func.forEach((cb) => cb.apply(app));
      }
    }
  }
  Current.app = app;
  return Current.app;
}
const getNativeCompId = incrementId();
function initNativeComponentEntry(R, ReactDOM) {
  class NativeComponentWrapper extends R.Component {
    constructor() {
      super(...arguments);
      this.root = R.createRef();
      this.ctx = this.props.getCtx();
    }
    componentDidMount() {
      this.ctx.component = this;
      const rootElement = this.root.current;
      rootElement.ctx = this.ctx;
      rootElement.performUpdate(true);
    }
    render() {
      return R.createElement(
        'root',
        {
          ref: this.root,
        },
        this.props.renderComponent(this.ctx),
      );
    }
  }
  class Entry extends R.Component {
    constructor() {
      super(...arguments);
      this.state = {
        components: [],
      };
    }
    componentDidMount() {
      Current.app = this;
    }
    mount(Component, compId, getCtx) {
      const isReactComponent = isClassComponent(R, Component);
      const inject = (node) => node && injectPageInstance(node, compId);
      const refs = isReactComponent
        ? { ref: inject }
        : {
            forwardedRef: inject,
            reactReduxForwardedRef: inject,
          };
      const item = {
        compId,
        element: R.createElement(NativeComponentWrapper, {
          key: compId,
          getCtx,
          renderComponent(ctx) {
            return R.createElement(
              Component,
              Object.assign(
                Object.assign({}, (ctx.data || (ctx.data = {})).props),
                refs,
              ),
            );
          },
        }),
      };
      this.setState({
        components: [...this.state.components, item],
      });
    }
    unmount(compId) {
      const components = this.state.components;
      const index = components.findIndex((item) => item.compId === compId);
      const next = [
        ...components.slice(0, index),
        ...components.slice(index + 1),
      ];
      this.setState({
        components: next,
      });
    }
    render() {
      const components = this.state.components;
      return components.map(({ element }) => element);
    }
  }
  setReconciler();
  const app = document$2.getElementById('app');
  ReactDOM.render(R.createElement(Entry, {}), app);
}
function createNativeComponentConfig(
  Component,
  react,
  reactdom,
  componentConfig,
) {
  R = react;
  ReactDOM = reactdom;
  setReconciler();
  const config = {
    properties: {
      props: {
        type: null,
        value: null,
        observer(_newVal, oldVal) {
          oldVal && this.component.forceUpdate();
        },
      },
    },
    created() {
      if (!Current.app) {
        initNativeComponentEntry(R, ReactDOM);
      }
    },
    attached() {
      setCurrent();
      this.compId = getNativeCompId();
      this.config = componentConfig;
      Current.app.mount(Component, this.compId, () => this);
    },
    ready() {
      safeExecute(this.compId, 'onReady');
    },
    detached() {
      Current.app.unmount(this.compId);
    },
    pageLifetimes: {
      show() {
        safeExecute(this.compId, 'onShow');
      },
      hide() {
        safeExecute(this.compId, 'onHide');
      },
    },
    methods: {
      eh: eventHandler,
    },
  };
  function setCurrent() {
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    if (Current.page === currentPage) return;
    Current.page = currentPage;
    const route = currentPage.route || currentPage.__route__;
    const router = {
      params: currentPage.options || {},
      path: addLeadingSlash(route),
      onReady: '',
      onHide: '',
      onShow: '',
    };
    Current.router = router;
    if (!currentPage.options) {
      // 例如在微信小程序中，页面 options 的设置时机比组件 attached 慢
      Object.defineProperty(currentPage, 'options', {
        enumerable: true,
        configurable: true,
        get() {
          return this._optionsValue;
        },
        set(value) {
          router.params = value;
          this._optionsValue = value;
        },
      });
    }
  }
  return config;
}

function connectVuePage(Vue, id) {
  return (component) => {
    const injectedPage = Vue.extend({
      props: {
        tid: String,
      },
      mixins: [
        component,
        {
          created() {
            injectPageInstance(this, id);
          },
        },
      ],
    });
    const options = {
      render(h) {
        return h(
          isBrowser ? 'div' : 'root',
          {
            attrs: {
              id,
              class: isBrowser ? 'taro_page' : '',
            },
          },
          [h(injectedPage, { props: { tid: id } })],
        );
      },
    };
    return options;
  };
}
function setReconciler$1() {
  const hooks = container.get(SERVICE_IDENTIFIER.Hooks);
  const onRemoveAttribute = function (dom, qualifiedName) {
    // 处理原因: https://github.com/NervJS/taro/pull/5990
    const props = dom.props;
    if (
      !props.hasOwnProperty(qualifiedName) ||
      isBoolean(props[qualifiedName])
    ) {
      dom.setAttribute(qualifiedName, false);
      return true;
    }
  };
  const getLifecycle = function (instance, lifecycle) {
    return instance.$options[lifecycle];
  };
  hooks.onRemoveAttribute = onRemoveAttribute;
  hooks.getLifecycle = getLifecycle;
  if (process.env.TARO_ENV === 'h5') {
    hooks.createPullDownComponent = (el, path, vue) => {
      const injectedPage = vue.extend({
        props: {
          tid: String,
        },
        mixins: [
          el,
          {
            created() {
              injectPageInstance(this, path);
            },
          },
        ],
      });
      const options = {
        name: 'PullToRefresh',
        render(h) {
          return h(
            'taro-pull-to-refresh',
            {
              class: ['hydrated'],
            },
            [h(injectedPage, this.$slots.default)],
          );
        },
      };
      return options;
    };
    hooks.getDOMNode = (el) => {
      return el.$el;
    };
  }
}
let Vue;
function createVueApp(App, vue, config) {
  Vue = vue;
  ensure(!!Vue, "构建 Vue 项目请把 process.env.FRAMEWORK 设置为 'vue'");
  setReconciler$1();
  Vue.config.getTagNamespace = noop;
  const elements = [];
  const pages = [];
  let appInstance;
  const wrapper = new Vue({
    render(h) {
      while (pages.length > 0) {
        const page = pages.pop();
        elements.push(page(h));
      }
      return h(App, { ref: 'app' }, elements.slice());
    },
    methods: {
      mount(component, id, cb) {
        pages.push((h) => h(component, { key: id }));
        this.updateSync(cb);
      },
      updateSync(cb) {
        this._update(this._render(), false);
        this.$children.forEach((child) =>
          child._update(child._render(), false),
        );
        cb();
      },
      unmount(id, cb) {
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];
          if (element.key === id) {
            elements.splice(i, 1);
            break;
          }
        }
        this.updateSync(cb);
      },
    },
  });
  if (!isBrowser) {
    wrapper.$mount(document$2.getElementById('app'));
  }
  const app = Object.create(
    {
      mount(component, id, cb) {
        const page = connectVuePage(Vue, id)(component);
        wrapper.mount(page, id, cb);
      },
      unmount(id, cb) {
        wrapper.unmount(id, cb);
      },
    },
    {
      config: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: config,
      },
      onLaunch: {
        writable: true,
        enumerable: true,
        value(options) {
          Current.router = Object.assign(
            {
              params:
                options === null || options === void 0 ? void 0 : options.query,
            },
            options,
          );
          if (isBrowser) {
            // 由于 H5 路由初始化的时候会清除 app 下的 dom 元素，所以需要在路由初始化后再执行 render
            wrapper.$mount(document$2.getElementById('app'));
          }
          appInstance = wrapper.$refs.app;
          if (
            appInstance != null &&
            isFunction$1(appInstance.$options.onLaunch)
          ) {
            appInstance.$options.onLaunch.call(appInstance, options);
          }
        },
      },
      onShow: {
        writable: true,
        enumerable: true,
        value(options) {
          Current.router = Object.assign(
            {
              params:
                options === null || options === void 0 ? void 0 : options.query,
            },
            options,
          );
          if (
            appInstance != null &&
            isFunction$1(appInstance.$options.onShow)
          ) {
            appInstance.$options.onShow.call(appInstance, options);
          }
        },
      },
      onHide: {
        writable: true,
        enumerable: true,
        value(options) {
          if (
            appInstance != null &&
            isFunction$1(appInstance.$options.onHide)
          ) {
            appInstance.$options.onHide.call(appInstance, options);
          }
        },
      },
    },
  );
  Current.app = app;
  return Current.app;
}

function createVue3Page(h, id) {
  return function (component) {
    var _a;
    const inject = {
      props: {
        tid: String,
      },
      created() {
        injectPageInstance(this, id);
        // vue3 组件 created 时机比小程序页面 onShow 慢，因此在 created 后再手动触发一次 onShow。
        this.$nextTick(() => {
          safeExecute(id, 'onShow');
        });
      },
    };
    if (isArray$1(component.mixins)) {
      const mixins = component.mixins;
      const idx = mixins.length - 1;
      if (
        !((_a = mixins[idx].props) === null || _a === void 0 ? void 0 : _a.tid)
      ) {
        // mixins 里还没注入过，直接推入数组
        component.mixins.push(inject);
      } else {
        // mixins 里已经注入过，代替前者
        component.mixins[idx] = inject;
      }
    } else {
      component.mixins = [inject];
    }
    return h(
      isBrowser ? 'div' : 'root',
      {
        key: id,
        id,
        class: isBrowser ? 'taro_page' : '',
      },
      [
        h(Object.assign({}, component), {
          tid: id,
        }),
      ],
    );
  };
}
function setReconciler$2() {
  const hooks = container.get(SERVICE_IDENTIFIER.Hooks);
  const getLifecycle = function (instance, lifecycle) {
    return instance.$options[lifecycle];
  };
  const modifyMpEvent = function (event) {
    event.type = event.type.replace(/-/g, '');
  };
  hooks.getLifecycle = getLifecycle;
  hooks.modifyMpEvent = modifyMpEvent;
  if (process.env.TARO_ENV === 'h5') {
    hooks.createPullDownComponent = (component, path, h) => {
      const inject = {
        props: {
          tid: String,
        },
        created() {
          injectPageInstance(this, path);
        },
      };
      component.mixins = isArray$1(component.mixins)
        ? component.mixins.push(inject)
        : [inject];
      return {
        render() {
          return h(
            'taro-pull-to-refresh',
            {
              class: 'hydrated',
            },
            [h(component, this.$slots.default)],
          );
        },
      };
    };
    hooks.getDOMNode = (el) => {
      return el.$el;
    };
  }
}
function createVue3App(app, h, config) {
  let pages = [];
  let appInstance;
  ensure(!isFunction$1(app._component), '入口组件不支持使用函数式组件');
  setReconciler$2();
  app._component.render = function () {
    return pages.slice();
  };
  if (!isBrowser) {
    appInstance = app.mount('#app');
  }
  const appConfig = Object.create(
    {
      mount(component, id, cb) {
        const page = createVue3Page(h, id)(component);
        pages.push(page);
        this.updateAppInstance(cb);
      },
      unmount(id, cb) {
        pages = pages.filter((page) => page.key !== id);
        this.updateAppInstance(cb);
      },
      updateAppInstance(cb) {
        appInstance.$forceUpdate();
        appInstance.$nextTick(cb);
      },
    },
    {
      config: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: config,
      },
      onLaunch: {
        writable: true,
        enumerable: true,
        value(options) {
          var _a;
          Current.router = Object.assign(
            {
              params:
                options === null || options === void 0 ? void 0 : options.query,
            },
            options,
          );
          if (isBrowser) {
            appInstance = app.mount('#app');
          }
          const onLaunch =
            (_a =
              appInstance === null || appInstance === void 0
                ? void 0
                : appInstance.$options) === null || _a === void 0
              ? void 0
              : _a.onLaunch;
          isFunction$1(onLaunch) && onLaunch.call(appInstance, options);
        },
      },
      onShow: {
        writable: true,
        enumerable: true,
        value(options) {
          var _a;
          Current.router = Object.assign(
            {
              params:
                options === null || options === void 0 ? void 0 : options.query,
            },
            options,
          );
          const onShow =
            (_a =
              appInstance === null || appInstance === void 0
                ? void 0
                : appInstance.$options) === null || _a === void 0
              ? void 0
              : _a.onShow;
          isFunction$1(onShow) && onShow.call(appInstance, options);
        },
      },
      onHide: {
        writable: true,
        enumerable: true,
        value(options) {
          var _a;
          const onHide =
            (_a =
              appInstance === null || appInstance === void 0
                ? void 0
                : appInstance.$options) === null || _a === void 0
              ? void 0
              : _a.onHide;
          isFunction$1(onHide) && onHide.call(appInstance, options);
        },
      },
    },
  );
  Current.app = appConfig;
  return Current.app;
}

const taroHooks = (lifecycle) => {
  return (fn) => {
    const id = R.useContext(PageContext) || HOOKS_APP_ID;
    // hold fn ref and keep up to date
    const fnRef = R.useRef(fn);
    if (fnRef.current !== fn) fnRef.current = fn;
    R.useLayoutEffect(() => {
      let inst = getPageInstance(id);
      let first = false;
      if (inst == null) {
        first = true;
        inst = Object.create(null);
      }
      inst = inst;
      // callback is immutable but inner function is up to date
      const callback = (...args) => fnRef.current(...args);
      if (isFunction$1(inst[lifecycle])) {
        inst[lifecycle] = [inst[lifecycle], callback];
      } else {
        inst[lifecycle] = [...(inst[lifecycle] || []), callback];
      }
      if (first) {
        injectPageInstance(inst, id);
      }
      return () => {
        const inst = getPageInstance(id);
        const list = inst[lifecycle];
        if (list === callback) {
          inst[lifecycle] = undefined;
        } else if (isArray$1(list)) {
          inst[lifecycle] = list.filter((item) => item !== callback);
        }
      };
    }, []);
  };
};
const useDidShow = taroHooks('componentDidShow');
const useDidHide = taroHooks('componentDidHide');
const usePullDownRefresh = taroHooks('onPullDownRefresh');
const useReachBottom = taroHooks('onReachBottom');
const usePageScroll = taroHooks('onPageScroll');
const useResize = taroHooks('onResize');
const useShareAppMessage = taroHooks('onShareAppMessage');
const useTabItemTap = taroHooks('onTabItemTap');
const useTitleClick = taroHooks('onTitleClick');
const useOptionMenuClick = taroHooks('onOptionMenuClick');
const usePullIntercept = taroHooks('onPullIntercept');
const useShareTimeline = taroHooks('onShareTimeline');
const useAddToFavorites = taroHooks('onAddToFavorites');
const useReady = taroHooks('onReady');
const useRouter = (dynamic = false) => {
  return dynamic ? Current.router : R.useMemo(() => Current.router, []);
};
const useScope = () => undefined;

function removeLeadingSlash(path) {
  if (path == null) {
    return '';
  }
  return path.charAt(0) === '/' ? path.slice(1) : path;
}
const nextTick = (cb, ctx) => {
  var _a, _b, _c;
  const router = Current.router;
  const timerFunc = () => {
    setTimeout(function () {
      ctx ? cb.call(ctx) : cb();
    }, 1);
  };
  if (router !== null) {
    let pageElement = null;
    const path = getPath(removeLeadingSlash(router.path), router.params);
    pageElement = document$2.getElementById(path);
    if (
      pageElement === null || pageElement === void 0
        ? void 0
        : pageElement.pendingUpdate
    ) {
      if (isBrowser) {
        // eslint-disable-next-line dot-notation
        (_c =
          (_b =
            (_a = pageElement.firstChild) === null || _a === void 0
              ? void 0
              : _a['componentOnReady']) === null || _b === void 0
            ? void 0
            : _b.call(_a).then(() => {
                timerFunc();
              })) !== null && _c !== void 0
          ? _c
          : timerFunc();
      } else {
        pageElement.enqueueUpdateCallback(cb, ctx);
      }
    } else {
      timerFunc();
    }
  } else {
    timerFunc();
  }
};

export {
  Current,
  ElementNames,
  Events,
  FormElement,
  SERVICE_IDENTIFIER,
  SVGElement,
  Style,
  TaroElement,
  TaroEvent,
  TaroNode,
  TaroRootElement,
  TaroText,
  caf as cancelAnimationFrame,
  connectReactPage,
  connectVuePage,
  container,
  createComponentConfig,
  createDocument,
  createEvent,
  createNativeComponentConfig,
  createPageConfig,
  createReactApp,
  createRecursiveComponentConfig,
  createVue3App,
  createVueApp,
  document$2 as document,
  eventCenter,
  getComputedStyle,
  getCurrentInstance,
  hydrate,
  injectPageInstance,
  navigator,
  nextTick,
  now,
  options,
  processPluginHooks,
  raf as requestAnimationFrame,
  stringify,
  useAddToFavorites,
  useDidHide,
  useDidShow,
  useOptionMenuClick,
  usePageScroll,
  usePullDownRefresh,
  usePullIntercept,
  useReachBottom,
  useReady,
  useResize,
  useRouter,
  useScope,
  useShareAppMessage,
  useShareTimeline,
  useTabItemTap,
  useTitleClick,
  window$1 as window,
};
//# sourceMappingURL=runtime.esm.js.map
