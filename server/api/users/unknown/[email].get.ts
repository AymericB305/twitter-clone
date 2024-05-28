import { serverSupabaseClient } from '#supabase/server'
import type { Database } from '~/models/supabase'

export default defineEventHandler(async (event) => {
  const email = getRouterParam(event, 'email')
  
  if (email) {
    const supabase = await serverSupabaseClient<Database>(event)
    const { data } = await supabase
      .from('User')
      .select('*')
      .eq('email', email)
      .single()      
    return data
  }
  
  return undefined;
})
