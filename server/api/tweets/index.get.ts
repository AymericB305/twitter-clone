import { serverSupabaseClient } from "#supabase/server"
import type { Database } from "~/models/supabase"
import { User } from "~/models/user"

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)
  const { data: tweets } = await supabase
    .from('Tweet')
    .select('*')
    
  const tweetsDto = await Promise.all(tweets!.map(async (t) => {
    
    return {
      user: await getUser(t.user_id, supabase),
      text: t.text,
      date: t.created_at,
      replies: [],
      likes: 0,
      retweets: 0
    }
  }))
  
  return tweetsDto
})

async function getUser(id: number, supabase: any): Promise<User> {
  const { data } = await supabase
    .from('User')
    .select('*')
    .eq('id', id!)
    .single()
    
  return data
}
