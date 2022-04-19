<!-- App.vue -->
<template>
  <Index />
</template>

<script setup lang="ts">
  import { defineAsyncComponent } from 'vue'
  const Index = defineAsyncComponent(() => import('./page/Index.vue'))
</script>
