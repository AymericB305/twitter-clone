<template>
  <div class="flex items-center p-4 mt-12 mr-2">
    <img class="w-12 h-12 mr-2 rounded-full"
      :src="avatars_URL + me.email" alt="" />
    <div class="flex flex-col">
      <p>
        {{ me?.twitter_name }}
      </p>
      <p class="text-sm text-gray-400">
        @{{ me?.name }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { User } from '~/models/user';
import { avatars_URL } from '~/constants/const'

defineProps<{ me: User }>()

</script>
