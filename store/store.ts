import type { User } from '~/models/user';
import type { Tweet } from '~/models/tweet';
import type { State } from './state';

const me: User = {
  email: "aymericbreton8535@gmail.com",
  name: "AymeBric305",
  twitter_name: "Fingolfin",
}

const initialState: State = {
  meState: {
    me,
    notifications: [],
    conversations: [],
  },
  suggestions: [
    me, me,
  ],
  trends: [
    {
      name: "Dinguerie",
      tweetsAmount: 6000,
    },
    {
      name: "MustSee",
      tweetsAmount: 5000,
    },
    {
      name: "Wejdene",
      tweetsAmount: 3000,
    },
    {
      name: "Caramel",
      tweetsAmount: 2500,
    },
  ],
  timeline: [],
  userState: undefined,
  searchState: undefined,
}

export const useTwitterStore = defineStore({
  id: 'twitter',
  state: (): State => initialState,

  actions: {
    async loadMe() {
      const user = useSupabaseUser();
      const { data } = await useFetch<User>('/api/users/unknown/' + user.value?.email)
      this.meState.me = data.value!
    },
    async loadTweets() {
      const { data: tweets } = await useFetch<Tweet[]>('/api/tweets')
      this.timeline = tweets.value!
    },
    async sendTweet(tweetText: string) {      
      const body = {
        text: tweetText,
        userName: this.meState.me.name,
      }
      const { data } = await useFetch('/api/tweets', { method: 'post', body })

      const tweet: Tweet = {
        id: data.value!.id,
        text: tweetText,
        user: this.meState.me,
        date: data.value!.created_at,
        replies: [],
        interactions: [],
      }
      this.timeline.unshift(tweet)
    },
    async interactTweet(name: string, action: string, tweetId: number, activate: boolean) {      
      const tweet = this.timeline.find(t => t.id == tweetId)!
      let interactionIndex = tweet.interactions.findIndex(i => i.user.name == name)

      if (interactionIndex == -1) {
        interactionIndex = tweet.interactions.push({
          user: this.meState.me,
          liked: false,
          retweeted: false,
          saved: false,
        }) - 1
      }

      if (action == 'retweet') {
        tweet.interactions[interactionIndex].retweeted = activate 
      }

      if (action == 'like') {
        tweet.interactions[interactionIndex].liked = activate
      }

      if (action == 'bookmark') {
        tweet.interactions[interactionIndex].saved = activate
      }
      
      await useFetch(`/api/users/${name}/${action}/${tweetId}`, { method: 'put', body: { activate } })
    },
  },

  getters: {

  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTwitterStore, import.meta.hot))
}