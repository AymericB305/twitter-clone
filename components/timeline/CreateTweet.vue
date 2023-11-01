<template>
  <div class="flex">
    <div class="w-10 py-1 m-2">
      <img class="inline-block w-10 h-10 rounded-full"
        src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
    </div>
    <div class="flex-1 px-2 pt-2 mt-2">
      <UTextarea class="w-full font-medium" variant="none" size="xl" :rows="2" cols="50" placeholder="What's happening?" />
    </div>
  </div>
  
  <!--create tweet below icons-->
  <div class="flex">
    <div class="flex items-center w-64 px-2">
      <div class="flex-1 py-1 m-2 text-center">
        <a href="#"
          class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-blue-400 rounded-full group hover:bg-slate-800 hover:text-blue-300">
          <svg class="w-6 text-center h-7" fill="none" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
            <path
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
            </path>
          </svg>
        </a>
      </div>

      <div class="flex-1 py-2 m-2 text-center">
        <a href="#"
          class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-blue-400 rounded-full group hover:bg-slate-800 hover:text-blue-300">
          <svg class="w-6 text-center h-7" fill="none" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
            <path
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z">
            </path>
            <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </a>
      </div>

      <div class="flex-1 py-2 m-2 text-center">
        <a href="#"
          class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-blue-400 rounded-full group hover:bg-slate-800 hover:text-blue-300">
          <svg class="w-6 text-center h-7" fill="none" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
            </path>
          </svg>
        </a>
      </div>

      <div class="flex-1 py-2 m-2 text-center">
        <a href="#"
          class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-blue-400 rounded-full group hover:bg-slate-800 hover:text-blue-300">
          <svg class="w-6 text-center h-7" fill="none" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </a>
      </div>
    </div>

    <div class="flex-1">
      <button class="float-right px-8 py-2 mt-5 mr-8 font-bold text-white rounded-full bg-slate-400 hover:bg-slate-600">
        Tweet
      </button>
    </div>
  </div>
  
  <hr class="border-4 border-slate-800">
</template>

<script lang="ts" setup>

</script>
