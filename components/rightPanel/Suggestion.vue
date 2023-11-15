<template>
  <div class="flex justify-between p-4">
    <div class="flex items-center">
      <img class="w-12 h-12 mr-2 rounded-full"
      :src="avatars_URL + store.meState.me.email" alt="" />
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
import { avatars_URL } from '~/constants/const';
import type { User } from '~/models/user';
import { useTwitterStore } from '~/store/store';

defineProps<{ user?: User }>()
const emit = defineEmits(['follow'])

const store = useTwitterStore()

function follow() {
  emit('follow')
}
</script>
