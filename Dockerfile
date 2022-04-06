FROM node:16-alpine as build

RUN mkdir -p /src

WORKDIR /src
COPY package.json .
RUN yarn install --frozen-lockfile
COPY . .

RUN yarn build
FROM nginx:alpine
COPY --from=build src/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]