<template>
  <!-- インデックス -->
  <main class="flex flex-col h-screen font-murecho text-slate-700">
    <header>
      <Header />
    </header>

    <div>
      <Form />
    </div>

    <div class="flex-grow" :class="isDark ? 'bg-gray-800' : 'bg-gray-50'">
      <Body />
    </div>

    <footer>
      <Footer />
    </footer>
  </main>
</template>

<script setup lang="ts">
  import { ref, defineAsyncComponent, onMounted } from 'vue'
  import mitt from '../script'

  // ----- AsyncComponent -----
  const Header = defineAsyncComponent(() => import('../layouts/Header.vue'))
  const Form = defineAsyncComponent(() => import('../layouts/Form.vue'))
  const Body = defineAsyncComponent(() => import('../layouts/Body.vue'))
  const Footer = defineAsyncComponent(() => import('../layouts/Footer.vue'))

  // ----- ダークモード -----
  let isDark = ref<boolean>(false)

  // ----- lifecycle -----
  onMounted(async (): Promise<void> => {
    await mitt.on('changeMode', (e: boolean): void => {
      isDark.value = e
    })
  })
</script>
