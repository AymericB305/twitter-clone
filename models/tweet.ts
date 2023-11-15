import type { Interaction } from "./interaction";
import type { User } from "./user";

export type Tweet = {
  id: number,
  user: User,
  text: string,
  mediaUrl?: string,
  date: string,
  replies: Tweet[],
  interactions: Interaction[],
}