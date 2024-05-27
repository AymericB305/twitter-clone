<template>
  <div class="flex flex-col">
    <Tweet
      :tweet="tweet"
      :hasMeRetweeted="tweet.interactions.filter(i => i.retweeted).find(i => i.user.name == store.meState.me.name) ? true : false"
      :hasMeLiked="tweet.interactions.filter(i => i.liked).find(i => i.user.name == store.meState.me.name) ? true : false"
      :hasMeBookmarked="tweet.interactions.filter(i => i.saved).find(i => i.user.name == store.meState.me.name) ? true : false"
      @interact="interact(tweet.id, $event)"
      @reply="reply(tweet.id, $event)"
      @delete="deleteTweet(tweet.id)"
    />
    
    <CreateTweet :placeholder="'Post your answer'" @send="reply(tweet.id, $event)" />

    <Tweet      
      v-for="replyTweet in tweet.replies"
      :tweet="replyTweet"
      :hasMeRetweeted="replyTweet.interactions.filter(i => i.retweeted).find(i => i.user.name == store.meState.me.name) ? true : false"
      :hasMeLiked="replyTweet.interactions.filter(i => i.liked).find(i => i.user.name == store.meState.me.name) ? true : false"
      :hasMeBookmarked="replyTweet.interactions.filter(i => i.saved).find(i => i.user.name == store.meState.me.name) ? true : false"
      @interact="interact(replyTweet.id, $event)"
      @reply="reply(replyTweet.id, $event)"
      @delete="deleteTweet(replyTweet.id)"
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

async function interact(tweetId: number, event: { action: string, activate: boolean }) {
  const name = store.meState.me.name
  await store.interactTweet(name, event.action, tweetId, event.activate)
}

async function reply(tweetId: number, reply: string) {
  store.sendReply(tweetId, reply)
}

async function deleteTweet(tweetId: number) {
  if (tweet.user!.email === store.meState.me.email)
    store.deleteTweet(tweetId)
}
</script>
