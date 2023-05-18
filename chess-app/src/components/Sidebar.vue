<template>
  <div class="sidebar">
    <h2>Clicked squares</h2>
    <ul>
      <li v-for="square in clickedSquares" :key="square">
        {{ square }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  inject: ['clickedSquares']
})
</script>

<style scoped lang="scss">
.sidebar {
  background-color: #f7f5f2;
  box-sizing: border-box;
  padding: 15px;
}

@media screen and (orientation: portrait) {
  .sidebar {
    width: $board-width--mobile;
    min-width: $board-width--mobile;
    margin: 10px auto 0;
  }
}
@media screen and (orientation: landscape) {
  .sidebar {
    width: 100%;
    margin: 0 0 0 5px;
  }
}

@media (min-width: $desktop-width) {
  .sidebar {
    max-width: 500px;
    margin: 0 0 0 10px;
    padding: 15px 50px;
  }
}
</style>
