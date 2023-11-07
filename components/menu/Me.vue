<template>
  <div class="flex items-center p-4 mt-12 mr-2">
    <img class="w-12 h-12 mr-2 rounded-full"
      :src="data!.signedUrl" alt="" />
    <div class="flex flex-col">
      <p>
        {{ me?.name }}
      </p>
      <p class="text-sm text-gray-400">
        @{{ me?.twitter_name }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { User } from '~/models/user';

const props = defineProps<{ me?: User }>()

const supabase = useClient();
const { data } = await supabase.storage.from('avatars').createSignedUrl(props.me!.email, 60)

</script>
