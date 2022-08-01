import {setActivePinia, createPinia} from 'pinia'
import {describe, test, expect, beforeAll} from 'vitest'

beforeAll(() => {
    setActivePinia(createPinia())
})

// describe('useTodoStore', () => {
//     test('creates a store', () => {
//
//     })
// })



describe('runs', () => {
    test('it works', () => {
        (expect(true) as Vi.Assertion).toBe(true)
    }, 60 * 1000)
})
