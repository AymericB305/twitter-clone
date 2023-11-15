import type { User } from "./user"

export type Interaction = {
  user: User,
  liked: boolean,
  retweeted: boolean,
  saved: boolean,
}