FROM node:18-alpine AS build
WORKDIR /app

ARG REACT_APP_PREDICTOR_API_URL=http://localhost:5534
ENV REACT_APP_PREDICTOR_API_URL=${REACT_APP_PREDICTOR_API_URL}

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]