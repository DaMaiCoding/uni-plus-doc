# 1-简介

<div style="display: flex">

<span style="margin-right: 10px">

[![GitHub Repo stars](https://img.shields.io/github/stars/DaMaiCoding/uni-plus-doc?style=flat&logo=github)](https://github.com/DaMaiCoding/uni-plus-doc)

</span>

<span style="margin-right: 10px">

![Node](https://img.shields.io/badge/Node-%3E%3D18-green)

</span>

<span style="margin-right: 10px">

![Node](https://img.shields.io/badge/pnpm-%3E%3D7.30-green)

</span>

![Node](https://img.shields.io/badge/license-MIT-green)

</div>

一个 “超超超” 好用的 `uniapp` 开发框架：`uni-plus` 是由 `Uniapp + Vue3 + TS + Vite + Pinia + Unocss + WotUi` 驱动的跨端快速启动模板，使用 `VS Code` 开发，具有丰富的代码提示、错误校验、类型提醒、预先插件安装、代码片段等功能，而且拥有丰富的案例 `Echarts` 图表，表单分页，权限控制、接口请求优化等等（配备搭建教程）

`uni-plus` 提供了 `layout布局`、`请求封装`、`请求拦截`、`权限控制`、`原子CSS`、`路由拦截`、`路由自动导入` 等基础功能，并且配备了 `代码提示`、`代码高亮`、`代码格式化`、`commit 优化` 等开发环境配置，让您的开发更加高效、便捷

> `uni-plus` 目前支持 `H5`、`小程序` 和 `App`

## ⭐ Star History

Github Star History 实时地址：<https://star-history.com/#DaMaiCoding/uni-plus&Date>

![Star History Chart](https://api.star-history.com/svg?repos=DaMaiCoding/uni-plus&type=Date)

## 🎯 生成过程

`uni-plus` 由最初始的官方 `cli` 脚手架模板生成，执行的命令如下：

```shell
npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
```

`uniapp` 官方链接：[点击跳转 - quickstart-cli](https://uniapp.dcloud.net.cn/quickstart-cli.html)

在官方生成的项目基础上，增加了如下内容：

- 前端基础配置六件套
  - `prettier`
  - `eslint`
  - `stylelint`
  - `husky`
  - `lint-staged`
  - `commitlint`
- `UnoCSS`
- `UnoCSS Icons`
- Uni 插件
  - `vite-plugin-uni-pages`
  - `vite-plugin-uni-layouts`
  - `vite-plugin-uni-manifest`
  - `vite-plugin-uni-platform`
- `UI` 库（默认 `wot-ui`，支持替换其他 `UI库`)
- `pinia + pinia-plugin-persistedstate`
- 通用功能
  - 请求封装
  - 请求拦截
  - 路由拦截

## ✨ 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) - 就是快！
- 🔥 最新语法 - `<script lang="ts" setup>` 语法
- 🎨 [UnoCSS](https://unocss.dev/) - 高性能且极具灵活性的即时原子化 CSS 引擎
- 😃 [UnoCSS Icons](https://unocss.dev/presets/icons) & [icones](https://icones.js.org/) - 海量图标供你选择
- 🍍 [pinia](https://pinia.vuejs.org/) & [pinia-plugin-persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/) - 全端适配的全局数据管理
- 🗂 `uni.request` 请求封装 - 一键引入，快捷使用
- 📦 `路由拦截` 基础封装，支持扩展，快捷使用，拒绝黑盒
- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 无需引入
- 🎉 `v3` Code Snippets 加快你的页面生成
- 🦾 `Pritter` & `ESLint` & `Stylelint` & `husky` & `lint-staged` + `commitlint` - 保证代码质量
- 🌈 `TypeScript` 加持，同时又兼容 `js` ，同时满足不同人群
- 💡 `ES6 import` 自动排序，`css 属性` 自动排序，增强编码一致性
- 🖥 `多环境` 配置分开，想则怎么配置就怎么配置
