// docs/.vitepress/theme/index.ts
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout),
  enhanceApp({ router }) {
    if (typeof window !== 'undefined') {
      // 仿照 index.js 的逻辑
      const loadMaxKB = () => {
        const oldScript = document.querySelector('script[data-maxkb]')
        if (oldScript) oldScript.remove()

        let token = '632bf3ead0ebfee2'
        if (location.pathname.startsWith('/zh/')) {
          token = 'c9f446e578abcacc'
        }

        const script = document.createElement('script')
        script.async = true
        script.defer = true
        script.setAttribute('data-maxkb', 'true')
        script.src = `https://hako.pqabelian.io/api/application/embed?protocol=https&host=hako.pqabelian.io&token=${token}`
        document.head.appendChild(script)
      }

      loadMaxKB()
      router.onAfterPageLoad = () => loadMaxKB()
    }
  }
} satisfies Theme