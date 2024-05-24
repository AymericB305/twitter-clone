import type { NuxtPage } from "nuxt/schema"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@nuxt/ui'
  ],
  components: [
    {
      path: '~/pages',
      pattern: '*/components/**',
      pathPrefix: false,
    },
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  hooks: {
    'pages:extend'(pages) {
      const pagesToRemove: NuxtPage[] = []
      pages.forEach((page) => {
        if (page.path.includes('component')) pagesToRemove.push(page)

        const sections = page.path.split('/')        
        if (sections.at(-1) === sections.at(-2)) {
          page.path = page.path.slice(0, page.path.length - (sections.at(-1)!.length + 1))
          page.name = page.name?.slice(0, page.name.length - (sections.at(-1)!.length + 1))
        }
      })
  
      pagesToRemove.forEach((page: NuxtPage) => {
        pages.splice(pages.indexOf(page), 1)
      })
    }
  },
  colorMode: {
    classSuffix: ''
  },
})
