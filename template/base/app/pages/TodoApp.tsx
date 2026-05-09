import { computed, type FC, ref, watchEffect } from '@rue-js/rue'
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

const getClosestTodoActionElement = (target: EventTarget | null) => {
  if (target instanceof Element) {
    return target.closest<HTMLElement>('[data-todo-action]')
  }

  if (target instanceof Node) {
    return target.parentElement?.closest<HTMLElement>('[data-todo-action]') ?? null
  }

  return null
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
  const todos = ref<TodoItem[]>(initialStateTodos)
  const draft = ref('')
  const search = ref(persistedState?.search ?? '')
  const activeFilter = ref<TodoFilter>(persistedState?.activeFilter ?? 'all')
  const editingId = ref<number | null>(null)
  const editingTitle = ref('')
  const nextId = ref(getNextTodoId(initialStateTodos))
  const nextCreatedOrder = ref(getNextCreatedOrder(initialStateTodos))
  const todosVersion = ref(0)

  const syncTodos = (nextTodos: TodoItem[]) => {
    todos.value = nextTodos
    todosVersion.value += 1
  }

  watchEffect(() => {
    void todosVersion.value
    persistTodoState({
      todos: todos.value,
      search: search.value,
      activeFilter: activeFilter.value,
    })
  })

  const counts = computed(() => {
    void todosVersion.value

    return {
      total: todos.value.filter((item) => !item.archived).length,
      todo: todos.value.filter((item) => !item.archived && item.status === 'todo').length,
      doing: todos.value.filter((item) => !item.archived && item.status === 'doing').length,
      done: todos.value.filter((item) => !item.archived && item.status === 'done').length,
      archived: todos.value.filter((item) => item.archived).length,
    }
  })

  const visibleTodos = computed(() => {
    void todosVersion.value
    const keyword = search.value.trim().toLowerCase()

    return todos.value
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

  const visibleTodoCards = computed(() => {
    const currentEditingId = editingId.value

    return visibleTodos.get().map((item) => ({
      item,
      meta: statusMeta[item.status],
      isEditing: currentEditingId === item.id,
    }))
  })

  const addTodo = () => {
    const title = draft.value.trim()
    if (!title) {
      return
    }

    syncTodos([
      {
        id: nextId.value++,
        title,
        status: 'todo',
        archived: false,
        createdAt: new Date().toISOString(),
        createdOrder: nextCreatedOrder.value++,
      },
      ...todos.value,
    ])
    draft.value = ''
  }

  const removeTodo = (id: number) => {
    syncTodos(todos.value.filter((item) => item.id !== id))
    if (editingId.value === id) {
      cancelEditing()
    }
  }

  const updateStatus = (id: number, status: TodoStatus) => {
    syncTodos(
      todos.value.map((item) => (item.id === id ? { ...item, status, archived: false } : item)),
    )
  }

  const toggleArchived = (id: number) => {
    syncTodos(
      todos.value.map((item) => (item.id === id ? { ...item, archived: !item.archived } : item)),
    )
  }

  const startEditing = (item: TodoItem) => {
    editingId.value = item.id
    editingTitle.value = item.title
  }

  const cancelEditing = () => {
    editingId.value = null
    editingTitle.value = ''
  }

  const saveEditing = (id: number) => {
    const title = editingTitle.value.trim()
    if (!title) {
      return
    }

    syncTodos(todos.value.map((item) => (item.id === id ? { ...item, title } : item)))
    cancelEditing()
  }

  const handleTodoListClick = (event: MouseEvent) => {
    const actionElement = getClosestTodoActionElement(event.target)

    if (!actionElement) {
      return
    }

    const action = actionElement.dataset.todoAction
    const id = Number(actionElement.dataset.todoId)

    if (!Number.isFinite(id)) {
      return
    }

    if (action === 'status') {
      const status = actionElement.dataset.todoStatus
      if (isTodoStatus(status)) {
        updateStatus(id, status)
      }
      return
    }

    if (action === 'start-editing') {
      const item = todos.value.find((candidate) => candidate.id === id)
      if (item) {
        startEditing(item)
      }
      return
    }

    if (action === 'save-editing') {
      saveEditing(id)
      return
    }

    if (action === 'cancel-editing') {
      cancelEditing()
      return
    }

    if (action === 'toggle-archived') {
      toggleArchived(id)
      return
    }

    if (action === 'remove') {
      removeTodo(id)
    }
  }

  const handleTodoListInput = (event: Event) => {
    if (!(event.target instanceof HTMLInputElement)) {
      return
    }

    const target = event.target
    if (!target.matches('[data-todo-edit-input]')) {
      return
    }

    editingTitle.value = target.value
  }

  const handleTodoListKeydown = (event: KeyboardEvent) => {
    if (!(event.target instanceof HTMLInputElement)) {
      return
    }

    const target = event.target
    if (!target.matches('[data-todo-edit-input]')) {
      return
    }

    const id = Number(target.dataset.todoId)
    if (!Number.isFinite(id)) {
      return
    }

    if (event.key === 'Enter' && !event.isComposing) {
      event.preventDefault()
      saveEditing(id)
    }

    if (event.key === 'Escape') {
      cancelEditing()
    }
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
                    draft.value = (event.target as HTMLInputElement).value
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
                  search.value = (event.target as HTMLInputElement).value
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
                  activeFilter.value = filter.key
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

      <section
        className="grid gap-4"
        onClick={handleTodoListClick}
        onInput={handleTodoListInput}
        onKeydown={handleTodoListKeydown}
      >
        {visibleTodoCards.get().map((card) => (
          <article
            key={card.item.id}
            className={`card border bg-base-100 shadow-sm transition-all ${card.meta.cardClass} ${
              card.item.archived ? 'opacity-75' : 'hover:-translate-y-0.5 hover:shadow-md'
            }`}
          >
            <div className="card-body gap-4">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-block h-2.5 w-2.5 rounded-full ${card.meta.dotClass}`}
                    ></span>
                    <span className={card.meta.badgeClass}>{card.meta.label}</span>
                    {card.item.archived && (
                      <span className="badge badge-secondary badge-outline">已归档</span>
                    )}
                    <span className="text-xs text-base-content/50">
                      创建于 {formatTodoCreatedAt(card.item.createdAt)}
                    </span>
                  </div>

                  {!card.isEditing && (
                    <h2
                      className={`text-xl font-semibold ${
                        card.item.status === 'done'
                          ? 'text-base-content/50 line-through'
                          : 'text-base-content'
                      }`}
                    >
                      {card.item.title}
                    </h2>
                  )}

                  {card.isEditing && (
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <input
                        className="input input-bordered w-full"
                        data-todo-edit-input="true"
                        data-todo-id={String(card.item.id)}
                        value={editingTitle.value}
                      />
                      <div className="flex gap-2">
                        <button
                          className="btn btn-primary btn-sm"
                          data-todo-action="save-editing"
                          data-todo-id={String(card.item.id)}
                          type="button"
                        >
                          保存
                        </button>
                        <button
                          className="btn btn-ghost btn-sm"
                          data-todo-action="cancel-editing"
                          data-todo-id={String(card.item.id)}
                          type="button"
                        >
                          取消
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {statusOptions.map((option) => (
                      <button
                        key={option.key}
                        className={`btn btn-xs ${
                          card.item.status === option.key
                            ? 'btn-neutral'
                            : 'btn-ghost border border-base-300'
                        }`}
                        data-todo-action="status"
                        data-todo-id={String(card.item.id)}
                        data-todo-status={option.key}
                        type="button"
                      >
                        {option.actionLabel}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {!card.isEditing && (
                    <button
                      className="btn btn-sm btn-outline"
                      data-todo-action="start-editing"
                      data-todo-id={String(card.item.id)}
                      type="button"
                    >
                      改名
                    </button>
                  )}
                  <button
                    className="btn btn-sm btn-outline btn-secondary"
                    data-todo-action="toggle-archived"
                    data-todo-id={String(card.item.id)}
                    type="button"
                  >
                    {card.item.archived ? '恢复' : '归档'}
                  </button>
                  <button
                    className="btn btn-sm btn-outline btn-error"
                    data-todo-action="remove"
                    data-todo-id={String(card.item.id)}
                    type="button"
                  >
                    删除
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}

        {!visibleTodoCards.get().length && (
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
