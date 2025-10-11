// nuxt.config.ts
export default defineNuxtConfig({
  
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  
  app: {
    head: {
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-XFC2VB3TND', async: true },
        {
          // @ts-expect-error Nuxt позволяет children
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XFC2VB3TND', { send_page_view: false });
          `
        }
      ]
    }
  }
})
