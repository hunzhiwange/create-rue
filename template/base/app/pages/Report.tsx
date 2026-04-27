import { type FC } from '@rue-js/rue'
import { RouterLink } from '@rue-js/router'

type ReportRow = {
  day: string
  orders: number
  revenue: number
  conversion: number
  note: string
}

const rows: ReportRow[] = [
  { day: '04-21', orders: 42, revenue: 18600, conversion: 7.2, note: '新品投放启动' },
  { day: '04-22', orders: 55, revenue: 24180, conversion: 8.4, note: '自然流量增长' },
  { day: '04-23', orders: 61, revenue: 28640, conversion: 9.1, note: '渠道折扣带动' },
  { day: '04-24', orders: 48, revenue: 20520, conversion: 7.8, note: '高客单回落' },
  { day: '04-25', orders: 74, revenue: 36440, conversion: 10.6, note: '私域活动峰值' },
  { day: '04-26', orders: 66, revenue: 30900, conversion: 9.7, note: '成交保持稳定' },
]

const moneyFormatter = new Intl.NumberFormat('zh-CN', {
  style: 'currency',
  currency: 'CNY',
  maximumFractionDigits: 0,
})

const integerFormatter = new Intl.NumberFormat('zh-CN')

const totalRevenue = rows.reduce((sum, row) => sum + row.revenue, 0)
const totalOrders = rows.reduce((sum, row) => sum + row.orders, 0)
const avgConversion = rows.reduce((sum, row) => sum + row.conversion, 0) / rows.length
const peakRow = rows.reduce((max, row) => (row.revenue > max.revenue ? row : max), rows[0])
const maxRevenue = Math.max(...rows.map(row => row.revenue))

const summaryCards = [
  {
    label: '累计成交额',
    value: moneyFormatter.format(totalRevenue),
    detail: '过去 6 天整体表现',
    tone: 'bg-primary text-primary-content',
  },
  {
    label: '累计订单数',
    value: integerFormatter.format(totalOrders),
    detail: '订单总量',
    tone: 'bg-secondary text-secondary-content',
  },
  {
    label: '平均转化率',
    value: `${avgConversion.toFixed(1)}%`,
    detail: '按日均值计算',
    tone: 'bg-accent text-accent-content',
  },
  {
    label: '峰值日期',
    value: peakRow.day,
    detail: `${moneyFormatter.format(peakRow.revenue)} / ${peakRow.orders} 单`,
    tone: 'bg-neutral text-neutral-content',
  },
]

const Report: FC = () => (
  <div className="space-y-6 pb-4">
    <section className="hero border border-base-300 bg-base-100/90 shadow-xl">
      <div className="hero-content flex-col items-start gap-8 px-6 py-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">报表页面</h1>
          <div className="flex flex-wrap gap-3">
            <RouterLink to="/" className="btn btn-outline">
              返回首页
            </RouterLink>
            <RouterLink to="/todo" className="btn btn-primary">
              查看 Todo 示例
            </RouterLink>
          </div>
        </div>

        <div className="stats stats-vertical w-full bg-base-200 shadow sm:stats-horizontal lg:w-auto">
          <div className="stat">
            <div className="stat-title">最近窗口</div>
            <div className="stat-value text-primary">6 天</div>
          </div>
          <div className="stat">
            <div className="stat-title">可切换主题</div>
            <div className="stat-value text-secondary">全部</div>
          </div>
        </div>
      </div>
    </section>

    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {summaryCards.map(card => (
        <article key={card.label} className={`card shadow-lg ${card.tone}`}>
          <div className="card-body gap-2">
            <p className="text-sm opacity-80">{card.label}</p>
            <h2 className="text-3xl font-semibold">{card.value}</h2>
            <p className="text-sm opacity-80">{card.detail}</p>
          </div>
        </article>
      ))}
    </section>

    <section className="grid gap-6 xl:grid-cols-[1.35fr_0.85fr]">
      <article className="card border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body gap-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="badge badge-outline">营收走势</div>
              <h2 className="mt-3 text-2xl font-semibold">最近 6 天成交波动</h2>
            </div>
            <div className="text-right text-sm text-base-content/60">
              <div>峰值 {peakRow.day}</div>
              <div>{moneyFormatter.format(peakRow.revenue)}</div>
            </div>
          </div>

          <div className="space-y-4">
            {rows.map(row => (
              <div key={row.day} className="grid gap-2">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <div className="font-medium">{row.day}</div>
                  <div className="text-base-content/60">{moneyFormatter.format(row.revenue)}</div>
                </div>
                <progress className="progress progress-primary w-full" value={row.revenue} max={maxRevenue}></progress>
                <div className="flex items-center justify-between gap-4 text-xs text-base-content/60">
                  <span>{row.orders} 单</span>
                  <span>转化率 {row.conversion}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      <article className="card border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body gap-5">
          <div>
            <h2 className="text-2xl font-semibold">报表概览</h2>
          </div>

          <div className="divider my-0"></div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-base-200 p-4">
              <div className="font-medium">左上角按钮可隐藏顶部</div>
            </div>
            <RouterLink to="/todo" className="btn btn-outline w-full justify-between">
              切到 Todo 示例
              <span>→</span>
            </RouterLink>
          </div>
        </div>
      </article>
    </section>

    <section className="card border border-base-300 bg-base-100 shadow-sm">
      <div className="card-body gap-4 overflow-x-auto">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="badge badge-outline">明细预览</div>
            <h2 className="mt-3 text-2xl font-semibold">日报明细表</h2>
          </div>
        </div>

        <table className="table table-zebra">
          <thead>
            <tr>
              <th>日期</th>
              <th>订单数</th>
              <th>成交额</th>
              <th>转化率</th>
              <th>备注</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.day}>
                <td className="font-medium">{row.day}</td>
                <td>{row.orders}</td>
                <td>{moneyFormatter.format(row.revenue)}</td>
                <td>{row.conversion}%</td>
                <td>{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  </div>
)

export default Report