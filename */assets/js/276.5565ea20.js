"use strict";
exports.id = 276;
exports.ids = [276];
exports.modules = {

/***/ 64276:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatElapsedTime: () => (/* binding */ formatElapsedTime),
/* harmony export */   getDocumentIndexId: () => (/* binding */ getDocumentIndexId),
/* harmony export */   getDocumentProperties: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_0__.JN),
/* harmony export */   getInnerType: () => (/* binding */ getInnerType),
/* harmony export */   getVectorSize: () => (/* binding */ getVectorSize),
/* harmony export */   isArrayType: () => (/* binding */ isArrayType),
/* harmony export */   isGeoPointType: () => (/* binding */ isGeoPointType),
/* harmony export */   isVectorType: () => (/* binding */ isVectorType),
/* harmony export */   validateSchema: () => (/* binding */ validateSchema)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69016);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5482);



async function formatElapsedTime(n) {
    return {
        raw: Number(n),
        formatted: await (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .formatNanoseconds */ .j7)(n)
    };
}
async function getDocumentIndexId(doc) {
    if (doc.id) {
        if (typeof doc.id !== 'string') {
            throw (0,_errors_js__WEBPACK_IMPORTED_MODULE_1__/* .createError */ .$)('DOCUMENT_ID_MUST_BE_STRING', typeof doc.id);
        }
        return doc.id;
    }
    return await (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .uniqueId */ .NF)();
}
async function validateSchema(doc, schema) {
    for (const [prop, type] of Object.entries(schema)){
        const value = doc[prop];
        if (typeof value === 'undefined') {
            continue;
        }
        if (type === 'geopoint' && typeof value === 'object' && typeof value.lon === 'number' && typeof value.lat === 'number') {
            continue;
        }
        if (type === 'enum' && (typeof value === 'string' || typeof value === 'number')) {
            continue;
        }
        if (type === 'enum[]' && Array.isArray(value)) {
            const valueLength = value.length;
            for(let i = 0; i < valueLength; i++){
                if (typeof value[i] !== 'string' && typeof value[i] !== 'number') {
                    return prop + '.' + i;
                }
            }
            continue;
        }
        if (isVectorType(type)) {
            const vectorSize = getVectorSize(type);
            if (!Array.isArray(value) || value.length !== vectorSize) {
                throw (0,_errors_js__WEBPACK_IMPORTED_MODULE_1__/* .createError */ .$)('INVALID_INPUT_VECTOR', prop, vectorSize, value.length);
            }
            continue;
        }
        if (isArrayType(type)) {
            if (!Array.isArray(value)) {
                return prop;
            }
            const expectedType = getInnerType(type);
            const valueLength = value.length;
            for(let i = 0; i < valueLength; i++){
                if (typeof value[i] !== expectedType) {
                    return prop + '.' + i;
                }
            }
            continue;
        }
        if (typeof type === 'object') {
            if (!value || typeof value !== 'object') {
                return prop;
            }
            // using as ResultDocument is not exactly right but trying to be type-safe here is not useful
            const subProp = await validateSchema(value, type);
            if (subProp) {
                return prop + '.' + subProp;
            }
            continue;
        }
        if (typeof value !== type) {
            return prop;
        }
    }
    return undefined;
}
const IS_ARRAY_TYPE = {
    string: false,
    number: false,
    boolean: false,
    enum: false,
    geopoint: false,
    'string[]': true,
    'number[]': true,
    'boolean[]': true,
    'enum[]': true
};
const INNER_TYPE = {
    'string[]': 'string',
    'number[]': 'number',
    'boolean[]': 'boolean',
    'enum[]': 'enum'
};
function isGeoPointType(type) {
    return type === 'geopoint';
}
function isVectorType(type) {
    return typeof type === 'string' && /^vector\[\d+\]$/.test(type);
}
function isArrayType(type) {
    return typeof type === 'string' && IS_ARRAY_TYPE[type];
}
function getInnerType(type) {
    return INNER_TYPE[type];
}
function getVectorSize(type) {
    const size = Number(type.slice(7, -1));
    switch(true){
        case isNaN(size):
            throw (0,_errors_js__WEBPACK_IMPORTED_MODULE_1__/* .createError */ .$)('INVALID_VECTOR_VALUE', type);
        case size <= 0:
            throw (0,_errors_js__WEBPACK_IMPORTED_MODULE_1__/* .createError */ .$)('INVALID_VECTOR_SIZE', type);
        default:
            return size;
    }
}

//# sourceMappingURL=defaults.js.map

/***/ })

};
;