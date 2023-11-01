<template>
  <div class="flex items-center p-4 mt-12 mr-2">
    <img class="h-12 mr-2 rounded-full"
      src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
    <div class="flex flex-col">
      <p>
        {{ me?.name }}
      </p>
      <p class="text-sm text-gray-400">
        @{{ me?.tn }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { User } from '~/models/user';

defineProps<{ me?: User }>()
</script>
