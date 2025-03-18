FROM node:18-alpine AS build
WORKDIR /app
ARG REACT_APP_PREDICTOR_API_URL
ENV REACT_APP_PREDICTOR_API_URL=${REACT_APP_PREDICTOR_API_URL}
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]