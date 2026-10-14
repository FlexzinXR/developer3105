# 3105 Studio — notas de esta versión

## Uso e instalación

Sirve todos los archivos del proyecto bajo el mismo origen por HTTPS (o `localhost` durante el desarrollo). El manifiesto PWA y el service worker requieren un contexto seguro para instalar y funcionar sin conexión.

El manifiesto y el icono seleccionados antes de instalar siguen la apariencia elegida o el tema del dispositivo. Algunos sistemas operativos guardan una copia del icono al instalar; cambiar el tema después puede no cambiar el icono ya instalado.

El Lobby guarda los `.3105` generados o editados en IndexedDB de este navegador y dispositivo. Descarga también copias adicionales: borrar los datos del sitio puede borrar ese historial.

## Protección y privacidad

La interfaz deshabilita el menú contextual, ciertos atajos comunes de inspección y zoom, y el zoom táctil; también limita los orígenes mediante una política CSP.

Estas medidas son disuasivas, no hacen imposible inspeccionar, descargar o modificar una web que ejecuta código en el navegador. Para proteger secretos o lógica crítica se necesitan servicios del lado del servidor; no incluyas secretos en estos archivos.

El trabajo con patches permanece local; la aplicación no envía los archivos a un servidor.

## Interfaz

La navegación lateral ofrece Lobby, Editar Patch, Crear Patch y Extraer Patch. Editar y Extraer validan la extensión `.3105`; Crear permite usar rutas predefinidas o introducir una ruta relativa, rechazando rutas absolutas y segmentos `..`.

Se añadieron transiciones suaves de estilo nativo y se respeta la preferencia del sistema para reducir el movimiento.
