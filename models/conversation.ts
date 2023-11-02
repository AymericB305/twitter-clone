import type { User } from "./user"

export type Conversation = {
  user: User,
  messages: Message[],
}

export type Message = {
  text: string,
  sentAt: Date,
  isSeen: boolean,
  isLiked: boolean,
}