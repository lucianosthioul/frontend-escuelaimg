# Escuela Img Astro

## 🚀 Estructura del proyecto

Dentro del proyecto verás los siguientes archivos y carpetas:

```text
/
├── public/
    └── favicon.ico
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── images
│   │   └── js
│   ├── components
│   │   └── FooterComponent.astro
│   │   └── HeaderComponent.astro
│   ├── lib
│   │   └── connection.ts
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│   │   └── noticias
│   │   │   └── [key].astro
│   │   └── pilares
│   │   │   └── [key].astro
│   │   └── index.astro
│   │   └── academico.astro
│   │   └── admisiones.astro
│   │   └── nosotros.astro
│   │   └── noticias.astro
│   ├── styles
│   │   └── global.css
└── package.json
```

## 🧞 Comandos

Todos estos comandos se corren desde la raiz del proyecto, desde la terminal:

| Comandos                  | Accion                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala dependencias (astro, tailwind, fonts)    |
| `npm run dev`             | Comienza el server local dev en `localhost:4321` |
| `npm run build`           | Buildea la produccion de tu sitio a `./dist/`    |
| `npm run preview`         | Hace un preview de tu build                      |
| `npm run astro ...`       | Corre comandos del CLI `astro add`, `astro check`|
| `npm run astro -- --help` | Consigue ayuda usando el CLI de Astro            |


