import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import Footer from '../../layouts/Footer.vue'
import Header from '../../layouts/Header.vue'
import Form from '../../layouts/Form.vue'
import Body from '../../layouts/Body.vue'

// ----- 単体テスト -----
// axiosテストについて → vitest issues#284: https://github.com/vitest-dev/vitest/issues/284
// Header
test('Header', async () => {
  const wrapper = await mount(Header)
  wrapper.get('input').trigger('click')
  // レスポンシブ
  expect(wrapper.find('.py-4').exists()).toBe(true)
  // ダークモード
  expect(wrapper.find('.border-gray-100').exists()).toBe(true)
})

// Form
test('Form', async () => {
  const wrapper = await mount(Form)
  wrapper.get('button').trigger('click')
  // レスポンシブ
  expect(wrapper.find('.w-full').exists()).toBe(true)
  // ダークモード
  expect(wrapper.find('.border-gray-100').exists()).toBe(true)
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
  expect(wrapper.text()).toContain('Rrea-Client')
})
