# Etapa 1: Construcción de la aplicación
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar dependencias y realizar instalación
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copiar el resto del código fuente
COPY . .

# Construcción de la aplicación
RUN npm run build

# Etapa 2: Servidor con Nginx
FROM nginx:alpine

# Copiar archivos compilados al directorio de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]