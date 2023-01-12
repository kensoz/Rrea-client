# 🟨 Rrea-Client（C1）

![github](https://github.com/kensoz/Rrea-client/actions/workflows/mian.yml/badge.svg)  [![codecov](https://codecov.io/gh/kensoz/Rrea-client/branch/master/graph/badge.svg?token=1V4VML2KMK)](https://codecov.io/gh/kensoz/Rrea-client)  ![Node](https://img.shields.io/badge/Node.js-v18.0.0-fb7185.svg?logo=&style=flat-square)  ![npm](https://img.shields.io/badge/npm-2.0.0-84CC16.svg?style=flat-square)  ![License](https://img.shields.io/badge/License-MIT-0284C7.svg?logo=&style=flat-square)

Site:  **[Client](http://rrea-client.live) | [Admin](http://rrea-admin.live)**  ・  GitHub:  **[Server](https://github.com/kensoz/Rrea-server) | [Admin](https://github.com/kensoz/Rrea-admin) | [Client-Collection](https://github.com/kensoz/Rrea-client-collection)**

## Rrea-Client とは

メンバー情報管理システムのフロントエンドです。  
[APIサーバ(Server)](https://github.com/kensoz/Rrea-server)とメンバー用サイト(Client)、[管理者用サイト(Admin)](https://github.com/kensoz/Rrea-admin)にFEとBEを分けている仕組みです。

一番使いこなすVue.jsとTailwindCSSで構築し、デフォルトのClientサイトとして公開しましたが、  
[React.js](https://github.com/kensoz/Rrea-client-collection/tree/master/c2-react18-ts-mui)、[Svelte.js](https://github.com/kensoz/Rrea-client-collection/tree/master/c3-svelte-ts-bulma)、[Vue.js+Pinia.js](https://github.com/kensoz/Rrea-client-collection/tree/master/c4-vue3-ts-quasar)などで開発した[プロジェクト](https://github.com/kensoz/Rrea-client-collection)もありますので、ご覧いただけますと幸いです。

## メイン機能

+ メンバー情報の表示
+ レスポンシブ対応
+ ダークモード
+ Vitest、Vue-Test-Utilsによる自動テスト



## スタック

+ ⚡️ Vue.js 3 (Composition API)
+ ⚙️ TypeScript
+ 🎨 TailwindCSS 3
+ 📑 Eslint + Prettier
+ 🔌 Vitest + Vue-Test-Utils
+ 🔩 GitHub Actions + Codecov
+ 🏭 Vite
+ 📦 Yarn
+ 🔺 RESTful API



## システムアーキテクチャー
Cloud service：Tencent Cloud
![system](https://s2.loli.net/2022/07/16/Y7BqVkciA9MCLQZ.jpg)





## ブラウザ対応

✅：Stable  ・  ❌：Not supported

|         | Chrome | Edge | Safari 10+ |  IE  | Firefox |
| :-----: | :----: | :--: | :--------: | :--: | :-----: |
| desktop |   ✅    |  ✅   |     ✅      |  ❌   |    ✅    |
| mobile  |   ✅    |  ✅   |     ✅      |  ❌   |    ✅    |
| tablet  |   ✅    |  ✅   |     ✅      |  ❌   |    ✅    |



## 使用

##### インストール

```bash
yarn install
```

##### 開発

[http://localhost:3000](http://localhost:3000) で起動

```bash
yarn dev
```

##### ビルド

```bash
yarn build
```

##### テスト

```bash
yarn test
```



## 資料&関連記事

+ [Docker-Compose.yml](https://github.com/kensoz/Rrea-server/blob/master/docs/docker-compose.yml)
+ vs codeでVite3によってVue.js3のTS環境を作成ESLintとPrettierを追加：[Qiita](https://qiita.com/kensoz/items/053c7103cd073d09f81e) ・  [掘金](https://juejin.cn/post/7129689902077181960) ・  [思否](https://segmentfault.com/a/1190000042289142)
+ VitestによってVueコンポーネント中のAxiosをテスト：[Qiita](https://qiita.com/kensoz/items/cd5bcd644d8ac3fd6774) ・  [掘金](https://juejin.cn/post/7130069579182637087) ・  [思否](https://segmentfault.com/a/1190000042295748)
