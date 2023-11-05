<template>
  <div class="flex items-center justify-center">
    <UForm class="w-64" :validate="validate" :state="formState" @submit="updateProfile">
      <UFormGroup label="Email" name="email">
        <UInput v-model="formState.email" disabled />
      </UFormGroup>
      <UFormGroup label="Username" name="username">
        <UInput v-model="formState.username" />
      </UFormGroup>
      <UFormGroup label="Tn" name="tn">
        <UInput v-model="formState.tn" />
      </UFormGroup>
      <UFormGroup label="Birthday" name="birthday">
        <UInput v-model="formState.birthday" />
      </UFormGroup>

      <UButton type="submit">
        Update
      </UButton>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';

definePageMeta({
  layout: false
})

const supabase = useClient()
const user = useSupabaseUser()

const formState = reactive({
  email: user.value?.email,
  username: undefined,
  tn: undefined,
  birthday: undefined,
  avatar_path: ''
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.username) errors.push({ path: 'username', message: 'Required' })
  if (!state.tn) errors.push({ path: 'tn', message: 'Required' })
  if (!state.birthday) errors.push({ path: 'birthday', message: 'Required' })
  return errors
}

async function updateProfile(event: FormSubmitEvent<any>) {
  try {
    const formValues = toRaw(event.data)
    
    const updates = {
      name: formValues.username,
      twitter_name: formValues.tn,
      email: formValues.email,
      birthday: formValues.birthday,
      avatar_path: formValues.avatar_path,
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
  } catch (error: any) {
    alert(error.message)
  }
}

async function signOut() {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    user.value = null
  } catch (error: any) {
    alert(error.message)
  }
}
</script>
