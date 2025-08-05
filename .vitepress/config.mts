import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/UE-fab-doc/',
  lang: 'zh-CN',
  title: "My Awesome Projects",
  description: "A UE Fab document Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Projtects',
        items: [
          { text: 'Dynamic Radial Wheel Inventory', link: '/item-1' },
        ]
      }
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
      { icon: 'epic', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
