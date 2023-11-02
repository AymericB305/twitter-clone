<template>
  <div class="flex items-center p-4 mt-12 mr-2">
    <img class="h-12 mr-2 rounded-full"
      :src="me?.avatar_path" alt="" />
    <div class="flex flex-col">
      <p>
        {{ me?.name }}
      </p>
      <p class="text-sm text-gray-400">
        @{{ me?.twitter_name }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { User } from '~/models/user';

defineProps<{ me?: User }>()
</script>
