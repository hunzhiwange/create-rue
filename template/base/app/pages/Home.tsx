import { type FC } from '@rue-js/rue'
import { RouterLink } from '@rue-js/router'

const highlights = [
  {
    title: '原生 TSX 开发',
    desc: '直接用发布到 npm 的 Rue 包构建应用，不依赖本地 workspace 或开发态别名。',
  },
  {
    title: 'Vapor Native DOM',
    desc: '保留 Rue 的细粒度更新模型，适合做展示站、文档站与交互型官网。',
  },
  {
    title: '最小接入面',
    desc: '官网项目只保留 Vite、Rue、Router 与官方插件，部署更直接。',
  },
]

const packages = [
  '@rue-js/rue',
  '@rue-js/router',
  '@rue-js/vite-plugin-rue',
]

const Home: FC = () => (
  <div className="page-stack">
    <section className="hero-card">
      <div className="hero-copy">
        <p className="eyebrow">已迁移为独立官网应用</p>
        <h1>Rue.js 官网入口已改为直接消费 npm 发布包</h1>
        <p className="hero-text">
          当前站点不再依赖 monorepo 内部开发版本，而是按真实用户使用方式接入 Rue，适合直接部署与对外展示。
        </p>
        <div className="hero-actions">
          <RouterLink to="/guide" className="button primary">
            查看接入方式
          </RouterLink>
          <RouterLink to="/packages" className="button secondary">
            查看包清单
          </RouterLink>
        </div>
      </div>
      <div className="hero-panel">
        <div className="panel-title">入口结构</div>
        <pre className="code-block">{`app/
├─ main.ts
├─ app.tsx
├─ router.ts
└─ pages/

useApp(RootApp)
  .use(router)
  .mount('#app')`}</pre>
      </div>
    </section>

    <section className="grid-cards">
      {highlights.map(item => (
        <article key={item.title} className="info-card">
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
        </article>
      ))}
    </section>

    <section className="split-card">
      <div>
        <p className="section-tag">官网目标</p>
        <h2>把原来的应用入口整理成一个可独立构建的官方站点</h2>
        <p>
          这里保留了 Rue 应用的基础结构：应用入口、路由、布局与页面拆分；同时移除了依赖本地源码映射与开发期工作区包的部分。
        </p>
      </div>
      <div className="package-list">
        {packages.map(name => (
          <span key={name} className="package-pill">
            {name}
          </span>
        ))}
      </div>
    </section>
  </div>
)

export default Home
