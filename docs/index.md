---
layout: home

hero:
  name: "uni-plus"
  text: "这是一个 “超超超” 好用的 uniapp 开发框架"
  tagline: 不仅包含了 uniapp 的所有功能，还提供了请求封装、状态管理、权限校验、国际化、代码校验、组件库、文档等一整套解决方案
  image: 
    src: /logo.png
    alt: uni-plus
  actions:
    - theme: brand
      text: 起步 🚀
      link: /src/guide/1-introduction
    - theme: alt
      text: 项目地址 🗳️
      link: https://github.com/DaMaiCoding/uni-plus
    - theme: alt
      text: 演示地址 🔗
      link: https://damaicoding.github.io/uni-plus/#/
    - theme: alt
      text: 常见问题 🔍
      link: /src/guide/15-faq

features:
  - title: Vue3 + Vite4 + Pnpm 就是快
    icon: ⚡️
    details: Vue3 + Vite4 + Pnpm 最强组合，编写 uni-app 飞一般的感觉
    link: https://cn.vuejs.org
    linkText: 进入 Vue3 官网
  - title: 开箱即用的功能和组件
    icon: 📦
    details: pinia、API自动导入、请求拦截、路由拦截、权限校验、国际化、代码校验、组件库、字体图标、自定义 tabBar...
    link: /src/guide/1-introduction
    linkText: 去介绍章节看看吧
  - title: 精心配置的代码规范
    icon: 📝
    details: TypeScript、ESLint、Prettier、Stylelint、Husky、Lint-staged、commitLint 配置规范
    link: /src/guide/15-specification
    linkText: 赶紧去看看吧
---

#

<DataPanel />

<script setup lang="ts">
// 导入访问数据组件
import DataPanel from './components/home/DataPanel.vue'
</script>
