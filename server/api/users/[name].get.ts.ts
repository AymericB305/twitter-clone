import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, 'name')
  
  if (name) {
    const supabase = await serverSupabaseClient(event)
    const { data } = await supabase
      .from('User')
      .select('*')
      .eq('email', name)
      .single()
    return data
  }
  
  return undefined;
})
