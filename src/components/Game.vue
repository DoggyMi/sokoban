<script setup lang="ts">
import { TileType, useMapStore } from '../store/map'
import floorImg from '../assets/floor.png'
import wallImg from '../assets/wall.png'

const { map } = useMapStore()
</script>

<template>
  <div v-for="(row, i) in map" :key="i" class="flex">
    <div v-for="(col, j) in row" :key="j">
      <template v-if="map[i][j] === TileType.Floor">
        <img :src="floorImg" alt="">
      </template>
      <template v-else-if="col === TileType.Wall">
        <img :src="wallImg" alt="">
      </template>
    </div>
  </div>
</template>

<style scoped></style>
