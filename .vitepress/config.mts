import path from 'node:path'
import process from 'node:process'
import { defineConfig } from 'vitepress'

const resolve = dir => path.join(__dirname, dir)

function getBase() {
    const deploy = process?.env?.deploy
    if (deploy === 'gh') { return '/ue-fab-docs/' } // github
    return '/' // default, layer0
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: getBase(),
    lang: 'en-US',
    title: 'My Awesome Projects',
    description: 'A UE Fab documents Site',
    srcDir: './src',
    rewrites: {
        'docs/:name.md': ':name.md',
        'docs/:path/:name.md': ':path/:name.md',
    },
    themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Projtects',
                items: [
                    { text: 'Dynamic Radial Wheel Inventory', link: '/item-1' },
                ],
            },
        ],

        sidebar: {
            '/dynamic-radial-wheel-inventory/': [
                { text: 'Dynamic Radial Wheel Inventory', items: [
                    { text: 'Introduction', link: '/dynamic-radial-wheel-inventory/' },
                    { text: 'useage', link: '/dynamic-radial-wheel-inventory/' },
                ] },
            ],
        },

        socialLinks: [
            { icon: 'epicgames', link: 'https://github.com/vuejs/vitepress' },
        ],
    },
    vite: {
        resolve: {
            alias: [
                { find: /^~/, replacement: '' },
                { find: /^@\//, replacement: resolve('../src/') },
                { find: /^@components\//, replacement: resolve('../src/components/') },
            ],
        },
    },
})
