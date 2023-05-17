<template>
  <div class="app">
    <Chessboard/>
    <Sidebar/>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed} from 'vue'
import Chessboard from './components/Chessboard.vue'
import Sidebar from './components/Sidebar.vue'

export default defineComponent({

  components: {
    Chessboard,
    Sidebar
  },
  data() {
    return {
      clickedSquares: [] as string[],
      activeSquareId: '' as string
    }
  },
  provide() {
    return {
      clickedSquares: computed(() => this.clickedSquares),
      handleSquareClicked: computed(() => this.handleSquareClicked),
      activeSquareId: computed(() => this.activeSquareId),
    }
  },
  methods: {
    handleSquareClicked(squareId: string): void {
      this.clickedSquares.push(squareId)
      this.activeSquareId = squareId
    },
  }
})
</script>

<style lang="scss">
body {
  margin: 0 !important;
}

.app {
  display: flex;
  flex-direction: row;
  margin: 5px;
}

@media screen and (max-width: $desktop-width) {
  .app {
    flex-direction: column;
  }
}

@media screen and (max-width: $desktop-width) and (orientation: landscape) {
  .app {
    display: flex;
    flex-direction: row;
    margin: 5px;
  }
}
</style>
