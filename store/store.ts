import type { User } from '~/models/user';
import type { Tweet } from '~/models/tweet';
import type { Trend } from '~/models/trend';

type State = {
  me: User,
  tweets: Tweet[],
  suggestions: User[],
  trends: Trend[],
}

const me: User = {
  name: "Fingolfin",
  tn: "AymeBric305",
  avatarPath: "",
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
  me: me,
  tweets: [
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
  ]
}

export const useTwitterStore = defineStore({
  id: 'twitter',
  state: (): State => initialState,

  actions: {

  },

  getters: {

  },
})