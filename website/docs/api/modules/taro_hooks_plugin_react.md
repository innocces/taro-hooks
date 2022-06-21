---
id: 'taro_hooks_plugin_react'
title: 'Module: @taro-hooks/plugin-react'
sidebar_label: '@taro-hooks/plugin-react'
sidebar_position: 0
custom_edit_url: null
---

## Functions

### taroCreateContext

▸ **taroCreateContext**<`T`\>(`defaultValue`): `Context`<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name           | Type |
| :------------- | :--- |
| `defaultValue` | `T`  |

#### Returns

`Context`<`T`\>

#### Defined in

[packages/plugin-react/src/runtime/hooks.ts:31](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-react/src/runtime/hooks.ts#L31)

---

### useTaroCallback

▸ **useTaroCallback**<`T`\>(`callback`, `deps`): `T`

#### Type parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `T`  | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name       | Type             |
| :--------- | :--------------- |
| `callback` | `T`              |
| `deps`     | `DependencyList` |

#### Returns

`T`

#### Defined in

[packages/plugin-react/src/runtime/hooks.ts:19](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-react/src/runtime/hooks.ts#L19)

---

### useTaroContext

▸ **useTaroContext**<`T`\>(`context`): `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name      | Type            |
| :-------- | :-------------- |
| `context` | `Context`<`T`\> |

#### Returns

`T`

#### Defined in

[packages/plugin-react/src/runtime/hooks.ts:21](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-react/src/runtime/hooks.ts#L21)

---

### useTaroEffect

▸ **useTaroEffect**(`effect`, `deps?`): `void`

#### Parameters

| Name     | Type             |
| :------- | :--------------- |
| `effect` | `EffectCallback` |
| `deps?`  | `DependencyList` |

#### Returns

`void`

#### Defined in

[packages/plugin-react/src/runtime/hooks.ts:13](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-react/src/runtime/hooks.ts#L13)

---

### useTaroLayoutEffect

▸ **useTaroLayoutEffect**(`effect`, `deps?`): `void`

#### Parameters

| Name     | Type             |
| :------- | :--------------- |
| `effect` | `EffectCallback` |
| `deps?`  | `DependencyList` |

#### Returns

`void`

#### Defined in

[packages/plugin-react/src/runtime/hooks.ts:29](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-react/src/runtime/hooks.ts#L29)

---

### useTaroMemo

▸ **useTaroMemo**<`T`\>(`factory`, `deps`): `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name      | Type                            |
| :-------- | :------------------------------ |
| `factory` | () => `T`                       |
| `deps`    | `undefined` \| `DependencyList` |

#### Returns

`T`

#### Defined in

[packages/plugin-react/src/runtime/hooks.ts:27](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-react/src/runtime/hooks.ts#L27)

---

### useTaroReducer

▸ **useTaroReducer**<`R`, `I`\>(`reducer`, `initializerArg`, `initializer`): [`ReducerStateWithoutAction`<`R`\>, `DispatchWithoutAction`]

#### Type parameters

| Name | Type                                   |
| :--- | :------------------------------------- |
| `R`  | extends `ReducerWithoutAction`<`any`\> |
| `I`  | `I`                                    |

#### Parameters

| Name             | Type                                              |
| :--------------- | :------------------------------------------------ |
| `reducer`        | `R`                                               |
| `initializerArg` | `I`                                               |
| `initializer`    | (`arg`: `I`) => `ReducerStateWithoutAction`<`R`\> |

#### Returns

[`ReducerStateWithoutAction`<`R`\>, `DispatchWithoutAction`]

#### Defined in

[packages/plugin-react/src/runtime/hooks.ts:23](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-react/src/runtime/hooks.ts#L23)

▸ **useTaroReducer**<`R`\>(`reducer`, `initializerArg`, `initializer?`): [`ReducerStateWithoutAction`<`R`\>, `DispatchWithoutAction`]

#### Type parameters

| Name | Type                                   |
| :--- | :------------------------------------- |
| `R`  | extends `ReducerWithoutAction`<`any`\> |

#### Parameters

| Name             | Type                              |
| :--------------- | :-------------------------------- |
| `reducer`        | `R`                               |
| `initializerArg` | `ReducerStateWithoutAction`<`R`\> |
| `initializer?`   | `undefined`                       |

#### Returns

[`ReducerStateWithoutAction`<`R`\>, `DispatchWithoutAction`]

#### Defined in

[packages/plugin-react/src/runtime/hooks.ts:23](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-react/src/runtime/hooks.ts#L23)

▸ **useTaroReducer**<`R`, `I`\>(`reducer`, `initializerArg`, `initializer`): [`ReducerState`<`R`\>, `Dispatch`<`ReducerAction`<`R`\>\>]

#### Type parameters

| Name | Type                             |
| :--- | :------------------------------- |
| `R`  | extends `Reducer`<`any`, `any`\> |
| `I`  | `I`                              |

#### Parameters

| Name             | Type                                                        |
| :--------------- | :---------------------------------------------------------- |
| `reducer`        | `R`                                                         |
| `initializerArg` | `I` & `ReducerState`<`R`\>                                  |
| `initializer`    | (`arg`: `I` & `ReducerState`<`R`\>) => `ReducerState`<`R`\> |

#### Returns

[`ReducerState`<`R`\>, `Dispatch`<`ReducerAction`<`R`\>\>]

#### Defined in

[packages/plugin-react/src/runtime/hooks.ts:23](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-react/src/runtime/hooks.ts#L23)

▸ **useTaroReducer**<`R`, `I`\>(`reducer`, `initializerArg`, `initializer`): [`ReducerState`<`R`\>, `Dispatch`<`ReducerAction`<`R`\>\>]

#### Type parameters

| Name | Type                             |
| :--- | :------------------------------- |
| `R`  | extends `Reducer`<`any`, `any`\> |
| `I`  | `I`                              |

#### Parameters

| Name             | Type                                 |
| :--------------- | :----------------------------------- |
| `reducer`        | `R`                                  |
| `initializerArg` | `I`                                  |
| `initializer`    | (`arg`: `I`) => `ReducerState`<`R`\> |

#### Returns

[`ReducerState`<`R`\>, `Dispatch`<`ReducerAction`<`R`\>\>]

#### Defined in

[packages/plugin-react/src/runtime/hooks.ts:23](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-react/src/runtime/hooks.ts#L23)

▸ **useTaroReducer**<`R`\>(`reducer`, `initialState`, `initializer?`): [`ReducerState`<`R`\>, `Dispatch`<`ReducerAction`<`R`\>\>]

#### Type parameters

| Name | Type                             |
| :--- | :------------------------------- |
| `R`  | extends `Reducer`<`any`, `any`\> |

#### Parameters

| Name           | Type                 |
| :------------- | :------------------- |
| `reducer`      | `R`                  |
| `initialState` | `ReducerState`<`R`\> |
| `initializer?` | `undefined`          |

#### Returns

[`ReducerState`<`R`\>, `Dispatch`<`ReducerAction`<`R`\>\>]

#### Defined in

[packages/plugin-react/src/runtime/hooks.ts:23](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-react/src/runtime/hooks.ts#L23)

---

### useTaroRef

▸ **useTaroRef**<`T`\>(`initialValue`): `MutableRefObject`<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name           | Type |
| :------------- | :--- |
| `initialValue` | `T`  |

#### Returns

`MutableRefObject`<`T`\>

#### Defined in

[packages/plugin-react/src/runtime/hooks.ts:25](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-react/src/runtime/hooks.ts#L25)

▸ **useTaroRef**<`T`\>(`initialValue`): `RefObject`<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name           | Type          |
| :------------- | :------------ |
| `initialValue` | `null` \| `T` |

#### Returns

`RefObject`<`T`\>

#### Defined in

[packages/plugin-react/src/runtime/hooks.ts:25](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-react/src/runtime/hooks.ts#L25)

▸ **useTaroRef**<`T`\>(): `MutableRefObject`<`T` \| `undefined`\>

#### Type parameters

| Name | Type        |
| :--- | :---------- |
| `T`  | `undefined` |

#### Returns

`MutableRefObject`<`T` \| `undefined`\>

#### Defined in

[packages/plugin-react/src/runtime/hooks.ts:25](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-react/src/runtime/hooks.ts#L25)

---

### useTaroState

▸ **useTaroState**<`S`\>(`initialState`): [`S`, `Dispatch`<`SetStateAction`<`S`\>\>]

#### Type parameters

| Name |
| :--- |
| `S`  |

#### Parameters

| Name           | Type             |
| :------------- | :--------------- |
| `initialState` | `S` \| () => `S` |

#### Returns

[`S`, `Dispatch`<`SetStateAction`<`S`\>\>]

#### Defined in

[packages/plugin-react/src/runtime/hooks.ts:17](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-react/src/runtime/hooks.ts#L17)

▸ **useTaroState**<`S`\>(): [`S` \| `undefined`, `Dispatch`<`SetStateAction`<`S` \| `undefined`\>\>]

#### Type parameters

| Name | Type        |
| :--- | :---------- |
| `S`  | `undefined` |

#### Returns

[`S` \| `undefined`, `Dispatch`<`SetStateAction`<`S` \| `undefined`\>\>]

#### Defined in

[packages/plugin-react/src/runtime/hooks.ts:17](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-react/src/runtime/hooks.ts#L17)

---

### useWatchEffect

▸ **useWatchEffect**(`effect`, `deps?`): `void`

#### Parameters

| Name     | Type             |
| :------- | :--------------- |
| `effect` | `EffectCallback` |
| `deps?`  | `DependencyList` |

#### Returns

`void`

#### Defined in

[packages/plugin-react/src/runtime/hooks.ts:15](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-react/src/runtime/hooks.ts#L15)
