import { type FC, useApp } from '@rue-js/rue'
import { RouterView } from '@rue-js/router'
import router from './router'
import SiteLayout from './pages/components/Layout'

const RootApp: FC = () => (
  <SiteLayout>
    <RouterView />
  </SiteLayout>
)

useApp(RootApp).use(router).mount('#app')
