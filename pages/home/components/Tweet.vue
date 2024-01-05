<template>
  <div class="flex pt-4 pr-4">
    <div class="m-2" @click="navigateToUser()">
      <img class="w-12 h-12 rounded-full"
      :src="avatars_URL + user.email" alt="" />
    </div>

    <div class="flex-grow max-w-lg mb-2">
      <div class="flex items-center gap-2" @click="navigateToUser()">
        <p>{{ user.twitter_name }}</p>
        <p class="text-sm text-gray-400">
          @{{ user.name }}
        </p>
      </div>

      <p class="flex-shrink text-base font-medium text-white width-auto">
        {{ text }}
      </p>

      <div class="flex justify-between w-full">
        <UButton 
          icon="i-heroicons-chat-bubble-oval-left"
          color="black"
          variant="ghost"
          class="hover:text-blue-500"
          :ui="{ padding: 'p-0'}"
        >
          <span :class="{'invisible': replies.length == 0}">{{ replies.length }}</span>
        </UButton>
        <UButton 
          icon="i-heroicons-arrow-path-rounded-square"
          color="black"
          variant="ghost"
          class="hover:text-green-500"
          :class="{'text-green-500': hasMeRetweeted}"
          @click="retweet()"
        >
          <span :class="{'invisible': retweets.length == 0}">{{ retweets.length }}</span>
        </UButton>
        <UButton 
          icon="i-heroicons-heart"
          color="black"
          variant="ghost"
          class="hover:text-red-500"
          :class="{'text-red-500': hasMeLiked}"
          @click="like()"
        >
          <span :class="{'invisible': likes.length == 0}">{{ likes.length }}</span>
        </UButton>
        <UButton 
          icon="i-heroicons-arrow-up-tray"
          color="black"
          variant="ghost"
          class="hover:text-blue-500"
        />
        <UButton 
          icon="i-heroicons-bookmark"
          color="black"
          variant="ghost"
          class="hover:text-blue-500"
          @click="bookmark()"
        />
      </div>
    </div>
  </div>
  <hr class="border-gray-600">
</template>

<script lang="ts" setup>
import { avatars_URL } from '~/constants/const';
import type { Interaction } from '~/models/interaction';
import type { Tweet } from '~/models/tweet';
import type { User } from '~/models/user';

const props = defineProps<{ user: User, text: string, retweets: Interaction[], likes: Interaction[], hasMeRetweeted: boolean, hasMeLiked: boolean, replies: Tweet[] }>()
const emit = defineEmits(['retweet', 'like', 'bookmark'])

function navigateToUser() {
  navigateTo('/' + props.user.name)
}

function retweet() {  
  emit('retweet', !props.hasMeRetweeted)
}

function like() {
  emit('like', !props.hasMeLiked)
}

function bookmark() {
  emit('bookmark', true)
}

</script>
