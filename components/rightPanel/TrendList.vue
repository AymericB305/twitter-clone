<template>
  <div class="m-4 rounded-lg shadow-lg bg-slate-800">
    <div class="flex items-center justify-between p-4">
      <h2 class="text-xl font-semibold">Trends</h2>

      <UIcon name="i-heroicons-cog-6-tooth" class="text-2xl hover:cursor-pointer" />
    </div>

    <Trend
      v-for="(trend, i) in trends"  
      :trend="trend"
      :index="i + 1"
      @click="click(i + 1)"
    />

    <!--show more-->
    <h2 class="p-4 font-bold text-blue-400 hover:bg-slate-700 hover:cursor-pointer">Show more</h2>

  </div>
</template>

<script lang="ts" setup>
import { useTwitterStore } from '~/store/store';

const store = useTwitterStore()
const { trends } = storeToRefs(store)

function click(i: number) {
  console.log("test", i)
}

</script>
