<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const supabase = useClient()
const user = useSupabaseUser()

if (!user?.value) {
  navigateTo('/login')
}
else {
  const { data } = await supabase
    .from('User')
    .select('*')
    .eq('email', user.value.email)
    .single()

  if (!data && useRoute().path != '/account') {
    navigateTo('/account')
  }
}

</script>
