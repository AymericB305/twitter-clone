export default  defineNuxtRouteMiddleware(async (to) => {
  const client = useSupabaseClient();
  
  // if (!user.value && to.path !== '/login') {
  //   return navigateTo('/login')
  // }
})