import { serverSupabaseClient } from '#supabase/server'
import { Database } from '~/models/supabase'

export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, 'name')
  const action = getRouterParam(event, 'action')
  const tweet = getRouterParam(event, 'tweet')
  const { activate } = await readBody<{ activate: boolean }>(event)
  
  const supabase = await serverSupabaseClient<Database>(event)

  const { data: user_id } = await supabase
    .from('User')
    .select('id')
    .eq('name', name!)
    .single()

  const update = {
    user_id: user_id!.id,
    tweet_id: +tweet!,
  }
  
  if (action == 'retweet') {
    await supabase
      .from('UserTweet')
      .upsert({ ...update, retweeted: activate })
  }
  if (action == 'like') {
    await supabase
      .from('UserTweet')
      .upsert({ ...update, liked: activate })
  }
  if (action == 'bookmark') {
    await supabase
      .from('UserTweet')
      .upsert({ ...update, saved: activate })
  }
})