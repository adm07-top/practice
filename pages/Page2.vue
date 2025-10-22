<template>
  <main class="min-h-screen w-full rounded-2xl bg-gradient-to-t from-slate-300 to-slate-400 flex">
    <aside class="w-56 shrink-0 bg-white/70 border-r border-gray-300 p-4">
      <h2 class="text-xl font-semibold mb-3">Menu</h2>
      <nav class="flex flex-col gap-2">
        <button :class="tabBtn('games')"  @click="select('games')">Games</button>
        <button :class="tabBtn('movies')" @click="select('movies')">Movies</button>
        <button :class="tabBtn('series')" @click="select('series')">Series</button>
        <button :class="tabBtn('music')"  @click="select('music')">Music</button>
      </nav>
    </aside>

    <section class="flex-1 p-6">
      <div class="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(item, i) in activeList"
          :key="i"
          class="card"
          @mouseenter="onEnter(i)"
          @mouseleave="onLeave"
        >
          <div class="media-box">
            <img :src="item.image" alt="" class="media" />
          </div>
          <p class="title">{{ item.name }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

type Item = { name: string; image: string; audio?: string }

const games = ref<Item[]>([
  { name: 'Sekiro', image: '/images/sekiro.png' },
  { name: 'Metro', image: '/images/metrobg.png' },
  { name: 'Hades', image: '/images/hades.png' }
])

const movies = ref<Item[]>([
  { name: 'Inglorious Basterds', image: '/images/basterdsbg.png' },
  { name: 'Interstellar',        image: '/images/interstellar.png' },
  { name: 'The Matrix',          image: '/images/matrixbg.png' }
])

const series = ref<Item[]>([
  { name: 'Breaking Bad', image: '/images/breakingbadbg.png' },
  { name: 'Dexter',       image: '/images/dexterbg.png' },
  { name: 'One Piece',    image: '/images/onepiece.png' }
])

const music = ref<Item[]>([
  { name: 'Billie Jean',           image: '/images/billiebg.png',      audio: '/audio/billie.mp3' },
  { name: 'A Man Without Love',    image: '/images/manwithout.png',  audio: '/audio/manwithout.mp3' },
  { name: 'It Has To Be This Way (MGR)', image: '/images/metalgear.png', audio: '/audio/metalgear.mp3' }
])

const current = ref<'games' | 'movies' | 'series' | 'music'>('games')
const select = (k: typeof current.value) => (current.value = k)

const lists = { games, movies, series, music }
const activeList = computed(() => lists[current.value].value)

let audio: HTMLAudioElement | null = null
const onEnter = (i: number) => {
  if (current.value !== 'music') return
  const src = activeList.value[i].audio
  if (!src) return
  if (audio) { audio.pause(); audio.currentTime = 0 }
  audio = new Audio(src)
  audio.play().catch(() => {})
}
const onLeave = () => {
  if (audio) { audio.pause(); audio.currentTime = 0; audio = null }
}

const tabBtn = (k: typeof current.value) =>
  [
    'px-3 py-2 rounded-lg text-left',
    current.value === k ? 'bg-slate-800 text-white' : 'bg-white hover:bg-slate-200'
  ]
</script>

<style scoped>
.card { @apply rounded-2xl border border-gray-300 p-3 bg-white shadow-md; }
.media-box { @apply w-full h-72 flex items-center justify-center bg-white; }
.media { @apply max-w-full max-h-full object-contain; }
.title { @apply mt-2 text-lg text-center; }
button { @apply transition-colors; }
</style>