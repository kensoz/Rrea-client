<template>
  <!-- ヘーダ -->
  <section
    :class="[{ 'bg-gray-900': isDark }, isDark ? 'border-gray-800' : 'border-gray-100']"
    class="flex justify-between items-center border-b sm:px-8 px-5 py-4"
  >
    <div class="w-40">
      <img src="/logo.png" alt="logo" />
    </div>

    <div class="flex flex-row items-center">
      <!-- ネットワーク状態 https://heroicons.com/ -->
      <svg
        :class="isOnline ? 'fill-emerald-400' : 'fill-rose-400'"
        class="h-7 w-7 mt-1 mr-0.5 sm:mr-1"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        stroke-width="2"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
        />
      </svg>

      <!-- ダークモード -->
      <div>
        <svg
          v-if="isDark"
          class="h-6 w-6 mt-1 mr-0.5 sm:mr-1 fill-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke-width="2"
        >
          <path
            fill-rule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clip-rule="evenodd"
          />
        </svg>

        <svg
          v-else
          class="h-6 w-6 mt-1 mr-0.5 sm:mr-1 fill-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke-width="2"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </div>

      <div class="flex items-center justify-center mr-0.5 sm:mr-1">
        <label for="toggle" class="flex items-center cursor-pointer">
          <div class="relative">
            <!-- input -->
            <input id="toggle" v-model="isDark" type="checkbox" class="sr-only" />
            <!-- line -->
            <div class="block bg-slate-700 w-10 h-6 rounded-full" />
            <!-- dot -->
            <div class="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition" />
          </div>
        </label>
      </div>

      <!-- GitHub https://www.tailwindtoolbox.com/icons -->
      <button
        type="button"
        class="flex items-center px-1 sm:px-4 py-1 ml-2 font-medium shadow-sm hover:shadow bg-yellow-200 rounded-md hover:bg-yellow-300"
        @click="jump()"
      >
        <span>
          <svg
            class="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            />
          </svg>
        </span>

        <span class="ml-1">GitHub</span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue'
  import mitt from '../script'

  // ----- ダークモード -----
  let isDark = ref<boolean>(false)
  watch(isDark, (): void => {
    mitt.emit('changeMode', isDark.value)
  })

  // ----- リンク -----
  const GitHub = 'https://github.com/kensoz/Rrea-client'
  const jump = (): void => {
    window.location.href = GitHub
  }

  // ----- lifecycle -----
  // 起動とデータ取得
  let isOnline = ref<boolean>(true)
  onMounted((): void => {
    mitt.on('changeNetwork', (e: boolean): void => {
      isOnline.value = e
    })
  })
</script>

<style scoped>
  input:checked ~ .dot {
    transform: translateX(100%);
  }
</style>
