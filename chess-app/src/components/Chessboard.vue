<template>
  <div class="chessboard-wrapper">
    <div class="chessboard">
      <Square
        v-for="(squareId, index) in squares"
        :key="squareId"
        :squareId="squareId"
        :isSquareWhite="isSquareWhite(index)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import Square from './Square.vue'
import { generateSquaresIds } from '@/helpers'
export default defineComponent({
  components: {
    Square
  },
  data() {
    return {
      squares: generateSquaresIds(),
    }
  },
  methods: {
    isSquareWhite(index:number): boolean {
      const row = Math.floor(index / 8)
      const col = index % 8
      return (row + col) % 2 === 0
    },
  },

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
