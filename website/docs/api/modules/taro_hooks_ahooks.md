---
id: 'taro_hooks_ahooks'
title: 'Module: @taro-hooks/ahooks'
sidebar_label: '@taro-hooks/ahooks'
sidebar_position: 0
custom_edit_url: null
---

## Functions

### createUpdateEffect

▸ **createUpdateEffect**(`hook`): `EffectHookType`

#### Parameters

| Name   | Type             |
| :----- | :--------------- |
| `hook` | `EffectHookType` |

#### Returns

`EffectHookType`

#### Defined in

[packages/ahooks/src/createUpdateEffect/index.ts:6](https://github.com/innocces/taro-hooks/blob/next/packages/ahooks/src/createUpdateEffect/index.ts#L6)

---

### useCreation

▸ **useCreation**<`T`\>(`factory`, `deps`): `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name      | Type             |
| :-------- | :--------------- |
| `factory` | () => `T`        |
| `deps`    | `DependencyList` |

#### Returns

`T`

#### Defined in

[packages/ahooks/src/useCreation/index.ts:6](https://github.com/innocces/taro-hooks/blob/next/packages/ahooks/src/useCreation/index.ts#L6)

---

### useLatest

▸ **useLatest**<`T`\>(`value`): `MutableRefObject`<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

`MutableRefObject`<`T`\>

#### Defined in

[packages/ahooks/src/useLatest/index.ts:3](https://github.com/innocces/taro-hooks/blob/next/packages/ahooks/src/useLatest/index.ts#L3)

---

### useMemoizedFn

▸ **useMemoizedFn**<`T`\>(`fn`): `T`

#### Type parameters

| Name | Type           |
| :--- | :------------- |
| `T`  | extends `noop` |

#### Parameters

| Name | Type |
| :--- | :--- |
| `fn` | `T`  |

#### Returns

`T`

#### Defined in

[packages/ahooks/src/useMemoizedFn/index.ts:11](https://github.com/innocces/taro-hooks/blob/next/packages/ahooks/src/useMemoizedFn/index.ts#L11)

---

### useMount

▸ **useMount**(`fn`): `void`

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `fn` | () => `void` |

#### Returns

`void`

#### Defined in

[packages/ahooks/src/useMount/index.ts:4](https://github.com/innocces/taro-hooks/blob/next/packages/ahooks/src/useMount/index.ts#L4)

---

### useUnmount

▸ **useUnmount**(`fn`): `void`

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `fn` | () => `void` |

#### Returns

`void`

#### Defined in

[packages/ahooks/src/useUnmount/index.ts:5](https://github.com/innocces/taro-hooks/blob/next/packages/ahooks/src/useUnmount/index.ts#L5)

---

### useUpdate

▸ **useUpdate**(): () => `void`

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/ahooks/src/useUpdate/index.ts:3](https://github.com/innocces/taro-hooks/blob/next/packages/ahooks/src/useUpdate/index.ts#L3)

---

### useUpdateEffect

▸ **useUpdateEffect**(`effect`, `deps?`): `void`

Accepts a function that contains imperative, possibly effectful code.

**`version`** 16.8.0

**`see`** https://reactjs.org/docs/hooks-reference.html#useeffect

#### Parameters

| Name     | Type             | Description                                                             |
| :------- | :--------------- | :---------------------------------------------------------------------- |
| `effect` | `EffectCallback` | Imperative function that can return a cleanup function                  |
| `deps?`  | `DependencyList` | If present, effect will only activate if the values in the list change. |

#### Returns

`void`

#### Defined in

node_modules/@types/react/index.d.ts:1083
