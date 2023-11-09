<template>
  <div class="h-auto max-w-2xl border border-t-0 border-gray-600">
    <!--header-->
    <h2 class="m-4 text-xl font-semibold text-white">Home</h2>
    <hr class="border-gray-600">
    
    <CreateTweet />

    <Tweet v-for="tweet in timeline" :tweet="tweet" />

  </div>
</template>

<script lang="ts" setup>
import { useTwitterStore } from '~/store/store';

const store = useTwitterStore()
await store.loadTweets()
const { timeline } = storeToRefs(store)

</script>
