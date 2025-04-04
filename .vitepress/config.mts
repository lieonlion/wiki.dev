import { defineConfigWithTheme } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin, localIconLoader } from 'vitepress-plugin-group-icons'
import { fileURLToPath, URL } from 'node:url'
import { NavBarTitleTheme } from './theme/nav-bar-title-theme'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<NavBarTitleTheme.Config>({
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },

  rewrites: {
    'docs/:rest*': ':rest*'
  },
  
  cleanUrls: true,
  lastUpdated: true,

  title: "LieOnLion",
  description: "Wiki's for any of LieOnLion's Projects",
  themeConfig: {
    logo: "https://lieonlion.dev/assets/v1/logo/svg/lieonlion.svg",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Minecraft Mods', link: '/mods/' }
    ],

    sidebar: {
      '/mods/quad/': [
        {
          base: "/mods/quad/",
          items: [
            {
              text: "Tags",
              base: "/mods/quad/tags/",
              collapsed: true,
              items: [
                {
                  text: "Edit a Tag",
                  link: "edit_a_tag"
                },
              ]
            },
            {
              text: "Quad Basics",
              link: "quad_basics"
            },
            {
              text: "Quad Extra",
              link: "quad_extra"
            }
          ]
        }
      ]
    },

    navBarTitle: {
      '/mods/': {
        text: "Minecraft Mods",
        link: "/mods/"
      },
      '/mods/quad/': {
        text: "Quad",
        logo: "https://lieonlion.github.io/quad-docs/img/quad-logo.png",
        link: "/mods/quad/"
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lieonlion/wiki.dev' }
    ],

    editLink: {
      pattern: 'https://github.com/lieonlion/wiki.dev/edit/main/:path'
    },

    outline: [2, 3],
  },

  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          'pack.mcmeta': localIconLoader(import.meta.url, '../assets/icons/mcmeta.svg'),
        }
      }),
    ],
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBarTitle\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/DynamicNavBarTitle.vue', import.meta.url)
          )
        }
      ]
    }
  }
})
