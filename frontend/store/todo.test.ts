import {describe, test, expect} from 'vitest'

describe('runs', () => {
    test('it works', () => {
        (expect(true) as Vi.Assertion).toBe(true)
    }, 60 * 1000)
})
