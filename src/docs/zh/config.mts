import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

const config: LocaleSpecificConfig<DefaultTheme.Config> = {
    lang: 'zh-CN',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '首页', link: '/zh/' },
            {
                text: '项目',
                items: [
                    { text: '轮盘式仓库', link: '/zh/radial-wheel-inventory/intro' },
                ],
            },
        ],

        sidebar: {
            '/zh/radial-wheel-inventory/': [
                {
                    text: '介绍',
                    items: [
                        {
                            text: '功能介绍',
                            link: '/zh/radial-wheel-inventory/intro',
                        },
                    ],
                },
                {
                    text: '使用方法',
                    items: [
                        {
                            text: '第一步：射线检测',
                            link: '/zh/radial-wheel-inventory/line-trace-check',
                        },
                        {
                            text: '第二步：物品管理',
                            link: '/radial-wheel-inventory/',
                            items: [
                                { text: '安装方法', link: '/zh/radial-wheel-inventory1/' },
                                { text: '参数设置', link: '/zh/radial-wheel-inventory3/' },
                                { text: '监听事件', link: '/zh/radial-wheel-inventory2/' },
                            ],
                        },
                        {
                            text: '第三步：轮盘仓库',
                            link: '/radial-wheel-inventory/',
                            items: [
                                { text: '安装方法', link: '/zh/radial-wheel-inventory1/' },
                                { text: '参数设置', link: '/zh/radial-wheel-inventory3/' },
                                { text: '监听事件', link: '/zh/radial-wheel-inventory2/' },
                            ],
                        },

                    ],
                },
            ],
        },

        socialLinks: [
            {
                // icon: { svg: 'FAB' },
                icon: {
                    svg: '<img src="https://static.fab.com/static/builds/web/dist/frontend/assets/images/common/favicon/6da454a8eef5c53927249f8ad16eb5d7-v1.svg" />',
                },
                link: 'https://github.com/vuejs/vitepress',
            },
        ],

        docFooter: {
            prev: '上一页',
            next: '下一页',
        },

        outline: {
            label: '页面导航',
        },

        lastUpdated: {
            text: '最后更新于',
        },

        notFound: {
            title: '页面未找到',
            quote: '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
            linkLabel: '前往首页',
            linkText: '带我回首页',
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        skipToContentLabel: '跳转到内容',
    },

}

export default config
