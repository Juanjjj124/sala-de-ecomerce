README.md - Frontend
E-Commerce Frontend (React)
Este repositorio contiene el frontend de un sistema de comercio electrónico, desarrollado utilizando React. Permite a los usuarios visualizar productos, añadirlos al carrito, y realizar pedidos. La aplicación interactúa con una API RESTful creada con Node.js y Express en el backend.

Instalación
Clona este repositorio:

bash
Copiar código
git clone https://github.com/Juanjjj124/sala-de-ecomerce.git
Instala las dependencias:

bash
Copiar código
cd ecommerce-frontend
npm install

Crea un archivo .env con las siguientes variables:
REACT_APP_API_URL = http://localhost:5000/api

Ejecuta la aplicación:  

bash
Copiar código
npm start
La aplicación estará disponible en http://localhost:3000.
REACT_APP_API_URL = http://localhost:5000/api


Funcionalidades
Registro e inicio de sesión de usuarios: Permite a los usuarios registrarse y acceder a su cuenta.
Vista de productos: Los usuarios pueden ver productos listados por categorías.
Carrito de compras: Los usuarios pueden añadir, eliminar productos del carrito y ver el total.
Realizar,

Estructura de Carpetas
src/ - Contiene todos los archivos fuente de la aplicación.
components/ - Componentes reutilizables (producto, carrito, etc.).
context/ - Gestión de estado con Context API.
pages/ - Vistas principales (Home, Login, ProductDetail, etc.).
services/ - Servicios para interactuar con el backend (API).
App.js - Componente principal que gestiona las rutas de la aplicación.

Requerimientos
Node.js
npm o yarn

inicio con el comando npn run start