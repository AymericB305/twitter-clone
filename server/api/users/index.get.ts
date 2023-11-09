export default defineEventHandler(async (event) => {
  const supabase = useClient()
  const { data } = await supabase
    .from('User')
    .select('*')
  return data
})
