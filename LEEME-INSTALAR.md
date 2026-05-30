# CRM MAGIM — Instalación en Android

App instalable que funciona como una aplicación nativa: ícono en la pantalla
de inicio, pantalla completa, guarda los datos en el teléfono y funciona
sin conexión a internet una vez instalada.

---

## PASO 1 — Publicar la app (una sola vez)

La app necesita un enlace web seguro (https) para poder instalarse. La forma
mas facil y gratuita:

1. En una computadora, entra a: https://app.netlify.com/drop
2. Descomprime el archivo CRM-MAGIM-App-Android.zip
3. Arrastra la carpeta CRM-MAGIM-App completa al recuadro de Netlify.
4. Espera unos segundos. Te dara un enlace, por ejemplo:
   https://crm-magim-xxxx.netlify.app
5. Copia ese enlace (lo usaras en el telefono).

Consejo: crea una cuenta gratuita en Netlify para que el enlace no expire y
puedas volver a subir actualizaciones al mismo sitio.

---

## PASO 2 — Instalar en el telefono Android

1. Abre Google Chrome en el telefono.
2. Entra al enlace de Netlify del Paso 1.
3. Espera a que cargue completamente la primera vez (con internet).
4. Toca el menu de Chrome (tres puntos, arriba a la derecha).
5. Toca "Instalar aplicacion" o "Agregar a pantalla de inicio".
6. Confirma. El icono de CRM MAGIM aparecera en tu pantalla de inicio.
7. Abre la app desde ese icono: se vera a pantalla completa, como una app normal.

A partir de aqui funciona sin internet (salvo el mapa y la generacion de Excel,
que si necesitan conexion).

---

## PASO 3 — Verifica que todo funcione

Prueba dentro de la app:
- Crear un cliente (pide RNC primero).
- Crear un vendedor (pide la clave de administrador: 1330).
- Crear una actividad con foto y ubicacion GPS (permite el acceso a ubicacion
  cuando el telefono lo pregunte).
- Ver y compartir el comprobante por WhatsApp (boton "Compartir / Enviar").
- Revisar Dashboard, Meta y Cierre.
- Cerrar la app y volver a abrirla: los datos deben seguir ahi.

---

## Sobre tus datos (IMPORTANTE)

- Los datos se guardan dentro del telefono. No se envian a ningun servidor.
- Haz respaldos: usa el Cierre de Mes para descargar el Excel cada cierto
  tiempo y guardalo en Drive, correo, etc. Ese Excel es tu copia de seguridad.
- Si desinstalas la app o borras los datos de Chrome, se pierde lo que no hayas
  respaldado.
- Cada telefono guarda sus propios datos; no se sincronizan entre equipos.
- Las fotos adjuntas ocupan espacio. Si guardas muchas, el telefono puede avisar
  que el almacenamiento esta lleno; haz cierres de mes para liberar espacio.

---

## Funciones que necesitan internet
- El mapa al elegir ubicacion (la ubicacion GPS por coordenadas si funciona
  sin mapa visible).
- Generar el Excel de los cierres (descarga una libreria la primera vez).
- Todo lo demas funciona sin conexion.

---

## Actualizar la app mas adelante
Si recibes una version nueva del index.html:
1. Vuelve a subir la carpeta al mismo sitio de Netlify (arrastrala de nuevo).
2. En el telefono, abre la app; tomara la version nueva automaticamente.
   (Si no, cierrala por completo y vuelve a abrirla.)

---

## Quieres un archivo .APK en el futuro?
Esta PWA se puede convertir en un .apk instalable usando PWABuilder
(https://www.pwabuilder.com): le das el enlace de Netlify y genera el paquete.
Eso requiere una computadora y algunos pasos extra, pero parte exactamente de
esta misma app.
