<template>
  <div class="flex justify-between p-4">
    <div class="flex items-center">
      <img class="h-10 mr-2 rounded-full"
      :src="user?.avatar_path" alt="" />
      <div class="flex flex-col">
        <p>
          {{ user?.name }}
        </p>
        <p class="text-sm text-gray-400">
          @{{ user?.twitter_name }}
        </p>
      </div>
    </div>
    
    <UButton
      label="Follow"
      @click="follow()"
      size="lg"
      color="black"
      :ui="{ rounded: 'rounded-full' }"
    />
  </div>
</template>

<script lang="ts" setup>
import type { User } from '~/models/user';

defineProps<{ user?: User }>()
const emit = defineEmits(['follow'])

function follow() {
  emit('follow')
}
</script>
