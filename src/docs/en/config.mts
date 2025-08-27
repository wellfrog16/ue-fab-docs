import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

const config: LocaleSpecificConfig<DefaultTheme.Config> = {
    lang: 'en-US',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/en/' },
            {
                text: 'Projtects',
                items: [
                    { text: 'Radial Wheel Inventory', link: '/item-1' },
                ],
            },
        ],

        sidebar: {
            '/radial-wheel-inventory/': [
                { text: 'Radial Wheel Inventory', items: [
                    { text: 'Introduction', link: '/radial-wheel-inventory/' },
                    { text: 'useage', link: '/radial-wheel-inventory/' },
                ] },
            ],
        },

        socialLinks: [
            { icon: 'epicgames', link: 'https://github.com/vuejs/vitepress' },
        ],
    },
}

export default config
