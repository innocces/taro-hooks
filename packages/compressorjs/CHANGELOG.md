# Changelog

## 2.0.6

### Patch Changes

- addon useKeyboard hook
- Updated dependencies
  - @taro-hooks/blueimp-canvas-to-blob@2.0.6

## 2.0.5

### Patch Changes

- support auto-import plugin
- Updated dependencies
  - @taro-hooks/blueimp-canvas-to-blob@2.0.5

## 2.0.4

### Patch Changes

- support preact & nerv check framework
- Updated dependencies
  - @taro-hooks/blueimp-canvas-to-blob@2.0.4

## 2.0.3

### Patch Changes

- remove vue & react peer deps
- Updated dependencies
  - @taro-hooks/blueimp-canvas-to-blob@2.0.3

## 2.0.2

### Patch Changes

- chore addon version check postinatll script
- Updated dependencies
  - @taro-hooks/blueimp-canvas-to-blob@2.0.2

## 2.0.1

### Patch Changes

- fix taro namespace missing error
- Updated dependencies
  - @taro-hooks/blueimp-canvas-to-blob@2.0.1

## 2.0.0

### Major Changes

- major version of 2

### Patch Changes

- Updated dependencies
  - @taro-hooks/blueimp-canvas-to-blob@2.0.0

## 1.1.1 (Oct 5, 2021)

- Fix loading error in Node.js (#137).

## 1.1.0 (Oct 1, 2021)

- Add 2 new options: `convertTypes` (#123) and `resize` (#130).
- Ignore the `strict` option when the `maxWidth/Height` option is set and its value is less than the natural width/height of the image (#134).
  .

## 1.0.7 (Nov 28, 2020)

- Update the built-in dependencies for better adaptability.

## 1.0.6 (Nov 23, 2019)

- Fix the `The operation is insecure` error (#57).

## 1.0.5 (Jan 23, 2019)

- Fix the wrong generated URL when the given image's orientation is 1 (#64).

## 1.0.4 (Jan 19, 2019)

- Regenerate the initial URL only when the orientation was reset for better performance (#63).

## 1.0.3 (Dec 18, 2018)

- Convert `TypedArray` to `Array` manually instead of using Babel helpers for better browser compatibility (#60).

## 1.0.2 (Dec 10, 2018)

- Upgrade `is-blob` to v2.
- Move `examples` folder to `docs` folder.

## 1.0.1 (Oct 24, 2018)

- Simplify the state of canvas for the `beforeDraw` option.
- Ignore range error when the image does not have correct Exif information.

## 1.0.0 (Oct 15, 2018)

- Supports 15 options: `beforeDraw`, `checkOrientation`, `convertSize`, `drew`, `error`, `height`, `maxHeight`, `maxWidth`, `mimeType`, `minHeight`, `minWidth`, `quality`, `strict`, `success` and `width`.
- Support 1 method: `abort`.
- Support to compress images of `File` or `Blob` object.
- Supports to translate Exif Orientation information.
