<template>
  <Tweet
    v-if="answerTo"
    :tweet="answerTo"
    :answerTo="store.timeline.find(t => t.id === answerTo?.answer_to_id)"
    :isParent="true"
    @interact="interact($event.id, $event.action, $event.activate)"
    @reply="reply($event.id, $event.content)"
    @delete="deleteTweet($event.id)"
  />

  <div class="flex pr-4 cursor-pointer hover:bg-blue-200 hover:bg-opacity-5" :class="{ 'pt-4': !isParent && !answerTo }" @click="navigateTo(tweetUrl)">
    <div class="flex flex-col mx-2" :class="{ 'mt-2': !answerTo }" @click.stop="navigateToUser()">      
      <UDivider v-if="answerTo" orientation="vertical" size="sm" class="h-1" />

      <img class="w-12 h-12 rounded-full min-w-12" :src="avatars_URL + tweet.user.email" alt="" />

      <UDivider v-if="isParent" class="flex-grow" orientation="vertical" size="sm" />
    </div>

    <div class="flex-grow mb-2">
      <div class="flex items-center gap-2">
        <p class="font-medium" @click.stop="navigateToUser()">{{ tweet.user.twitter_name }}</p>
        <p class="flex-grow text-sm text-gray-400">
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
          @click.stop="isAnswerOpen = true"
        >
          <span :class="{'invisible': replies.length == 0}">{{ replies.length }}</span>
        </UButton>
        <UButton 
          icon="i-heroicons-arrow-path-rounded-square"
          color="black"
          variant="ghost"
          class="hover:text-green-500"
          :class="{'text-green-500': hasMeRetweeted}"
          @click.stop="interact(tweet.id, 'retweet', !hasMeRetweeted)"
        >
          <span :class="{'invisible': retweets.length == 0}">{{ retweets.length }}</span>
        </UButton>
        <UButton 
          icon="i-heroicons-heart"
          color="black"
          variant="ghost"
          class="hover:text-red-500"
          :class="{'text-red-500': hasMeLiked}"
          @click.stop="interact(tweet.id, 'like', !hasMeLiked)"
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
          @click.stop="interact(tweet.id, 'bookmark', !hasMeBookmarked)"
        />
      </div>
    </div>

    <UContextMenu v-model="isContextOpen" :virtual-element="virtualElement">
      <div class="p-4" @click.stop="deleteTweet(tweet.id)">
        Delete this tweet
      </div>
    </UContextMenu>
  </div>
  <hr v-if="!isParent" class="border-gray-600">
  
  <UModal v-model="isAnswerOpen">
    <CreateTweet :isReply="true" :userToReply="tweet.user.name" @send="reply(tweet.id, $event)" />
  </UModal>
</template>

<script lang="ts" setup>
import { avatars_URL } from '~/constants/const';
import type { Tweet } from '~/models/tweet';
import { useMouse, useWindowScroll } from '@vueuse/core'
import { useTwitterStore } from '~/store/store';

const props = defineProps<{ tweet: Tweet, answerTo?: Tweet | undefined, isParent?: boolean | undefined }>()
const emit = defineEmits(['interact', 'reply', 'delete'])

const store = useTwitterStore()

const isAnswerOpen = ref(false)
const isContextOpen = ref(false)

const likes = computed(() => props.tweet.interactions.filter(i => i.liked))
const retweets = computed(() => props.tweet.interactions.filter(i => i.retweeted))
const bookmarks = computed(() => props.tweet.interactions.filter(i => i.saved))
const replies = computed(() => store.getRepliesByParentId(props.tweet.id))

const hasMeLiked = computed(() => likes.value.find(i => i.user.name == store.meState.me.name) ? true : false)
const hasMeRetweeted = computed(() => retweets.value.find(i => i.user.name == store.meState.me.name) ? true : false)
const hasMeBookmarked = computed(() => bookmarks.value.find(i => i.user.name == store.meState.me.name) ? true : false)

const tweetUrl = computed(() => '/' + props.tweet.user.name + '/status/' + props.tweet.id)
const formattedDate = computed(() => formatDate(props.tweet.date))

function navigateToUser() {
  navigateTo('/' + props.tweet.user.name)
}

function interact(id: number, action: string, activate: boolean) {
  console.log(id);
  
  emit('interact', { id, action, activate })
}

function reply(id: number, content: string) {
  isAnswerOpen.value = false
  emit('reply', { id, content })
}

const route = useRequestURL()
const toast = useToast()

async function copy() {  
  await navigator.clipboard.writeText(route.origin + tweetUrl.value)

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

function deleteTweet(id: number) {
  emit('delete', id)
}

</script>
