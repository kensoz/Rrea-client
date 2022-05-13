<template>
  <!-- フッター -->
  <section :class="{ 'bg-gray-900': isDark, 'border-t': !isDark, 'border-gray-100': !isDark }" class="py-2">
    <div class="text-center font-medium text-xs text-slate-400">
      Rrea Client 3（Vue.js 3 + TS + Tailwindcss3 + Vite）- v1.1.0 BY lian
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import mitt from '../script'

  // ダークモード
  let isDark = ref<boolean>(false)
  onMounted(async (): Promise<void> => {
    await mitt.on('changeMode', (e: boolean): void => {
      isDark.value = e
    })
  })
</script>
