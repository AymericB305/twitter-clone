import { serverSupabaseClient } from "#supabase/server"
import type { Database } from "~/models/supabase"

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)

  const { text, userName } = await readBody<{ text: string, userName: string }>(event)
  
  const { data: request } = await supabase
    .from('User')
    .select('id')
    .eq('name', userName)
    .single()  

  const { data: answer } = await supabase
    .from('Tweet')
    .insert([
      { user_id: request!.id, text }
    ])
    .select()
    .single()
  
  return answer
})
