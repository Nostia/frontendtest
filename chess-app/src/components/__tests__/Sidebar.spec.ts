import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'

import Sidebar from '../Sidebar.vue'

test('renders the clicked squares correctly', () => {
  const clickedSquares = ['a1', 'b2', 'c3']
  const wrapper = mount(Sidebar, {
    global: {
      provide: {
        clickedSquares
      }
    }
  })

  const liElements = wrapper.findAll('li')
  expect(liElements.length).toBe(clickedSquares.length)

  clickedSquares.forEach((square, index) => {
    expect(liElements[index].text()).toBe(square)
  })
})
