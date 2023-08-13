# Change Log

## 2.0.5

### Patch Changes

- support auto-import plugin
- Updated dependencies
  - @taro-hooks/ahooks@2.0.5
  - @taro-hooks/compressorjs@2.0.5
  - @taro-hooks/shared@2.0.5
  - @taro-hooks/use-request@2.0.5

## 2.0.4

### Patch Changes

- support preact & nerv check framework
- Updated dependencies
  - @taro-hooks/compressorjs@2.0.4
  - @taro-hooks/use-request@2.0.4
  - @taro-hooks/shared@2.0.4

## 2.0.3

### Patch Changes

- remove vue & react peer deps
- Updated dependencies
  - @taro-hooks/compressorjs@2.0.3
  - @taro-hooks/shared@2.0.3
  - @taro-hooks/use-request@2.0.3

## 2.0.2

### Patch Changes

- chore addon version check postinatll script
- Updated dependencies
  - @taro-hooks/compressorjs@2.0.2
  - @taro-hooks/shared@2.0.2
  - @taro-hooks/use-request@2.0.2

## 2.0.1

### Patch Changes

- fix taro namespace missing error
- Updated dependencies
  - @taro-hooks/compressorjs@2.0.1
  - @taro-hooks/shared@2.0.1
  - @taro-hooks/use-request@2.0.1

## 2.0.0

### Major Changes

- major version of 2

### Patch Changes

- Updated dependencies
  - @taro-hooks/compressorjs@2.0.0
  - @taro-hooks/shared@2.0.0
  - @taro-hooks/use-request@2.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.5.6](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.5.5...taro-hooks-v1.5.6) (2022-03-22)

### Bug Fixes

- **compressorjs:** update compressor-global to 1.1.2 to fix toBlob error ([387e898](https://github.com/innocces/taro-hooks/commit/387e898ec8d9bc32e33d92efd95e1684c7394887))

## [1.5.5](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.5.4...taro-hooks-v1.5.5) (2022-03-22)

### Bug Fixes

- **deps:** replace deps import error ([c42d839](https://github.com/innocces/taro-hooks/commit/c42d8390fa18cc4f8706e76c42e9ac6ace24f050))

## [1.5.4](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.5.3...taro-hooks-v1.5.4) (2022-03-21)

### Bug Fixes

- **useimage:** fix compressor track due to toBlob error ([f320557](https://github.com/innocces/taro-hooks/commit/f3205570fbe9f5936a60871c70d2e8f0c558c62e))

### Features

- **usetoast:** useToast add error type & update qr ([13df359](https://github.com/innocces/taro-hooks/commit/13df359966f3160eff67ad3c26afbe9af9676b54))

## [1.5.3](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.5.2...taro-hooks-v1.5.3) (2022-02-12)

### Bug Fixes

- **#17:** fix useEvent return type error ([e3e7a8c](https://github.com/innocces/taro-hooks/commit/e3e7a8cc139164fc62a8fc34a39c053b994ce0d5))
- **env_type:** fix useEnv ENV_TYPE error ([cb1f8d1](https://github.com/innocces/taro-hooks/commit/cb1f8d1e6f8ba66e0db973ac04f7a2297e514e97))

### Performance Improvements

- **bump version:** bump taro version to 3.3.14 & remove runtime + build privite packages ([f7c183d](https://github.com/innocces/taro-hooks/commit/f7c183dc8309ff0581fdac99e079215a62ae7d16))

## [1.5.2](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.5.1...taro-hooks-v1.5.2) (2022-02-09)

### Features

- **uselatest & useunmount:** remove deps ahooks, add useLatest & useUnmount ([32708ff](https://github.com/innocces/taro-hooks/commit/32708fffecadc4ff7a1ea0f27fac376278b4ed3a))

## [1.5.1](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.5.0...taro-hooks-v1.5.1) (2021-12-26)

### Bug Fixes

- **lodash:** use lodash-wechat instand lodash for globalThis error ([58dea32](https://github.com/innocces/taro-hooks/commit/58dea32ac59e12dcab0e5a8f6d0e67bb3cd2bbc3))

### Features

- **usethrottle & usedebounce:** add useThrottle & useDebounce hooks & demo ([d4cbeda](https://github.com/innocces/taro-hooks/commit/d4cbedaf5f8d83e3f15f299992954923a76747b1))

# [1.5.0](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.4.8...taro-hooks-v1.5.0) (2021-11-01)

### Features

- **useble:** add useBLE ([9d60c08](https://github.com/innocces/taro-hooks/commit/9d60c08e9b16515ec6a4ac65146fbf6545de6d45))
- **useble:** add useEffect code for useBLE ([615a23a](https://github.com/innocces/taro-hooks/commit/615a23a316a0d3e024122f81d2898c7f5857ef38))
- **usebluetooth:** add doc and type for useBluetooth ([7f1b80b](https://github.com/innocces/taro-hooks/commit/7f1b80b9ef3f3d7a2ef5b9fce581c11658d65ffe))
- **usebluetooth:** add useBluetooth ([931d7f4](https://github.com/innocces/taro-hooks/commit/931d7f47495e757eb03423d1f8eff53774141a94))
- **usefrom:** add useFrom hook ([248157d](https://github.com/innocces/taro-hooks/commit/248157d60656a985757b4608623dd429c62b4905))
- **userouter:** add from info for useRouter ([c2631f6](https://github.com/innocces/taro-hooks/commit/c2631f69f6afd044544a3b6126736d16f0da1940))

## [1.4.8](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.4.7...taro-hooks-v1.4.8) (2021-10-14)

### Bug Fixes

- **hook type:** fix default value of some hook instance ([28b96f8](https://github.com/innocces/taro-hooks/commit/28b96f82c020c4dcec5f1c446765e915a35c4c8e))
- **usemenubuttonboundingclientrect:** fix typeof useMenuButtonBoundingClientRect result ([a25d76c](https://github.com/innocces/taro-hooks/commit/a25d76cc14dc45639fbdcb73917d58fc7733a20b))
- **usesysteminfo:** fix typeof useSystemInfo result ([db30a1b](https://github.com/innocces/taro-hooks/commit/db30a1b4ac3099b8dfd06b6077f0c89ecc51ff8a))
- **useupdatemanager:** fix return instance of useUpdateManager ([92d99ca](https://github.com/innocces/taro-hooks/commit/92d99ca691277a5006e87c801d44c97766afb1c0))

### Performance Improvements

- **share & default:** add share func for request feature & fix some default of hooks ([879ca4b](https://github.com/innocces/taro-hooks/commit/879ca4bcaacdadec84d14cd33e8e63898905dd8f))

## [1.4.7](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.4.6...taro-hooks-v1.4.7) (2021-10-06)

### Bug Fixes

- **usemodal:** fix useModal callback type ([d1e14a7](https://github.com/innocces/taro-hooks/commit/d1e14a7f73dda098ec062b9c3c3173f1eec404f8))

## [1.4.6](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.4.5...taro-hooks-v1.4.6) (2021-09-29)

### Features

- **faq & useapp:** add useApp hooks & faq of useSelectorQuery ([3e0ebea](https://github.com/innocces/taro-hooks/commit/3e0ebeaafffb1279532f25996b69221a3398aa51))
- **usepage:** add usePage hook & useSelectorQuery method scope optional ([35b8ab7](https://github.com/innocces/taro-hooks/commit/35b8ab72b580688292bdb33d06dc6d3530f1844f))

## [1.4.5](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.4.4...taro-hooks-v1.4.5) (2021-09-28)

### Bug Fixes

- **useimage:** fix useImage choose function params partial ([cf7be5f](https://github.com/innocces/taro-hooks/commit/cf7be5f9832e6744d4a1baf5211212b1bb27d33c))

## [1.4.4](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.4.3...taro-hooks-v1.4.4) (2021-09-25)

**Note:** Version bump only for package taro-hooks

## [1.4.3](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.4.2...taro-hooks-v1.4.3) (2021-09-25)

**Note:** Version bump only for package taro-hooks

## [1.4.2](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.4.1...taro-hooks-v1.4.2) (2021-09-25)

**Note:** Version bump only for package taro-hooks

## [1.4.1](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.4.0...taro-hooks-v1.4.1) (2021-09-24)

### Bug Fixes

- **add create inner:** useWebAudioImplement option add ([9e1254c](https://github.com/innocces/taro-hooks/commit/9e1254c527f6bd1d3ceba24f7338d3dd69242d51))
- **useaudio option:** add option set root for context ([b63567f](https://github.com/innocces/taro-hooks/commit/b63567feec61567e90ccc19c400b48e4a68dad0d))

# [1.4.0](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.3.2...taro-hooks-v1.4.0) (2021-09-21)

### Features

- **usebackground:** add useBackground hook ([5f43b0c](https://github.com/innocces/taro-hooks/commit/5f43b0cf66c9d09cfbd63063e08344b6152ebc41))
- **usechooseaddress:** add useChooseAddress hook ([7187d95](https://github.com/innocces/taro-hooks/commit/7187d9587ff5174d038801e43361e81a7fb30db2))
- **useinvoice:** add useInvoice hooks ([c293b1e](https://github.com/innocces/taro-hooks/commit/c293b1e801e5d810b63a3b080654079732eb4460))
- **usemanualpulldownrefresh:** add useManualPullDownRefresh hook ([9b1d18b](https://github.com/innocces/taro-hooks/commit/9b1d18b1914cf275fde4a707d8ce1dd34ee154b7))
- **usemenubuttonboundingclientrect:** add useMenuButtonBoundingClientRect hook ([5c7cde6](https://github.com/innocces/taro-hooks/commit/5c7cde69ef6be79a3699cdb39fa436a363f189b7))
- **userequestsubscribemessage:** add useRequestSubscribeMessage hook & faq for hooks version ([ba3ea2f](https://github.com/innocces/taro-hooks/commit/ba3ea2f583b00d443aad31cab59e60151e1ed873))
- **usetabbar:** add useTabBar hook ([d46240c](https://github.com/innocces/taro-hooks/commit/d46240c915e18ce214070cb2aec005b01029f07e))
- **usetopbartext:** add useTopBarText hook ([cd22332](https://github.com/innocces/taro-hooks/commit/cd22332a8f8fffee5a1ea0b81214b219011afeaa))
- **usewerun:** add useWeRun hook ([951826f](https://github.com/innocces/taro-hooks/commit/951826f4f423d44661be6d5eddca6e693ba68dbd))

## [1.3.2](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.3.1...taro-hooks-v1.3.2) (2021-09-15)

### Bug Fixes

- **type:** fix type of feedback hooks ([4728379](https://github.com/innocces/taro-hooks/commit/4728379aabadc58b8c3b166e65d036d397612369))

## [1.3.1](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.3.0...taro-hooks-v1.3.1) (2021-09-13)

### Bug Fixes

- **build type:** fix build type for namespace error ([05a285b](https://github.com/innocces/taro-hooks/commit/05a285b8d4761bee2c55a9dd7ccb71d53223acfc))
- **deps of hooks:** fix deps to devDeps for hooks force version conflict ([fd72923](https://github.com/innocces/taro-hooks/commit/fd72923453619c1e9c0a8964b36ad0efd221f1d5))

# [1.3.0](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.2.0...taro-hooks-v1.3.0) (2021-09-11)

### Features

- **useaccountinfo:** add useAccountInfo hooks and demo ([cd8aa61](https://github.com/innocces/taro-hooks/commit/cd8aa61950a2666383cbe19ef91303e61303862f))
- **useauthorize:** add useAuthorize hook ([c0ec57c](https://github.com/innocces/taro-hooks/commit/c0ec57c0359eee64926dc101dbdb2903d38e0f40))
- **uselogin & useuserinfo:** add useLogin, useUserInfo hooks and demo ([fa74d86](https://github.com/innocces/taro-hooks/commit/fa74d860c9627794678d1dc2498bb869b3b8e823))
- **usescancode:** add useScanCode hook ([1a55a65](https://github.com/innocces/taro-hooks/commit/1a55a659e9da63af6a9cbd80add0eb054d5878ee))

# [1.2.0](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.1.1...taro-hooks-v1.2.0) (2021-09-06)

### Features

- **taro.ver & demo:** update taro version to 3.3.6(latest); improvment some demo page; ([547080a](https://github.com/innocces/taro-hooks/commit/547080a7adc5c9cbc0ba55c0a046378d29f21868))
- **useupdatemanager:** improve useUpdateManager behavior and app index check update ([411684c](https://github.com/innocces/taro-hooks/commit/411684ceb83c09b7f5dea9d647c8e5899ca9bbb5))

## [1.1.1](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.1.0...taro-hooks-v1.1.1) (2021-09-01)

### Bug Fixes

- **usevibrate interval mode:** fix useVibrate interval mode error ([f99082f](https://github.com/innocces/taro-hooks/commit/f99082f3f60f31ad633860101eb66cb0ef9160f2))

# [1.1.0](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.0.2...taro-hooks-v1.1.0) (2021-08-19)

**Note:** Version bump only for package taro-hooks

## [1.0.2](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.0.1...taro-hooks-v1.0.2) (2021-08-16)

### Bug Fixes

- **usebattery:** fix useBattery ios level async problem ([5c3d937](https://github.com/innocces/taro-hooks/commit/5c3d9379dad538c1701f67e5ad970dda560c7713))
- **usevibrate:** fix useVibrate interval to auto close ([8e4808e](https://github.com/innocces/taro-hooks/commit/8e4808ecf5cede53b123a0d2a2ce3c2ee3638edf))

## [1.0.1](https://github.com/innocces/taro-hooks/compare/taro-hooks-v1.0.0...taro-hooks-v1.0.1) (2021-08-15)

### Features

- **contributors:** add contributors bot config ([a8365cd](https://github.com/innocces/taro-hooks/commit/a8365cd513a8b214c3e172934d2f6cddf4b13da1))

# 1.0.0 (2021-08-14)

### Bug Fixes

- **h5 complier:** fix h5 build problem ([17dcc4e](https://github.com/innocces/taro-hooks/commit/17dcc4e4a2ded24b349eae452ee01a027d432fa7))
- **import useimage:** taro api import type error ([7fbbb10](https://github.com/innocces/taro-hooks/commit/7fbbb1058da807b5e6736859ac071b6cb674c1fb))
- **polyfill:** replace set to lodash.uniq ([616854b](https://github.com/innocces/taro-hooks/commit/616854b7a6425ed29fec6f4bb84ea6083643bd49))
- **usecamera docs:** fix useCamera docs mistake ([7a1c1c4](https://github.com/innocces/taro-hooks/commit/7a1c1c47d3955416daece3cfa3c062ab8471a260))
- **uselocation type:** fix type error for build ([79a209b](https://github.com/innocces/taro-hooks/commit/79a209b3acff804db22b1d7cb9b83ba9f58ac687))

### Features

- **feedback:** add feedback hooks: useModal useToast useLoading useActionSheet ([2f02bb4](https://github.com/innocces/taro-hooks/commit/2f02bb4b21c0270b4d447021a493207b73efbddf))
- **systeminfo & demo:** add feat useSystemInfo; change markdown ([de980a4](https://github.com/innocces/taro-hooks/commit/de980a4011c529e957b5cc68e38cc9448ee1c75e))
- **template:** add issue template ([8ac412c](https://github.com/innocces/taro-hooks/commit/8ac412c90f71420b8b57789f294a09f7d23bd1ac))
- **useaudio:** add useAudio hook ([0ba3185](https://github.com/innocces/taro-hooks/commit/0ba3185d6399dabaeed85efe0dfcd672fdd0b4ee))
- **usebase64toarraybuffer:** add useBase64ToArrayBuffer hook and demo ([8b75b3d](https://github.com/innocces/taro-hooks/commit/8b75b3d41e982b5180ff8de929f9853e3044b94d))
- **usebattery:** add useBattery hook ([08596d3](https://github.com/innocces/taro-hooks/commit/08596d3ea3516d045df0edfd1266f55f975a9a71))
- **usebrightness:** add useBrightness hook ([3c8a6b6](https://github.com/innocces/taro-hooks/commit/3c8a6b6a5993dc63f708a3872963b4ae00062ed4))
- **usecamera:** add useCamera hook ([e6fbe56](https://github.com/innocces/taro-hooks/commit/e6fbe5629532d880b0473883fbb6c91ebcabd148))
- **useclipboard & useroute:** add useClipboardData and useRouter, add tabbar about ([3b0f442](https://github.com/innocces/taro-hooks/commit/3b0f442887f128ec4e092e8229368c840fb8d580))
- **useenv:** 增加 useEnv, 初始化首页 demo 样式 ([ae5ed80](https://github.com/innocces/taro-hooks/commit/ae5ed80b7c12e7de8e8cc54776419acc7bdbcfae))
- **useevent & useupdatemanager:** add useEvent and useUpdateManager ([27240fd](https://github.com/innocces/taro-hooks/commit/27240fd47b01c9094f8e572cc0952797da6bff17))
- **useevent:** make add and clear action ok ([57e0537](https://github.com/innocces/taro-hooks/commit/57e05379e52fd085cd9832a79446591621f50758))
- **usefile:** add useFile hooks ([774458a](https://github.com/innocces/taro-hooks/commit/774458ad8baaa6be506f5e68dfce09981c575703))
- **usefile:** useFile docs ([3fe8b5f](https://github.com/innocces/taro-hooks/commit/3fe8b5f96ef17000dc719c95e29a038460acd708))
- **useimage:** add useImage hook ([53b5dfd](https://github.com/innocces/taro-hooks/commit/53b5dfdeb074a2f22b36970ffc8cc7204e300a9b))
- **uselaunchoptions:** add useLaunchOptions hooks ([13c4051](https://github.com/innocces/taro-hooks/commit/13c4051ec413028f43d8ee0594984549b69865b2))
- **uselocation:** add useLocation hook ([509acb1](https://github.com/innocces/taro-hooks/commit/509acb10179a38f4c866f2e73206d8919e76d99b))
- **usemap:** add useMap hooks and doc ([9b71ea3](https://github.com/innocces/taro-hooks/commit/9b71ea39384cce2695762a0560103648b6dc6232))
- **usemotion & version:** 1. add useMotion hook; 2. update taro to 3.3.1 ([cccfd44](https://github.com/innocces/taro-hooks/commit/cccfd441fd11709b75a6ea07223cc52bfbf70527))
- **usenavigationbar:** add useNavigationBar hook ([c23a408](https://github.com/innocces/taro-hooks/commit/c23a408becd969a9f341a1440941e6c89b4b21cb))
- **usenetwork/useonline/usevisible:** add useNetworkType useOnline useVisible hooks ([f58e54e](https://github.com/innocces/taro-hooks/commit/f58e54ebb1931a949ba6beef61f2985519dea4d6))
- **userecord & useaudio:** translate useAudio to useRecord, add new useAudio hook ([09b8cf7](https://github.com/innocces/taro-hooks/commit/09b8cf7ea78a814a013e5de406f0f024df712e04))
- **useselectorquery:** add useSelectorQuery hook ([8621183](https://github.com/innocces/taro-hooks/commit/862118316aaf1f50cc961dac8f39b215d167149d))
- **usestorage:** add useStorage hook ([df904e0](https://github.com/innocces/taro-hooks/commit/df904e0a5be73ce28160ad249c16ea40f41e1a7d))
- **useupdatemanager:** improve iconfont, add useUpdateManager hook ([4402282](https://github.com/innocces/taro-hooks/commit/44022823756258d1d28814755c2788e053ab1e64))
- **usevibrate:** add useVibrate hook ([512d159](https://github.com/innocces/taro-hooks/commit/512d159cc601c9fe789ed562eb571e9b2152b71f))
- **usevideo:** add useVideo hook ([585e18b](https://github.com/innocces/taro-hooks/commit/585e18b749d5d2f22b35d9638107cb89ea3ac332))
- **weapp:** 增加 demo 整体样式,贴合 taro-ui ([04bf72b](https://github.com/innocces/taro-hooks/commit/04bf72b26b5f8f28597b04fb91119e5c3427f4e8))

### Reverts

- Revert "chore(release): publish v1.0.0" ([cc3eca8](https://github.com/innocces/taro-hooks/commit/cc3eca8877308ee3c11a8a861e318df558f9fcb2))
- Revert "chore(release): publish %s" ([642f275](https://github.com/innocces/taro-hooks/commit/642f27543b17618cc4c25118f13d8bde36761e6c))
