import type { Theme } from 'vitepress'

import DefaultTheme from 'vitepress/theme'
// https://vitepress.dev/guide/custom-theme
import { h, watch } from 'vue'

import './style.css'

function getPathInfo(path: string) {
    const pattern = /^\/([^/]+)(?:\/([^/]*))?\/?/
    const match = path.match(pattern)

    const lang = match?.[1]
    const name = match?.[2]
    return { lang, name }
}

const titleMapping = {
    en: {
        'home': 'My Awesome Projects',
        'radial-wheel-inventory': 'Radial Wheel Inventory',
    },
    zh: {
        'home': '我的项目',
        'radial-wheel-inventory': '轮盘式仓库',
    },
}

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
    },
    enhanceApp({ app, router, siteData }) {
        watch(() => router.route.path, () => {
            const { lang, name } = getPathInfo(router.route.path)

            if (lang && name) {
                siteData.value = {
                    ...siteData.value,
                    title: titleMapping[lang][name],
                }
            }
            else {
                if (lang) {
                    siteData.value = { ...siteData.value, title: titleMapping[lang].home }
                }
            }
        }, {
            immediate: true,
        })

    // ...
    },
} satisfies Theme
