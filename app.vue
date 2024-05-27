<template>
  <NuxtLayout :title="routeName">
    <NuxtPage />

    <UNotifications />
  </NuxtLayout>
</template>

<script setup lang="ts">
const routeName = computed(() => 
  useRoute().name == "index"
  ? "home"
  : useRoute().name)
</script>
