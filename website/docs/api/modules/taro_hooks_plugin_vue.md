---
id: 'taro_hooks_plugin_vue'
title: 'Module: @taro-hooks/plugin-vue'
sidebar_label: '@taro-hooks/plugin-vue'
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [IProviderProps](../interfaces/taro_hooks_plugin_vue.IProviderProps.md)

## Type Aliases

### BasicStateAction

Ƭ **BasicStateAction**<`S`\>: (`state`: `S`) => `S` \| `S`

#### Type parameters

| Name |
| :--- |
| `S`  |

#### Defined in

[packages/plugin-vue/src/runtime/hooks.ts:29](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-vue/src/runtime/hooks.ts#L29)

---

### Dispatch

Ƭ **Dispatch**<`A`\>: (`action`: `A`) => `void`

#### Type parameters

| Name |
| :--- |
| `A`  |

#### Type declaration

▸ (`action`): `void`

##### Parameters

| Name     | Type |
| :------- | :--- |
| `action` | `A`  |

##### Returns

`void`

#### Defined in

[packages/plugin-vue/src/runtime/hooks.ts:30](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-vue/src/runtime/hooks.ts#L30)

---

### VueContext

Ƭ **VueContext**<`T`\>: `Object`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Type declaration

| Name       | Type                                                                                                                         |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------- |
| `$$inject` | `T`                                                                                                                          |
| `Consumer` | `VNode`                                                                                                                      |
| `Provider` | `VNode`<`RendererNode`, `RendererElement`, [`IProviderProps`](../interfaces/taro_hooks_plugin_vue.IProviderProps.md)<`T`\>\> |

#### Defined in

[packages/plugin-vue/src/runtime/hooks.ts:355](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-vue/src/runtime/hooks.ts#L355)

## Functions

### taroCreateContext

▸ **taroCreateContext**<`T`\>(`defaultValue`): [`VueContext`](taro_hooks_plugin_vue.md#vuecontext)<`T`\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `T`  | `Record`<`string`, `any`\> |

#### Parameters

| Name           | Type |
| :------------- | :--- |
| `defaultValue` | `T`  |

#### Returns

[`VueContext`](taro_hooks_plugin_vue.md#vuecontext)<`T`\>

#### Defined in

[packages/plugin-vue/src/runtime/hooks.ts:445](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-vue/src/runtime/hooks.ts#L445)

---

### useTaroCallback

▸ **useTaroCallback**<`T`\>(`callback`, `deps`): `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name       | Type                            |
| :--------- | :------------------------------ |
| `callback` | `T`                             |
| `deps`     | `null` \| `void` \| `unknown`[] |

#### Returns

`T`

#### Defined in

[packages/plugin-vue/src/runtime/hooks.ts:433](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-vue/src/runtime/hooks.ts#L433)

---

### useTaroContext

▸ **useTaroContext**<`T`\>(`Context`): `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name      | Type                                                      |
| :-------- | :-------------------------------------------------------- |
| `Context` | [`VueContext`](taro_hooks_plugin_vue.md#vuecontext)<`T`\> |

#### Returns

`T`

#### Defined in

[packages/plugin-vue/src/runtime/hooks.ts:435](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-vue/src/runtime/hooks.ts#L435)

---

### useTaroEffect

▸ **useTaroEffect**(`create`, `deps`): `void`

#### Parameters

| Name     | Type                            |
| :------- | :------------------------------ |
| `create` | () => `void` \| () => `void`    |
| `deps`   | `null` \| `void` \| `unknown`[] |

#### Returns

`void`

#### Defined in

[packages/plugin-vue/src/runtime/hooks.ts:427](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-vue/src/runtime/hooks.ts#L427)

---

### useTaroLayoutEffect

▸ **useTaroLayoutEffect**(`create`, `deps`): `void`

#### Parameters

| Name     | Type                            |
| :------- | :------------------------------ |
| `create` | () => `void` \| () => `void`    |
| `deps`   | `null` \| `void` \| `unknown`[] |

#### Returns

`void`

#### Defined in

[packages/plugin-vue/src/runtime/hooks.ts:443](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-vue/src/runtime/hooks.ts#L443)

---

### useTaroMemo

▸ **useTaroMemo**<`T`\>(`create`, `deps`): `Ref`<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type                            |
| :------- | :------------------------------ |
| `create` | () => `T`                       |
| `deps`   | `null` \| `void` \| `unknown`[] |

#### Returns

`Ref`<`T`\>

#### Defined in

[packages/plugin-vue/src/runtime/hooks.ts:441](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-vue/src/runtime/hooks.ts#L441)

---

### useTaroReducer

▸ **useTaroReducer**<`S`, `A`\>(`reducer`, `initialArg`, `init?`): [`Ref`<`S`\>, [`Dispatch`](taro_hooks_plugin_vue.md#dispatch)<`A`\>]

#### Type parameters

| Name |
| :--- |
| `S`  |
| `A`  |

#### Parameters

| Name         | Type                                     |
| :----------- | :--------------------------------------- |
| `reducer`    | (`initState`: `S`, `action`: `A`) => `S` |
| `initialArg` | `S`                                      |
| `init?`      | (`initialArg`: `S`) => `S`               |

#### Returns

[`Ref`<`S`\>, [`Dispatch`](taro_hooks_plugin_vue.md#dispatch)<`A`\>]

#### Defined in

[packages/plugin-vue/src/runtime/hooks.ts:437](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-vue/src/runtime/hooks.ts#L437)

---

### useTaroRef

▸ **useTaroRef**<`T`\>(`initialValue`, `needEscape?`): `UnwrapRef`<{ `current`: `T` }\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name           | Type      |
| :------------- | :-------- |
| `initialValue` | `T`       |
| `needEscape?`  | `boolean` |

#### Returns

`UnwrapRef`<{ `current`: `T` }\>

#### Defined in

[packages/plugin-vue/src/runtime/hooks.ts:439](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-vue/src/runtime/hooks.ts#L439)

---

### useTaroState

▸ **useTaroState**<`S`\>(`initialState`): [`Ref`<`S`\>, [`Dispatch`](taro_hooks_plugin_vue.md#dispatch)<[`BasicStateAction`](taro_hooks_plugin_vue.md#basicstateaction)<`S`\>\>]

#### Type parameters

| Name |
| :--- |
| `S`  |

#### Parameters

| Name           | Type             |
| :------------- | :--------------- |
| `initialState` | `S` \| () => `S` |

#### Returns

[`Ref`<`S`\>, [`Dispatch`](taro_hooks_plugin_vue.md#dispatch)<[`BasicStateAction`](taro_hooks_plugin_vue.md#basicstateaction)<`S`\>\>]

#### Defined in

[packages/plugin-vue/src/runtime/hooks.ts:431](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-vue/src/runtime/hooks.ts#L431)

---

### useWatchEffect

▸ **useWatchEffect**(`create`): `void`

**`see`** https://next-version-taro-hooks.vercel.app/docs/quick/vue-useage

**`version`** taro-hooks >= 2.0.0

**`description`** deal sideEffect when deps(auto recieve) change, like mounted, updated, unmounted

#### Parameters

| Name     | Type                         | Description         |
| :------- | :--------------------------- | :------------------ |
| `create` | () => `void` \| () => `void` | sideEffect function |

#### Returns

`void`

#### Defined in

[packages/plugin-vue/src/runtime/hooks.ts:92](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-vue/src/runtime/hooks.ts#L92)
