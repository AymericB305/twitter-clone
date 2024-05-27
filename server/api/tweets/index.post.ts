import { serverSupabaseClient } from "#supabase/server"
import type { Database } from "~/models/supabase"

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)

  const { text, userName, answerToId } = await readBody<{ text: string, userName: string, answerToId: number | undefined }>(event)
  
  const { data: request } = await supabase
    .from('User')
    .select('id')
    .eq('name', userName)
    .single()  

  const { data: answer } = await supabase
    .from('Tweet')
    .insert([
      { user_id: request!.id, text, answer_to_id: answerToId }
    ])
    .select()
    .single()
  
  return answer
})
