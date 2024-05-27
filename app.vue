<template>
  <NuxtLayout :title="routeName">
    <NuxtPage />

    <UNotifications />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useTwitterStore } from './store/store';

const routeName = computed(() => 
  useRoute().name == "index"
  ? "home"
  : useRoute().name)

const store = useTwitterStore()
await useAsyncData('loadTweets', () => store.loadTweets().then(() => true))
</script>
