# イメージ指定
FROM node:16.3.0

# 作者指定
LABEL maintainer="kensoz"

# ワークスペース指定
WORKDIR /usr/src/frontend

# package.jsonとyarn.lockコピー
COPY ["package.json", "yarn.lock", "./"]

# インストール
RUN yarn

# ファイルコピー
COPY . .

# ビルド
RUN yarn build

# 次のイメージ指定
FROM nginx:latest

# コンテナ内のビルドしたdistフォルダをnginxへコピー
COPY --from=0 /usr/src/frontend/dist/ /usr/share/nginx/html/

# nginxコンフィグファイルコピー
COPY default.conf /etc/nginx/conf.d/default.conf