import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "uniLin",
  description: "这是一个非常好用的 uniapp 开发框架",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      // GitHub
      { icon: 'github', link: 'https://github.com/Jackie-Lin' },
      // Gitee
      { icon: 'gitee', link: 'https://gitee.com/jackie_lin' },
      // 掘金
      { icon: 'juejin', link: 'https://juejin.cn/user/2368772393149325' },
    ]
  },
})
