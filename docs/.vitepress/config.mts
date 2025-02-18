import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/uni-plus-doc/",
  title: "uni-plus",
  description: "这是一个非常好用的 uniapp 开发框架",
  head: [['link', { rel: 'icon', href: './favicon.ico' }]],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'uni-plus',
    nav: [
      { text: '指南', link: '/src/guide/1-introduction' },
      { text: '🥤打赏', link: '/src/reward/rewards' },
      {
        text: '1.2.0', 
        items: [
          { text: '更新日志', link: '/src/plug/recommend' },
          { text: '参考文献', link: '/src/plug/recommend' }
        ]
      }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '1-简介', link: '/src/guide/1-introduction' },
          { text: '2-快速入门', link: '/src/guide/2-start' },
          { text: '3-样式篇', link: '/src/guide/3-style' },
          { text: '4-Layout篇', link: '/src/guide/4-layout' },
          { text: '5-图标篇', link: '/src/guide/5-icons' },
          { text: '6-目录结构篇', link: '/src/guide/6-structure' },
          { text: '7-UI库篇', link: '/src/guide/7-ui' },
          { text: '8-状态篇', link: '/src/guide/8-state' },
          { text: '9-请求篇', link: '/src/guide/9-request' },
          { text: '10-i18n篇', link: '/src/guide/10-i18n' },
          { text: '11-Specification篇', link: '/src/guide/11-specification' },
          { text: '12-规范篇', link: '/src/guide/12-standard' },
          { text: '13-Git提交篇', link: '/src/guide/13-git' },
          { text: '14-优化篇', link: '/src/guide/14-optimization' },
          { text: '15-权限篇', link: '/src/guide/15-permission' },
          { text: '16-cli篇', link: '/src/guide/16-cli' },
          { text: '17-Echarts篇', link: '/src/guide/17-echarts' },
          { text: '18-AI辅助开发篇', link: '/src/guide/18-AI' },
          { text: '19-分支管理篇', link: '/src/guide/19-flow' },
          { text: '20-项目实战篇', link: '/src/guide/20-project' },
          { text: '21-常见问题', link: '/src/guide/21-faq' },
        ]
      },
      {
        text: '社交',
        items: [
          { text: '🥤打赏', link: '/src/reward/rewards' },
          { text: '交流群', link: '/src/reward/rewards' },
        ]
      },
      {
        text: '其他',
        items: [
          { text: '插件推荐', link: '/src/plug/recommend' },
          { text: '更新日志', link: '/src/plug/recommend' },
          { text: '参考文献', link: '/src/plug/recommend' },
        ]
      },
    ],

    socialLinks: [
      // GitHub
      { icon: 'github', link: 'https://github.com/DaMaiCoding/uni-plus' },
      // Gitee
      { icon: 'gitee', link: 'https://gitee.com/DaMaiCoding/uni-plus' },
      // 掘金
      { icon: 'juejin', link: 'https://juejin.cn/user/2368772393149325' },
    ],

    search: {
      provider: 'local'
    },
    
    lastUpdated: {
      text: '最后更新时间',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright (c) 2024 艮山'
    }
  }
})
