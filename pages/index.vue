<template>
  <div class="h-auto max-w-2xl border border-t-0 border-gray-600">
    <!--header-->
    <h2 class="m-4 text-xl font-semibold text-white">Home</h2>
    <hr class="border-gray-600">
    
    <CreateTweet />

    <Tweet :tweet="tweet" /> 
    <Tweet :tweet="tweet2" />
    <!-- <div class="flex flex-shrink-0 p-4 pb-0">
      <a href="#" class="flex-shrink-0 block group">
        <div class="flex items-center">
          <div>
            <img class="inline-block w-10 h-10 rounded-full"
              src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
          </div>
          <div class="ml-3">
            <p class="text-base font-medium leading-6 text-white">
              Sonali Hirave
              <span
                class="text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300">
                @ShonaDesign . 16 April
              </span>
            </p>
          </div>
        </div>
      </a>
    </div>
    <div class="pl-16">
      <p class="flex-shrink text-base font-medium text-white width-auto">
        Day 07 of the challenge <span class="text-blue-400">#100DaysOfCode</span>
        I was wondering what I can do with <span class="text-blue-400">#tailwindcss</span>, so just started building
        Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion.
        [07/100]
        <span class="text-blue-400"> #WomenWhoCode #CodeNewbie</span>
      </p>

      <div class="pt-3 pr-6 md:flex-shrink">
        <img class="w-full h-64 rounded-lg"
          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
          alt="Woman paying for a purchase">
      </div>
      <div class="flex">
        <div class="w-full">

          <div class="flex items-center">
            <div class="flex-1 text-center">
              <a href="#"
                class="flex items-center w-12 px-3 py-2 mt-1 text-base font-medium leading-6 text-gray-500 rounded-full group hover:bg-slate-800 hover:text-blue-300">
                <svg class="w-6 h-6 text-center" fill="none" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                  </path>
                </svg>
              </a>
            </div>

            <div class="flex-1 py-2 m-2 text-center">
              <a href="#"
                class="flex items-center w-12 px-3 py-2 mt-1 text-base font-medium leading-6 text-gray-500 rounded-full group hover:bg-slate-800 hover:text-blue-300">
                <svg class="w-6 text-center h-7" fill="none" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                </svg>
              </a>
            </div>

            <div class="flex-1 py-2 m-2 text-center">
              <a href="#"
                class="flex items-center w-12 px-3 py-2 mt-1 text-base font-medium leading-6 text-gray-500 rounded-full group hover:bg-slate-800 hover:text-blue-300">
                <svg class="w-6 text-center h-7" fill="none" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                  </path>
                </svg>
              </a>
            </div>

            <div class="flex-1 py-2 m-2 text-center">
              <a href="#"
                class="flex items-center w-12 px-3 py-2 mt-1 text-base font-medium leading-6 text-gray-500 rounded-full group hover:bg-slate-800 hover:text-blue-300">
                <svg class="w-6 text-center h-7" fill="none" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                </svg>
              </a>
            </div>
            <div class="flex-1 py-2 m-2 text-center">
              <a href="#"
                class="flex items-center w-12 px-3 py-2 mt-1 text-base font-medium leading-6 text-gray-500 rounded-full group hover:bg-slate-800 hover:text-blue-300">
                <svg class="w-6 text-center h-7" fill="none" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20">
                  </path>
                </svg>
              </a>
            </div>
            <div class="flex-1 py-2 m-2 text-center">
              <a href="#"
                class="flex items-center w-12 px-3 py-2 mt-1 text-base font-medium leading-6 text-gray-500 rounded-full group hover:bg-slate-800 hover:text-blue-300">
                <svg class="w-6 text-center h-7" fill="none" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                  </path>
                </svg>
              </a>
            </div>
          </div>
        </div>


      </div>

    </div> -->
    <Tweet :tweet="tweet" />
    <!-- <div class="flex flex-shrink-0 p-4 pb-0">
      <a href="#" class="flex-shrink-0 block group">
        <div class="flex items-center">
          <div>
            <img class="inline-block w-10 h-10 rounded-full"
              src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
          </div>
          <div class="ml-3">
            <p class="text-base font-medium leading-6 text-white">
              Sonali Hirave
              <span
                class="text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300">
                @ShonaDesign . 16 April
              </span>
            </p>
          </div>
        </div>
      </a>
    </div>
    <div class="pl-16">
      <p class="flex-shrink text-base font-medium text-white width-auto">
        Day 07 of the challenge <span class="text-blue-400">#100DaysOfCode</span>
        I was wondering what I can do with <span class="text-blue-400">#tailwindcss</span>, so just started building
        Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion.
        [07/100]
        <span class="text-blue-400"> #WomenWhoCode #CodeNewbie</span>
      </p>

      <div class="flex">
        <div class="w-full">
          <div class="flex items-center">
            <div class="flex-1 text-center">
              <a href="#"
                class="flex items-center w-12 px-3 py-2 mt-1 text-base font-medium leading-6 text-gray-500 rounded-full group hover:bg-slate-800 hover:text-blue-300">
                <svg class="w-6 h-6 text-center" fill="none" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                  </path>
                </svg>
              </a>
            </div>

            <div class="flex-1 py-2 m-2 text-center">
              <a href="#"
                class="flex items-center w-12 px-3 py-2 mt-1 text-base font-medium leading-6 text-gray-500 rounded-full group hover:bg-slate-800 hover:text-blue-300">
                <svg class="w-6 text-center h-7" fill="none" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                </svg>
              </a>
            </div>

            <div class="flex-1 py-2 m-2 text-center">
              <a href="#"
                class="flex items-center w-12 px-3 py-2 mt-1 text-base font-medium leading-6 text-gray-500 rounded-full group hover:bg-slate-800 hover:text-blue-300">
                <svg class="w-6 text-center h-7" fill="none" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                  </path>
                </svg>
              </a>
            </div>

            <div class="flex-1 py-2 m-2 text-center">
              <a href="#"
                class="flex items-center w-12 px-3 py-2 mt-1 text-base font-medium leading-6 text-gray-500 rounded-full group hover:bg-slate-800 hover:text-blue-300">
                <svg class="w-6 text-center h-7" fill="none" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                </svg>
              </a>
            </div>
            <div class="flex-1 py-2 m-2 text-center">
              <a href="#"
                class="flex items-center w-12 px-3 py-2 mt-1 text-base font-medium leading-6 text-gray-500 rounded-full group hover:bg-slate-800 hover:text-blue-300">
                <svg class="w-6 text-center h-7" fill="none" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20">
                  </path>
                </svg>
              </a>
            </div>
            <div class="flex-1 py-2 m-2 text-center">
              <a href="#"
                class="flex items-center w-12 px-3 py-2 mt-1 text-base font-medium leading-6 text-gray-500 rounded-full group hover:bg-slate-800 hover:text-blue-300">
                <svg class="w-6 text-center h-7" fill="none" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                  </path>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>

    </div> -->

  </div>
</template>

<script lang="ts" setup>
import type { Tweet } from '~/models/tweet';
import type { User } from '~/models/user';

definePageMeta({
  middleware: ['auth']
})

const me: User = {
  name: "Fingolfin",
  tn: "AymeBric305",
  avatarPath: "",
}

const tweet: Tweet = {
  user: me,
  date: "16 April",
  text: "Ceci est un tweet ratio palu menfou pleure hurle chouine",
  likes: 2,
  replies: [],
  retweets: 4,
}
const tweet2: Tweet = {
  user: me,
  date: "16 April",
  text: "Day 07 of the challenge #100DaysOfCode I was wondering what I can do with #tailwindcss, so just started building Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion. [07/100] #CodeNewbie",
  likes: 2,
  replies: [],
  retweets: 4,
}

</script>
