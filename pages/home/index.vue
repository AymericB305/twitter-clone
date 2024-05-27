<template>
  <div class="h-auto border border-t-0 border-gray-600 w-3xl">    
    <CreateTweet :placeholder="'What\'s happening?'" @send="sendTweet($event)"/>

    <Tweet
      v-for="tweet in store.getTimelineTweets"
      :tweet="tweet"
      :hasMeRetweeted="tweet.interactions.filter(i => i.retweeted).find(i => i.user.name == store.meState.me.name) ? true : false"
      :hasMeLiked="tweet.interactions.filter(i => i.liked).find(i => i.user.name == store.meState.me.name) ? true : false"
      :hasMeBookmarked="tweet.interactions.filter(i => i.saved).find(i => i.user.name == store.meState.me.name) ? true : false"
      @interact="interact(tweet.id, $event)"
      @reply="reply(tweet.id, $event)"
      @delete="deleteTweet(tweet)"
    />

  </div>
</template>

<script lang="ts" setup>
import type { Tweet } from '~/models/tweet';
import { useTwitterStore } from '~/store/store';

definePageMeta({
  path: '/',
})

const store = useTwitterStore()

async function interact(tweetId: number, event: { action: string, activate: boolean }) {
  const name = store.meState.me.name
  await store.interactTweet(name, event.action, tweetId, event.activate)
}

async function sendTweet(newTweet: string) {
  await store.sendTweet(newTweet)
}

async function reply(tweetId: number, reply: string) {
  store.sendReply(tweetId, reply)
}

async function deleteTweet(tweet: Tweet) {
  if (tweet.user.email === store.meState.me.email)
    store.deleteTweet(tweet.id)
}

</script>
