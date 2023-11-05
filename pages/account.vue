<template>
  <form class="form-widget" @submit.prevent="updateProfile">
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" :value="user.email" disabled />
    </div>
    <div>
      <label for="username">Username</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="tn">Pseudo</label>
      <input id="tn" type="text" v-model="tn" />
    </div>
    <div>
      <label for="birthday">Birthday</label>
      <input id="birthday" type="date" v-model="birthday" />
    </div>

    <div>
      <input
        type="submit"
        class="block button primary"
        :value="'Update'"
      />
    </div>

    <div>
      <button class="block button" @click="signOut" :disabled="loading">Sign Out</button>
    </div>
  </form>
</template>

<script setup>
definePageMeta({
  layout: false
})
const supabase = useClient()

const username = ref('')
const tn = ref('')
const birthday = ref('')
const avatar_path = ref('')

const user = useSupabaseUser()

async function updateProfile() {
  try {
    const updates = {
      name: username.value,
      twitter_name: tn.value,
      email: user.value.email,
      birthday: birthday.value,
      avatar_path: avatar_path.value,
      updated_at: new Date(),
    }

    const { error } = await supabase
      .from('User')
      .upsert(updates, {
        returning: 'minimal',
      })
    if (error) {
      throw error
    }
  } catch (error) {
    alert(error.message)
  }
}

async function signOut() {
  try {
    loading.value = true
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    user.value = null
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>
