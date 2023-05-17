<template>
  <div
    :class="squareClasses"
    @click="handleClick"
  >
    {{ squareText }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  inject: ['activeSquareId', 'handleSquareClicked'],
  props: {
    squareId: {
      type: String,
      required: true
    },
    isSquareWhite: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    isSquareActive() {
      return this.activeSquareId === this.squareId
    },
    squareClasses(){
      return [
        this.isSquareWhite ? 'square-white' : 'square-black',
        this.isSquareActive ?'square-clicked': '',
        'square']
    },
    squareText() {
      if (this.squareId.includes('1'))
          return this.squareId.charAt(0)
      if (this.squareId.includes('a'))
        return this.squareId.charAt(1)
      return ''
    }
  },
  methods: {
    handleClick(): void {
      this.handleSquareClicked(this.squareId)
    }
  }
})
</script>

<style scoped>
.square {
  background-color: lightgray;
  aspect-ratio: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 0 2px 2px;
}

.square-clicked {
  background-color: yellow !important;
}

.square-white {
  background-color: #f2f2f2;
}

.square-black {
  background-color: #808080;
}
</style>
