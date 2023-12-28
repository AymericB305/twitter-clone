<template>
  <NuxtLayout :title="routeName">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const routeName = computed(() => 
  useRoute().name == "index"
  ? "home"
  : useRoute().name)
</script>
