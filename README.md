# 3105 Studio

Una herramienta sencilla para crear, editar y extraer archivos de patch `.3105` desde el navegador.

## Cómo usarla

Abre la app y elige una sección en el menú lateral:

- **Lobby** reúne los patches que has creado o editado en este navegador. Desde ahí puedes volver a descargarlos.
- **Editar Patch** carga un archivo `.3105` existente. Si eliges un asset nuevo, se reemplaza el actual; si dejas ese campo vacío, se conserva.
- **Crear Patch** genera un patch a partir de un asset. Free Fire y Free Fire MAX tienen rutas sugeridas. Para otra app, elige **Otro**, escribe su Bundle ID y especifica la ruta de destino.
- **Extraer Patch** guarda en un ZIP los archivos que contiene un patch. Si está protegido, tendrás que indicar la contraseña.
- **Info** lleva al repositorio de Dev y al canal de Flexzin Store.

El Bundle ID personalizado debe tener el formato habitual separado por puntos, como `com.empresa.juego`. La ruta que escribas debe ser relativa: no empieces con `/` ni incluyas `..`.

## Idioma y apariencia

La interfaz está disponible en español, inglés, portugués y vietnamita. La selección de idioma se guarda en este navegador. El modo de apariencia puede seguir el ajuste del sistema o fijarse en claro u oscuro.

## Instalación y uso sin conexión

La app se puede instalar desde el navegador cuando este ofrece esa opción. Para que la instalación y el uso sin conexión funcionen, sirve el proyecto bajo HTTPS (o desde `localhost` durante el desarrollo), manteniendo sus archivos en el mismo origen. La primera visita necesita conexión para descargar la app y sus recursos.

El sistema operativo puede guardar el icono al instalar. Por eso, cambiar de tema después no siempre cambia el icono que ya aparece en la pantalla de inicio.

## Archivos y privacidad

Los patches se procesan en el propio dispositivo; la app no los sube a un servidor. El Lobby conserva una copia local en el almacenamiento del navegador. Descarga también tus archivos importantes: borrar los datos del sitio puede borrar el historial.

Las restricciones de menú contextual, atajos y zoom solo ponen obstáculos básicos; no hacen que una web sea imposible de inspeccionar o modificar. No guardes secretos ni claves privadas en estos archivos.

## Enlaces

- Repositorio oficial: [Dev](https://github.com/FlexzinXR/developer3105)
- Canal oficial: [Flexzin Store](https://whatsapp.com/channel/0029Vb5tKLi9cDDSxvIJnJ3h)
