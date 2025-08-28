import path from 'node:path'
import process from 'node:process'
import { defineConfig } from 'vitepress'

import enConfig from '../src/docs/en/config.mts'
import zhConfig from '../src/docs/zh/config.mts'

const resolve = dir => path.join(__dirname, dir)

function getBase() {
    const deploy = process?.env?.deploy
    if (deploy === 'gh') { return '/ue-fab-docs/' } // github
    return '/' // default, layer0
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: getBase(),
    // title: 'My Awesome Projects',
    description: 'A UE Fab documents Site',
    srcDir: './src',
    rewrites: {
        'docs/:name.md': ':name.md',
        'docs/:path*/:name.md': ':path*/:name.md',
    },

    locales: {
        zh: { label: '简体中文', ...zhConfig },
        en: { label: 'English', ...enConfig },
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
