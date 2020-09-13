FROM node:12.18.1-alpine AS builder
WORKDIR /Angular
COPY . .
RUN npm i
RUN npm run build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /Angular/dist/stockmarket/ /usr/share/nginx/html

