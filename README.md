# Sygmare Holding App

Aplicación web de una sola página para Sygmare Holding. Todo el contenido se renderiza dinámicamente desde módulos de datos en JavaScript, lo que facilita su reutilización y mantenimiento.

## Estructura del proyecto

```
├── index.html
└── assets
    ├── css
    │   └── styles.css
    ├── img
    │   └── logo-sygmare.svg
    └── js
        ├── app.js
        └── modules
            ├── data.js
            ├── interactions.js
            └── render.js
```

## Desarrollo

1. Clona el repositorio.
2. Levanta un servidor estático (por ejemplo `npx serve .`) o abre `index.html` en tu navegador.
3. Actualiza los contenidos editando únicamente `assets/js/modules/data.js`; el resto de la app se actualiza automáticamente.

## Características destacadas

- Componentes generados dinámicamente a partir de estructuras de datos reutilizables.
- Navegación responsiva con control de estado, desplazamiento suave y realce de sección activa.
- Formulario de contacto con confirmación instantánea y envío vía `mailto` directo a `morillogruop@gmail.com`.
- Estilos premium en negro y dorado, con galerías e imágenes futuristas optimizadas para escritorio y móvil.
