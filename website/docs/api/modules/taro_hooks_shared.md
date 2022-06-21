---
id: 'taro_hooks_shared'
title: 'Module: @taro-hooks/shared'
sidebar_label: '@taro-hooks/shared'
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [MutableRefObject](../interfaces/taro_hooks_shared.MutableRefObject.md)

## Type Aliases

### DependencyList

Ƭ **DependencyList**: `ReadonlyArray`<`any`\>

#### Defined in

[packages/shared/src/type.ts:1](https://github.com/innocces/taro-hooks/blob/next/packages/shared/src/type.ts#L1)

---

### HooksLabel

Ƭ **HooksLabel**: `"基础"` \| `"设备"` \| `"环境判断"` \| `"操作反馈"` \| `"布局"` \| `"媒体"` \| `"网络"` \| `"小程序"`

#### Defined in

[packages/shared/src/constant.ts:19](https://github.com/innocces/taro-hooks/blob/next/packages/shared/src/constant.ts#L19)

---

### HooksPath

Ƭ **HooksPath**: `"basic"` \| `"device"` \| `"env"` \| `"feedback"` \| `"layout"` \| `"media"` \| `"network"` \| `"wechat"`

#### Defined in

[packages/shared/src/constant.ts:9](https://github.com/innocces/taro-hooks/blob/next/packages/shared/src/constant.ts#L9)

## Variables

### FRAMEWORK

• `Const` **FRAMEWORK**: `"vue"` \| `"react"`

#### Defined in

[packages/shared/src/constant.ts:6](https://github.com/innocces/taro-hooks/blob/next/packages/shared/src/constant.ts#L6)

---

### INJECTKEY

• `Const` **INJECTKEY**: `"$$inject"`

#### Defined in

[packages/shared/src/constant.ts:3](https://github.com/innocces/taro-hooks/blob/next/packages/shared/src/constant.ts#L3)

---

### PATH2LABEL

• `Const` **PATH2LABEL**: `Record`<[`HooksPath`](taro_hooks_shared.md#hookspath), [`HooksLabel`](taro_hooks_shared.md#hookslabel)\>

#### Defined in

[packages/shared/src/constant.ts:28](https://github.com/innocces/taro-hooks/blob/next/packages/shared/src/constant.ts#L28)

---

### PREFIX

• `Const` **PREFIX**: `"🎮[taro-hooks]"`

#### Defined in

[packages/shared/src/constant.ts:1](https://github.com/innocces/taro-hooks/blob/next/packages/shared/src/constant.ts#L1)

## Functions

### escapeState

▸ **escapeState**(`state`): `any`

due to useState vue.ver use customRef to simulate. so need auto release value to caculate

#### Parameters

| Name    | Type  | Description |
| :------ | :---- | :---------- |
| `state` | `any` | check state |

#### Returns

`any`

#### Defined in

[packages/shared/src/shims.ts:11](https://github.com/innocces/taro-hooks/blob/next/packages/shared/src/shims.ts#L11)

---

### isBoolean

▸ **isBoolean**(`value`): value is boolean

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `unknown` |

#### Returns

value is boolean

#### Defined in

[packages/shared/src/helper.ts:8](https://github.com/innocces/taro-hooks/blob/next/packages/shared/src/helper.ts#L8)

---

### isFunction

▸ **isFunction**(`value`): value is Function

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `unknown` |

#### Returns

value is Function

#### Defined in

[packages/shared/src/helper.ts:3](https://github.com/innocces/taro-hooks/blob/next/packages/shared/src/helper.ts#L3)

---

### isNumber

▸ **isNumber**(`value`): value is number

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `unknown` |

#### Returns

value is number

#### Defined in

[packages/shared/src/helper.ts:10](https://github.com/innocces/taro-hooks/blob/next/packages/shared/src/helper.ts#L10)

---

### isObject

▸ **isObject**(`value`): value is Record<any, any\>

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `unknown` |

#### Returns

value is Record<any, any\>

#### Defined in

[packages/shared/src/helper.ts:1](https://github.com/innocces/taro-hooks/blob/next/packages/shared/src/helper.ts#L1)

---

### isString

▸ **isString**(`value`): value is string

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `unknown` |

#### Returns

value is string

#### Defined in

[packages/shared/src/helper.ts:6](https://github.com/innocces/taro-hooks/blob/next/packages/shared/src/helper.ts#L6)

---

### isUndef

▸ **isUndef**(`value`): value is undefined

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `unknown` |

#### Returns

value is undefined

#### Defined in

[packages/shared/src/helper.ts:12](https://github.com/innocces/taro-hooks/blob/next/packages/shared/src/helper.ts#L12)

---

### log

▸ **log**(...`args`): `void`

#### Parameters

| Name      | Type        |
| :-------- | :---------- |
| `...args` | `unknown`[] |

#### Returns

`void`

#### Defined in

[packages/shared/src/log.ts:17](https://github.com/innocces/taro-hooks/blob/next/packages/shared/src/log.ts#L17)

---

### logCtor

▸ **logCtor**(`style?`): (...`args`: `unknown`[]) => `void`

#### Parameters

| Name    | Type     | Default value |
| :------ | :------- | :------------ |
| `style` | `string` | `''`          |

#### Returns

`fn`

▸ (...`args`): `void`

##### Parameters

| Name      | Type        |
| :-------- | :---------- |
| `...args` | `unknown`[] |

##### Returns

`void`

#### Defined in

[packages/shared/src/log.ts:5](https://github.com/innocces/taro-hooks/blob/next/packages/shared/src/log.ts#L5)

---

### logError

▸ **logError**(...`args`): `void`

#### Parameters

| Name      | Type        |
| :-------- | :---------- |
| `...args` | `unknown`[] |

#### Returns

`void`

#### Defined in

[packages/shared/src/log.ts:19](https://github.com/innocces/taro-hooks/blob/next/packages/shared/src/log.ts#L19)
