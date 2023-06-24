Be sure to have pnpm and node installed

- `pnpm@8`
- `node>=16`

## Script

```bash
$ git clone git@github.com:innocces/taro-hooks.git
$ cd taro-hooks
# install deps
$ pnpm install
# compile packages
$ pnpm run bootstrap
# dev docs
$ pnpm run dev:docs
# start previewer of h5
$ pnpm run dev:demos:h5
# start previewer of wechat
$ pnpm run dev:demos:weapp
# start single package
$ pnpm -F taro-hooks run build
```

open browser - [http://localhost:3000](http://localhost:3000)  
open Vue preview - [http://localhost:10086](http://0.0.0.0:10086)  
open React preview - [http://localhost:12557](http://localhost:12557)  
For more details on contributions see[Official Documents](https://next-version-taro-hooks.vercel.app)
