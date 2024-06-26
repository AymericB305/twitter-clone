import type { User } from '~/models/user';
import type { Tweet } from '~/models/tweet';
import type { State } from './state';

const initialState: State = {
  meState: {
    me: {
      name: '',
      email: '',
      twitter_name: '',
      birthday: '1900-01-01 00:00:00+00',
    },
    notifications: [],
    conversations: [],
  },
  suggestions: [],
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
      const data = await $fetch<User>('/api/users/unknown/' + user.value?.email)
      this.meState = {
        me: data,
        conversations: [],
        notifications: [],
      }
    },
    async loadTweets() {
      const tweets = await $fetch<Tweet[]>('/api/tweets')
      this.timeline = tweets
    },
    async sendTweet(tweetText: string) {      
      const body = {
        text: tweetText,
        userName: this.meState.me.name,
      }
      const data = await $fetch('/api/tweets', { method: 'post', body })

      const tweet: Tweet = {
        id: data!.id,
        text: tweetText,
        user: this.meState.me,
        date: data!.created_at,
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
      
      await $fetch(`/api/users/${name}/${action}/${tweetId}`, { method: 'put', body: { activate } })
    },
    async sendReply(answerToId: number, tweetText: string) {
      const body = {
        text: tweetText,
        userName: this.meState.me.name,
        answerToId: answerToId,
      }
      const data = await $fetch('/api/tweets', { method: 'post', body })
      const reply: Tweet = {
        id: data!.id,
        text: tweetText,
        user: this.meState.me,
        date: data!.created_at,
        interactions: [],
        answer_to_id: data?.answer_to_id as number
      }
      this.timeline.push(reply)
    },
    async deleteTweet(tweetId: number) {
      await $fetch(`/api/tweets/${tweetId}`, { method: 'delete' })
      this.timeline = this.timeline.filter(t => t.id != tweetId)
    },
    async signOut() {
      this.meState = {
        me: {
          name: '',
          email: '',
          twitter_name: '',
          birthday: '',
        },
        conversations: [],
        notifications: [],
      }
    },
  },

  getters: {
    getTimelineTweets(): Tweet[] {
      return this.timeline.filter(t => !t.answer_to_id)
    },
    getRepliesByParentId: (state) => {
      return (id: number) => state.timeline.filter(t => t.answer_to_id === id).sort((a, b) => a.id - b.id)
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTwitterStore, import.meta.hot))
}