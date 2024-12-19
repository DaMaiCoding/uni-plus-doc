import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/uni-lin-doc/",
  title: "UniLin",
  description: "这是一个非常好用的 uniapp 开发框架",
  head: [['link', { rel: 'icon', href: '/icon/favicon.ico' }]],
  themeConfig: {
    logo: '/icon/logo.png',
    siteTitle: 'UniLin',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/src/guide/1-introduction' },
      { text: '🥤打赏', link: '/src/reward/rewards' },
      { text: '周边生态', link: '/src/plug/recommend' }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/src/guide/1-introduction' },
          { text: '开始入门', link: '/src/guide/2-start' },
          { text: '样式篇', link: '/src/guide/3-style' },
          { text: '布局篇', link: '/src/guide/4-layout' },
          { text: '图标篇', link: '/src/guide/5-icons' },
          { text: '目录结构篇', link: '/src/guide/6-structure' },
          { text: 'UI篇', link: '/src/guide/7-ui' },
          { text: '请求篇', link: '/src/guide/8-request' },
          { text: '状态篇', link: '/src/guide/9-state' },
          { text: '国际化篇', link: '/src/guide/10-i18n' },
          { text: '构建篇', link: '/src/guide/11-build' },
          { text: 'git提交篇', link: '/src/guide/12-git' },
          { text: '权限篇', link: '/src/guide/13-permission' },
          { text: '优化篇', link: '/src/guide/14-optimization' },
          { text: '规范篇', link: '/src/guide/15-specification' },
          { text: '常见问题', link: '/src/guide/16-faq' },
        ]
      },
      {
        text: '交流',
        items: [
          { text: '🥤打赏', link: '/src/reward/rewards' },
        ]
      },
      {
        text: '周边生态',
        items: [
          { text: '插件推荐', link: '/src/plug/recommend' },
        ]
      },
    ],

    socialLinks: [
      // GitHub
      { icon: 'github', link: 'https://github.com/Jackie-Lin' },
      // Gitee
      { icon: 'gitee', link: 'https://gitee.com/FOM' },
      // 掘金
      { icon: 'juejin', link: 'https://juejin.cn/user/2368772393149325' },
    ],

    search: {
      provider: 'local'
    },
    
    lastUpdated: {
      text: '最后更新时间',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright (c) 2024 艮山'
    }
  }
})
