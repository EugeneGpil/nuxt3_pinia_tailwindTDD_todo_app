import {defineStore} from 'pinia'
import {v4 as uuid} from 'uuid'

export interface Todo {
  id: String
  title: String
  done: Boolean
  createdAt: Date
  updatedAt: Date
}

export interface TodoAdd {
  title: string
}

export interface TodoState {
  items: Todo[]
}

export interface TodoUpdate {
  title?: String
  done?: boolean
}

const state = (): TodoState => ({
  items: [],
})

const getters = {
  getById: (state: TodoState) =>
    (id: String) =>
      state.items.find((item: Todo) => item.id === id),
  getOrderedTodos: (state: TodoState) =>
    state.items.sort((a: Todo, b: Todo) =>
      a.createdAt.getMilliseconds() - b.createdAt.getMilliseconds()
    )
}

const actions = {
  add(partialTodo: TodoAdd) {
    this.items = [
      ...this.items,
      {
        id: uuid(),
        ...partialTodo,
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
  },
  remove(id: String) {
    this.items = this.items.filter((item: Todo) => item.id !== id)
  },
  update(id: String, update: TodoUpdate) {
    this.items.map((item: Todo) =>
      item.id === id
        ? {...item, ...update, updatedAt: new Date()}
        : item
    )
  },
}

export const useTodoStore = defineStore('todoStore', {
  state,
  getters,
  actions,
})
