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
const data: Tweet | undefined = store.timeline.find(t => t.id === id)

if (!data) {
  navigateTo('/')
}

const tweet = data!

const answerTo: Tweet | undefined = store.timeline.find(t => t.id === tweet.answer_to_id)
const replies: Tweet[] = store.getRepliesByParentId(tweet.id) 

async function interact(event: { id: number, action: string, activate: boolean }) {
  const name = store.meState.me.name
  console.log(event.id);
  
  await store.interactTweet(name, event.action, event.id, event.activate)
}

async function reply(event : { id: number, content: string }) {
  store.sendReply(event.id, event.content)
}

async function deleteTweet(id: number) {
  if (tweet.user.email === store.meState.me.email)
    store.deleteTweet(id)
}
</script>
