import type { User } from "./user";

export type Tweet = {
  user: User,
  text: string,
  mediaUrl?: string,
  date: string,
  replies: Tweet[],
  likes: number,
  retweets: number,
}