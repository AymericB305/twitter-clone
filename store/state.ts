import type { Conversation } from "~/models/conversation"
import type { Notification } from "~/models/notification"
import type { Trend } from "~/models/trend"
import type { Tweet } from "~/models/tweet"
import type { User } from "~/models/user"

export type State = {
  meState: MeState,
  suggestions: User[],
  trends: Trend[],
  timeline: Tweet[],
  userState: UserState | undefined,
  searchState: SearchState | undefined,
}

export type MeState = {
  me: User,
  notifications: Notification[],
  conversations: Conversation[],
}

export type UserState = {
  user: User,
  tweets: Tweet[],
  mediasUrl: string[],
  likes: Tweet[],
}

export type SearchState = {
  users: User[],
  tweets: Tweet[],
}
