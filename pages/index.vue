<template>
  <section class="px-6 py-20 text-center text-black">
    <h1 class="text-4xl font-semibold">Audi e-tron GT</h1>
    <p class="mt-4 max-w-2xl mx-auto text-gray-800">
      Электрический гран-турер, сочетающий мощность, тишину и технологии будущего.
      Разгон до 100 км/ч ≈ 4 с, запас хода до 480 км.
    </p>
    <div class="mt-8 flex justify-center gap-3">
      <NuxtLink to = "/LogIn" class = "rounded-lg border border-black px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-black/30 transition max-sm:w-full max-sm:text-center">Узнать больше</NuxtLink>
      <NuxtLink to = "/LogOut" class = "rounded-lg border border-black px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-black/30 transition max-sm:w-full max-sm:text-center">Тест драйв</NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>