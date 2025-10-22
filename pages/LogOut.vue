<template>
  <main class="min-h-screen rounded-2xl w-full flex flex-col items-center justify-center bg-gradient-to-t from-slate-300 to-slate-400 text-center">
    <div class="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
      <h2 class="text-2xl font-semibold mb-3">You have been logged out</h2>
      <p class="text-gray-600 mb-6">Thank you for visiting! See you soon</p>

      <NuxtLink to="/LogIn" class="inline-block bg-slate-700 hover:bg-slate-800 text-white rounded-md px-5 py-2 transition">
        Go to Login
      </NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  localStorage.removeItem('user')   
  sessionStorage.clear()
})
</script>
<style scoped>
h2 {
  @apply text-slate-800;
}
</style>