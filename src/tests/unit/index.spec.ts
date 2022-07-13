import { mount } from '@vue/test-utils'
import { test, expect, vi } from 'vitest'
import Footer from '../../layouts/Footer.vue'
import Header from '../../layouts/Header.vue'
import Form from '../../layouts/Form.vue'
import Body from '../../layouts/Body.vue'
import { forms, users } from './mockData'
import axios from 'axios'

// axiosを監視して、モックデータを設定
vi.spyOn(axios, 'get').mockResolvedValue(forms)
vi.spyOn(axios, 'post').mockResolvedValue(users)

// ----- 単体テスト -----
// Header
test('Header', async () => {
  const wrapper = await mount(Header)
  // レスポンシブ
  expect(wrapper.find('.py-4').exists()).toBe(true)
  // ダークモード：ライト
  expect(wrapper.find('.border-gray-100').exists()).toBe(true)
  // ダークモード：ダーク
  await wrapper.find('input[type="checkbox"]').setValue(true)
  expect(wrapper.find('.border-gray-800').exists()).toBe(true)
})

// Form
test('Form', async () => {
  const wrapper = await mount(Form)
  // レスポンシブ
  expect(wrapper.find('.w-full').exists()).toBe(true)
  // ダークモード：ライト
  expect(wrapper.find('.border-gray-100').exists()).toBe(true)
  // axios getFormData
  expect(axios.get).toHaveBeenCalledWith('/api/v1/form')
  // @ts-ignore
  expect(await axios.get().then(res => res)).toBe(forms)
  // axios getBodyData
  const params = { areaCode: '', jobCode: [], nameCode: [], raceCode: [] }
  expect(axios.post).toHaveBeenCalledWith('/api/v1/data', params)
  // @ts-ignore
  expect(await axios.post().then(res => res)).toBe(users)
})

// Body
test('Body', async () => {
  const wrapper = await mount(Body)
  expect(wrapper.text()).toContain('指定されたユーザーがいません')
  // teleport to="body": go to topボタン
  expect(wrapper.find('.fixed').exists()).toBe(false)
  // tailwindcss @apply
  expect(wrapper.find('.grid').exists()).toBe(false)
  // ダークモード
  expect(wrapper.find('.text-gray-200').exists()).toBe(false)
})

// Footer
test('Footer', async () => {
  const wrapper = await mount(Footer)
  // テキスト
  expect(wrapper.text()).toContain('Rrea-Client')
})
