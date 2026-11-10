# CV · puesto en la UNI

CV de una página en HTML, pensado para puestos en la universidad. Se edita en el
navegador y se baja como PDF sin instalar nada.

```
cv-uni/
├── index.html   la página (A4)
├── cv.css       estilos de pantalla e impresión
├── cv-data.js   ← el contenido: acá están todos los textos
├── cv.js        dibuja la hoja, editor y botones
└── fonts/       Open Sans (400, 600, 700 e itálica)
```

## Ver el CV

Abrí `index.html` con doble clic (funciona sin servidor) o levantá uno local:

```bash
cd ~/Documentos/portfolio/cv-uni
python -m http.server 8000   # http://localhost:8000
```

## Editar

1. **Editar** en la barra de arriba: cada texto se vuelve editable ahí mismo.
2. En modo edición aparecen **＋ viñeta**, **＋ entrada** y **✕** para agregar o
   borrar ítems.
3. Los cambios se guardan solos en **este navegador** (`localStorage`).
4. Para dejarlos en el repo: **Descargar datos** baja `cv-data.js`; reemplazá con
   ese archivo el de la carpeta. **Restaurar** vuelve al archivo del repo.

Los enlaces (URL de LinkedIn, repos) y los datos del encabezado se cambian en
`cv-data.js`, en las claves `url` y `contacto`.

## Descargar el PDF

**Descargar PDF** abre el diálogo de impresión. Elegí **Guardar como PDF**:

- ya está configurado en A4, sin márgenes y sin la barra de herramientas;
- el archivo sale como `CV-Jhonatan-Calle.pdf`;
- si el contenido crece y pasa de una página, el navegador agrega la segunda
  (no se recorta nada).

Atajo: `Ctrl+P`.

## Publicarlo

Es un sitio estático dentro del repo del portfolio: al hacer `push`, GitHub Pages
lo sirve en `https://jhonatan-calle.github.io/cv-uni/`.

## Notas

- La tipografía es Open Sans, la misma del PDF de referencia (Canva).
- Las medidas (banda de 46 mm, línea teal a 23 mm, nombre 25 pt, cuerpo 11 pt)
  salieron de medir el PDF original. Se tocan en las variables de `cv.css`
  (`--fs-name`, `--fs-body`, `--mx`, …).
- El CV "general" del portfolio (`assets/cv-jhonatan_es.pdf`) es otro documento y
  no se toca desde acá.
