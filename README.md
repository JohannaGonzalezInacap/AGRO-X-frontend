# AGRO-X — Frontend

Interfaz web de [AGRO-X](https://github.com/JohannaGonzalezInacap/AGRO-X) (el backend vive en su
propio repositorio). Sin build ni dependencias de desarrollo: es HTML/CSS/JS plano.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | La app real, conectada a la API (login, parcelas, alertas, ideas de venta urgente, rotación, planes, privacidad) |
| `manifest.json`, `sw.js`, `icons/` | Lo necesario para que el navegador ofrezca "Agregar a pantalla de inicio" (PWA) |
| `BocetoAgroX2.html` | Boceto visual de referencia (datos de ejemplo, no conectado a la API) — la base de diseño de `index.html` |

## Cómo correrlo en local

No se puede abrir con doble clic (`file://` rompe CORS). Sírvelo como estático:

```bash
python -m http.server 8777
```

y abre `http://localhost:8777/index.html`.

## A qué backend se conecta

Por defecto apunta al backend permanente en Render (`https://agro-x-api.onrender.com`). Se puede
cambiar sin tocar código desde el botón "Cambiar servidor" de la propia app — por ejemplo, al
enlace de ngrok del servidor local para la demo completa de alertas climáticas (Render todavía no
puede recalcularlas, ver `ADR-015` del backend).

## Probarlo en el celular ("agregar a pantalla de inicio")

Una vez publicado en algún hosting (ver el README general del proyecto), abre el link en el
navegador del celular:

- **Android/Chrome**: menú ⋮ → "Agregar a pantalla de inicio" (o aparece un aviso automático).
- **iPhone/Safari**: botón compartir → "Agregar a pantalla de inicio".

Esto no es una instalación real de tienda de apps — es la misma página web, con un ícono propio en
el celular y sin la barra de direcciones del navegador.
