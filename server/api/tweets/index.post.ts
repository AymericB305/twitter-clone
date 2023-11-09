import { serverSupabaseClient } from "#supabase/server"
import type { Database } from "~/models/supabase"
import type { Tweet } from "~/models/tweet"

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)

  const body = await readBody<Tweet>(event)
  const { data: request } = await supabase
    .from('User')
    .select('id')
    .eq('name', body.user.name)
    .single()  

  const { data: answer } = await supabase
    .from('Tweet')
    .insert([
      { user_id: request!.id, text: body.text }
    ])
    .select()
  
  return answer
})
