# 21-图片管理篇

## 背景

我们通常开发的时候，都会先使用本地路径进行开发，然后开发完成后，再把图片放到服务器上

最终再把图片本地路径改为图片远程地址

但是，这样就有个问题，就是我们每次更新页面啥的，都需要更改图片都需要替换一次图片路径，比较麻烦

能不能想个办法，可以根据不同环境动态切换图片路径地址？

答案是有的，先看下基本思路~

## 实现思路

考虑一个实现方式就是，采用动态 `src`，使用全局函数返回一个拼接路径

```typescript
<img class="w-160rpx h-160rpx" :src="$assets('@/static/local/logo.png')" />
```

`dev` 环境就不拼接网络路径，`build` 生产环境就加入 `imgBaseUrl`

## 封装

首先，我们的图片路径是根据当前环境决定的

所以，得先对不同环境增加一个配置图片的路径变量

我们简单点，只配置开发环境和生产环境变量

```typescript
// .env.development
VITE_SERVER_BASEURL = 'http://localhost:3000'
VITE_IMG_BASEURL = ''
```

```typescript
// .env.production
VITE_SERVER_BASEURL = 'http://localhost:3000'
VITE_IMG_BASEURL = 'https://raw.githubusercontent.com/DaMaiCoding/uni-plus/refs/heads/master/'
```

```typescript
// src/utils/assets.ts
const imgBaseUrl = (import.meta as any).env.VITE_IMG_BASEURL // 图片请求路径

function useImgAssets(filePath: string, { noCache = false } = {}) {
  // 去掉 filePath 前面的 @ 符号
  if (filePath.startsWith('@')) {
    filePath = 'src' + filePath.slice(1)
  }

  const fileUrl = `${imgBaseUrl}${filePath}`

  if (noCache) {
    return fileUrl + '?t=' + Date.now()
  } else {
    return fileUrl
  }
}

export const useAssets = useImgAssets

export default useImgAssets
```

```typescript
// src/utils/index.ts

// 模块统一导出
export * from './assets'
```

```typescript
// src/main.ts
import { createSSRApp } from 'vue'
import { useAssets } from './utils'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  app.config.globalProperties.$assets = useAssets
  return {
    app
  }
}
```

使用起来也简单，不同环境下会生成不同路径，如果你需要改成你自己公司的服务器图片地址

就换一下 `.env.development、.env.production` 的 `VITE_IMG_BASEURL`

```typescript
<img class="w-160rpx h-160rpx" :src="$assets('@/static/local/logo.png')" />
```

`pnpm dev:mp-weixin`

```typescript
<img class="w-160rpx h-160rpx" src="src/static/local/logo.png" />
```

`pnpm build:mp-weixin`

```typescript
<img class="w-160rpx h-160rpx" src="https://raw.githubusercontent.com/DaMaiCoding/uni-plus/refs/heads/master/src/static/local/logo.png" />
```

## 扩展

还有一个小问题，那就是这本地图片要怎么办？

是放到云端后删除呢？还是放在本地保留？

通常是本地保留一份，与代码同步到 git 上，然后云端再有一份，这样即使云端出现问题

也能及时使用本地的进行恢复

但是又会引出另一个问题，包体积太大微信小程序无法上传，怎么办？

这一部分可以看 "优化篇" 的上传优化进行解决
