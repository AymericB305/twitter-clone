<template>
  <div>
    <!-- Research -->
    <div class="relative m-4 text-gray-300 w-80">
      <UInput
        icon="i-heroicons-magnifying-glass-20-solid"
        size="sm"
        color="gray"
        :trailing="false"
        placeholder="Search Rettiwt"
        :ui="{ rounded: 'rounded-2xl '}"
      />
    </div>

    <TrendList />
    <SuggestionList />

    <!-- Privacy policy -->
    <div class="flow-root m-6">
      <p class="text-sm font-medium leading-6 text-gray-500">Terms Privacy Policy Cookies Imprint Ads info</p>      
      <p class="text-sm font-medium leading-6 text-gray-600"> © 2020 Twitter, Inc.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
