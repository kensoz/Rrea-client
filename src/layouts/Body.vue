<template>
  <!-- メインコンテンツ -->
  <section
    :class="isDark ? 'bg-gray-800' : 'bg-gray-50'"
    class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 sm:w-auto w-full h-full sm:p-10 p-5"
  >
    <!-- 指定されたユーザーがいない場合 -->
    <div v-if="users.length === 0" class="font-medium text-slate-400">指定されたユーザーがいません</div>

    <!-- ユーザーデータカード -->
    <template v-for="item in users" :key="item.id">
      <div
        :class="isDark ? 'bg-gray-800' : 'bg-white'"
        class="flex flex-col h-min rounded-md border border-gray-100 shadow-sm hover:shadow"
      >
        <!-- バナー start -->
        <div :class="bgColorCreator(Number(item.areaCode))" class="py-1 text-center font-medium">{{ item.area }}</div>
        <!-- バナー end-->

        <!-- コンテンツ start -->
        <div :class="{ 'text-gray-200': isDark }" class="flex p-1">
          <!-- 写真側 -->
          <div class="flex flex-col w-28 p-2">
            <img class="block rounded-md" :src="item.photo" alt="avatars" />
          </div>

          <!-- インフォメーション側 -->
          <div class="flex flex-col pl-3 pr-2 py-1">
            <div class="font-medium">ID：{{ item.id }}</div>

            <div>
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

            <div class="c3-body-subtitle_layout">
              <span class="c3-body-subtitle">利用時間：</span>
              {{ item.YYYYMMDD }} {{ item.HHMMss.substring(0, 5) }}
            </div>
          </div>
        </div>
        <!-- コンテンツ end -->
      </div>
    </template>
  </section>

  <!-- go to topボタン -->
  <teleport to="body">
    <div class="fixed bottom-10 right-6">
      <button
        class="shadow-sm hover:shadow bg-yellow-200 hover:bg-yellow-300 p-2 rounded-full"
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
  import type { IUserSchema } from '../types'
  import useHooks from '../hooks'
  import mitt from '../script'

  // hooks
  const { bgColorCreator } = useHooks()

  // back to topボタン
  const scrollTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // 起動とデータ取得
  let users = ref<IUserSchema[]>([])
  // ダークモード
  let isDark = ref<boolean>(false)

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
  .c3-body-subtitle {
    @apply text-xs text-slate-400;
  }

  .c3-body-subtitle_layout {
    @apply text-sm font-medium;
  }
</style>
