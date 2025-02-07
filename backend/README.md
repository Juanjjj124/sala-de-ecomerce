# Backend - Proyecto Ecomerce
E-Commerce Backend (Node.js + Express + MongoDB)
Este repositorio contiene el backend de un sistema de comercio electrónico, desarrollado utilizando Node.js, Express, y MongoDB. Proporciona una API RESTful que gestiona usuarios, productos, categorías, carritos y órdenes.

Instalación
Clona este repositorio:

bash
Copiar código
git clone https://github.com/Juanjjj124/sala-de-ecomerce.git
Instala las dependencias:

bash
Copiar código
cd ecommerce-backend
npm install
Crea un archivo .env con las siguientes variables:

bash
Copiar código
PORT = 5000
MONGO_URL = mongodb://localhost:27017/ecomerce
JWT_SECRET = clave_segura_jwt

Ejecuta el servidor:

bash
Copiar código
npm start
El servidor estará disponible en http://localhost:5000.

Endpoints
Usuarios
POST /api/users/register - Registrar un nuevo usuario.
POST /api/users/login - Iniciar sesión y obtener token JWT.
GET /api/users/profile - Obtener el perfil del usuario autenticado.
Productos
GET /api/products - Obtener todos los productos.
GET /api/products/:id - Obtener un producto específico.
POST /api/products - Crear un producto (solo administrador).
PUT /api/products/:id - Actualizar un producto (solo administrador).
DELETE /api/products/:id - Eliminar un producto (solo administrador).
Categorías
GET /api/categories - Obtener todas las categorías.
POST /api/categories - Crear una categoría (solo administrador).
DELETE /api/categories/:id - Eliminar una categoría (solo administrador).
Carrito
POST /api/cart - Añadir un producto al carrito.
GET /api/cart - Obtener los productos en el carrito.
DELETE /api/cart/:productId - Eliminar un producto del carrito.
Órdenes
POST /api/orders - Crear una nueva orden con los productos del carrito.
GET /api/orders - Obtener todas las órdenes de un usuario.
GET /api/orders/:id - Obtener detalles de una orden específica.
Estructura de Carpetas
models/ - Modelos de Mongoose para los usuarios, productos, categorías, carritos y órdenes.
routes/ - Rutas para manejar las solicitudes de la API.
controllers/ - Lógica de controladores para cada endpoint.
middleware/ - Middleware de autenticación y control de acceso.
config/ - Configuración de la base de datos y JWT.
Requerimientos

Node.js
MongoDB
postgress 
postman