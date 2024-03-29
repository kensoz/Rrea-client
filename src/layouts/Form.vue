<template>
  <!-- フォーム -->
  <section
    :class="[{ 'bg-gray-900': isDark }, isDark ? 'border-gray-700' : 'border-gray-100']"
    class="flex w-full flex-col border-b px-5 py-3 sm:flex-row sm:justify-between sm:px-16"
  >
    <!-- フォームオプション start -->
    <div :class="{ 'text-gray-200': isDark }" class="w-full flex-col sm:w-2/3">
      <!-- 場所選択 -->
      <div class="c3-form-input_layout">
        <div class="c3-form-title">場所：</div>
        <div class="relative">
          <select
            v-model="params.areaCode"
            class="ml-3 block w-52 appearance-none rounded-md border-2 border-slate-400 pb-1 pl-4 pr-10 font-medium text-slate-700 focus:border-yellow-300 focus:outline-none"
          >
            <option class="font-medium text-slate-700 hover:bg-yellow-200" value="" selected>全場所</option>
            <option
              v-for="item in forms.area"
              :key="item.value"
              :value="item.value"
              class="font-medium text-slate-700 hover:bg-yellow-200"
            >
              {{ item.text }}
            </option>
          </select>

          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700">
            <svg class="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- 氏名選択 -->
      <div class="c3-form-input_layout">
        <div class="c3-form-title">氏名：</div>
        <div v-for="item in forms.name" :key="item.value">
          <input
            :id="item.text"
            v-model="params.nameCode"
            class="peer hidden"
            name="name"
            type="checkbox"
            :value="item.value"
          />
          <label :for="item.text" class="c3-form-label ml-1 px-2">{{ item.text }}</label>
        </div>
      </div>

      <!-- 職務選択 -->
      <div class="c3-form-input_layout">
        <div class="c3-form-title">職務：</div>
        <div v-for="item in forms.job" :key="item.value">
          <input
            :id="item.text"
            v-model="params.jobCode"
            class="peer hidden"
            name="job"
            type="checkbox"
            :value="item.value"
          />
          <label :for="item.text" class="c3-form-label px-3">{{ item.text }}</label>
        </div>
      </div>

      <!-- 種族選択 -->
      <div class="c3-form-input_layout">
        <div class="c3-form-title">種族：</div>
        <div v-for="item in forms.race" :key="item.value">
          <input
            :id="item.text"
            v-model="params.raceCode"
            class="peer hidden"
            name="race"
            type="checkbox"
            :value="item.value"
          />
          <label :for="item.text" class="c3-form-label px-3"> {{ item.text }} </label>
        </div>
      </div>

      <!-- ボタンオプション -->
      <div class="c3-form-input_layout">
        <!-- ソート順 -->
        <button
          type="button"
          class="mr-2 rounded-md bg-yellow-200 px-4 py-2 text-slate-700 shadow-sm hover:bg-yellow-300 hover:shadow"
          @click="sort()"
        >
          <svg
            v-if="isDefaultSort"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"
            />
          </svg>

          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
            />
          </svg>
        </button>

        <!-- リセット -->
        <button
          type="button"
          class="rounded-md bg-yellow-200 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-yellow-300 hover:shadow"
          @click="reset()"
        >
          リセット
        </button>
      </div>
    </div>
    <!-- フォームオプション end -->

    <!-- 場所インフォメーション start -->
    <div class="grid h-28 w-full grid-cols-3 gap-1 py-3 sm:w-44 sm:py-0">
      <template v-for="item in counts" :key="item.area">
        <div
          :class="bgColorCreator(item.value)"
          class="rounded-md px-2 pt-2 text-center text-sm font-medium shadow-sm hover:shadow"
        >
          {{ item.area }}
          <br />
          {{ item.count }}
        </div>
      </template>
    </div>
    <!-- 場所インフォメーション end -->
  </section>
</template>

<script setup lang="ts">
  import { ref, reactive, onMounted, watchEffect } from 'vue'
  import type { IForms, IFormData, IParams, ICounts, IUserSchema, IBodyData } from '../types/Index'
  import useHooks from '../hooks'
  import mitt from '../script'
  import axios from 'axios'

  // ----- use hooks -----
  const { bgColorCreator } = useHooks()

  // ----- 定数、変数定義 -----
  let isOnline = ref<boolean>(true)

  // ----- form  -----
  // form リクエス
  let forms = reactive({}) as IForms
  const getFormData = async (): Promise<void> => {
    await axios
      .get<IFormData>('/api/v1/form')
      .then((res): void => {
        Object.assign(forms, res.data.result)
      })
      .catch((): void => {
        isOnline.value = false
        mitt.emit('changeNetwork', isOnline.value)
      })
  }

  // form リセット
  const reset = (): void => {
    Object.assign(params, { areaCode: '', jobCode: [], nameCode: [], raceCode: [] })
  }

  // ----- data -----
  // data リクエスト
  let counts = ref<ICounts[]>([])
  let users = ref<IUserSchema[]>([])
  let params = reactive<IParams>({
    areaCode: '',
    jobCode: [],
    nameCode: [],
    raceCode: [],
  })

  const getBodyData = async (e: IParams): Promise<void> => {
    await axios
      .post<IBodyData>('/api/v1/data', e)
      .then((res): void => {
        counts.value = res.data.result.count
        users.value = isDefaultSort.value
          ? res.data.result.user
          : res.data.result.user.sort((a: IUserSchema, b: IUserSchema): number => {
              return Number(b.areaCode) - Number(a.areaCode)
            })

        mitt.emit('sendData', users.value)
      })
      .catch((): void => {
        isOnline.value = false
        mitt.emit('changeNetwork', isOnline.value)
      })
  }

  // ソート順
  let isDefaultSort = ref<boolean>(true)
  const sort = (): void => {
    isDefaultSort.value = !isDefaultSort.value
    getBodyData(params)
  }

  // ----- formを監視、変更があればデータを取得 -----
  watchEffect((): void => {
    getBodyData(params)
  })

  // ----- ダークモード -----
  let isDark = ref<boolean>(false)

  // ----- lifecycle -----
  onMounted(async (): Promise<void> => {
    await mitt.on('changeMode', (e: boolean): void => {
      isDark.value = e
    })

    await getFormData()
  })
</script>

<style scoped>
  .c3-form-title {
    @apply mr-0 mb-2 basis-full text-sm text-slate-400 sm:mr-3 sm:mb-0 sm:basis-auto;
  }

  .c3-form-label {
    @apply rounded-md pb-0.5 peer-checked:bg-yellow-300 md:hover:bg-yellow-200 md:hover:shadow;
  }

  .c3-form-input_layout {
    @apply my-2 flex flex-row  flex-wrap items-center font-medium;
  }
</style>
