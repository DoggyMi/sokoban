<template>
  <div class="text-3xl font-bold underline">sokoban{{ map }}</div>

  </template>
<script setup lang="ts">
import {useMapStore} from './store/map.ts';
const {map} = useMapStore();

</script>



<style scoped>

</style>
