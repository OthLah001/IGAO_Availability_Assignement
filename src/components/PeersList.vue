<script setup lang="ts">
import PeerCard from './PeerCard.vue'

// You can make this dynamic or pass as props
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
</script>

<template>
  <div class="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <PeerCard v-for="item in items" :key="item" />
  </div>
</template>

<style scoped></style>
