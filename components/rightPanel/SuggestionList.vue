<template>
<div class="m-4 rounded-lg shadow-lg bg-slate-800">
  <h2 class="p-4 text-xl font-semibold">Who to follow</h2>

  <Suggestion
    v-for="suggestion in suggestions"
    :user="suggestion"
    @follow="follow()"  
  />

  <!--show more-->
  <h2 class="p-4 font-bold text-blue-400 hover:bg-slate-700 hover:cursor-pointer">Show more</h2>
</div>
</template>

<script lang="ts" setup>
import { useTwitterStore } from '~/store/store';

const store = useTwitterStore()
const { suggestions } = storeToRefs(store)

function follow() {
  console.log(follow);  
}
</script>
