import { mount } from '@vue/test-utils'
import { test, expect, vi } from 'vitest'

import Chessboard from '../Chessboard.vue'
import Square from '../Square.vue'

vi.mock('@/helpers', () => ({
  //prettier-ignore
  generateSquaresIds: vi.fn().mockReturnValue([
      'a1', 'a2', 'a3', 'a4',
      'a5', 'a6', 'a7', 'a8',
      'b1', 'b2', 'b3', 'b4',
      'b5', 'b6', 'b7', 'b8'
    ])
}))

test('renders the correct number of squares', () => {
  const wrapper = mount(Chessboard)

  const squares = wrapper.findAllComponents(Square)
  expect(squares.length).toBe(16)
})

test('passes correct props to Square components', () => {
  const wrapper = mount(Chessboard)

  const squares = wrapper.findAllComponents(Square)
  squares.forEach((square, index) => {
    expect(square.props()).toEqual({
      squareId: square.vm.$props.squareId,
      isSquareWhite: square.vm.$props.isSquareWhite
    })
    //prettier-ignore
    expect(square.props('squareId')).toBe(
      [
          'a1', 'a2', 'a3', 'a4',
          'a5', 'a6', 'a7', 'a8',
          'b1', 'b2', 'b3', 'b4',
          'b5', 'b6', 'b7', 'b8'
      ][index]
    )
    expect(typeof square.props('isSquareWhite')).toBe('boolean')
  })
})

test('calculates isSquareWhite correctly', () => {
  const wrapper = mount(Chessboard)

  expect(wrapper.vm.isSquareWhite(0)).toBe(true) // a1
  expect(wrapper.vm.isSquareWhite(1)).toBe(false) // a2
  expect(wrapper.vm.isSquareWhite(8)).toBe(false) // b1
  expect(wrapper.vm.isSquareWhite(9)).toBe(true) // b2
})
