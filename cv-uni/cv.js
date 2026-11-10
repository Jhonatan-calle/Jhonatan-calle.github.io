/* ============================================================================
   cv.js — dibuja la hoja a partir de cv-data.js y le agrega el editor
   ----------------------------------------------------------------------------
   Tres cosas y nada más:
     1. render(): arma el HTML con los datos de cv-data.js
     2. editor: activa/desactiva la edición, agrega y borra viñetas/entradas
     3. guardado: localStorage + descargar/importar cv-data.js
   El PDF sale con el diálogo de impresión del navegador (window.print).
   ========================================================================== */

(function () {
  "use strict";

  var STORAGE_KEY = "cv-uni:v1";
  var PAGE_TITLE = document.title;

  var root = document.getElementById("cv");
  var statusEl = document.getElementById("status");
  var btnEdit = document.getElementById("btnEdit");
  var btnPdf = document.getElementById("btnPdf");
  var btnDownload = document.getElementById("btnDownload");
  var btnImport = document.getElementById("btnImport");
  var btnReset = document.getElementById("btnReset");
  var fileInput = document.getElementById("fileInput");

  if (!window.CV_DATA) {
    root.innerHTML =
      '<p style="padding:20mm;font-family:sans-serif">' +
      "No se encontró <code>cv-data.js</code>. Tiene que estar en la misma carpeta que <code>index.html</code>." +
      "</p>";
    return;
  }

  /* ------------------------------------------------------------- utilidades */

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function node(tag, className, text) {
    var n = document.createElement(tag);
    if (className) n.className = className;
    if (text != null) n.textContent = text;
    return n;
  }

  /** marca el nodo como campo editable y recuerda dónde vive en los datos */
  function field(n, path) {
    n.dataset.path = path;
    return n;
  }

  function getPath(obj, path) {
    return path.split(".").reduce(function (o, key) {
      return o == null ? o : o[key];
    }, obj);
  }

  function setPath(obj, path, value) {
    var keys = path.split(".");
    var target = obj;
    for (var i = 0; i < keys.length - 1; i++) target = target[keys[i]];
    if (target) target[keys[keys.length - 1]] = value;
  }

  function splitLast(path) {
    var i = path.lastIndexOf(".");
    return [path.slice(0, i), path.slice(i + 1)];
  }

  function ensureArray(path) {
    var keys = path.split(".");
    var target = data;
    for (var i = 0; i < keys.length - 1; i++) target = target[keys[i]];
    var last = keys[keys.length - 1];
    if (!Array.isArray(target[last])) target[last] = [];
    return target[last];
  }

  function setStatus(message) {
    statusEl.textContent = message || "";
  }

  function ctlButton(label, action, path, title) {
    var b = node("button", "ctl only-edit", label);
    b.type = "button";
    b.dataset.action = action;
    if (path) b.dataset.path = path;
    b.title = title || label;
    return b;
  }

  /* ------------------------------------------------------------------ datos */

  function loadSaved() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      return parsed && Array.isArray(parsed.secciones) ? parsed : null;
    } catch (e) {
      return null;
    }
  }

  var saved = loadSaved();
  var data = saved || clone(window.CV_DATA);

  var saveTimer = 0;
  function queueSave() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function () {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        setStatus("Guardado en este navegador · «Descargar datos» lo deja en cv-data.js");
      } catch (e) {
        setStatus("No se pudo guardar en el navegador: " + e.message);
      }
    }, 400);
  }

  /* ----------------------------------------------------------------- render */

  var editing = false;

  function render() {
    root.replaceChildren();
    root.appendChild(renderBand());

    var content = node("div", "content");
    data.secciones.forEach(function (section, i) {
      content.appendChild(renderSection(section, i));
    });
    root.appendChild(content);

    applyEditMode();
  }

  function renderBand() {
    var band = node("header", "band");

    var top = node("div", "band-top");
    top.appendChild(field(node("h1", "name", data.nombre), "nombre"));
    top.appendChild(field(node("p", "role", data.rol), "rol"));
    band.appendChild(top);

    band.appendChild(node("div", "band-rule"));

    var list = node("ul", "contact");
    (data.contacto || []).forEach(function (item, i) {
      var li = node("li");
      var text = field(node("span", null, item.texto), "contacto." + i + ".texto");
      if (item.url) {
        var a = node("a");
        a.href = item.url;
        a.target = "_blank";
        a.rel = "noopener";
        a.appendChild(text);
        li.appendChild(a);
      } else {
        li.appendChild(text);
      }
      list.appendChild(li);
    });
    band.appendChild(list);

    return band;
  }

  function renderSection(section, si) {
    var wrap = node("section", "section");

    var head = node("div", "section-head");
    head.appendChild(field(node("h2", "section-title", section.titulo), "secciones." + si + ".titulo"));
    wrap.appendChild(head);

    if (section.tipo === "texto") {
      (section.parrafos || []).forEach(function (text, pi) {
        wrap.appendChild(field(node("p", null, text), "secciones." + si + ".parrafos." + pi));
      });
    } else if (section.tipo === "skills") {
      wrap.appendChild(renderSkills(section, si));
    } else {
      (section.items || []).forEach(function (item, ii) {
        wrap.appendChild(renderItem(item, si, ii));
      });
      wrap.appendChild(
        ctlButton("＋ entrada", "add-item", "secciones." + si, "Agregar una entrada a esta sección")
      );
    }

    return wrap;
  }

  function renderItem(item, si, ii) {
    var base = "secciones." + si + ".items." + ii;
    var art = node("article", "item");

    var head = node("div", "item-head");
    head.appendChild(field(node("h3", "item-title", item.titulo), base + ".titulo"));
    head.appendChild(field(node("p", "item-date", item.fecha), base + ".fecha"));
    art.appendChild(head);

    art.appendChild(field(node("p", "item-sub", item.subtitulo || ""), base + ".subtitulo"));

    var bullets = item.vinetas || [];
    if (bullets.length) {
      var ul = node("ul", "bullets");
      bullets.forEach(function (bullet, vi) {
        var li = node("li", "bullet");
        li.appendChild(field(node("span", null, bullet.texto), base + ".vinetas." + vi + ".texto"));

        if (bullet.enlace && bullet.enlace.url) {
          var a = node("a", "bullet-link", bullet.enlace.texto || "Ver");
          a.href = bullet.enlace.url;
          a.target = "_blank";
          a.rel = "noopener";
          li.appendChild(document.createTextNode(" "));
          li.appendChild(a);
        }

        li.appendChild(ctlButton("✕", "del-bullet", base + ".vinetas." + vi, "Eliminar esta viñeta"));
        ul.appendChild(li);
      });
      art.appendChild(ul);
    }

    art.appendChild(ctlButton("＋ viñeta", "add-bullet", base + ".vinetas", "Agregar una viñeta"));
    art.appendChild(ctlButton("✕ entrada", "del-item", base, "Eliminar esta entrada"));

    return art;
  }

  function renderSkills(section, si) {
    var wrap = node("div", "skills");

    (section.grupos || []).forEach(function (group, gi) {
      var block = node("div", "skill-group");
      var line = node("p", "skill-line");

      line.appendChild(
        field(node("strong", "skill-name", group.nombre || ""), "secciones." + si + ".grupos." + gi + ".nombre")
      );
      line.appendChild(document.createTextNode(": "));
      line.appendChild(
        field(node("span", null, group.detalle || ""), "secciones." + si + ".grupos." + gi + ".detalle")
      );

      block.appendChild(line);
      wrap.appendChild(block);
    });

    return wrap;
  }

  /* ---------------------------------------------------------------- edición */

  function applyEditMode() {
    root.querySelectorAll("[data-path]").forEach(function (n) {
      if (editing) n.setAttribute("contenteditable", "true");
      else n.removeAttribute("contenteditable");
    });
    document.body.classList.toggle("is-editing", editing);
    btnEdit.textContent = editing ? "Listo" : "Editar";
    btnEdit.classList.toggle("is-on", editing);
  }

  btnEdit.addEventListener("click", function () {
    editing = !editing;
    applyEditMode();
    setStatus(
      editing
        ? "Modo edición: hacé clic en cualquier texto y escribí. Los cambios se guardan en este navegador."
        : ""
    );
  });

  root.addEventListener("input", function (event) {
    var target = event.target.closest("[data-path]");
    if (!target) return;
    setPath(data, target.dataset.path, target.textContent);
    queueSave();
  });

  // Enter y Escape cierran la edición del campo (evita saltos de línea raros)
  root.addEventListener("keydown", function (event) {
    if (!editing) return;
    if (event.key === "Enter" || event.key === "Escape") {
      event.preventDefault();
      event.target.blur();
    }
  });

  // pegar siempre como texto plano
  root.addEventListener("paste", function (event) {
    if (!editing) return;
    event.preventDefault();
    var text = (event.clipboardData || window.clipboardData).getData("text/plain");
    text = text.replace(/\s+/g, " ").trim();
    document.execCommand("insertText", false, text);
  });

  // en modo edición, los enlaces no navegan; los botones sí actúan
  root.addEventListener("click", function (event) {
    var action = event.target.closest("[data-action]");
    if (action) {
      event.preventDefault();
      handleAction(action);
      return;
    }
    if (editing && event.target.closest("a")) event.preventDefault();
  });

  function handleAction(button) {
    var action = button.dataset.action;
    var path = button.dataset.path;

    if (action === "del-bullet" || action === "del-item") {
      if (!window.confirm("¿Eliminar? Esta acción no se puede deshacer.")) return;
      var parts = splitLast(path);
      var list = getPath(data, parts[0]);
      if (!Array.isArray(list)) return;
      list.splice(Number(parts[1]), 1);
    } else if (action === "add-bullet") {
      ensureArray(path).push({ texto: "Nueva viñeta", enlace: { texto: "", url: "" } });
    } else if (action === "add-item") {
      var section = getPath(data, path);
      if (!section) return;
      if (!Array.isArray(section.items)) section.items = [];
      section.items.push({
        titulo: "Nuevo puesto",
        fecha: "00/0000 - 00/0000",
        subtitulo: "",
        vinetas: [{ texto: "Descripción de la tarea o del proyecto.", enlace: { texto: "", url: "" } }]
      });
    } else {
      return;
    }

    queueSave();
    render();
  }

  /* ------------------------------------------------------------ guardar datos */

  btnDownload.addEventListener("click", function () {
    var header =
      "/* cv-data.js — contenido del CV (puesto en la UNI)\n" +
      "   Generado desde la página el " +
      new Date().toLocaleString("es-AR") +
      "\n   Reemplazá con este archivo el cv-uni/cv-data.js del repo. */\n\n";
    var text = header + "window.CV_DATA = " + JSON.stringify(data, null, 2) + ";\n";

    var blob = new Blob([text], { type: "text/javascript;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "cv-data.js";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 1000);

    setStatus("Descargado cv-data.js · reemplazá el del repo con este archivo");
  });

  btnImport.addEventListener("click", function () {
    fileInput.click();
  });

  fileInput.addEventListener("change", function () {
    var file = fileInput.files && fileInput.files[0];
    if (!file) return;

    file.text().then(
      function (raw) {
        try {
          var json = raw
            .replace(/^\s*window\.CV_DATA\s*=\s*/, "")
            .replace(/;\s*$/, "")
            .trim();
          var parsed = JSON.parse(json);
          if (!parsed || !Array.isArray(parsed.secciones)) {
            throw new Error("el archivo no tiene la forma esperada (falta «secciones»)");
          }
          data = parsed;
          queueSave();
          render();
          setStatus("Datos importados desde " + file.name);
        } catch (err) {
          setStatus("No se pudo importar: " + err.message);
        }
        fileInput.value = "";
      },
      function () {
        setStatus("No se pudo leer el archivo");
        fileInput.value = "";
      }
    );
  });

  btnReset.addEventListener("click", function () {
    if (!window.confirm("¿Volver al cv-data.js original? Se pierden los cambios guardados en este navegador.")) {
      return;
    }
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      /* sin localStorage igual restauramos */
    }
    data = clone(window.CV_DATA);
    render();
    setStatus("Restaurado desde cv-data.js");
  });

  /* --------------------------------------------------------------------- PDF */

  // el nombre del PDF lo toma del <title>: lo cambiamos solo mientras se imprime
  window.addEventListener("beforeprint", function () {
    document.title = "CV-Jhonatan-Calle";
  });
  window.addEventListener("afterprint", function () {
    document.title = PAGE_TITLE;
  });

  btnPdf.addEventListener("click", function () {
    window.print();
  });

  /* ------------------------------------------------------------------ arranque */

  render();

  if (saved) {
    setStatus("Mostrando cambios guardados en este navegador · «Restaurar» vuelve al archivo");
  }
})();
