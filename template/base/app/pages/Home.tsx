import { type FC } from '@rue-js/rue'
import { RouterLink } from '@rue-js/router'

const highlights = [
  {
    title: 'Vapor Native DOM',
    desc: '延续 Rue 的细粒度更新模型，直接面向原生 DOM，适合构建响应迅速的前端界面。',
  },
  {
    title: '原生 JSX / TSX',
    desc: '以 JSX 和 TSX 作为一等公民，组件、路由和交互逻辑可以在同一套 TypeScript 工作流内完成。',
  },
  {
    title: '官方脚手架启动',
    desc: '使用 create-rue 即可生成基于 Vite 的 Rue 应用，适合快速起项目和沉淀模板。',
  },
]

const quickStartCommands = [
  'npm create rue@latest',
  'pnpm create rue@latest',
  'yarn create rue@latest',
  'bun create rue@latest',
]

const nextSteps = [
  '阅读介绍与快速开始，先熟悉 Rue 应用的基本结构。',
  '使用脚手架创建项目后，安装依赖并启动开发服务器。',
  '继续查看路由、状态管理和组件能力，再扩展到你的业务页面。',
]

const Home: FC = () => (
  <div className="space-y-6 pb-4">
    <section className="hero border border-base-300 bg-base-100/90 shadow-xl">
      <div className="hero-content flex-col items-start gap-8 px-6 py-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-4">
          <div className="badge badge-primary badge-outline">Rue.js</div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">The Wasm Framework For Vapor Native DOM</h1>
          <p className="max-w-2xl text-base leading-7 text-base-content/70">
            Rue.js 采用原生 JSX / TSX 开发方式，结合细粒度响应式与面向原生 DOM 的渲染模型，适合构建轻量、直接且可维护的前端应用。
          </p>
          <div className="flex flex-wrap gap-3">
            <RouterLink to="/report" className="btn btn-primary">
              查看报表页面
            </RouterLink>
            <RouterLink to="/todo" className="btn btn-outline">
              查看 Todo 示例
            </RouterLink>
          </div>
        </div>

        <div className="stats stats-vertical w-full bg-base-200 shadow sm:stats-horizontal lg:w-auto">
          <div className="stat">
            <div className="stat-title">Node.js</div>
            <div className="stat-value text-primary">&gt;= 22.12</div>
          </div>
          <div className="stat">
            <div className="stat-title">启动方式</div>
            <div className="stat-value text-secondary">create-rue</div>
          </div>
        </div>
      </div>
    </section>

    <section className="grid gap-4 md:grid-cols-3">
      {highlights.map(item => (
        <article key={item.title} className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body gap-3">
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="text-sm leading-7 text-base-content/70">{item.desc}</p>
          </div>
        </article>
      ))}
    </section>

    <section className="grid gap-6 xl:grid-cols-[1.35fr_0.85fr]">
      <article className="card border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body gap-5">
          <div>
            <div className="badge badge-outline">快速开始</div>
            <h2 className="mt-3 text-2xl font-semibold">创建第一个 Rue 应用</h2>
          </div>

          <div className="mockup-code text-sm">
            {quickStartCommands.map(command => (
              <pre key={command} data-prefix="$">
                <code>{command}</code>
              </pre>
            ))}
            <pre data-prefix="$">
              <code>cd &lt;your-project-name&gt;</code>
            </pre>
            <pre data-prefix="$">
              <code>npm install</code>
            </pre>
            <pre data-prefix="$">
              <code>npm run dev</code>
            </pre>
          </div>

          <div className="rounded-2xl bg-base-200 p-4 text-sm leading-7 text-base-content/70">
            生成的项目基于 Vite，默认支持 JSX / TSX 组件开发；生产构建使用 npm run build，产物输出到 dist 目录。
          </div>
        </div>
      </article>

      <article className="card border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body gap-5">
          <div>
            <div className="badge badge-outline">下一步</div>
            <h2 className="mt-3 text-2xl font-semibold">继续阅读路线</h2>
          </div>

          <div className="space-y-3">
            {nextSteps.map(step => (
              <div key={step} className="rounded-2xl bg-base-200 p-4 text-sm leading-7 text-base-content/75">
                {step}
              </div>
            ))}
          </div>

          <div className="divider my-0"></div>

          <div className="flex flex-col gap-3">
            <RouterLink to="/report" className="btn btn-outline w-full justify-between">
              打开报表页
              <span>→</span>
            </RouterLink>
            <RouterLink to="/todo" className="btn btn-outline w-full justify-between">
              打开 Todo 示例
              <span>→</span>
            </RouterLink>
          </div>
        </div>
      </article>
    </section>

    <section className="card border border-base-300 bg-base-100 shadow-sm">
      <div className="card-body gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="badge badge-outline">文档入口</div>
            <h2 className="mt-3 text-2xl font-semibold">首页建议保留的核心信息</h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-base-200 p-5">
            <div className="text-sm text-base-content/60">介绍</div>
            <div className="mt-2 text-lg font-semibold">框架定位与渲染模型</div>
          </div>
          <div className="rounded-2xl bg-base-200 p-5">
            <div className="text-sm text-base-content/60">快速开始</div>
            <div className="mt-2 text-lg font-semibold">脚手架、安装依赖与启动开发环境</div>
          </div>
          <div className="rounded-2xl bg-base-200 p-5">
            <div className="text-sm text-base-content/60">扩展阅读</div>
            <div className="mt-2 text-lg font-semibold">路由、状态管理、组件与工具链</div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Home
