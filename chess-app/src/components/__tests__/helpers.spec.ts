import { expect, test } from 'vitest'

import { generateSquaresIds } from '../../helpers'

test('generates correct sequence of squares ids', () => {
  const result = generateSquaresIds()
  const expectedLength = 64

  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(expectedLength)

  for (let row = 8; row > 0; row--) {
    for (let col = 1; col <= 8; col++) {
      const colChar = String.fromCharCode('a'.charCodeAt(0) + col - 1)
      const squareId = `${colChar}${row}`
      expect(result).toContain(squareId)
    }
  }
})
