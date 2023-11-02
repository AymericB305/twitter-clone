import type { User } from '~/models/user';
import type { Tweet } from '~/models/tweet';
import type { State } from './state';

const me: User = {
  name: "AymeBric305",
  twitter_name: "Fingolfin",
  avatar_path: "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png",
}

const tweet: Tweet = {
  user: me,
  date: "19 October",
  text: "Day 07 of the challenge #100DaysOfCode I was wondering what I can do with #tailwindcss, so just started building Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion. [07/100] #CodeNewbie",
  likes: 2,
  replies: [],
  retweets: 4,
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
  timeline: [
    {
      user: me,
      date: "16 April",
      text: "Ceci est un tweet ratio palu menfou pleure hurle chouine",
      likes: 8,
      replies: [tweet, tweet],
      retweets: 65,
    },
    tweet
  ],
  userState: undefined,
  searchState: undefined,
}

export const useTwitterStore = defineStore({
  id: 'twitter',
  state: (): State => initialState,

  actions: {
    sendTweet(tweet: Tweet) {
      this.timeline.unshift(tweet)
    },
  },

  getters: {

  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTwitterStore, import.meta.hot))
}