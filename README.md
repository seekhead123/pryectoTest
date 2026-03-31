# PryectoTest

Aplicacion Angular con grillas retro de Cartoon Network, Nickelodeon, Disney, Jetix y Etcetera.

## Desarrollo local

Para iniciar el entorno local:

```bash
npm install
npm start
```

La app queda disponible en `http://localhost:4200/`.

## Build

Build de produccion:

```bash
npm run build
```

Build listo para GitHub Pages:

```bash
npm run build:pages
```

Ese comando:

- compila Angular con `base-href /pryectoTest/`
- genera la salida en `dist/pryectoTest/browser`
- crea `404.html` para soportar recarga de rutas en GitHub Pages
- crea `.nojekyll`

## GitHub Actions + Pages

El workflow ya esta en [deploy-pages.yml](/C:/Users/daniel/pryectoTest/.github/workflows/deploy-pages.yml) y publica automaticamente al hacer push a `main`.

Para activarlo en GitHub:

1. Ve a `Settings > Pages`.
2. En `Source`, selecciona `GitHub Actions`.
3. Haz push a `main`.

## Tests

```bash
npm test
```
