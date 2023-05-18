import { test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Square from '../Square.vue'

test('renders with correct classes and text', () => {
  const wrapper = mount(Square, {
    props: {
      squareId: 'a1',
      isSquareWhite: true
    }
  })

  expect(wrapper.classes()).toContain('square-white')
  expect(wrapper.classes()).not.toContain('square-black')
  expect(wrapper.text()).toBe('a')
})

test('renders with active class when square is active', () => {
  const activeSquareId = 'a1'
  const wrapper = mount(Square, {
    props: {
      squareId: 'a1',
      isSquareWhite: true
    },
    global: {
      provide: {
        activeSquareId
      }
    }
  })
  expect(wrapper.classes()).toContain('square-clicked')
})

test('calls handleSquareClicked method on click', async () => {
  const handleSquareClicked = vi.fn()
  const squareId = 'a1'
  const wrapper = mount(Square, {
    props: {
      squareId,
      isSquareWhite: true
    },
    global: {
      provide: {
        handleSquareClicked
      }
    }
  })

  await wrapper.trigger('click')

  expect(handleSquareClicked).toHaveBeenCalledWith(squareId)
})
