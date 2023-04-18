/*
 * @Description: 
 * @Author:  
 * @Date: 2023-04-17 15:50:18
 * @LastEditTime: 2023-04-18 08:37:55
 * @LastEditors:  
 */
module.exports = {
    title: "welcome",
    description: "描述",
    base: "/docs/",
    head: [
        ["link", { rel: "icon", href: "/hero.png"}],
        ["meta", { name: "keywords", content: "vuepress 介绍"}],
        ["meta", { name: "author", content: "小趴菜"}],
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
      sidebar: "auto"
    }
  }
  