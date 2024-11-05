# Prueba Técnica Dazlabs

## Descripción

Esta es una prueba técnica de Dazlabs donde apliqué mis conocimientos como desarrollador **Full Stack**. El proyecto consiste en una aplicación web para gestionar comidas y recetas, donde se implementan roles de usuario con diferentes niveles de acceso.

## Tecnologías aplicadas

Las tecnologías utilizadas en este proyecto son:

- **Backend:** Express, TypeScript, Nodemon, Mongoose, MongoDB, Axios, JWT, Crypto-js, Swagger
- **Frontend:** React, Vite, TypeScript, Tailwind CSS, Axios, jwt-decode

## Roles y Accesos

### Como usuario invitado:
- Solo tiene acceso a la **landing page**, **inicio de sesión** y **registro**.

### Como usuario autenticado:
- Acceso al **Home**, donde podrá visualizar sus comidas y recetas.

### Como usuario administrador:
- Acceso al formulario para agregar nuevas comidas.
- Permiso para **editar** o **eliminar** comidas existentes.

## Instrucciones para iniciar el proyecto

### 1. Clonar el repositorio
Abre una terminal y ejecuta los siguientes comandos:
```bash
git clone <url-del-repositorio>
cd <nombre-del-repositorio>
2. Instalar las dependencias
Backend: Abre una terminal en la carpeta api y ejecuta:
bash
Copiar código
npm install
Frontend: Abre otra terminal en la carpeta client y ejecuta:
bash
Copiar código
npm install
3. Configurar las variables de entorno
Backend:
Crea un archivo .env en la carpeta api y agrega las siguientes variables:

env
Copiar código
PORT=process.env.PORT || 3000         # El servidor se iniciará en el puerto 3000 si no se asigna otro puerto
API_URL=https://www.themealdb.com/api/json/v1/1/search.php?s=
MONGO_URI=<tu_mongo_uri>              # URI de conexión a tu base de datos MongoDB
SECRET_KEY=<tu_secret_key_para_encrypt_passwords>  # Clave secreta para encriptar contraseñas
JWT_SECRET=<tu_secret_key_para_generar_tokens>     # Clave secreta para generar tokens JWT
Frontend:
Crea un archivo .env en la carpeta client y agrega la siguiente variable:

env
Copiar código
VITE_BACK_URL=http://localhost:3000    # En el caso de haber asignado otro puerto para el backend, poner el que corresponde.
4. Ejecutar el backend
Abre una terminal en la carpeta api y ejecuta:

bash
Copiar código
npm start
Si todo sale bien, deberías ver los siguientes mensajes en la consola:

Conexión a la base de datos establecida.
Precarga de comida realizada con éxito.
Usuario Test precargado correctamente.
Escuchando peticiones en http://localhost:3000 (o el puerto que hayas asignado).
5. Ejecutar el frontend
Abre una terminal en la carpeta client y ejecuta:

bash
Copiar código
npm run dev
El front estará disponible en http://localhost:5173 (o el puerto que indique Vite).
El backend estará disponible en http://localhost:3000 (o el puerto asignado en el paso anterior).

Instrucciones para iniciar sesión como administrador
Para probar las funcionalidades de administrador, se precarga un usuario administrador con las siguientes credenciales:

Email: userTest@gmail.com
Contraseña: password123
Usa estas credenciales para iniciar sesión y acceder a las funcionalidades de administrador, como la gestión de comidas (agregar, editar y eliminar

