# Usa la imagen base de Node.js en Alpine
FROM node:alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo del código fuente al contenedor
COPY server.js .

# Expone el puerto que el servidor utiliza
EXPOSE 1683

# Comando para ejecutar el servidor
CMD ["node", "server.js"]
