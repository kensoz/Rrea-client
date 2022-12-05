<template>
  <!-- メインコンテンツ -->
  <section class="body-section">
    <!-- 指定されたユーザーがいない場合 -->
    <div v-if="users.length === 0" class="font-medium text-slate-400">指定されたユーザーがいません</div>

    <!-- ユーザーデータカード -->
    <template v-for="item in users" :key="item.id">
      <div
        :class="isDark ? 'bg-gray-800' : 'bg-white'"
        class="flex h-min flex-col rounded-md border border-gray-100 shadow-sm hover:shadow"
      >
        <!-- バナー start -->
        <div :class="bgColorCreator(Number(item.areaCode))" class="py-1 text-center font-medium">{{ item.area }}</div>
        <!-- バナー end-->

        <!-- コンテンツ start -->
        <div :class="{ 'text-gray-200': isDark }" class="flex p-1">
          <!-- 写真側 -->
          <div class="flex w-28 min-w-min flex-col p-2">
            <img class="block h-full rounded-md border border-gray-200" :src="item.photo" alt="avatars" />
          </div>

          <!-- インフォメーション側 -->
          <div class="flex flex-col py-1 pl-3 pr-2">
            <div class="max-w-cs truncate font-medium">ID：{{ item.id }}</div>

            <div class="max-w-cs truncate">
              <span class="text-lg font-bold">{{ item.name }}</span>
              <span class="ml-1 text-xs font-bold text-slate-400">{{ item.nameSpell }}</span>
            </div>

            <div class="c3-body-subtitle_layout">
              <span class="c3-body-subtitle">種族：</span>
              {{ item.race }}
            </div>

            <div class="c3-body-subtitle_layout">
              <span class="c3-body-subtitle">職務：</span>
              {{ item.job }}
            </div>

            <div class="c3-body-subtitle_layout">
              <span class="c3-body-subtitle">スキル：</span>
              {{ item.skill }}
            </div>

            <div class="text-sm font-medium sm:block md:block lg:hidden xl:block">
              <span class="c3-body-subtitle">利用時間：</span>
              {{ item.YYYYMMDD }} {{ item.HHMMss.substring(0, 5) }}
            </div>
          </div>
        </div>
        <!-- コンテンツ end -->
      </div>
    </template>
  </section>

  <!-- vueテレポート -->
  <teleport to="body">
    <!-- Adminボタン -->
    <div class="fixed bottom-24 right-6">
      <button
        class="rounded-full bg-blue-200 p-2 shadow-sm hover:bg-blue-300 hover:shadow"
        type="button"
        @click="jump()"
      >
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>
    </div>

    <!-- go to topボタン -->
    <div class="fixed bottom-10 right-6">
      <button
        class="rounded-full bg-yellow-200 p-2 shadow-sm hover:bg-yellow-300 hover:shadow"
        type="button"
        @click="scrollTop"
      >
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
            />
          </svg>
        </span>
      </button>
    </div>
  </teleport>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import type { IUserSchema } from '../types/Index'
  import useHooks from '../hooks'
  import mitt from '../script'

  // ----- use hooks -----
  const { bgColorCreator } = useHooks()

  // ----- back to topボタン -----
  const scrollTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // ----- リンク -----
  const admin = 'http://rrea-admin.live'
  const jump = (): void => {
    window.location.href = admin
  }

  // ダークモード
  let isDark = ref<boolean>(false)

  // ----- lifecycle -----
  // 起動とデータ取得
  let users = ref<IUserSchema[]>([])
  onMounted(async (): Promise<void> => {
    await mitt.on('changeMode', (e: boolean): void => {
      isDark.value = e
    })

    await mitt.on('sendData', (e: IUserSchema[]): void => {
      users.value = e
    })
  })
</script>

<style scoped>
  .body-section {
    @apply grid w-full gap-3 p-2 sm:w-auto sm:grid-cols-1 sm:p-2 md:grid-cols-2 md:p-5 lg:grid-cols-4 lg:p-6 xl:p-8 2xl:p-10;
  }

  .c3-body-subtitle {
    @apply text-xs text-slate-400;
  }

  .c3-body-subtitle_layout {
    @apply max-w-cs truncate text-sm font-medium;
  }

  .max-w-cs {
    max-width: 9rem;
  }
</style>
