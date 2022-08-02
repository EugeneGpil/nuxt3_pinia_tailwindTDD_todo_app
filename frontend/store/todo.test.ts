import {setActivePinia, createPinia} from 'pinia'
import {describe, test, expect, beforeAll} from 'vitest'
import {useTodoStore} from '~/store/todo'

beforeAll(() => {
  setActivePinia(createPinia())
})

describe('useTodoStore', () => {
  test('creates a store', () => {
    const store = useTodoStore();
    (expect(store) as Vi.Assertion).toBeDefined()
  }, undefined)
})
