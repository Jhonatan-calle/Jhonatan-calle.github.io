# 💕 Mi Sitio Para Mi Novia

Un sitio web especial para celebrar el amor. Creado con cariño para los primeros 2 meses juntos.

## Estructura del Proyecto

```
mi-sitio-novia/
├── index.html          # Página principal
├── intro.html          # Intro con video
├── gallery.html        # Galería de fotos
├── letter.html         # Carta especial
├── images/             # Carpeta para tus fotos
├── videos/             # Carpeta para tu video de intro
├── css/                # Estilos (futuro)
└── js/                 # Scripts (futuro)
```

## 🎯 Personalizaciones

### 1. Página Principal (`index.html`)

**Cambiar los mensajes:**
Busca estas líneas (alrededor de la 119-120):
```javascript
const message1 = "¡Te Amo Mucho! 💕";
const message2 = "Feliz por estos primeros 2 meses contigo";
```

**Cambiar la foto principal:**
- Coloca tu foto en la carpeta `images/` con el nombre `foto-principal.jpg`
- O cambia el nombre en `line 109`:
```html
<img id="mainImage" src="images/tu-foto.jpg" alt="Nuestra foto" />
```

**Cambiar los botones:**
Los botones están en las líneas 124-127. Puedes cambiar:
- Los textos
- Los enlaces (href)
- Los emojis

### 2. Intro con Video (`intro.html`)

**Agregar tu video:**
- Coloca tu video en la carpeta `videos/` con el nombre `intro.mp4`
- Formatos soportados: MP4 (recomendado), WebM, Ogg

**Cambiar textos:**
```html
<h1>¡Nos Amamos! 💕</h1>
<p>Feliz por estos primeros 2 meses contigo</p>
```

### 3. Galería de Fotos 3D (`gallery.html`)

**Características:**
- ¡Carrusel 3D giratorio tipo lynnze! Las fotos rotan en 360°
- Haz click en cualquier foto para verla ampliada
- Cierra con ESC o haciendo click en el fondo

**Agregar tus fotos:**
1. Coloca tus fotos en la carpeta `images/` 
2. Los nombres que busca por defecto son:
   - `piesitosenelbarcodelsarmiento.jpg`
   - `nosotrosenlondon.jpg`
   - `nosotrosdepuesdelapresentacion.jpg`
   - `mascarilla.jpg`
   - `losdosenespejolocalropa.jpg`
   - `losdosdenegroenelsarmiento.jpg`
   - `foto7.jpg`, `foto8.jpg`
3. Si quieres usar otros nombres, cambia el array `imageNames` en el script (línea 186)

### 4. Carta Especial (`letter.html`)

**Personalizar la carta:**
- El contenido está en las líneas 78-95
- Reemplaza los párrafos con tu propio mensaje

**Cambiar tu nombre:**
Busca "Tu Nombre" (línea 101) y reemplázalo:
```html
<div style="font-family: 'Great Vibes', cursive; font-size: 1.5rem; color: #764ba2;">Tu Nombre</div>
```

## 🚀 Cómo Usar

### Opción 1: Abrir localmente
1. Clona o descarga este repositorio
2. Abre `index.html` en tu navegador (o `intro.html` si quieres que aparezca primero el video)
3. Personaliza los archivos según tus necesidades

### Opción 2: Desplegar en Internet
Puedes usar servicios gratuitos como:
- **Netlify**: Arrastra y suelta tu carpeta en https://app.netlify.com/drop
- **Vercel**: https://vercel.com (conecta tu repositorio Git)
- **GitHub Pages**: Sube a GitHub y activa Pages en Settings
- **Firebase Hosting**: https://firebase.google.com/docs/hosting

## 🎨 Personalización de Estilos

Todos los estilos están en las etiquetas `<style>` dentro de cada HTML.

### Cambiar colores globales:
- En `index.html`: Busca `#667eea` (púrpura) y `#764ba2` (violeta)
- Usa herramientas como ColorHexa.com para elegir tus colores favoritos

### Cambiar fuentes:
Las fuentes están en las líneas que dicen `font-family`. Puedes cambiarlas o agregar más desde Google Fonts.

## 📝 Tips

- Para mejores resultados, usa fotos con buena resolución (mínimo 1080px de ancho)
- Las fotos cuadradas se ven mejor en la galería
- El video de intro debe tener menos de 30 segundos para mejor experiencia
- Prueba en móvil antes de compartir (el sitio es responsive)

## 🤝 Créditos de Inspiración

- **Diseño principal**: Inspirado en azrim
- **Intro con video**: Inspirado en waiyan
- **Galería**: Inspirado en lynnze

## 💌 ¡Hecho con amor!

Este sitio fue creado especialmente para celebrar el amor. ¡Que disfrutes compartiendo estos momentos especiales!

---

¿Necesitas ayuda? Revisa el código, está bien comentado 💕
