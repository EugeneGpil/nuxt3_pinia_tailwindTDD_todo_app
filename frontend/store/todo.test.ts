import {describe, test, expect} from 'vitest'

describe('runs', () => {
    test('it works', () => {
        (expect as Vi.ExpectStatic)(true).toBe(true)
    }, 60 * 1000)
})
