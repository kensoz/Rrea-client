<!-- ######################################################
// *
// * 🟨Rrea-Client
// * by renhou 2022
// *
// * github: https://github.com/kensoz/Rrea-client
// * Vue.js3 + TailWindCSS3
// *
###################################################### -->

<template>
  <Index />
</template>

<script setup lang="ts">
  import { defineAsyncComponent } from 'vue'
  const Index = defineAsyncComponent(() => import('./page/Index.vue'))
  import.meta.env.MODE === 'development' ? console.log('dev standing 🚀') : console.log('こんにちは！🙈')
</script>
