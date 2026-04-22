import { type FC } from '@rue-js/rue'

const ecosystemItems = [
  {
    title: '官网入口',
    desc: '用最小 Rue 应用结构承载内容页面，便于继续往文档站或产品站扩展。',
  },
  {
    title: '路由层',
    desc: '通过 hash history 直接适配静态站点部署，不要求服务端额外做重写配置。',
  },
  {
    title: '构建层',
    desc: '依赖 Vite 与官方插件完成编译，生产构建方式和外部用户保持一致。',
  },
]

const Ecosystem: FC = () => (
  <div className="page-stack">
    <section className="content-card">
      <p className="section-tag">生态能力</p>
      <h1>从应用迁移到官网的结构拆分</h1>
      <p>迁移后的站点把入口、路由、布局和内容页解耦，后续扩展成完整官网时会更容易维护。</p>
    </section>

    <section className="grid-cards">
      {ecosystemItems.map(item => (
        <article key={item.title} className="info-card">
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
        </article>
      ))}
    </section>

    <section className="content-card">
      <h2>适合继续扩展的方向</h2>
      <ul className="bullet-list">
        <li>补充文档页与 API 页</li>
        <li>接入组件示例与代码演示</li>
        <li>增加下载、版本、生态导航</li>
        <li>对接真实官网视觉资源</li>
      </ul>
    </section>
  </div>
)

export default Ecosystem
