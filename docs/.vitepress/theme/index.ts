import Theme from 'vitepress/theme'
import './style/var.css'
import Layout from './Layout.vue'
import { inBrowser } from 'vitepress'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
// 导入hooks
import { useVisitData } from '../hooks/useVisitData.ts'
import mediumZoom from 'medium-zoom'

export default {
  Layout,
  extends: Theme,
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    };
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  },
  enhanceApp({ app, router, siteData }) {
    if (inBrowser) {
      // 路由加载完成，在加载页面组件后（在更新页面组件之前）调用。
      router.onAfterPageLoad = (to: string) => {
        // 调用统计访问接口hooks
        useVisitData()
      }
    }
  }
}
