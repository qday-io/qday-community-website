import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  ignoreDeadLinks: true,
  lastUpdated: true,

  head: [
    ['link', { rel: "icon", href: "/favicon.ico" }]
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: "QDay Community",
      description: "QDay Community is a hub for developers and users to explore the quantum-secure Layer2 network on Abelian blockchain, offering EVM compatibility, complete technical documentation, and innovative blockchain solutions.",
      keywords: ['QDay', 'Layer2 network', 'quantum resistant', 'quantum safe', 'privacy coin', 'zero knowledge', 'EVM compatible', 'QDay', 'Abelian', 'Abelian Foundation', 'ABEL', 'QDAY'],
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Docs', link: '/guide/' },
          {
            text: 'Mainnet',
            items: [
              { text: 'Explorer', link: 'https://explorer.qday.io' },
              { text: 'Portal', link: 'https://portal.qday.io' },
              { text: 'ABEL Bridge', link: 'https://abel-bridge.qday.io' },
              { text: 'Swap', link: 'https://swap.qday.io' },
              { text: 'ABEL Staking', link: 'https://abel-staking.qday.io' },
              { text: 'QDay Staking', link: 'https://qday-staking.qday.io' }
            ]
          },
          {
            text: 'Testnet',
            items: [
              { text: 'Explorer', link: 'https://explorer.qday.info' },
              { text: 'Portal', link: 'https://portal.qday.info' },
              { text: 'ABEL Bridge', link: 'https://abel-bridge.qday.info' },
              { text: 'QDay Faucet', link: 'https://fi.qday.info/en/dapps/faucet' },
              { text: 'Swap', link: 'https://swap.qday.info' },
              { text: 'ABEL Staking', link: 'https://abel-staking.qday.info' },
              { text: 'QDay Staking', link: 'https://qday-staking.qday.info' }
            ]
          },
          { text: 'Ask Hako', link: 'https://hako.pqabelian.io' }
        ],

        sidebar: {
          '/guide/': [
            {
              text: 'Guide',
              collapsed: false,
              items: [
                {
                  text: 'QDay Tech Docs',
                  collapsed: false,
                  items: [
                    { text: 'Whitepaper', link: '/guide/qday-whitepaper' }
                  ]
                },
                {
                  text: 'QDay User Guide',
                  collapsed: false,
                  items: [
                    { text: 'QDay Introduction', link: '/guide/' },
                    { text: 'QDay Basics', link: '/guide/basics' },
                    { text: 'MetaMask Wallet', link: '/guide/metamask' },
                    { text: 'Abelian Pro', link: '/guide/abelian-pro' }
                  ]
                },
                //{ text: 'QDay Testnet User Guide',
                //collapsed: false,
                //items: [
                //{ text: 'MetaMask Wallet', link: '/guide/qday-testnet/metamask' },
                //{ text: 'QDay Explorer', link: '/guide/qday-testnet/explorer' },
                //{ text: 'QDay Faucet', link: '/guide/qday-testnet/qday-faucet' },
                //{ text: 'QDay Staking', link: '/guide/qday-testnet/qday-staking' },
                //{ text: 'ABEL Faucet', link: '/guide/qday-testnet/abel-faucet' },
                //{ text: 'ABEL Staking', link: '/guide/qday-testnet/abel-staking' },
                //{ text: 'QDay Swap', link: '/guide/qday-testnet/swap' }
                //]
                //}
              ]
            }
          ]
        },

        editLink: {
          pattern: 'https://github.com/qday-io/qday-community-website/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },

        footer: {
          copyright: '© 2025 <a href="https://qday.io" target="_blank">Abelian</a> | All rights reserved'
        }
      }
    },

    zh: {
      label: '中文',
      selectText: '選擇語言',
      lang: 'zh-TW',
      link: '/zh/',
      title: "QDay 知識社區",
      description: "Abelian 是一個抗量子計算的區塊鏈生態系統，Layer 1 基於 GPU 的 POW，Layer 2 兼容 EVM。 Abelian 知識社區 - 致力於為 Abelian 區塊鏈集文檔庫、問答、教程和用戶經驗分享為一體的綜合型社區。",
      keywords: ['QDay', 'Layer2 network', 'quantum resistant', 'quantum safe', 'privacy coin', 'zero knowledge', 'EVM compatible', 'QDay', 'Abelian', 'Abelian Foundation', 'ABEL', 'QDAY'],
      themeConfig: {
        nav: [
          { text: '首頁', link: '/zh/' },
          { text: '文檔', link: '/zh/guide/' },
          {
            text: '主網',
            items: [
              { text: '瀏覽器', link: 'https://explorer.qday.io' },
              { text: '資產組合', link: 'https://portal.qday.io' },
              { text: 'ABEL 跨鏈橋', link: 'https://abel-bridge.qday.io' },
              { text: '兌換', link: 'https://swap.qday.io' },
              { text: 'ABEL 質押', link: 'https://abel-staking.qday.io' },
              { text: 'QDay 質押', link: 'https://qday-staking.qday.io' }
            ]
          },
          {
            text: '測試網',
            items: [
              { text: '瀏覽器', link: 'https://explorer.qday.info' },
              { text: '資產組合', link: 'https://portal.qday.info' },
              { text: 'ABEL 跨鏈橋', link: 'https://abel-bridge.qday.info' },
              { text: 'QDay 水龍頭', link: 'https://fi.qday.info/tw/dapps/faucet' },
              { text: '兌換', link: 'https://swap.qday.info' },
              { text: 'ABEL 質押', link: 'https://abel-staking.qday.info' },
              { text: 'QDay 質押', link: 'https://qday-staking.qday.info' }
            ]
          },
          { text: '詢問 Hako', link: 'https://hako.pqabelian.io/zh/' }
        ],

        sidebar: {
          '/zh/guide/': [
            {
              text: '指南',
              collapsed: false,
              items: [
                {
                  text: 'QDay 技術文檔',
                  collapsed: false,
                  items: [
                    { text: '白皮書', link: '/zh/guide/qday-whitepaper' }
                  ]
                },
                {
                  text: 'QDay 用戶指南',
                  collapsed: false,
                  items: [
                    { text: 'QDay 簡介', link: '/zh/guide/' },
                    { text: 'QDay 基礎知識', link: '/zh/guide/basics' },
                    { text: 'MetaMask 錢包', link: '/zh/guide/metamask' },
                    { text: 'Abelian Pro', link: '/zh/guide/abelian-pro' }
                  ]
                },
                //{ text: 'QDay 測試網用戶指南',
                //collapsed: false,
                //items: [
                //{ text: 'MetaMask 錢包', link: '/zh/guide/qday-testnet/metamask' },
                //{ text: 'QDay 瀏覽器', link: '/zh/guide/qday-testnet/explorer' },
                //{ text: 'QDay 水龍頭', link: '/zh/guide/qday-testnet/qday-faucet' },
                //{ text: 'QDay 質押', link: '/zh/guide/qday-testnet/qday-staking' },
                //{ text: 'ABEL 水龍頭', link: '/zh/guide/qday-testnet/abel-faucet' },
                //{ text: 'ABEL 質押', link: '/zh/guide/qday-testnet/abel-staking' },
                //{ text: 'QDay Swap', link: '/zh/guide/qday-testnet/swap' }
                //]
                //}
              ]
            }
          ]
        },

        editLink: {
          pattern: 'https://github.com/qday-io/qday-community-website/edit/main/docs/:path',
          text: '在 GitHub 上編輯此頁面'
        },

        footer: {
          copyright: `© 2025 <a href="https://qday.io" target="_blank">Abelian</a> | 版權所有`
        },

        docFooter: {
          prev: '上一頁',
          next: '下一頁'
        },

        outline: {
          label: '頁面導航'
        },

        lastUpdated: {
          text: '最後更新於',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },

        langMenuLabel: '多語言',
        returnToTopLabel: '回到頂部',
        sidebarMenuLabel: '菜單',
        darkModeSwitchLabel: '主題',
        lightModeSwitchTitle: '切換到淺色模式',
        darkModeSwitchTitle: '切換到深色模式'
      }
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/logo-light.svg',
      dark: '/logo.svg',
      alt: "QDay Community Website"
    },

    siteTitle: false,

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜尋文檔',
                buttonAriaLabel: '搜索文檔'
              },
              modal: {
                noResultsText: '找不到相關結果',
                resetButtonTitle: '清除查詢條件',
                footer: {
                  selectText: '選擇',
                  navigateText: '切換',
                  closeText: '關閉'
                }
              }
            }
          }
        }
      }
    },


    socialLinks: [
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976 1.76.564 3.58 1.102 5.087 1.608.556 1.96 1.09 3.927 1.618 5.89.174.394.553.54.944.544l-.002.02s.307.03.606-.042c.3-.07.677-.244 1.02-.565.377-.354 1.4-1.36 1.98-1.928l4.37 3.226.035.02s.484.34 1.192.388c.354.024.82-.044 1.22-.337.403-.294.67-.767.795-1.307.374-1.63 2.853-13.427 3.276-15.38l-.012.046c.296-1.1.187-2.108-.496-2.705-.342-.297-.736-.427-1.13-.444zm-.118 1.874c.027.025.025.025.002.027-.007-.002.08.118-.09.755l-.007.024-.005.022c-.432 1.997-2.936 13.9-3.27 15.356-.046.196-.065.182-.054.17-.1-.015-.285-.094-.3-.1l-7.48-5.525c2.562-2.467 5.182-4.7 7.827-7.08.468-.235.39-.96-.17-.972-.594.14-1.095.567-1.64.84-3.132 1.858-6.332 3.492-9.43 5.406-1.59-.553-3.177-1.012-4.643-1.467 1.272-.51 2.283-.886 3.278-1.27 1.738-.67 3.996-1.54 6.256-2.415 4.522-1.748 9.07-3.51 9.465-3.662l.032-.013.03-.013c.11-.05.173-.055.202-.057 0 0-.01-.033-.002-.026zM10.02 16.016l1.234.912c-.532.52-1.035 1.01-1.398 1.36z"/></svg>'
        },
        link: 'https://t.me/pqabelian'
      },
      { icon: 'discord', link: 'https://discord.gg/Rrb33mC3Kc' },
      { icon: 'x', link: 'https://twitter.com/PQabelian' },
      { icon: 'youtube', link: 'https://www.youtube.com/@PQAbelian' },
      { icon: 'github', link: 'https://github.com/pqabelian' }
    ],
  }

})
