<template>
  <div class="flex" :class="{ 'items-center': isReply }">
    <div class="m-2">
      <img class="w-12 h-12 rounded-full"
        :src="avatars_URL + store.meState.me.email" alt="" />
    </div>

    <div class="flex-grow p-2">
      <div v-if="isReply" class="px-3.5 text-gray-400 text-sm">
        answer to <span class="text-blue-400">@{{ userToReply }}</span>
      </div>
      <UTextarea
        v-model="newTweet"
        variant="none"
        size="xl"
        :rows="2"
        cols="50"
        :placeholder="isReplyData.placholder"
      />
    
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
          :label="isReplyData.buttonText"
          class="!text-white"
          :ui="{ rounded: 'rounded-full' }"
          @click="sendTweet()"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTwitterStore } from '~/store/store';
import { avatars_URL } from '~/constants/const'

const props = defineProps<{ isReply: boolean, userToReply?: string | undefined }>()
const emits = defineEmits(['send'])

const isReplyData = computed(() => props.isReply ? { placholder: 'Post your answer', buttonText: 'Reply' } : { placholder: 'What\'s happening', buttonText: 'Tweet' })

const newTweet = ref('')
const store = useTwitterStore()

async function sendTweet() {  
  if (newTweet.value) {
    emits('send', newTweet.value)   
    newTweet.value = ''
  }
}
</script>
