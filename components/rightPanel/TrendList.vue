<template>
<div class="max-w-sm m-4 overflow-hidden rounded-lg shadow-lg bg-slate-800">
  <div class="flex">
    <div class="flex-1 m-2">
      <h2 class="w-48 px-4 py-2 text-xl font-semibold text-white">Germany trends</h2>
    </div>
    <div class="flex-1 px-4 py-2 m-2">
      <a href="" class="float-right text-2xl text-white rounded-full hover:bg-slate-800 hover:text-blue-300">
        <svg class="w-6 h-6 m-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          stroke="currentColor" viewBox="0 0 24 24">
          <path
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
          </path>
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      </a>
    </div>
  </div>
  <hr class="border-gray-600">

  <Trend />
  <Trend />
  <Trend />
  <Trend />

  <!--show more-->
  <div class="flex">
    <div class="flex-1 p-4">
      <h2 class="w-48 px-4 ml-2 font-bold text-blue-400">Show more</h2>
    </div>
  </div>

</div>
</template>

<script lang="ts" setup>

</script>
