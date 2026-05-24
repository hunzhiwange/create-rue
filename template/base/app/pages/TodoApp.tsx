import { computed, type FC, ref, useState, watchEffect } from '@rue-js/rue'
import { RouterLink } from '@rue-js/router'

const todoStorageKey = 'rue.base.todos'
const minuteInMs = 60 * 1000
const hourInMs = 60 * minuteInMs
const dayInMs = 24 * hourInMs

type TodoStatus = 'todo' | 'doing' | 'done'
type TodoFilter = 'all' | 'todo' | 'doing' | 'done' | 'archived'

type TodoItem = {
  id: number
  title: string
  archived: boolean
  status: TodoStatus
  createdAt: string
  createdOrder: number
}

type PersistedTodoState = {
  todos: TodoItem[]
  search: string
  activeFilter: TodoFilter
}

const filterOptions: Array<{ key: TodoFilter; label: string }> = [
  { key: 'all', label: '全部' },
  { key: 'todo', label: '待开始' },
  { key: 'doing', label: '进行中' },
  { key: 'done', label: '已完成' },
  { key: 'archived', label: '已归档' },
]

const statusOptions: Array<{ key: TodoStatus; label: string; actionLabel: string }> = [
  { key: 'todo', label: '待开始', actionLabel: '设为待开始' },
  { key: 'doing', label: '进行中', actionLabel: '设为进行中' },
  { key: 'done', label: '已完成', actionLabel: '设为已完成' },
]

const initialTodos: TodoItem[] = [
  {
    id: 1,
    title: '补充报表首页字段与展示规则',
    status: 'doing',
    archived: false,
    createdAt: new Date(Date.now() - 110 * minuteInMs).toISOString(),
    createdOrder: 4,
  },
  {
    id: 2,
    title: '接入真实接口替换示例数据',
    status: 'todo',
    archived: false,
    createdAt: new Date(Date.now() - 65 * minuteInMs).toISOString(),
    createdOrder: 3,
  },
  {
    id: 3,
    title: '复查主题切换和头部隐藏体验',
    status: 'done',
    archived: false,
    createdAt: new Date(Date.now() - 20 * hourInMs).toISOString(),
    createdOrder: 2,
  },
  {
    id: 4,
    title: '归档旧版原型页面',
    status: 'done',
    archived: true,
    createdAt: new Date(Date.now() - 30 * hourInMs).toISOString(),
    createdOrder: 1,
  },
]

const padDatePart = (value: number) => String(value).padStart(2, '0')

const formatCalendarDateTime = (value: Date, includeYear = true) => {
  const month = padDatePart(value.getMonth() + 1)
  const day = padDatePart(value.getDate())
  const hours = padDatePart(value.getHours())
  const minutes = padDatePart(value.getMinutes())

  if (includeYear) {
    return `${value.getFullYear()}-${month}-${day} ${hours}:${minutes}`
  }

  return `${month}-${day} ${hours}:${minutes}`
}

const getNextTodoId = (todos: TodoItem[]) =>
  todos.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1

const getNextCreatedOrder = (todos: TodoItem[]) =>
  todos.reduce((maxOrder, item) => Math.max(maxOrder, item.createdOrder), 0) + 1

const isSameCalendarDay = (left: Date, right: Date) =>
  left.getFullYear() === right.getFullYear() &&
  left.getMonth() === right.getMonth() &&
  left.getDate() === right.getDate()

const isTodoStatus = (value: unknown): value is TodoStatus =>
  value === 'todo' || value === 'doing' || value === 'done'

const isTodoFilter = (value: unknown): value is TodoFilter =>
  value === 'all' ||
  value === 'todo' ||
  value === 'doing' ||
  value === 'done' ||
  value === 'archived'

const parseCreatedAtValue = (value: string, now = new Date()) => {
  const directDate = new Date(value)
  if (!Number.isNaN(directDate.getTime())) {
    return directDate
  }

  if (value === '刚刚') {
    return new Date(now.getTime() - 30 * 1000)
  }

  const minutesAgoMatch = /^(\d+)\s*分钟前$/.exec(value)
  if (minutesAgoMatch) {
    return new Date(now.getTime() - Number(minutesAgoMatch[1]) * minuteInMs)
  }

  const hoursAgoMatch = /^(\d+)\s*小时前$/.exec(value)
  if (hoursAgoMatch) {
    return new Date(now.getTime() - Number(hoursAgoMatch[1]) * hourInMs)
  }

  const todayMatch = /^今天\s+(\d{1,2}):(\d{2})$/.exec(value)
  if (todayMatch) {
    return new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      Number(todayMatch[1]),
      Number(todayMatch[2]),
    )
  }

  const yesterdayMatch = /^昨天\s+(\d{1,2}):(\d{2})$/.exec(value)
  if (yesterdayMatch) {
    const yesterday = new Date(now)
    yesterday.setDate(yesterday.getDate() - 1)

    return new Date(
      yesterday.getFullYear(),
      yesterday.getMonth(),
      yesterday.getDate(),
      Number(yesterdayMatch[1]),
      Number(yesterdayMatch[2]),
    )
  }

  return null
}

const normalizeCreatedAt = (value: string, fallbackCreatedOrder: number) => {
  const parsed = parseCreatedAtValue(value)
  if (parsed) {
    return parsed.toISOString()
  }

  return new Date(Date.now() - Math.max(1, fallbackCreatedOrder) * minuteInMs).toISOString()
}

const formatTodoCreatedAt = (value: string, now = new Date()) => {
  const parsed = parseCreatedAtValue(value, now)
  if (!parsed) {
    return value
  }

  const diffMs = now.getTime() - parsed.getTime()
  if (diffMs < 0) {
    return formatCalendarDateTime(parsed)
  }

  if (diffMs < minuteInMs) {
    return '刚刚'
  }

  if (diffMs < hourInMs) {
    return `${Math.max(1, Math.floor(diffMs / minuteInMs))} 分钟前`
  }

  if (isSameCalendarDay(parsed, now)) {
    return `${Math.max(1, Math.floor(diffMs / hourInMs))} 小时前`
  }

  const yesterday = new Date(now)
  yesterday.setDate(yesterday.getDate() - 1)
  if (diffMs < 2 * dayInMs && isSameCalendarDay(parsed, yesterday)) {
    return `昨天 ${padDatePart(parsed.getHours())}:${padDatePart(parsed.getMinutes())}`
  }

  if (parsed.getFullYear() === now.getFullYear()) {
    return formatCalendarDateTime(parsed, false)
  }

  return formatCalendarDateTime(parsed)
}

const getTodoCreatedAtTime = (item: TodoItem) => {
  const parsed = parseCreatedAtValue(item.createdAt)
  if (!parsed) {
    return 0
  }

  return parsed.getTime()
}

const getTodoStorage = () => {
  if (typeof globalThis === 'undefined' || !('localStorage' in globalThis)) {
    return null
  }

  try {
    return globalThis.localStorage
  } catch {
    return null
  }
}

const parsePersistedTodoItem = (value: unknown, fallbackCreatedOrder: number): TodoItem | null => {
  if (!value || typeof value !== 'object') {
    return null
  }

  const candidate = value as Partial<TodoItem>
  if (
    typeof candidate.id !== 'number' ||
    typeof candidate.title !== 'string' ||
    typeof candidate.archived !== 'boolean' ||
    typeof candidate.createdAt !== 'string' ||
    !isTodoStatus(candidate.status)
  ) {
    return null
  }

  return {
    id: candidate.id,
    title: candidate.title,
    archived: candidate.archived,
    status: candidate.status,
    createdAt: normalizeCreatedAt(candidate.createdAt, fallbackCreatedOrder),
    createdOrder:
      typeof candidate.createdOrder === 'number' && Number.isFinite(candidate.createdOrder)
        ? candidate.createdOrder
        : fallbackCreatedOrder,
  }
}

const loadPersistedTodos = (value: unknown) => {
  if (!Array.isArray(value)) {
    return null
  }

  const todos = value
    .map((item, index, source) => parsePersistedTodoItem(item, source.length - index))
    .filter((item): item is TodoItem => item !== null)

  if (value.length === 0 || todos.length > 0) {
    return todos
  }

  return initialTodos
}

const loadPersistedTodoState = (): PersistedTodoState | null => {
  const storage = getTodoStorage()
  if (!storage) {
    return null
  }

  try {
    const raw = storage.getItem(todoStorageKey)
    if (!raw) {
      return null
    }

    const parsed = JSON.parse(raw) as unknown
    if (Array.isArray(parsed)) {
      return {
        todos: loadPersistedTodos(parsed) ?? initialTodos,
        search: '',
        activeFilter: 'all',
      }
    }

    if (!parsed || typeof parsed !== 'object') {
      return null
    }

    const candidate = parsed as {
      todos?: unknown
      search?: unknown
      activeFilter?: unknown
    }

    return {
      todos: loadPersistedTodos(candidate.todos) ?? initialTodos,
      search: typeof candidate.search === 'string' ? candidate.search : '',
      activeFilter: isTodoFilter(candidate.activeFilter) ? candidate.activeFilter : 'all',
    }
  } catch {
    return null
  }
}

const persistTodoState = (state: PersistedTodoState) => {
  const storage = getTodoStorage()
  if (!storage) {
    return
  }

  try {
    storage.setItem(todoStorageKey, JSON.stringify(state))
  } catch {}
}

const statusMeta: Record<
  TodoStatus,
  {
    label: string
    badgeClass: string
    dotClass: string
    cardClass: string
  }
> = {
  todo: {
    label: '待开始',
    badgeClass: 'badge badge-warning badge-outline',
    dotClass: 'bg-warning',
    cardClass: 'border-warning/30',
  },
  doing: {
    label: '进行中',
    badgeClass: 'badge badge-info badge-outline',
    dotClass: 'bg-info',
    cardClass: 'border-info/30',
  },
  done: {
    label: '已完成',
    badgeClass: 'badge badge-success badge-outline',
    dotClass: 'bg-success',
    cardClass: 'border-success/30',
  },
}

const TodoApp: FC = () => {
  const persistedState = loadPersistedTodoState()
  const initialStateTodos = persistedState?.todos ?? initialTodos
  const initialActiveFilter: TodoFilter = persistedState?.activeFilter ?? 'all'
  const [todos, setTodos] = useState<TodoItem[]>(initialStateTodos)
  const [draft, setDraft] = useState('')
  const [search, setSearch] = useState(persistedState?.search ?? '')
  const activeFilter = ref<TodoFilter>(initialActiveFilter)
  const setActiveFilter = (nextFilter: TodoFilter) => {
    activeFilter.value = nextFilter
  }
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingTitle, setEditingTitle] = useState('')
  const nextId = ref(getNextTodoId(initialStateTodos))
  const nextCreatedOrder = ref(getNextCreatedOrder(initialStateTodos))

  watchEffect(() => {
    persistTodoState({
      todos,
      search: search.value,
      activeFilter: activeFilter.value,
    })
  })

  const counts = computed(() => {
    return {
      total: todos.filter((item) => !item.archived).length,
      todo: todos.filter((item) => !item.archived && item.status === 'todo').length,
      doing: todos.filter((item) => !item.archived && item.status === 'doing').length,
      done: todos.filter((item) => !item.archived && item.status === 'done').length,
      archived: todos.filter((item) => item.archived).length,
    }
  })

  const visibleTodos = computed(() => {
    const keyword = search.value.trim().toLowerCase()

    return todos
      .filter((item) => {
        const matchesKeyword = !keyword || item.title.toLowerCase().includes(keyword)
        if (!matchesKeyword) {
          return false
        }

        if (activeFilter.value === 'archived') {
          return item.archived
        }

        if (item.archived) {
          return false
        }

        if (activeFilter.value === 'all') {
          return true
        }

        return item.status === activeFilter.value
      })
      .sort((left, right) => {
        const createdAtDiff = getTodoCreatedAtTime(right) - getTodoCreatedAtTime(left)
        if (createdAtDiff !== 0) {
          return createdAtDiff
        }

        return right.createdOrder - left.createdOrder
      })
  })

  const addTodo = () => {
    const title = draft.value.trim()
    if (!title) {
      return
    }

    const nextTodo: TodoItem = {
      id: nextId.value++,
      title,
      status: 'todo',
      archived: false,
      createdAt: new Date().toISOString(),
      createdOrder: nextCreatedOrder.value++,
    }

    setTodos((current) => [nextTodo, ...current])
    setDraft('')
  }

  const removeTodo = (id: number) => {
    setTodos((current) => current.filter((item) => item.id !== id))
    if (editingId.value === id) {
      setEditingId(null)
      setEditingTitle('')
    }
  }

  const updateStatus = (id: number, status: TodoStatus) => {
    setTodos((current) =>
      current.map((item) => (item.id === id ? { ...item, status, archived: false } : item)),
    )
  }

  const toggleArchived = (id: number) => {
    setTodos((current) =>
      current.map((item) => (item.id === id ? { ...item, archived: !item.archived } : item)),
    )
  }

  const startEditing = (item: TodoItem) => {
    setEditingId(item.id)
    setEditingTitle(item.title)
  }

  const cancelEditing = () => {
    setEditingId(null)
    setEditingTitle('')
  }

  const saveEditing = (id: number) => {
    const title = editingTitle.value.trim()
    if (!title) {
      return
    }

    setTodos((current) => current.map((item) => (item.id === id ? { ...item, title } : item)))
    cancelEditing()
  }

  return (
    <div className="space-y-6 pb-4">
      <section className="hero border border-base-300 bg-base-100 shadow-xl">
        <div className="hero-content flex-col items-start gap-8 px-6 py-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Todo App 已作为 base 模板内置页面
            </h1>
            <div className="flex flex-wrap gap-3">
              <RouterLink to="/" className="btn btn-outline">
                返回默认简报
              </RouterLink>
            </div>
          </div>

          <div className="stats stats-vertical bg-base-200 shadow sm:stats-horizontal">
            <div className="stat px-6 py-4">
              <div className="stat-title">活跃任务</div>
              <div className="stat-value text-primary">{counts.get().total}</div>
            </div>
            <div className="stat px-6 py-4">
              <div className="stat-title">已完成</div>
              <div className="stat-value text-success">{counts.get().done}</div>
            </div>
            <div className="stat px-6 py-4">
              <div className="stat-title">已归档</div>
              <div className="stat-value text-secondary">{counts.get().archived}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="card overflow-hidden border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body gap-6">
          <div className="grid gap-4 lg:grid-cols-[1.3fr_0.9fr]">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">新增任务</span>
              </div>
              <div className="join w-full">
                <input
                  className="input input-bordered join-item w-full"
                  value={draft.value}
                  placeholder="例如：把日报页接入真实 API"
                  onInput={(event: any) => {
                    setDraft((event.target as HTMLInputElement).value)
                  }}
                  onKeydown={(event: KeyboardEvent) => {
                    if (event.key === 'Enter' && !event.isComposing) {
                      event.preventDefault()
                      addTodo()
                    }
                  }}
                />
                <button className="btn btn-primary join-item" onClick={addTodo}>
                  添加
                </button>
              </div>
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">搜索任务</span>
              </div>
              <input
                className="input input-bordered w-full"
                value={search.value}
                placeholder="按标题筛选任务"
                onInput={(event: any) => {
                  setSearch((event.target as HTMLInputElement).value)
                }}
              />
            </label>
          </div>

          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter.key}
                className={`btn btn-sm ${
                  activeFilter.value === filter.key
                    ? 'btn-primary'
                    : 'btn-ghost border border-base-300'
                }`}
                onClick={() => {
                  setActiveFilter(filter.key)
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-warning/30 bg-warning/10 p-5">
              <p className="text-sm text-base-content/70">待开始</p>
              <p className="mt-2 text-3xl font-semibold">{counts.get().todo}</p>
            </div>
            <div className="rounded-2xl border border-info/30 bg-info/10 p-5">
              <p className="text-sm text-base-content/70">进行中</p>
              <p className="mt-2 text-3xl font-semibold">{counts.get().doing}</p>
            </div>
            <div className="rounded-2xl border border-success/30 bg-success/10 p-5">
              <p className="text-sm text-base-content/70">已完成</p>
              <p className="mt-2 text-3xl font-semibold">{counts.get().done}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4">
        {visibleTodos.get().map((item) => {
          const isEditing = editingId.value === item.id
          const editingValue = isEditing ? editingTitle.value : item.title
          const meta = statusMeta[item.status]

          return (
            <article
              key={item.id}
              className={`card border bg-base-100 shadow-sm transition-all ${meta.cardClass} ${
                item.archived ? 'opacity-75' : 'hover:-translate-y-0.5 hover:shadow-md'
              }`}
            >
              <div className="card-body gap-4">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-block h-2.5 w-2.5 rounded-full ${meta.dotClass}`}
                      ></span>
                      <span className={meta.badgeClass}>{meta.label}</span>
                      {item.archived && (
                        <span className="badge badge-secondary badge-outline">已归档</span>
                      )}
                      <span className="text-xs text-base-content/50">
                        创建于 {formatTodoCreatedAt(item.createdAt)}
                      </span>
                    </div>

                    <h2
                      className={`text-xl font-semibold ${
                        isEditing
                          ? 'hidden'
                          : item.status === 'done'
                            ? 'text-base-content/50 line-through'
                            : 'text-base-content'
                      }`}
                    >
                      {item.title}
                    </h2>

                    <div className={`flex flex-col gap-3 sm:flex-row ${isEditing ? '' : 'hidden'}`}>
                      <input
                        className="input input-bordered w-full"
                        value={editingValue}
                        onInput={(event: any) => {
                          setEditingTitle((event.target as HTMLInputElement).value)
                        }}
                        onKeydown={(event: KeyboardEvent) => {
                          if (event.key === 'Enter') {
                            saveEditing(item.id)
                          }
                          if (event.key === 'Escape') {
                            cancelEditing()
                          }
                        }}
                      />
                      <div className="flex gap-2">
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => saveEditing(item.id)}
                          type="button"
                        >
                          保存
                        </button>
                        <button
                          className="btn btn-ghost btn-sm"
                          onClick={cancelEditing}
                          type="button"
                        >
                          取消
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {statusOptions.map((option) => (
                        <button
                          key={option.key}
                          className={`btn btn-xs ${
                            item.status === option.key
                              ? 'btn-neutral'
                              : 'btn-ghost border border-base-300'
                          }`}
                          onClick={() => updateStatus(item.id, option.key)}
                          type="button"
                        >
                          {option.actionLabel}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {!isEditing && (
                      <button
                        className="btn btn-sm btn-outline"
                        onClick={() => startEditing(item)}
                        type="button"
                      >
                        改名
                      </button>
                    )}
                    <button
                      className="btn btn-sm btn-outline btn-secondary"
                      onClick={() => toggleArchived(item.id)}
                      type="button"
                    >
                      {item.archived ? '恢复' : '归档'}
                    </button>
                    <button
                      className="btn btn-sm btn-outline btn-error"
                      onClick={() => removeTodo(item.id)}
                      type="button"
                    >
                      删除
                    </button>
                  </div>
                </div>
              </div>
            </article>
          )
        })}

        {!visibleTodos.get().length && (
          <div className="card border border-dashed border-base-300 bg-base-100 shadow-sm">
            <div className="card-body items-center py-14 text-center">
              <h2 className="text-xl font-semibold">当前筛选下没有任务</h2>
              <p className="max-w-md text-sm leading-6 text-base-content/70">
                试试切换筛选、搜索关键字，或者直接新增一条任务。
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default TodoApp
