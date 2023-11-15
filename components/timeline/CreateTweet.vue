<template>
  <div class="flex">
    <div class="m-2">
      <img class="w-12 h-12 rounded-full"
        :src="avatars_URL + store.meState.me.email" alt="" />
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
import { useTwitterStore } from '~/store/store';
import { avatars_URL } from '~/constants/const'

const newTweet = ref('')
const store = useTwitterStore()

async function sendTweet() {  
  if (newTweet.value) {    
    await store.sendTweet(newTweet.value)    
    newTweet.value = ''
  }
}
</script>
