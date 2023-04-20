 Iniciar NPM

Iniciamos un nuevo proyecto con:

npm init -y

#
Instalar Parcel.js

Ejecutamos:

npm i -D parcel-bundler

#
Configurar scripts

Agregamos los siguientes scripts a nuestro package.json

"scripts": {
  "dev": "parcel src/index.html",
  "pro": "parcel build src/index.html"
},

#
Crear carpeta src

Creamos una carpeta llamada src y dentro creamos un index.html y un index.js

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <title>Parcel</title>
</head>
<body>
  <h1>Sin Parcel</h1>

  <script src="./index.js"></script>
</body>
</html>

console.log('hola mundo con Parcel.js');

#
Run dev

Ejecutamos:

npm run dev

#
Módulos

Podemos separar nuestro código utilizando módulos de Javascript, para eso creamos un nuevo archivo llamado modulo.js:

const saludar = () => {
  return 'Hola desde un módulo';
}

export {saludar}

Y dentro de nuestro index.js lo podemos llamar:

// console.log('hola mundo 2');
import {saludar} from './modulo.js'

console.log(saludar());

Ahora verán el saludos pero desde un módulo
#
SASS

Ahora veremos como trabajar con archivos scss (SASS), creamos una carpeta llamada 'estilos' y dentro un archivo main.scss:

$colorFondo: peru;

body{
  background-color: $colorFondo;
}

Y los llamamos dentro de nuestro archivo index.js:

import './estilos/main.scss';

Al guardar se instalará de forma automática Sass 😃
#
Producción

Para pasar a producción les recomiendo eliminar la carpeta 'dist' y ejecutar:

npm run pro
