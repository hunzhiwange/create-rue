import { useComponent } from '@rue-js/rue'
import { createRouter, createWebHashHistory } from '@rue-js/router'

const routes = [
  { path: '/', component: useComponent(() => import('./pages/Home')) },
  { path: '/guide', component: useComponent(() => import('./pages/Guide')) },
  { path: '/packages', component: useComponent(() => import('./pages/Packages')) },
  { path: '/ecosystem', component: useComponent(() => import('./pages/Ecosystem')) },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
