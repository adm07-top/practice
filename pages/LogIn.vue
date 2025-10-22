<template>
  <main class="min-h-screen w-full flex items-center justify-center rounded-2xl bg-gradient-to-t from-slate-300 to-slate-400">
    <form
      @submit.prevent="login"
      class="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm flex flex-col gap-4"
    >
      <h2 class="text-2xl font-semibold text-center mb-2">Log In</h2>

      <label class="flex flex-col gap-1">
        <span class="text-sm font-medium text-gray-700">Username</span>
        <input
          v-model="username"
          type="text"
          required
          placeholder="Enter your username"
          class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
      </label>

      <label class="flex flex-col gap-1">
        <span class="text-sm font-medium text-gray-700">Password</span>
        <input
          v-model="password"
          type="password"
          required
          placeholder="Enter your password"
          class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
      </label>

      <button
        type="submit"
        class="bg-slate-700 hover:bg-slate-800 text-white rounded-md py-2 transition"
      >
        Log In
      </button>

      <p v-if="error" class="text-red-600 text-center text-sm mt-2">{{ error }}</p>
    </form>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const error = ref('')

const login = () => {
  if (username.value === 'admin' && password.value === '1234') {
    alert('Login successful!')
    error.value = ''
  } else {
    error.value = 'Invalid username or password.'
  }
}
</script>

<style scoped>
form input {
  @apply bg-gray-50;
}
</style>