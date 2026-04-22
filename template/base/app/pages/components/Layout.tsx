import { type FC } from '@rue-js/rue'
import { RouterLink, useRoute } from '@rue-js/router'

const navItems = [
  { to: '/', label: '首页' },
  { to: '/guide', label: '快速上手' },
  { to: '/packages', label: '包与集成' },
  { to: '/ecosystem', label: '生态能力' },
]

const Header: FC = () => {
  const route = useRoute()
  const currentPath = route.get()?.path || '/'

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <RouterLink to="/" className="brand">
          <span className="brand-mark">R</span>
          <span className="brand-copy">
            <span className="brand-title">Rue.js</span>
            <span className="brand-subtitle">The Vapor Native DOM Framework</span>
          </span>
        </RouterLink>
        <nav className="main-nav">
          {navItems.map(item => (
            <RouterLink
              key={item.to}
              to={item.to}
              className={`nav-link ${currentPath === item.to ? 'is-active' : ''}`}
            >
              {item.label}
            </RouterLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

const Footer: FC = () => (
  <footer className="site-footer">
    <div className="shell footer-inner">
      <div>
        <div className="footer-title">Rue.js</div>
        <p className="footer-copy">已切换为基于 npm 已发布包的官网入口，可直接部署静态站点。</p>
      </div>
      <div className="footer-meta">
        <span>@rue-js/rue</span>
        <span>@rue-js/router</span>
        <span>@rue-js/vite-plugin-rue</span>
      </div>
    </div>
  </footer>
)

const SiteLayout: FC = props => (
  <div className="site-frame">
    <Header />
    <main className="site-main">
      <div className="shell">{props.children}</div>
    </main>
    <Footer />
  </div>
)

export default SiteLayout
