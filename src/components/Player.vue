<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import playerImg from '../assets/keeper.png'
import { usePlayerStore } from '../store/player'

useMove()
const { position } = usePosition()

function useMove() {
  const { movePlayerToDown, movePlayerToTop, movePlayerToLeft, movePlayerToRight } = usePlayerStore()

  function handleOnKeyUp(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowUp':
        movePlayerToTop()
        break
      case 'ArrowDown':
        movePlayerToDown()
        break
      case 'ArrowLeft':
        movePlayerToLeft()
        break
      case 'ArrowRight':
        movePlayerToRight()
        break
    }
  }

  onMounted(() => {
    window.addEventListener('keyup', handleOnKeyUp)
  })

  onUnmounted(() => {
    window.removeEventListener('keyup', handleOnKeyUp)
  })
}

function usePosition() {
  const STEP = 32
  const { player } = usePlayerStore()
  const position = computed(() => {
    return {
      left: `${player.x * STEP}px`,
      top: `${player.y * STEP}px`,
    }
  })
  return { position }
}
</script>

<template>
  <div class="absolute" :style="position">
    <img :src="playerImg" alt="">
  </div>
</template>

<style scoped>

</style>
