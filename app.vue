<template>
  <NuxtLayout :title="title">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
let route = useRoute()
let title = route.name == "index" ? "Home" : route.name?.toString() ?? ""
</script>
