<template>
  <header class = "flex flex-row w-full relative bg-slate-400 border-b-2 border-slate-300 max-sm:justify-between max-sm:relative">
    <div class = "basis-1/4 items-center justify-start px-8 min-w-40 max-sm:basis-auto">
      <img src="/images/logo10.png" class = "w-16 h-16 bg-transparent">
    </div>

    <div class = "basis-1/4 max-sm:basis-auto"></div>

    <nav :class="{
      'basis-1/2 flex flex-row items-center justify-end px-8 gap-4': !burger || burger,
      'max-sm:basis-auto max-sm:absolute max-sm:top-full max-sm:w-full rounded-sm border-4 border-gray-500 max-sm:flex-col max-sm:justify-center max-sm:gap-0 max-sm:bg-white max-sm:px-0': burger,
      'max-sm:hidden': !burger}">
      <NuxtLink to = "/" class = "my-auto p-2 hover:bg-gray-500 text-black max-sm:w-full max-sm:border-b-2 rounded-md max-sm:border-black max-sm:text-center">Home</NuxtLink>

      <div class="my-auto p-2 hover:bg-gray-500 text-black max-sm:w-full max-sm:text-center rounded-md max-sm:px-0 max-sm:pb-0" @click = "switch_submenu">
        Info
        <div class="flex flex-col border-2 border-gray-500 rounded-lg absolute top-full bg-white text-black w-56 text-center max-sm:relative max-sm:w-full max-sm:bg-gray-400" v-show = 'submenu'>
          <NuxtLink to = "/Page1" class = "my-auto p-2 border-b-2 border-black hover:bg-gray-500 hover:text-black max-sm:w-full max-sm:border-t-2 max-sm:text-center">Описание</NuxtLink>
          <NuxtLink to = "/Page2" class = "my-auto p-2 border-b-2 border-black hover:bg-gray-500 hover:text-black max-sm:w-full max-sm:text-center">История</NuxtLink>
          <NuxtLink to = "/Page3" class = "my-auto p-2 border-b-2 border-black hover:bg-gray-500 hover:text-black max-sm:w-full max-sm:text-center">Зарядная система</NuxtLink>
          <NuxtLink to = "/Page4" class = "my-auto p-2 border-b-2 border-black hover:bg-gray-500 hover:text-black max-sm:w-full max-sm:border-black max-sm:text-center">Технические характеристики</NuxtLink>
        </div> 
      </div>   

      <NuxtLink to = "/LogIn" :class = "{'my-auto p-2 hover:bg-gray-500 max-sm:w-full max-sm:border-b-2 max-sm:border-black max-sm:text-center': submenu,
        'my-auto p-2 hover:bg-gray-500 text-black max-sm:w-full max-sm:border-b-2 max-sm:border-t-2 rounded-md max-sm:border-black max-sm:text-center': !submenu}">About</NuxtLink>

      <NuxtLink to = "/LogOut" class = "my-auto p-2 hover:bg-gray-500 text-black max-sm:w-full max-sm:border-b-2 rounded-md max-sm:border-black max-sm:text-center">Test drive</NuxtLink>
    </nav>

    <div v-if = "!burger" @click = "switch_burger" class = "max-sm:flex max-sm:flex-col max-sm:my-auto max-sm:mr-6 max-sm:justify-between max-sm:items-center max-sm:w-8 max-sm:h-6">
      <span class = "h-[3px] w-full bg-black"></span>
      <span class = "h-[3px] w-full bg-black"></span>
      <span class = "h-[3px] w-full bg-black"></span>
    </div>

    <div v-else class = "max-sm:flex max-sm:flex-col max-sm:my-auto max-sm:mr-6 max-sm:justify-between max-sm:items-center max-sm:w-8 max-sm:h-6" @click="switch_burger">
      <span class = "h-[3px] w-full bg-black rotate-45 relative top-[9px]"></span>
      <span class = "h-[3px] w-full bg-black opacity-0"></span>
      <span class = "h-[3px] w-full bg-black relative bottom-3 rotate-[-45deg]"></span>
    </div>
  </header>

  <main class = "p-6 flex flex-row bg-slate-100 h-screen bg-[url(/public/images/audietron.png)] bg-bottom bg-cover w-full">
    <slot />
  </main>

  <footer class = "flex flex-row w-full bg-slate-400 border-t-2 border-gray-400 items-center justify-center px-2 py-2 gap-6">
    <a href = "https://www.youtube.com/"><img src="/images/youtube1-removebg-preview.png" class = "w-16 h-16"></a>
    <a href = "https://github.com/"><img src ="/images/github1-removebg-preview.png" class = "w-16 h-16"></a>
    <a href = "https://www.facebook.com/"><img src = "/images/facebook1-removebg-preview.png" class = "w-16 h-16"></a>
  </footer>
</template>

<script setup lang="ts">
import { useHead } from '#app'
import {ref, onMounted, watchEffect} from 'vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'

const route = useRoute()

watch(() => route.fullPath, () => {
  burger.value = false
  submenu.value = false
})

useHead({
  script: [
    { async:true, src: 'https://www.googletagmanager.com/gtag/js?id=G-XFC2VB3TND' },
    { innerHTML: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date())
      gtag('config', 'G-XFC2VB3TND')
    `, type: 'text/javascript' },
  ],
  __dangerouslyDisableSanitizersByTagId: {
    gtag: ['innerHTML'],
  },
})

const burger = ref<boolean>(false)
const submenu = ref<boolean>(false)

const switch_burger = ()=> {burger.value = !burger.value}
const switch_submenu = ()=> {submenu.value = !submenu.value}

onMounted(() => {
  watchEffect(() => {
    document.documentElement.classList.toggle('overflow-hidden', burger.value)
  })
})
</script>

