# develop stage
FROM node:18-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN yarn global add @quasar/cli
RUN yarn
COPY ./ .
# build stage
FROM develop-stage as build-stage
RUN quasar build
# production stage
FROM nginx:1.17.5-alpine as production-stage
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# FROM nginx:stable-alpine as production-stage
# # RUN mkdir /app
# COPY --from=build-stage /app/dist /app
# # COPY nginx.conf /etc/nginx/nginx.conf
# # COPY --from=build-stage /app/dist /usr/share/nginx/html
# EXPOSE 8080
# CMD ["nginx", "-g", "daemon off;"]
# FROM nginx:alpine as production-build
# COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

# ## Remove default nginx index page
# RUN rm -rf /usr/share/nginx/html/*

# # Copy from the stahg 1
# COPY --from=build-stage /app/dist /usr/share/nginx/html

# EXPOSE 80
# ENTRYPOINT ["nginx", "-g", "daemon off;"]
