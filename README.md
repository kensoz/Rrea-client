# 🟨 Rrea-Client（C1）

![Node](https://img.shields.io/badge/Node.js-v18.0.0-fb7185.svg?logo=&style=flat-square)  ![Coverage](https://img.shields.io/badge/Coverage-91.69%25-84CC16.svg?style=flat-square)  ![npm](https://img.shields.io/badge/npm-0.3.0-84CC16.svg?style=flat-square)  ![License](https://img.shields.io/badge/License-MIT-0284C7.svg?logo=&style=flat-square)

Demo:  **[Client]() | [Admin]()**  ・  GitHub:  **[Server](https://github.com/kensoz/Rrea-server) | [Admin](https://github.com/kensoz/Rrea-admin) | [Client-Collection](https://github.com/kensoz/Rrea-client-collection)**

##### Rrea-Client とは

メンバー位置と情報の管理システムのフロントエンドです。\
[APIサーバ(Server](https://github.com/kensoz/Rrea-server))、メンバー用サイト(Client)、[管理者用サイト(Admin)](https://github.com/kensoz/Rrea-admin)にFEとBEを分けている仕組みです。

一番使いこなすVue.jsとTailwindCSSで構築し、デフォルトのClientサイトとして公開しましたが、\
[React.js](https://github.com/kensoz/Rrea-client-collection/tree/master/c2-react18-ts-mui)、[Svelte.js](https://github.com/kensoz/Rrea-client-collection/tree/master/c3-svelte-ts-bulma)、[Pinia.js](https://github.com/kensoz/Rrea-client-collection/tree/master/c4-vue3-ts-quasar)などで開発した[プロジェクト](https://github.com/kensoz/Rrea-client-collection)もありますので。ご覧いただけますと幸いです。

##### メイン機能

+ メンバー位置と情報を表示
+ レスポンシブ対応
+ ダークモード



## スタック

+ ⚡️ Vue.js 3 (Composition API)
+ ⚙️ TypeScript
+ 🎨 TailwindCSS 3
+ 📑 Eslint + Prettier
+ 🔌 Vitest（Coverage : **91.69%**）
+ 🏭 Vite
+ 📦 Yarn
+ 🔺 RESTful API



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



