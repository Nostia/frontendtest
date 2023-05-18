import { mount } from '@vue/test-utils'
import { test, expect, vi } from 'vitest'
import { reactive } from 'vue'

import App from '../../App.vue'
import Square from '../Square.vue'
import Chessboard from '../Chessboard.vue'
import Sidebar from '../Sidebar.vue'

test('renders the Chessboard and Sidebar components', () => {
  const wrapper = mount(App)

  const chessboardComponent = wrapper.findComponent(Chessboard)
  const sidebarComponent = wrapper.findComponent(Sidebar)

  expect(chessboardComponent.exists()).toBe(true)
  expect(sidebarComponent.exists()).toBe(true)
})

test('updates clickedSquares and activeSquareId correctly', async () => {
  const clickedSquares = reactive<string[]>([])
  const activeSquareId = ''
  const handleSquareClicked = vi.fn()
  const wrapper = mount(App, {
    global: {
      provide: {
        clickedSquares,
        handleSquareClicked,
        activeSquareId: {
          value: activeSquareId
        }
      }
    }
  })
  const handleSquareClickedSpy = (wrapper.vm.handleSquareClicked = vi.fn(() => {}))

  const chessboardComponent = wrapper.findComponent(Chessboard)
  const squareComponent = chessboardComponent.findComponent(Square)

  await squareComponent.trigger('click')
  expect(handleSquareClickedSpy).toHaveBeenCalled()
  expect(handleSquareClickedSpy).toHaveBeenCalledWith('a8')
})

test('handleSquareClicked updates clickedSquares and activeSquareId correctly', () => {
  const wrapper = mount(App)

  wrapper.vm.handleSquareClicked('a1')

  const clickedSquares = wrapper.vm.clickedSquares
  const activeSquareId = wrapper.vm.activeSquareId

  expect(clickedSquares).toEqual(['a1'])
  expect(activeSquareId).toBe('a1')
})
