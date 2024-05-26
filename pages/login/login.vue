<template>
  <div class="max-w-lg mx-auto">
    <h1 class="text-3xl font-black">Rettiwt</h1>
    <form
      @submit.prevent="() => (isSignUp ? signUp() : login())"
      class="flex flex-col gap-2 mt-16"
    >
      <input
        type="email"
        placeholder="Email"
        v-model="email"
        class="p-2 text-black bg-white rounded"
      />
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        class="p-2 text-black bg-white rounded"
      />
      <button
        type="submit"
        class="p-2 font-medium bg-green-500 rounded hover:bg-green-400"
      >
        <span v-if="isSignUp"> Sign up </span>
        <span v-else> Log in </span>
      </button>
    </form>
    <button
      @click="isSignUp = !isSignUp"
      class="w-full mt-8 text-sm text-center underline text-slate-300"
    >
      <span v-if="isSignUp"> Have an account? Log in instead </span>
      <span v-else> Create a new account </span>
    </button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})
const email = ref('')
const password = ref('')
const isSignUp = ref(false)
const supabase = useClient()

const signUp = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  })
  alert('Check your email for the login link!')
}

const login = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  if (error) console.log(error)
}

const user = useSupabaseUser()
watch(user, async () => {  
  if (user.value) {
    const { data: userData } = await supabase
      .from('User')
      .select('*')
      .eq('email', user.value.email)
      .single()

    if (userData) {
      navigateTo('/')
    } else {
      navigateTo('/account')
    }
  }
}, { immediate: true })
</script>
