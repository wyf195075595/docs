/*
 * @Description: 
 * @Author:  
 * @Date: 2023-04-18 08:36:26
 * @LastEditTime: 2023-04-19 14:50:54
 * @LastEditors:  
 */
module.exports = {
    title: "welcome",
    description: "描述",
    base: "/docs/",
    head: [
      ["meta", { name: "keywords", content: "vuepress 介绍"}],
      ["meta", { name: "author", content: "小趴菜"}],
      // PWA 配置如下
      ["link", { rel: "icon", href: "/hero.png"}],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
      ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    themeConfig: {
      logo: "/hero.png",
      lastUpdated: 'Last Updated', // string | boolean
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'External', link: 'https://google.com' },
        {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items: [
              { text: 'Chinese', link: '/language/chinese/' },
              { text: 'Japanese', link: '/language/japanese/' }
            ]
          }
      ],
      // sidebar: "auto"
    },
    // 【离线web页面】只有在你能够使用 SSL 部署您的站点时才能启用此功能，因为 service worker 只能在 HTTPs 的 URL 下注册。
    plugins: {
      '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
          message: "更新新的内容了！",
          buttonText: "点我更新"
        }
      },
      '@vssue/vuepress-plugin-vssue': {
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',
        // 其他的 Vssue 配置
        owner: 'wyf195075595',
        repo: 'docs',
        clientId: 'f9bd7443deec2ef4d24f',
        clientSecret: '9603fc19fd6e63ef3443ba061dfd204416e46bf9',
        autoCreateIssue: true
      },
      '@vuepress/back-to-top': {},
      '@vuepress/google-analytics': {
        'ga': 'UA-264328596-1' //
      },
      '@vuepress/medium-zoom': {
        selector: 'img.zoom-custom-imgs',
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
          margin: 16
        }
      },
      "vuepress-plugin-auto-sidebar": {
        nav: true
      }
    }
  }
  