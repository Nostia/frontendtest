<template>
  <div class="chessboard-wrapper">
    <div class="chessboard">
      <Square
        v-for="(squareId, index) in squares"
        :key="squareId"
        :squareId="squareId"
        :activeSquareId="activeSquareId"
        :isSquareWhite="isSquareWhite(index)"
        @squareClicked="handleSquareClicked(squareId, $event)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Square from './Square.vue'
import { generateSquaresIds } from '@/helpers'
export default defineComponent({
  components: {
    Square
  },
  props: {
    clickedSquares: {
      type: Array as () => string,
      required: true
    }
  },
  data() {
    return {
      squares: generateSquaresIds(),
      activeSquareId: '' as string
    }
  },
  methods: {
    handleSquareClicked(squareId: string, clickOrder: number): void {
      this.$emit('squareClicked', squareId, clickOrder)
      this.activeSquareId = squareId
    },
    isSquareWhite(index:number): boolean {
      const row = Math.floor(index / 8)
      const col = index % 8
      console.log((row + col) % 2 === 0)
      return (row + col) % 2 === 0
    },
  }
})
</script>

<style scoped>

.chessboard-wrapper {
  width: 100%;
  height: 100%;
}

.chessboard {
  --border-width:1px;
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin: 0 auto;
  width: calc(100vmin - 10px - var(--border-width) * 2);
  height: calc(100vmin - 10px - var(--border-width) * 2);
  border: var(--border-width) solid #222222;
}


</style>
