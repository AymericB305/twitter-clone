<template>
  <div class="flex pt-4 pr-4">
    <div class="m-2" @click="navigateToUser()">
      <img class="w-12 h-12 rounded-full"
      :src="avatars_URL + tweet.user.email" alt="" />
    </div>

    <div class="flex-grow max-w-lg mb-2">
      <div class="flex items-center gap-2" @click="navigateToUser()">
        <p class="font-medium">{{ tweet.user.twitter_name }}</p>
        <p class="text-sm text-gray-400">
          @{{ tweet.user.name }} · {{ formatDate(tweet.date) }}
        </p>
      </div>

      <p class="flex-shrink text-base font-normal text-white width-auto">
        {{ tweet.text }}
      </p>

      <div class="flex justify-between w-full">
        <UButton 
          icon="i-heroicons-chat-bubble-oval-left"
          color="black"
          variant="ghost"
          class="hover:text-blue-500"
          :ui="{ padding: 'p-0'}"
        >
          <span :class="{'invisible': tweet.replies.length == 0}">{{ tweet.replies.length }}</span>
        </UButton>
        <UButton 
          icon="i-heroicons-arrow-path-rounded-square"
          color="black"
          variant="ghost"
          class="hover:text-green-500"
          :class="{'text-green-500': hasMeRetweeted}"
          @click="interact('retweet', !props.hasMeRetweeted)"
        >
          <span :class="{'invisible': retweets.length == 0}">{{ retweets.length }}</span>
        </UButton>
        <UButton 
          icon="i-heroicons-heart"
          color="black"
          variant="ghost"
          class="hover:text-red-500"
          :class="{'text-red-500': hasMeLiked}"
          @click="interact('like', !props.hasMeLiked)"
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
          :class="{'text-blue-500': hasMeBookmarked}"
          @click="interact('bookmark', !props.hasMeBookmarked)"
        />
      </div>
    </div>
  </div>
  <hr class="border-gray-600">
</template>

<script lang="ts" setup>
import { avatars_URL } from '~/constants/const';
import type { Tweet } from '~/models/tweet';

const props = defineProps<{ tweet: Tweet, hasMeRetweeted: boolean, hasMeLiked: boolean, hasMeBookmarked: boolean }>()
const emit = defineEmits(['interact'])

const likes = computed(() => props.tweet.interactions.filter(i => i.liked))
const retweets = computed(() => props.tweet.interactions.filter(i => i.retweeted))

function navigateToUser() {
  navigateTo('/' + props.tweet.user.name)
}

function interact(action: string, activate: boolean) {
  emit('interact', { action, activate })
}

function formatDate(isoString: string) {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }).format(date);
}

</script>
