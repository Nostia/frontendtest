<template>
  <div class="app">
    <Chessboard :clickedSquares="clickedSquares" @squareClicked="handleSquareClicked" />
    <Sidebar :clickedSquares="clickedSquares" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Chessboard from './components/Chessboard.vue'
import Sidebar from './components/Sidebar.vue'

export default defineComponent({
  components: {
    Chessboard,
    Sidebar
  },
  data() {
    return {
      clickedSquares: [] as string[]
    }
  },
  methods: {
    handleSquareClicked(squareId: string): void {
      this.clickedSquares.push(squareId)
    }
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
    /*margin: 0;*/
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
