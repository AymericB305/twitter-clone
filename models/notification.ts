import type { Tweet } from "./tweet"
import type { User } from "./user"

export type Notification = {
  type: 'like' | 'rt' | 'comment' | 'follow',
  user: User,
  tweet?: Tweet,
}