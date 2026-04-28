import { computed, type FC, ref, useEffect, watch } from '@rue-js/rue'
import { RouterLink, useRoute } from '@rue-js/router'

const themeStorageKey = 'rue.base.theme'
const reportHeaderStorageKey = 'rue.base.report.hideHeader'

const navItems = [
  { to: '/', label: '首页' },
  { to: '/report', label: '报表' },
  { to: '/todo', label: 'Todo App' },
]

const themes = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'corporate',
  'emerald',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
  'dim',
  'nord',
  'sunset',
]

const themeLabels: Record<string, string> = {
  light: '亮色',
  dark: '暗色',
  cupcake: '纸杯蛋糕',
  bumblebee: '大黄蜂',
  corporate: '企业',
  emerald: '祖母绿',
  synthwave: '合成波',
  retro: '复古',
  cyberpunk: '赛博朋克',
  valentine: '情人节',
  halloween: '万圣节',
  garden: '花园',
  forest: '森林',
  aqua: '海洋蓝',
  lofi: '低保真',
  pastel: '粉彩',
  fantasy: '奇幻',
  wireframe: '线框',
  black: '黑色',
  luxury: '奢华',
  dracula: '德古拉',
  cmyk: 'CMYK',
  autumn: '秋天',
  business: '商务',
  acid: '酸性',
  lemonade: '柠檬水',
  night: '夜间',
  coffee: '咖啡',
  winter: '冬季',
  dim: '昏暗',
  nord: '北欧',
  sunset: '日落',
}

const getStoredTheme = () => localStorage.getItem(themeStorageKey) || 'light'

const getStoredHeaderHidden = () => localStorage.getItem(reportHeaderStorageKey) === '1'

const applyTheme = (theme: string) => {
  document.documentElement.setAttribute('data-theme', theme)
}

const ThemePicker: FC = () => {
  const theme = ref(getStoredTheme())

  useEffect(() => {
    applyTheme(theme.value)
  })

  watch(
    () => theme.value,
    () => {
      applyTheme(theme.value)
      localStorage.setItem(themeStorageKey, theme.value)
    },
  )

  return (
    <select
      aria-label="切换主题"
      className="select select-bordered select-sm w-40"
      onChange={(event: Event) => {
        theme.value = (event.currentTarget as HTMLSelectElement).value
      }}
    >
      {themes.map((name) => (
        <option key={name} value={name} selected={theme.value === name}>
          {themeLabels[name] || name}
        </option>
      ))}
    </select>
  )
}

const Header: FC = () => {
  const route = useRoute()
  const currentPath = computed(() => route.get()?.path || '/')

  return (
    <header className="sticky top-0 z-40 border-b border-base-300/70 bg-base-100/85 backdrop-blur">
      <div className="content-width navbar min-h-0 gap-4 py-3">
        <div className="navbar-start min-w-0">
          <RouterLink to="/" className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-content shadow-lg shadow-primary/20">
              R
            </div>
            <div className="min-w-0">
              <div className="truncate text-base font-semibold sm:text-lg">Rue Base Template</div>
            </div>
          </RouterLink>
        </div>
        <nav className="navbar-center hidden flex-1 justify-center gap-2 md:flex">
          {navItems.map((item) => (
            <RouterLink
              key={item.to}
              to={item.to}
              className={`btn btn-sm ${currentPath.get() === item.to ? 'btn-primary' : 'btn-ghost'}`}
            >
              {item.label}
            </RouterLink>
          ))}
        </nav>
        <div className="navbar-end flex items-center gap-2">
          <ThemePicker />
        </div>
      </div>
    </header>
  )
}

const Footer: FC = () => (
  <footer className="border-t border-base-300/70 bg-base-100/75 backdrop-blur">
    <div className="content-width flex flex-col gap-3 py-6 text-sm text-base-content/70 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="font-semibold text-base-content">Rue Base Template</div>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="badge badge-outline">@rue-js/rue</span>
        <span className="badge badge-outline">@rue-js/router</span>
        <span className="badge badge-outline">DaisyUI Themes</span>
      </div>
    </div>
  </footer>
)

const HeaderToggleButton: FC<{ hidden: boolean; onToggle: () => void }> = (props) => (
  <button
    type="button"
    className="btn btn-circle btn-sm fixed left-3 top-3 z-50 border-base-300 bg-base-100/90 shadow-lg backdrop-blur"
    aria-label={props.hidden ? '显示顶部导航' : '隐藏顶部导航'}
    title={props.hidden ? '显示顶部导航' : '隐藏顶部导航'}
    onClick={props.onToggle}
  >
    {props.hidden ? '显' : '隐'}
  </button>
)

const SiteLayout: FC = (props) => {
  const route = useRoute()
  const reportHeaderHidden = ref(getStoredHeaderHidden())
  const currentPath = computed(() => route.get()?.path || '/')
  const isReportRoute = computed(() => currentPath.get() === '/report')
  const hideHeader = computed(() => isReportRoute.get() && reportHeaderHidden.value)

  watch(
    () => reportHeaderHidden.value,
    () => {
      localStorage.setItem(reportHeaderStorageKey, reportHeaderHidden.value ? '1' : '0')
    },
  )

  return (
    <div className="app-shell">
      <div className="app-surface">
        {!hideHeader.get() && <Header />}
        {isReportRoute.get() && (
          <HeaderToggleButton
            hidden={hideHeader.get()}
            onToggle={() => {
              reportHeaderHidden.value = !reportHeaderHidden.value
            }}
          />
        )}
        <main
          className={`content-width pb-10 ${hideHeader.get() ? 'pt-6 sm:pt-8' : 'pt-6 sm:pt-8'}`}
        >
          {props.children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default SiteLayout
