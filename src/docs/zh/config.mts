import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

function createLink(text: string, link: string) {
    return {
        text,
        link: `/zh/radial-wheel-inventory/${link}`,
    }
}

const config: LocaleSpecificConfig<DefaultTheme.Config> = {
    lang: 'zh-CN',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '首页', link: '/zh/' },
            {
                text: '项目',
                items: [
                    createLink('轮盘式仓库', ''),
                ],
            },
        ],

        sidebar: {
            '/zh/radial-wheel-inventory': [
                {
                    text: '介绍',
                    items: [createLink('功能介绍', '')],
                },
                {
                    text: '使用方法',
                    items: [
                        createLink('第一步：射线检测', 'line-trace-check'),
                        createLink('第二步：物品系统', 'item-system'),
                        createLink('第三步：轮盘仓库', 'inventory'),
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
                link: 'https://www.fab.com/zh-cn/sellers/inkwash',
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
