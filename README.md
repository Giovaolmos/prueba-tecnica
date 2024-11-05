# Prueba Técnica Dazlabs

## Descripción

Esta es una prueba técnica de Dazlabs donde apliqué mis conocimientos como desarrollador full stack.

## Tecnologías aplicadas
Las tecnologías que utilicé para este proyecto fueron:

### Backend
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880E4F?style=for-the-badge&logo=mongoose&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Crypto-js](https://img.shields.io/badge/Crypto--js-9B59B6?style=for-the-badge&logo=crypto&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![jwt-decode](https://img.shields.io/badge/jwt--decode-FF5C6A?style=for-the-badge&logo=jwt&logoColor=white)

## Roles y Accesos

### Como usuario invitado:
- Solo tiene acceso a la landing page, inicio de sesión y registro.

### Como usuario autenticado:
- Acceso al **Home**, donde podrá visualizar sus comidas y recetas.

### Como usuario administrador:
- Acceso al formulario para agregar nuevas comidas.
- Permiso para editar o eliminar comidas existentes.

## Instrucciones para iniciar el proyecto:

1. **Clonar el repositorio y abrir el proyecto en VS**
 ```bash
   git clone <url-del-repositorio>
   cd <nombre-del-repositorio>
   code .
   ```
2.**Instalar las dependencias**

Abre una terminal en la carpeta api y ejecuta el siguiente comando:
```bash
npm install
```
Luego, abre otra terminal en la carpeta client y ejecuta el mismo comando:
```bash
npm install
```
3. **Configurar las variables de entorno**

#### Backend:
 Crea un archivo .env en la carpeta api y agrega las siguientes variables:

PORT= <ejemplo:> 3000

API_URL=https://www.themealdb.com/api/json/v1/1/search.php?s=

MONGO_URI=<tu_mongo_uri>

SECRET_KEY=<tu_secret_key_para_encrypt_passwords>

JWT_SECRET=<tu_secret_key_para_generar_tokens>

#### Frontend:
   Crea un archivo .env en la carpeta client y agrega la siguiente variable:

VITE_BACK_URL=http://localhost:<reemplaza_con_tu_puerto_para_api>   si no asginaste, por defecto:3000

4.**Ejecutar el backend**:

 Abre una terminal en la carpeta api y ejecuta el siguiente comando:
```bash
npm start
```
Si es la primera vez que lo ejecutas y todo salió bien, deberías lo siguiente en la consola:
```
[nodemon] 3.1.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/**/*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node ./src/index.ts`
Conexión a la base de datos establecida.
Precarga de comida realizada con éxito.
Usuario Test precargado correctamente.
Escuchando peticiones en http://localhost:3000
```

5.**Ejecutar el frontend**:

Abre una terminal en la carpeta client y ejecuta el siguiente comando:
```bash
npm run dev
```
#### Si todo salió bien:
El front estará disponible en http://localhost:5173 (o el puerto que indique Vite).

El back estará disponible en http://localhost:3000 (o el puerto que indique la persona).

## Instrucciones para iniciar sesión como administrador

Para probar las funcionalidades de administrador, se precarga un usuario administrador con las siguientes credenciales:

- **Email:** userTest@gmail.com
- **Contraseña:** password123

Puedes usar estas credenciales para iniciar sesión y acceder a las funcionalidades de administrador, como la gestión de comidas (agregar, editar y eliminar).





