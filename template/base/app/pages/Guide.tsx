import { type FC } from '@rue-js/rue'

const steps = [
  '安装 @rue-js/rue、@rue-js/router 与 @rue-js/vite-plugin-rue。',
  '在 vite.config.ts 中注册 rue() 插件。',
  '在 tsconfig.json 中设置 jsx 为 preserve，jsxImportSource 为 @rue-js/rue。',
  '在 app/app.tsx 中创建根组件并通过 useApp 挂载到 #app。',
]

const Guide: FC = () => (
  <div className="page-stack">
    <section className="content-card">
      <p className="section-tag">快速上手</p>
      <h1>独立官网项目的最小接入方式</h1>
      <p>
        这个迁移版本采用真实发布包依赖，避免继续引用 monorepo 中的本地开发路径，能更准确反映外部用户的接入体验。
      </p>
    </section>

    <section className="content-card">
      <h2>接入步骤</h2>
      <div className="step-list">
        {steps.map((step, index) => (
          <div key={step} className="step-item">
            <span className="step-index">0{index + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="content-card">
      <h2>配置示例</h2>
      <pre className="code-block">{`import { defineConfig } from 'vite'
import VitePluginRue from '@rue-js/vite-plugin-rue'

export default defineConfig({
  plugins: [
    VitePluginRue({
      include: ['/app/'],
      debug: true,
    }),
  ],
})`}</pre>
    </section>
  </div>
)

export default Guide
