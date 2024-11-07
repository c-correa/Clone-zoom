Este es un proyecto de Node.js creado con Express.

## Introducción

Este proyecto es una API para la gestión de productos.

## Estructura de Carpetas

Este proyecto lo estructuro MVC, es decir, Modelo Vista Controlador, para tener una mejor organización del código y facilitar el desarrollo, pero lo cambie un poco para que sea mas facil de entender y de mantener.

dentro de la carpeta `src` se encuentra la carpeta `models` que contiene los modelos de los datos que se van a utilizar en la aplicación, la carpeta `routes` contiene las rutas de la aplicación, la carpeta `controllers` contiene los controladores de las rutas, la carpeta `services` contiene los servicios de las rutas, la carpeta `utils` contiene las funciones auxiliares de la aplicación.

y asi sucesivamente con cada modelo que se vaya a utilizar en la aplicación, se crea una carpeta con el nombre del modelo y dentro de ella se encuentra el archivo del modelo, el archivo de rutas, el archivo de controladores, el archivo de servicios y el archivo de utilidades.
## Descripción del Proyecto

Este es una API para la gestión de productos, se puede crear, actualizar, eliminar y ordenar los productos, se manejan errores con un middleware de manejo de errores y se creeo un sort para ordenar los productos el modelo que user fue el QuickSort pero se ajusto para que sea mas optimo.


## Tecnologías Utilizadas

- Node.js
- Express
- Sequelize
- Postgres
- Cors
- Express Session
- Nodemon
- Typescript

## Instalación

1. Clona el repositorio Backend [Aquí](https://github.com/c-correa/technical-test-api-node).
2. Clona el repositorio Frontend [Aquí](https://github.com/c-correa/technical-test-front).
3. Instala las dependencias con `npm install`.
4. Inicia el proyecto con `npm run dev`.
5. Tener instalado Node.js 20.11.0 o superior.

## Nota: El proyecto Backend se encuentra desplegado en [Render](https://technical-test-api-node.onrender.com).

## NOTA: Al ser un despliegue de manera gratuita la instancia no permanece activa todo el tiempo, es decir, despues de 50 segundos de inactividad la instacia se apaga, si requiere usar la instacia de prod es nesesario comunicarce conmigo via whatsapp y yo prender la instancia para su prueba, de lo contrario puede clonar el backend y prender la api y probrar en un entorno local.