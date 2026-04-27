import { useComponent } from '@rue-js/rue'
import { createRouter, createWebHashHistory } from '@rue-js/router'

const routes = [
  { path: '/', component: useComponent(() => import('./pages/Home')) },
  { path: '/report', component: useComponent(() => import('./pages/Report')) },
  { path: '/todo', component: useComponent(() => import('./pages/TodoApp')) },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
