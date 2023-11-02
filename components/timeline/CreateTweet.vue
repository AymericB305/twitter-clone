<template>
  <div class="flex">
    <div class="m-2">
      <img class="w-12 h-12 rounded-full"
        src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
    </div>

    <div class="flex-grow p-2">
      <UTextarea class="w-fullfont-medium" v-model="newTweet" variant="none" size="xl" :rows="2" cols="50" placeholder="What's happening?" />
    
      <div class="flex justify-between">
        <div class="flex items-center">
          <UButton 
            icon="i-heroicons-photo"
            color="blue"
            variant="ghost"
          />

          <UButton 
            icon="i-heroicons-gif"
            color="blue"
            variant="ghost"
          />

          <UButton 
            icon="i-heroicons-list-bullet"
            color="blue"
            variant="ghost"
          />

          <UButton 
            icon="i-heroicons-face-smile"
            color="blue"
            variant="ghost"
          />

          <UButton 
            icon="i-heroicons-calendar"
            color="blue"
            variant="ghost"
          />

          <UButton 
            icon="i-heroicons-map-pin"
            color="blue"
            variant="ghost"
          />
        </div>

        <UButton 
          size="lg"
          color="blue"
          label="Tweet"
          class="!text-white"
          :ui="{ rounded: 'rounded-full' }"
          @click="sendTweet()"
        />
      </div>
    </div>
  </div>
  
  <hr class="border-4 border-slate-800">
</template>

<script lang="ts" setup>
import type { Tweet } from '~/models/tweet';
import { useTwitterStore } from '~/store/store';

const newTweet = ref('')
const store = useTwitterStore()

function sendTweet() {
  console.log(newTweet.value);
  
  if (newTweet.value) {
    const tweet: Tweet = {
      text: newTweet.value,
      user: store.meState.me,
      date: Date.now().toString(),
      replies: [],
      retweets: 0,
      likes: 0,
    }
    store.sendTweet(tweet)
  }
}
</script>
