---
id: 'taro_hooks_use_request'
title: 'Module: @taro-hooks/use-request'
sidebar_label: '@taro-hooks/use-request'
sidebar_position: 0
custom_edit_url: null
---

## Functions

### clearCache

▸ **clearCache**(`key?`): `void`

#### Parameters

| Name   | Type                   |
| :----- | :--------------------- |
| `key?` | `string` \| `string`[] |

#### Returns

`void`

#### Defined in

[packages/use-request/src/utils/cache.ts:44](https://github.com/innocces/taro-hooks/blob/next/packages/use-request/src/utils/cache.ts#L44)

---

### default

▸ **default**<`TData`, `TParams`\>(`service`, `options?`, `plugins?`): `Result`<`TData`, `TParams`\>

#### Type parameters

| Name      | Type            |
| :-------- | :-------------- |
| `TData`   | `TData`         |
| `TParams` | extends `any`[] |

#### Parameters

| Name       | Type                            |
| :--------- | :------------------------------ |
| `service`  | `Service`<`TData`, `TParams`\>  |
| `options?` | `Options`<`TData`, `TParams`\>  |
| `plugins?` | `Plugin`<`TData`, `TParams`\>[] |

#### Returns

`Result`<`TData`, `TParams`\>

#### Defined in

[packages/use-request/src/useRequest.ts:22](https://github.com/innocces/taro-hooks/blob/next/packages/use-request/src/useRequest.ts#L22)
