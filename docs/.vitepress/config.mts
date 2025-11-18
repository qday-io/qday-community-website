import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  ignoreDeadLinks: true,
  lastUpdated: true,

  head: [
    ['link', { rel: "icon", href: "/favicon.ico"}]
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
          { text: 'Mainnet',
            items: [
              { text: 'Explorer', link: 'https://explorer.qday.io' },
              { text: 'Portal', link: 'https://portal.qday.io' },
              { text: 'ABEL Bridge', link: 'https://abel-bridge.qday.io' },
              { text: 'Swap', link: 'https://swap.qday.io' },
              { text: 'ABEL Staking', link: 'https://abel-staking.qday.io' },
              { text: 'QDay Staking', link: 'https://qday-staking.qday.io' }
            ]
          },
          { text: 'Testnet',
            items: [
              { text: 'Explorer', link: 'https://explorer.qday.info' },
              { text: 'Portal', link: 'https://portal.qday.info' },
              { text: 'ABEL Bridge', link: 'https://abel-bridge.qday.info' },
              { text: 'QDay Faucet', link: 'https://fi.qday.info/en/dapps/faucet' },
              { text: 'Swap', link: 'https://swap.qday.info' },
              { text: 'ABEL Staking', link: 'https://abel-staking.qday.info' },
              { text: 'QDay Staking', link: 'https://qday-staking.qday.info'}
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
                { text: 'QDay Tech Docs',
                  collapsed: false,
                  items: [
                    { text: 'Whitepaper', link: '/guide/qday-whitepaper'}
                  ]
                },
                { text: 'QDay User Guide',
                  collapsed: false,
                  items: [
                    { text: 'QDay Introduction', link: '/guide/' },
                    { text: 'QDay Basics', link: '/guide/basics' },
                    { text: 'MetaMask Wallet', link: '/guide/metamask' },
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
          { text: '主網',
            items: [
              { text: '瀏覽器', link: 'https://explorer.qday.io' },
              { text: '資產組合', link: 'https://portal.qday.io' },
              { text: 'ABEL 跨鏈橋', link: 'https://abel-bridge.qday.io' },
              { text: '兌換', link: 'https://swap.qday.io' },
              { text: 'ABEL 質押', link: 'https://abel-staking.qday.io' },
              { text: 'QDay 質押', link: 'https://qday-staking.qday.io' }
            ]
          },
          { text: '測試網',
            items: [
              { text: '瀏覽器', link: 'https://explorer.qday.info' },
              { text: '資產組合', link: 'https://portal.qday.info' },
              { text: 'ABEL 跨鏈橋', link: 'https://abel-bridge.qday.info' },
              { text: 'QDay 水龍頭', link: 'https://fi.qday.info/en/dapps/faucet' },
              { text: '兌換', link: 'https://swap.qday.info' },
              { text: 'ABEL 質押', link: 'https://abel-staking.qday.info' },
              { text: 'QDay 質押', link: 'https://qday-staking.qday.info'}
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
                { text: 'QDay 技術文檔',
                  collapsed: false,
                  items: [
                    { text: '白皮書', link: '/zh/guide/qday-whitepaper'}
                  ]
                },
                { text: 'QDay 測試網用戶指南',
                  collapsed: false,
                  items: [
                    { text: 'QDay 簡介', link: '/zh/guide/' },
                    { text: 'QDay 基礎知識', link: '/zh/guide/basics' },
                    { text: 'MetaMask 錢包', link: '/zh/guide/metamask' }
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
      { icon: 'github', link: 'https://github.com/pqabelian' }
    ],
  }

})
