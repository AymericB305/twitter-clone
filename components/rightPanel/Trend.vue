<template>
  <div class="p-4 hover:bg-slate-700 hover:cursor-pointer" @click="click()">
    <p class="text-xs text-gray-400 ">{{ index }}. Trending</p>
    <h2 class="font-bold">#{{ trend?.name }}</h2>
    <p class="text-xs text-gray-400">{{ trend?.tweetsAmount }} Tweets</p>
  </div>
</template>

<script lang="ts" setup>
import type { Trend } from '~/models/trend';

defineProps<{ trend?: Trend, index: number }>()
const emit = defineEmits(['click'])

function click() {
  emit('click')
}
</script>
