export default  defineNuxtRouteMiddleware(async (to) => {
  const user = useSupabaseUser()
  const client = useSupabaseClient();
  const { data } = await client
    .from('User')
    .select()

  // if (!user.value && to.path !== '/login') {
  //   return navigateTo('/login')
  // }
})