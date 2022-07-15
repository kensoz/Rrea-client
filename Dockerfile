# ----- Rrea-client -----
# イメージ指定
FROM node:18.0.0

# 作者指定
LABEL maintainer="renhou"

# ワークスペース指定
WORKDIR /usr/src/Rrea-client

# package.jsonとyarn.lockコピー
COPY ["dist", "./"]

# ファイルコピー
COPY . .

# 次のイメージ指定
FROM nginx:latest

# コンテナ内のビルドしたdistフォルダをnginxへコピー
COPY --from=0 /usr/src/Rrea-client/dist/ /usr/share/nginx/html/

# nginxコンフィグファイルコピー
COPY default.conf /etc/nginx/conf.d/default.conf