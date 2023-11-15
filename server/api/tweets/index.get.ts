import { serverSupabaseClient } from "#supabase/server"
import type { Database } from "~/models/supabase"
import { User } from "~/models/user"

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)
  const { data: tweets, error } = await supabase
    .from('Tweet')
    .select('*, user:User!Tweet_user_id_fkey(*), interactions:User!UserTweet(*), UserTweet(liked, retweeted, saved, user:User(*))')
    .order('created_at', {ascending: false})

  if (error)
    console.log(error);

  const tweetsDto = tweets!.map((t) => ({
    id: t.id,
    user: t.user,
    text: t.text,
    date: t.created_at,
    replies: [],
    interactions: t.UserTweet,
  }))
  
  return tweetsDto
})

async function getUser(id: number, supabase: any): Promise<User> {
  return await supabase
    .from('User')
    .select('*')
    .eq('id', id!)
    .single()
}
