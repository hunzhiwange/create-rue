import { computed, type FC, ref, useEffect, watch } from '@rue-js/rue'
import { RouterLink, useRoute } from '@rue-js/router'

const themeStorageKey = 'rue.base.theme'
const headerToggleRoutes = ['/', '/report', '/todo']

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

const getStoredTheme = () => {
  const storedTheme = localStorage.getItem(themeStorageKey)
  return storedTheme && themes.includes(storedTheme) ? storedTheme : 'light'
}

const getHeaderStorageKey = (path: string) => {
  if (path === '/') {
    return 'rue.base.header.hide.home'
  }

  return `rue.base.header.hide.${path.replace(/^\//, '')}`
}

const getStoredHeaderHidden = (path: string) =>
  localStorage.getItem(getHeaderStorageKey(path)) === '1'

const applyTheme = (theme: string) => {
  document.documentElement.setAttribute('data-theme', theme)
}

const ThemePicker: FC = () => {
  const theme = ref(getStoredTheme())

  const applyThemeState = () => {
    const currentTheme = theme.value
    const themePicker = document.querySelector<HTMLSelectElement>('[data-base-theme-picker="true"]')

    applyTheme(currentTheme)

    if (themePicker && themePicker.value !== currentTheme) {
      themePicker.value = currentTheme
    }
  }

  const syncStoredTheme = () => {
    theme.value = getStoredTheme()
    requestAnimationFrame(applyThemeState)
  }

  useEffect(() => {
    localStorage.setItem(themeStorageKey, theme.value)
    requestAnimationFrame(applyThemeState)

    window.addEventListener('storage', syncStoredTheme)
    window.addEventListener('focus', syncStoredTheme)
    document.addEventListener('visibilitychange', syncStoredTheme)

    return () => {
      window.removeEventListener('storage', syncStoredTheme)
      window.removeEventListener('focus', syncStoredTheme)
      document.removeEventListener('visibilitychange', syncStoredTheme)
    }
  }, [])

  watch(
    () => theme.value,
    () => {
      localStorage.setItem(themeStorageKey, theme.value)
      requestAnimationFrame(applyThemeState)
    },
  )

  return (
    <select
      data-base-theme-picker="true"
      aria-label="切换主题"
      className="select select-bordered select-sm w-40"
      onChange={(event: Event) => {
        theme.value = (event.currentTarget as HTMLSelectElement).value
      }}
    >
      {themes.map((name) => (
        <option key={name} value={name}>
          {themeLabels[name] || name}
        </option>
      ))}
    </select>
  )
}

const Header: FC = () => {
  const route = useRoute()
  const currentPath = computed(() => route.get()?.path || '/')
  const navClass = (path: string) =>
    `btn btn-sm ${currentPath.get() === path ? 'btn-primary' : 'btn-ghost'}`.trim()

  const applyHeaderNavState = () => {
    const path = currentPath.get()
    const navLinks = document.querySelectorAll<HTMLElement>('[data-base-nav-path]')

    navLinks.forEach((link) => {
      const targetPath = link.dataset.baseNavPath || ''
      link.className = `btn btn-sm ${path === targetPath ? 'btn-primary' : 'btn-ghost'}`.trim()
    })
  }

  watch(
    () => currentPath.get(),
    () => {
      requestAnimationFrame(applyHeaderNavState)
    },
  )

  useEffect(() => {
    requestAnimationFrame(applyHeaderNavState)
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-base-300/70 bg-base-100/90 backdrop-blur">
      <div className="content-width flex flex-wrap items-center gap-3 py-3">
        <div className="min-w-0 flex-1 md:flex-none">
          <RouterLink to="/" className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-content shadow-lg shadow-primary/20">
              R
            </div>
            <div className="min-w-0">
              <div className="truncate text-base font-semibold sm:text-lg">Rue Base Template</div>
            </div>
          </RouterLink>
        </div>
        <nav className="order-3 flex w-full flex-wrap gap-2 md:order-none md:w-auto md:flex-1 md:justify-center">
          {navItems.map((item) => (
            <RouterLink
              key={item.to}
              to={item.to}
              data-base-nav-path={item.to}
              className={navClass(item.to)}
            >
              <span>{item.label}</span>
            </RouterLink>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:ml-auto">
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
    className="btn btn-circle btn-sm fixed left-3 top-3 z-50 border-base-300 bg-base-100/95 text-base-content shadow-lg backdrop-blur"
    aria-label={props.hidden ? '显示头部和底部' : '隐藏头部和底部'}
    title={props.hidden ? '显示头部和底部' : '隐藏头部和底部'}
    onClick={props.onToggle}
  >
    {props.hidden ? (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ) : (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M3 3l18 18" />
        <path d="M10.6 10.7a3 3 0 0 0 4.2 4.2" />
        <path d="M9.9 5.1A10.9 10.9 0 0 1 12 5c6.5 0 10 7 10 7a21.7 21.7 0 0 1-4 5.2" />
        <path d="M6.6 6.7C4.2 8.3 2.7 10.9 2 12c0 0 3.5 7 10 7 1.8 0 3.4-.5 4.8-1.3" />
      </svg>
    )}
  </button>
)

const SiteLayout: FC = (props) => {
  const route = useRoute()
  const currentPath = computed(() => route.get()?.path || '/')
  const allowHeaderToggle = computed(() => headerToggleRoutes.includes(currentPath.get()))
  const reportHeaderHidden = ref(getStoredHeaderHidden(currentPath.get()))
  const hideHeader = computed(() => allowHeaderToggle.get() && reportHeaderHidden.value)

  watch(
    () => currentPath.get(),
    (path) => {
      reportHeaderHidden.value = allowHeaderToggle.get() ? getStoredHeaderHidden(path) : false
    },
  )

  watch(
    () => reportHeaderHidden.value,
    () => {
      if (!allowHeaderToggle.get()) {
        return
      }

      localStorage.setItem(
        getHeaderStorageKey(currentPath.get()),
        reportHeaderHidden.value ? '1' : '0',
      )
    },
  )

  return (
    <div className="app-shell">
      <div className="app-surface">
        {!hideHeader.get() && <Header />}
        {allowHeaderToggle.get() && (
          <HeaderToggleButton
            hidden={hideHeader.get()}
            onToggle={() => {
              reportHeaderHidden.value = !reportHeaderHidden.value
            }}
          />
        )}
        <main className="content-width pb-10 pt-6 sm:pt-8">{props.children}</main>
        {!hideHeader.get() && <Footer />}
      </div>
    </div>
  )
}

export default SiteLayout
