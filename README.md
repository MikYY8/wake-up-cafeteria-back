# 🛒 Wake Up Cafetería – API REST (Backend)

Proyecto realizado para Programación Web, correspondiente a la creación de una API RESTful completa, con autenticación, validación, paginación, logger y estructura profesional.

Esta API gestiona dos entidades principales:

Productos (Entidad Principal)

Categorías (Entidad de Soporte)

Además incluye sistema de usuarios, roles, login, refresh token y protección de rutas.

## 🚀 Descripción

Wake Up Cafetería es una aplicación tipo e-commerce enfocada en la venta de productos de cafetería.
Este backend permite:

- Crear, listar, actualizar y eliminar productos
- Crear, listar, actualizar y eliminar categorías
- Registrar usuarios
- Login con JWT
- Renovación de tokens
- Autorización por roles (user y admin)
- Validación de datos con express-validator
- Logger con Winston
- Paginación en endpoints de listado

La API fue desarrollada utilizando Node.js + Express, con base de datos en MongoDB Atlas.

## ✨ Funcionalidades principales
### 1. 🔐 Autenticación

Registro de usuarios con contraseña hasheada (bcrypt)

Login con generación de:

Access Token (corto plazo)

Refresh Token (largo plazo)

Renovación de Access Token a partir del Refresh Token

Middleware de autenticación (authMiddleware)

Middleware de roles (authRolesMiddleware)

### 2. 🗂 CRUD Completo (ABMC)
Productos (Entidad Principal)

GET /api/products (con paginación)

GET /api/products/:id

POST /api/products (solo admin)

PUT /api/products/:id (solo admin)

DELETE /api/products/:id (solo admin)

Categorías (Entidad de Soporte)

GET /api/category

GET /api/category/:id

POST /api/category (solo admin)

PUT /api/category/:id (solo admin)

DELETE /api/category/:id (solo admin)

Usuarios

POST /api/users/register

POST /api/users/login

POST /api/users/token

### 3. 🧹 Validaciones

Validación realizada con express-validator en:

Productos

Categorías

Usuarios (registro + login)

Validación de ID (params)

Validación de datos obligatorios y tipos

## 🛠 Tecnologías utilizadas

Node.js

Express.js

MongoDB + Mongoose

JWT (jsonwebtoken)

Bcrypt

Express-validator

Winston (logger)

Cors

Dotenv

Render (Hosting del backend)

Git / GitHub

📁 Estructura del Proyecto
/src
   /controllers
   /middlewares
   /model
   /router
   /service
   /utils
app.js
README.md
package.json

## 🧪 Instrucciones de Uso

1️⃣ Clonar el repositorio

```bash
git clone <URL-del-repo>
cd wake-up-cafeteria-back
```


2️⃣ Instalar dependencias

```bash
npm install
```

3️⃣ Configurar variables de entorno

Crear .env con:

```bash
PORT=3000
MONGOURL=<string-de-mongo-atlas>
JWT_ACCESS=<clave-para-access-token>
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH=<clave-para-refresh-token>
JWT_REFRESH_EXPIRES_IN=3d
```bash

4️⃣ Iniciar servidor en desarrollo

```bash
npm run dev
```

🖼 Imágenes de la aplicación

(Aquí van capturas de Postman o del frontend una vez conectado)

🙋 Contribuidores

Micaela Ybarra – Backend

Salomón Prieto – Frontend