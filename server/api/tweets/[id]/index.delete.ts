import { serverSupabaseClient } from "#supabase/server"
import type { Database } from "~/models/supabase"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  const supabase = await serverSupabaseClient<Database>(event)
  
  const { error: errorTweet } = await supabase
    .from('Tweet')
    .delete()
    .eq('id', id!)

    if (errorTweet) console.log(errorTweet)
})
