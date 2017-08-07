# Guía de estilos para datos.gob.mx

## Objetivo:

Estandarizar la estructura de los contenidos en las dependencias de DGM.

## Requerimientos:

Node, Bower y npm

## Instalación:

1. Instala dependencias de bower: `bower install`
2. Instala dependencias de npm: `npm install`

## Desarrollo:

Una vez instaladas las dependencias de bower y de npm necesitas recompilar los estilos creados en SASS, para ello, puedes simplemente compilarlos una sóla vez `gulp sass` ó compilar al vuelo si es que estarás realizando cambios a los estilos: `gulp sass:watch`.

La página de la guía tiene contenido estático, así es que podras visualizarla abriendo el archivo index.html en tu navegador de internet.

## Producción:

Si necesitas usar los estilos en producción, no es necesario que clones este repo, basta con que enlaces el archivo main.css que se encuentra en nuestro CDN en tu aplicación.