<template>
  <main class="min-h-screen w-full bg-gradient-to-t from-slate-300 rounded-2xl to-slate-400 flex flex-col items-center gap-6 px-4 py-6">
    <div class="flex gap-4 flex-wrap justify-center">
      <label class="flex items-center gap-2">
        <input type="radio" value="batman" v-model="selectedpic" />
        <span>BATMAAAN</span>
      </label>
      <label class="flex items-center gap-2">
        <input type="radio" value="donpolloking" v-model="selectedpic" />
        <span>DON POLLO</span>
      </label>
      <label class="flex items-center gap-2">
        <input type="radio" value="doakes" v-model="selectedpic" />
        <span>Sergeant DOAKES</span>
      </label>
    </div>

    <div class="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div :class="cardClass('batman')" @mouseenter="onEnter('batman', batman.audio)" @mouseleave="onLeave">
        <div class="media-box">
          <video v-if="isHovered('batman') && batman.video" :src="batman.video" muted loop autoplay playsinline class="media"></video>
          <img v-else :src="batman.image" class="media" />
        </div>
        <p class="title">{{ batman.name }}</p>
      </div>

      <div :class="cardClass('donpolloking')" @mouseenter="onEnter('donpolloking', donpolloking.audio)" @mouseleave="onLeave">
        <div class="media-box">
          <video v-if="isHovered('donpolloking') && donpolloking.video" :src="donpolloking.video" muted loop autoplay playsinline class="media"></video>
          <img v-else :src="donpolloking.image" class="media" />
        </div>
        <p class="title">{{ donpolloking.name }}</p>
      </div>

      <div :class="cardClass('doakes')" @mouseenter="onEnter('doakes', doakes.audio)" @mouseleave="onLeave">
        <div class="media-box">
          <video v-if="isHovered('doakes') && doakes.video" :src="doakes.video" muted loop autoplay playsinline class="media"></video>
          <img v-else :src="doakes.image" class="media" />
        </div>
        <p class="title">{{ doakes.name }}</p>
      </div>

      <div
        v-for="(pic, index) in genpic"
        :key="index"
        :class="cardClass('gen-' + index)"
        @mouseenter="onEnter('gen-' + index, pic.audio || defaultAudio)"
        @mouseleave="onLeave"
      >
        <div class="media-box">
          <video v-if="isHovered('gen-' + index) && pic.video" :src="pic.video" muted loop autoplay playsinline class="media"></video>
          <img v-else :src="pic.image" class="media" />
        </div>
        <p class="title">{{ pic.name }}</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

interface StItem {
  name: string
  image: string
  video?: string
  audio?: string
}

const batman = reactive<StItem>({
  name: 'BATMAAAN',
  image: '/images/batman.png',
  video: '/gif/batmanmp4.mp4',
  audio: '/audio/batman.mp3'
})

const donpolloking = reactive<StItem>({
  name: 'U video ma mi gente!',
  image: '/images/donpolloking.png',
  video: '/gif/donpollomp4.mp4',
  audio: '/audio/donpollo.mp3'
})

const doakes = reactive<StItem>({
  name: 'Sergeant Doakes',
  image: '/images/doakes.png',
  video: '/gif/doakesmp4.mp4',
  audio: '/audio/doakes.mp3'
})

const genpic = ref<StItem[]>([
  { name: 'IShowSpeed', image: '/images/ishowspeed.png', video: '/gif/ishowspeedmp4.mp4', audio: '/audio/speed.mp3' },
  { name: 'Metro Man', image: '/images/machobg.png', video: '/gif/machomp4.mp4' },
  { name: 'Michael Scofield', image: '/images/prisonbreakbg.png', video: '/gif/prisonmp4.mp4' }
])

const selectedpic = ref<'' | 'batman' | 'donpolloking' | 'doakes'>('')
const hoveredKey = ref<string | null>(null)
let currentAudio: HTMLAudioElement | null = null
const defaultAudio = '/audio/audio.mp3'

const onEnter = (key: string, audioSrc?: string) => {
  hoveredKey.value = key
  const src = audioSrc || defaultAudio
  if (currentAudio) {
    currentAudio.pause()
    currentAudio.currentTime = 0
  }
  currentAudio = new Audio(src)
  currentAudio.play().catch(() => {})
}

const onLeave = () => {
  hoveredKey.value = null
  if (currentAudio) {
    currentAudio.pause()
    currentAudio.currentTime = 0
    currentAudio = null
  }
}

const isHovered = (key: string) => hoveredKey.value === key
const isSelected = (key: string) => selectedpic.value === key

const cardClass = (key: string) => [
  'card rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md p-3',
  'transition-transform duration-200 w-full flex flex-col items-center',
  isSelected(key) ? '-translate-y-3 ring-2 ring-violet-400 shadow-lg' : 'hover:-translate-y-1'
]
</script>

<style scoped>
.card {
  @apply rounded-2xl border border-gray-300 p-3;
}
.media-box {
  @apply w-full h-72 flex items-center justify-center bg-white;
}
.media {
  @apply max-w-full max-h-full object-contain;
}
.title {
  @apply mt-2 text-lg text-center;
}
</style>