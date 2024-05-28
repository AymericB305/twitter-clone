<template>
  <div class="flex flex-col">
    <Tweet
      :tweet="tweet"
      :answerTo="answerTo"
      @interact="interact($event)"
      @reply="reply($event)"
      @delete="deleteTweet($event)"
    />
    
    <CreateTweet :isReply="true" :userToReply="tweet.user.name" @send="reply($event)" />
    <UDivider size="xl"/>

    <Tweet      
      v-for="replyTweet in replies"
      :tweet="replyTweet"
      @interact="interact($event)"
      @reply="reply($event)"
      @delete="deleteTweet($event)"
    />      
  </div>
</template>

<script setup lang="ts">
import type { Tweet } from '~/models/tweet';
import { useTwitterStore } from '~/store/store';

const route = useRoute()
const id = +route.params.id

const store = useTwitterStore()
const storeRefs = storeToRefs(store)
const data = computed(() => storeRefs.timeline.value.find(t => t.id === id))

if (!data.value) {
  navigateTo('/')
}

const tweet = ref(data.value!)

const answerTo = computed(() => storeRefs.timeline.value.find(t => t.id === tweet.value.answer_to_id))
const replies: Tweet[] = store.getRepliesByParentId(tweet.value.id) 

async function interact(event: { id: number, action: string, activate: boolean }) {
  const name = storeRefs.meState.value.me.name  
  await store.interactTweet(name, event.action, event.id, event.activate)
}

async function reply(event : { id: number, content: string }) {
  store.sendReply(event.id, event.content)
}

async function deleteTweet(id: number) {
  if (tweet.value.user.email === storeRefs.meState.value.me.email)
    store.deleteTweet(id)
}
</script>
