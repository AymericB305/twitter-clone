<template>
  <div class="flex pt-4 pr-4">
    <div class="m-2">
      <img class="w-12 h-12 rounded-full"
        src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
    </div>

    <div class="max-w-lg mb-2">
      <div class="flex items-center gap-2">
        <p>{{ tweet?.user?.name }}</p>
        <p class="text-sm text-gray-400">
          @{{ tweet?.user?.tn }}
        </p>
      </div>

      <p class="flex-shrink text-base font-medium text-white width-auto">
        {{ tweet?.text }}
      </p>

      <div class="flex justify-between w-full">
        <UButton 
          icon="i-heroicons-chat-bubble-oval-left"
          color="black"
          variant="ghost"
          :ui="{ padding: 'p-0'}"
        >{{tweet?.replies?.length}}</UButton>
        <UButton 
          icon="i-heroicons-arrow-path-rounded-square"
          color="black"
          variant="ghost"
        >{{tweet?.retweets}}</UButton>
        <UButton 
          icon="i-heroicons-heart"
          color="black"
          variant="ghost"
        >{{tweet?.likes}}</UButton>
        <UButton 
          icon="i-heroicons-arrow-up-tray"
          color="black"
          variant="ghost"
        />
        <UButton 
          icon="i-heroicons-bookmark"
          color="black"
          variant="ghost"
        />
      </div>
    </div>
  </div>
  <hr class="border-gray-600">
</template>

<script lang="ts" setup>
import type { Tweet } from '~/models/tweet';

defineProps<{ tweet?: Tweet }>()

</script>
