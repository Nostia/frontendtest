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
import { defineComponent } from 'vue'
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

<style scoped lang="scss">
  .chessboard {
    width: $board-width--mobile;
    height: $board-width--mobile;
    margin: 0 auto;
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    border: $border-width solid #1E1E24;
  }

  .chessboard-wrapper {
    width: 100vmin;
    height: 100%;
  }

  @media screen and (min-width: $desktop-width) {
    .chessboard {
      grid-template-columns: repeat(8, 1fr);
      width: $board-width--desktop;
      height: $board-width--desktop;
    }

    .chessboard-wrapper {
      width: 100%;
    }
  }
</style>
