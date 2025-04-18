// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],



  
    alias: {
      '@': './',
      '~': './'
    }
  ,

   
  ssr: false, 
  
  app: {
    head: {
      title: 'MagnAct - ',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap'
        }
      ]
    }
  }
})