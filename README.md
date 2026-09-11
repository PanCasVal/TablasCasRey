# Tablas CasRey

Sitio web estático de tablas de quesos, fruta y carnes frías, listo para GitHub Pages.

## Ejecutar localmente
Puedes abrir `index.html` directamente en el navegador o usar un servidor simple:

```bash
python -m http.server 8000
```

Luego abre:

```text
http://localhost:8000
```

## Estructura
- `index.html` : página principal
- `assets/css/style.css` : estilos
- `assets/js/app.js` : interactividad mínima

## Publicar en GitHub Pages
1. Sube los cambios al repositorio.
2. Ve a `Settings` > `Pages`.
3. En `Build and deployment`, elige `Deploy from a branch`.
4. Selecciona la rama `main` y la carpeta `/root`.
5. Guarda y espera el enlace público.
