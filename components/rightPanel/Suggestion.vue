<template>
  <div class="flex justify-between p-4">
    <div class="flex items-center">
      <img class="h-10 mr-2 rounded-full"
        src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
      <div class="flex flex-col">
        <p class="leading-6">
          {{ user?.name }}
        </p>
        <p class="text-sm text-gray-400">
          @{{ user?.tn }}
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
