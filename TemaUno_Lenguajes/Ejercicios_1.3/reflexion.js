/* REFLEXIÓN - EJERCICIO 1.3

Jorge Roberto Novelo Poot

1. ¿Cuál es la diferencia fundamental entre un módulo nativo (como 'fs') y un módulo de NPM (como 'sillyname') en cuanto a su origen e instalación?

Módulo nativo (fs): ya viene incluido con Node.js, no se instala.

Módulo NPM (sillyname): lo crea la comunidad y debes instalarlo con npm install.

La diferencia principal es que uno ya viene y el otro se descarga.


2. Investigando la sintaxis: ¿Qué diferencia existe entre 'require' (CommonJS) y 'import' (ES Modules)? Considera el momento en que se cargan los módulos.


require (CommonJS): carga los módulos cuando el programa se está ejecutando.

import (ES Modules): carga los módulos desde el inicio, antes de ejecutar el código.

require es más “dinámico”, import es más “ordenado y moderno”.

3. Sobre el archivo 'package.json': 

a) ¿Por qué es vital compartir este archivo pero NO la carpeta 'node_modules' al subir a un repositorio?
package.json dice qué librerías necesita el proyecto.

node_modules pesa mucho y se puede volver a generar, por eso solo se sube package.json.

b) ¿Qué sucede si ejecutas 'npm install' en una carpeta que solo tiene el package.json?

NPM lee el archivo.

Descarga todas las dependencias.

Crea la carpeta node_modules.

Recupera todo el proyecto automáticamente.

*/