import { serverSupabaseClient } from "#supabase/server"
import type { Database } from "~/models/supabase"

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)
  const { data: tweets, error } = await supabase
    .from('Tweet')
    .select(`id, text, date:created_at, answer_to_id,
            user:User!Tweet_user_id_fkey(*),
            interactions:UserTweet(liked, retweeted, saved, user:User(*))
          `)
    .order('created_at', {ascending: false})

  if (error)
    console.log(error);
  
  return tweets
})
