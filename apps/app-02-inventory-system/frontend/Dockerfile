FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build
FROM nginx:1.27-alpine
RUN addgroup -S app && adduser -S -G app app
COPY --from=build /app/dist /usr/share/nginx/html
RUN chown -R app:app /usr/share/nginx/html /var/cache/nginx /var/run
USER app
EXPOSE 80
