<template>
  <!-- フッター -->
  <section :class="[{ 'bg-gray-900': isDark }, isDark ? 'border-gray-700' : 'border-gray-100']" class="border-t py-2">
    <div class="text-center text-xs font-medium text-slate-400">Rrea-Client 1（Vue.js3+TS+Tailwindcss3）by RenHou</div>
  </section>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import mitt from '../script'

  // ----- ダークモード -----
  let isDark = ref<boolean>(false)
  onMounted(async (): Promise<void> => {
    await mitt.on('changeMode', (e: boolean): void => {
      isDark.value = e
    })
  })
</script>
