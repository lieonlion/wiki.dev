import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { fileURLToPath, URL } from 'node:url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },

  rewrites: {
    'docs/:rest*': ':rest*'
  },
  
  cleanUrls: true,

  title: "LieOnLion",
  description: "Wiki's for any of LieOnLion's Projects",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Minecraft Mods', link: '/mods/' }
    ],

    sidebar: [
      {
        text: 'Project Type',
        items: [
          { text: 'Minecraft Mods', link: '/mods/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lieonlion/wiki.dev' }
    ],

    editLink: {
      pattern: 'https://github.com/lieonlion/wiki.dev/edit/main/:path'
    }
  },

  vite: {
    plugins: [
      groupIconVitePlugin()
    ],
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBarTitle\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/DynamicNavBarTitle.vue', import.meta.url)
          )
        }
      ]
    }
  }
})
