import { computed, type FC, ref, useState, watch } from '@rue-js/rue'
import { RouterLink } from '@rue-js/router'

const todoStorageKey = 'rue.base.todos'

type TodoStatus = 'todo' | 'doing' | 'done'
type TodoFilter = 'all' | 'todo' | 'doing' | 'done' | 'archived'

type TodoItem = {
  id: number
  title: string
  archived: boolean
  status: TodoStatus
  createdAt: string
}

const filterOptions: Array<{ key: TodoFilter; label: string }> = [
  { key: 'all', label: '全部' },
  { key: 'todo', label: '待开始' },
  { key: 'doing', label: '进行中' },
  { key: 'done', label: '已完成' },
  { key: 'archived', label: '已归档' },
]

const statusOptions: Array<{ key: TodoStatus; label: string }> = [
  { key: 'todo', label: '待开始' },
  { key: 'doing', label: '进行中' },
  { key: 'done', label: '已完成' },
]

const initialTodos: TodoItem[] = [
  {
    id: 1,
    title: '补充报表首页字段与展示规则',
    status: 'doing',
    archived: false,
    createdAt: '今天 09:30',
  },
  {
    id: 2,
    title: '接入真实接口替换示例数据',
    status: 'todo',
    archived: false,
    createdAt: '今天 10:05',
  },
  {
    id: 3,
    title: '复查主题切换和头部隐藏体验',
    status: 'done',
    archived: false,
    createdAt: '昨天 18:20',
  },
  {
    id: 4,
    title: '归档旧版原型页面',
    status: 'done',
    archived: true,
    createdAt: '昨天 14:05',
  },
]

const getStoredTodos = (): TodoItem[] => {
  const raw = localStorage.getItem(todoStorageKey)
  if (!raw) {
    return initialTodos
  }

  try {
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) {
      return initialTodos
    }

    return parsed.filter(
      (item) =>
        item &&
        typeof item.id === 'number' &&
        typeof item.title === 'string' &&
        typeof item.archived === 'boolean' &&
        typeof item.status === 'string' &&
        typeof item.createdAt === 'string',
    ) as TodoItem[]
  } catch {
    return initialTodos
  }
}

const getNextTodoId = (todos: TodoItem[]) =>
  todos.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1

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

const EditingTitleInput: FC<{
  initialTitle: string
  onSave: (title: string) => void
  onCancel: () => void
}> = (props) => {
  const [title, setTitle] = useState(props.initialTitle)

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <input
        className="input input-bordered w-full"
        value={title.value}
        onInput={(event: any) => {
          setTitle((event.target as HTMLInputElement).value)
        }}
        onKeydown={(event: KeyboardEvent) => {
          if (event.key === 'Enter') {
            props.onSave(title.value.trim())
          }
          if (event.key === 'Escape') {
            props.onCancel()
          }
        }}
      />
      <div className="flex gap-2">
        <button className="btn btn-primary btn-sm" onClick={() => props.onSave(title.value.trim())}>
          保存
        </button>
        <button className="btn btn-ghost btn-sm" onClick={props.onCancel}>
          取消
        </button>
      </div>
    </div>
  )
}

const TodoApp: FC = () => {
  const todos = ref<TodoItem[]>(getStoredTodos())
  const draft = ref('')
  const search = ref('')
  const activeFilter = ref<TodoFilter>('all')
  const editingId = ref<number | null>(null)
  const nextId = ref(getNextTodoId(todos.value))

  watch(
    () => todos.value,
    () => {
      localStorage.setItem(todoStorageKey, JSON.stringify(todos.value))
      nextId.value = getNextTodoId(todos.value)
    },
  )

  const counts = computed(() => ({
    total: todos.value.filter((item) => !item.archived).length,
    todo: todos.value.filter((item) => !item.archived && item.status === 'todo').length,
    doing: todos.value.filter((item) => !item.archived && item.status === 'doing').length,
    done: todos.value.filter((item) => !item.archived && item.status === 'done').length,
    archived: todos.value.filter((item) => item.archived).length,
  }))

  const visibleTodos = computed(() => {
    const keyword = search.value.trim().toLowerCase()

    return todos.value.filter((item) => {
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
  })

  const addTodo = () => {
    const title = draft.value.trim()
    if (!title) {
      return
    }

    todos.value = [
      {
        id: nextId.value++,
        title,
        status: 'todo',
        archived: false,
        createdAt: '刚刚',
      },
      ...todos.value,
    ]
    draft.value = ''
  }

  const removeTodo = (id: number) => {
    todos.value = todos.value.filter((item) => item.id !== id)
    if (editingId.value === id) {
      editingId.value = null
    }
  }

  const updateStatus = (id: number, status: TodoStatus) => {
    todos.value = todos.value.map((item) =>
      item.id === id ? { ...item, status, archived: false } : item,
    )
  }

  const toggleArchived = (id: number) => {
    todos.value = todos.value.map((item) =>
      item.id === id ? { ...item, archived: !item.archived } : item,
    )
  }

  const startEditing = (item: TodoItem) => {
    editingId.value = item.id
  }

  const cancelEditing = () => {
    editingId.value = null
  }

  const saveEditing = (id: number, title: string) => {
    if (!title) {
      return
    }

    todos.value = todos.value.map((item) => (item.id === id ? { ...item, title } : item))
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
                    draft.value = (event.target as HTMLInputElement).value
                  }}
                  onKeydown={(event: KeyboardEvent) => {
                    if (event.key === 'Enter') {
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

      <section className="grid gap-4">
        {visibleTodos.get().length ? (
          visibleTodos.get().map((item) => {
            const meta = statusMeta[item.status]
            const isEditing = editingId.value === item.id

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
                          创建于 {item.createdAt}
                        </span>
                      </div>

                      {!isEditing && (
                        <h2
                          className={`text-xl font-semibold ${
                            item.status === 'done'
                              ? 'text-base-content/50 line-through'
                              : 'text-base-content'
                          }`}
                        >
                          {item.title}
                        </h2>
                      )}

                      {isEditing && (
                        <EditingTitleInput
                          key={item.id}
                          initialTitle={item.title}
                          onSave={(title) => saveEditing(item.id, title)}
                          onCancel={cancelEditing}
                        />
                      )}

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
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 lg:justify-end">
                      {!isEditing && (
                        <button
                          className="btn btn-sm btn-outline"
                          onClick={() => startEditing(item)}
                        >
                          改名
                        </button>
                      )}
                      <button
                        className="btn btn-sm btn-outline btn-secondary"
                        onClick={() => toggleArchived(item.id)}
                      >
                        {item.archived ? '恢复' : '归档'}
                      </button>
                      <button
                        className="btn btn-sm btn-outline btn-error"
                        onClick={() => removeTodo(item.id)}
                      >
                        删除
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            )
          })
        ) : (
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
