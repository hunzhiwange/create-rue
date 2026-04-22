import { type FC } from '@rue-js/rue'

const packageRows = [
  {
    name: '@rue-js/rue',
    role: '核心运行时与 TSX API',
    detail: '提供 FC、useApp 以及响应式能力，是官网应用的主入口依赖。',
  },
  {
    name: '@rue-js/router',
    role: '前端路由',
    detail: '提供 RouterView、RouterLink 与 createRouter，用于承载官网页面切换。',
  },
  {
    name: '@rue-js/vite-plugin-rue',
    role: 'Vite 集成插件',
    detail: '处理 Rue 的编译接入，让 TSX 在独立 Vite 项目中正常工作。',
  },
]

const Packages: FC = () => (
  <div className="page-stack">
    <section className="content-card">
      <p className="section-tag">Packages</p>
      <h1>当前官网使用的 npm 包</h1>
      <p>现在的站点只保留正式发布包依赖，便于版本管理、构建复现与生产部署。</p>
    </section>

    <section className="table-card">
      <div className="table-head">
        <span>包名</span>
        <span>职责</span>
        <span>说明</span>
      </div>
      {packageRows.map(row => (
        <div key={row.name} className="table-row">
          <span className="cell-name">{row.name}</span>
          <span>{row.role}</span>
          <span>{row.detail}</span>
        </div>
      ))}
    </section>

    <section className="content-card">
      <h2>安装命令</h2>
      <pre className="code-block">{`npm install @rue-js/rue @rue-js/router
npm install -D vite typescript @rue-js/vite-plugin-rue`}</pre>
    </section>
  </div>
)

export default Packages
