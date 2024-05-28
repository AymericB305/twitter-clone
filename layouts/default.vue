<template>
  <div class="flex justify-center min-h-screen gap-2 text-white bg-slate-900">
    <Menu />
    
    <div class="w-5/12 h-auto border border-t-0 border-gray-600">
      <h2 class="m-4 text-xl font-semibold text-white capitalize">{{layoutCustomProps.title}}</h2>
      <hr class="border-gray-600">
      <slot />
    </div>
    
    <RightPanel />
  </div>
</template>

<script setup lang="ts">
const layoutCustomProps = useAttrs()
</script>