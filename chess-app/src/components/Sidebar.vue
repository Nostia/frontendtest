<template>
  <div class="sidebar">
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
  inject: ['clickedSquares'],
})
</script>

<style scoped lang="scss">
.sidebar {
  width: 500px;
  min-width: 500px;
  height: 100%;
  background-color: lightgray;
  margin: 0 0 0 10px;
}

@media screen and (max-width: $desktop-width) {

  .sidebar {
    --border-width:1px;
    width: calc(100vmin - 10px - var(--border-width) * 2);
    min-width: calc(100vmin - 10px - var(--border-width) * 2);
    margin: 10px auto 0;
  }
  }

@media screen and (max-width: $desktop-width) and (orientation: landscape){

  .sidebar {
    --border-width:1px;
    width: 100%;
    min-width: 100%;
    margin: 0 0 0 5px;
  }
}


</style>
