import { serverSupabaseClient } from "#supabase/server"
import type { Database } from "~/models/supabase"
import type { Tweet } from "~/models/tweet"
import type { User } from "~/models/user"

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)
  const { data: tweets, error } = await supabase
    .from('Tweet')
    .select('*, user:User!Tweet_user_id_fkey(*), interactions:User!UserTweet(*), UserTweet(liked, retweeted, saved, user:User(*))')
    .is('answer_to_id', null)
    .order('created_at', {ascending: false})

  if (error)
    console.log(error);

  const tweetsDto = await Promise.all(tweets!.map(async (t) => ({
    id: t.id,
    user: t.user,
    text: t.text,
    date: t.created_at,
    replies: await getReplies(t.id, supabase),
    interactions: t.UserTweet,
  })))
  
  return tweetsDto
})

async function getReplies(id: number, supabase: any): Promise<Tweet[]> {
  const { data: replies } = await supabase
    .from('Tweet')
    .select('*')
    .eq('answer_to_id', id)
  return replies    
}

async function getUser(id: number, supabase: any): Promise<User> {
  return await supabase
    .from('User')
    .select('*')
    .eq('id', id!)
    .single()
}
