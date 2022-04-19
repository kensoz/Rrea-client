<template>
  <!-- インデックス -->
  <main class="flex flex-col h-screen font-murecho text-slate-700">
    <header>
      <Header />
    </header>

    <div>
      <Form />
    </div>

    <div class="flex-grow">
      <Body />
    </div>

    <footer>
      <Footer />
    </footer>
  </main>
</template>

<script setup lang="ts">
  import { defineAsyncComponent } from 'vue'
  const Header = defineAsyncComponent(() => import('../layouts/Header.vue'))
  const Form = defineAsyncComponent(() => import('../layouts/Form.vue'))
  const Body = defineAsyncComponent(() => import('../layouts/Body.vue'))
  const Footer = defineAsyncComponent(() => import('../layouts/Footer.vue'))
</script>
