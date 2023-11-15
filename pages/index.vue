<template>
  <div class="h-auto max-w-2xl border border-t-0 border-gray-600">
    <!--header-->
    <h2 class="m-4 text-xl font-semibold text-white">Home</h2>
    <hr class="border-gray-600">
    
    <CreateTweet />

    <Tweet
      v-for="tweet in store.timeline"
      :user="tweet.user"
      :text="tweet.text"
      :retweets="tweet.interactions.filter(i => i.retweeted)"
      :likes="tweet.interactions.filter(i => i.liked)"
      :hasMeRetweeted="tweet.interactions.filter(i => i.retweeted).find(i => i.user.name == store.meState.me.name) ? true : false"
      :hasMeLiked="tweet.interactions.filter(i => i.liked).find(i => i.user.name == store.meState.me.name) ? true : false"
      :replies="[]"
      @retweet="interact('retweet', tweet.id, $event)"
      @like="interact('like', tweet.id, $event)"
      @bookmark="interact('bookmark', tweet.id, $event)"
    />

  </div>
</template>

<script lang="ts" setup>
import { useTwitterStore } from '~/store/store';

const store = useTwitterStore()
await store.loadTweets()

async function interact(action: string, tweetId: number, activate: boolean) {
  const name = store.meState.me.name
  await store.interactTweet(name, action, tweetId, activate)
}

</script>
