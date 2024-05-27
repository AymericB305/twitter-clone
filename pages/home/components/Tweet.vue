<template>
  <div class="flex pt-4 pr-4 cursor-pointer hover:bg-blue-200 hover:bg-opacity-5" @click="navigateTo(tweetUrl)">
    <div class="m-2" @click.stop="navigateToUser()">
      <img class="w-12 h-12 rounded-full"
      :src="avatars_URL + tweet.user.email" alt="" />
    </div>

    <div class="flex-grow max-w-lg mb-2">
      <div class="flex items-center gap-2">
        <p class="font-medium" @click.stop="navigateToUser()">{{ tweet.user.twitter_name }}</p>
        <p class="text-sm text-gray-400">
          <span @click.stop="navigateToUser()">@{{ tweet.user.name }}</span> · {{ formattedDate }}
        </p>

        <UButton
          icon="i-heroicons-ellipsis-horizontal"
          color="black"
          variant="ghost"
          class="justify-end"
          @click.stop="openContextMenu()"/>
      </div>

      <p class="flex-shrink text-base font-normal text-white width-auto">
        {{ tweet.text }}
      </p>

      <div class="flex justify-between w-full">
        <UButton 
          icon="i-heroicons-chat-bubble-oval-left"
          color="black"
          variant="ghost"
          class="hover:text-blue-500"
          :ui="{ padding: 'p-0'}"
          @click="isAnswerOpen = true"
        >
          <span :class="{'invisible': tweet.replies.length == 0}">{{ tweet.replies.length }}</span>
        </UButton>
        <UButton 
          icon="i-heroicons-arrow-path-rounded-square"
          color="black"
          variant="ghost"
          class="hover:text-green-500"
          :class="{'text-green-500': hasMeRetweeted}"
          @click.stop="interact('retweet', !props.hasMeRetweeted)"
        >
          <span :class="{'invisible': retweets.length == 0}">{{ retweets.length }}</span>
        </UButton>
        <UButton 
          icon="i-heroicons-heart"
          color="black"
          variant="ghost"
          class="hover:text-red-500"
          :class="{'text-red-500': hasMeLiked}"
          @click.stop="interact('like', !props.hasMeLiked)"
        >
          <span :class="{'invisible': likes.length == 0}">{{ likes.length }}</span>
        </UButton>
        <UButton 
          icon="i-heroicons-arrow-up-tray"
          color="black"
          variant="ghost"
          class="hover:text-blue-500"
          @click.stop="copy()"
        />
        <UButton 
          icon="i-heroicons-bookmark"
          color="black"
          variant="ghost"
          class="hover:text-blue-500"
          :class="{'text-blue-500': hasMeBookmarked}"
          @click.stop="interact('bookmark', !props.hasMeBookmarked)"
        />
      </div>
    </div>

    <UContextMenu v-model="isContextOpen" :virtual-element="virtualElement">
      <div class="p-4" @click.stop="deleteTweet()">
        Delete this tweet
      </div>
    </UContextMenu>
  </div>
  <hr class="border-gray-600">
  
  <UModal v-model="isAnswerOpen">
    <CreateTweet :placeholder="'Post your answer'" @send="reply($event)" />
  </UModal>
</template>

<script lang="ts" setup>
import { avatars_URL } from '~/constants/const';
import type { Tweet } from '~/models/tweet';
import { useMouse, useWindowScroll } from '@vueuse/core'

const props = defineProps<{ tweet: Tweet, hasMeRetweeted: boolean, hasMeLiked: boolean, hasMeBookmarked: boolean }>()
const emit = defineEmits(['interact', 'reply', 'delete'])

const isAnswerOpen = ref(false)
const isContextOpen = ref(false)

const likes = computed(() => props.tweet.interactions.filter(i => i.liked))
const retweets = computed(() => props.tweet.interactions.filter(i => i.retweeted))
const tweetUrl = computed(() => props.tweet.user.name + '/status/' + props.tweet.id)

const formattedDate = computed(() => formatDate(props.tweet.date))

function navigateToUser() {
  navigateTo('/' + props.tweet.user.name)
}

function interact(action: string, activate: boolean) {
  emit('interact', { action, activate })
}

function formatDate(isoString: string): string {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }).format(date);
}

function reply(content: string) {
  emit('reply', content)
  isAnswerOpen.value = false
}

const route = useRequestURL()
const toast = useToast()

async function copy() {  
  await navigator.clipboard.writeText(route.href + tweetUrl.value)

  toast.add({ title: 'Copied to clipboard!' })
}

const { x, y } = useMouse()
const { y: windowY } = useWindowScroll()
const virtualElement = ref({ getBoundingClientRect: () => ({}) })

function openContextMenu () {
  const top = unref(y) - unref(windowY)
  const left = unref(x)

  virtualElement.value.getBoundingClientRect = () => ({
    width: 0,
    height: 0,
    top,
    left
  })

  isContextOpen.value = true
}

function deleteTweet() {
  emit('delete')
}

</script>
