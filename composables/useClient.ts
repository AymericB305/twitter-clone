import type { Database } from '~/models/supabase';

export const useClient = () => {
  return useSupabaseClient<Database>()
}