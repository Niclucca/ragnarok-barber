# RAGNAROK BARBER

**Sitio web conceptual para una barbería contemporánea.**

RAGNAROK BARBER es un proyecto personal de desarrollo web frontend, creado como parte de un portfolio profesional.

El proyecto busca desarrollar una experiencia visual elegante y moderna, con una identidad estética oscura, detalles dorados y elementos geométricos inspirados en la cultura nórdica.

**Demo online:** https://ragnarokproyect.netlify.app/

## Características implementadas

- Estructura y contenido desarrollados con HTML5.
- Diseño visual personalizado mediante CSS3.
- Diseño responsive con breakpoints para diferentes tamaños de pantalla.
- Navegación principal con cambios visuales al desplazarse.
- Menú de navegación móvil interactivo.
- Preloader de introducción.
- Animaciones de aparición progresiva de elementos.
- Compatibilidad con la preferencia de movimiento reducido del usuario.
- Secciones de presentación, servicios, horarios, ubicación y reservas.
- Elementos gráficos decorativos desarrollados mediante CSS y SVG.

## Tecnologías utilizadas

- **HTML5:** estructura y contenido.
- **CSS3:** diseño visual, estilos, animaciones y adaptación responsive.
- **JavaScript ES6+:** interactividad y comportamiento de la interfaz.
- **Vite 6:** servidor de desarrollo y herramienta de construcción.
- **Google Fonts:** tipografías Cormorant Garamond e Inter.

El proyecto utiliza JavaScript nativo, sin frameworks frontend adicionales.

## Estructura del proyecto

```text
ragnarok-barber/
├── public/
│   └── favicon.svg
├── src/
│   ├── css/
│   │   ├── style.css
│   │   └── responsive.css
│   └── js/
│       └── main.js
├── index.html
├── package.json
├── vite.config.js
├── package-lock.json
├── .gitignore
└── README.md
```

`package-lock.json` se incorpora después de generar el archivo mediante npm.

## Requisitos

- Node.js 20.19.0 o superior, o 22.12.0 o superior, según los requisitos de Vite 6.
- npm.

## Instalación y ejecución local

```bash
git clone https://github.com/Niclucca/ragnarok-barber.git
cd ragnarok-barber
npm install
npm run dev
```

Vite proporcionará una dirección local para visualizar el proyecto en el navegador.

## Construcción para producción

```bash
npm run build
```

Los archivos generados se guardan en el directorio `dist/`.

Para visualizar localmente la versión de producción:

```bash
npm run preview
```

## Estado actual y mejoras futuras

El proyecto cuenta con una interfaz visual desarrollada y funcionalidades de navegación e interacción implementadas.

Quedan pendientes algunas mejoras:

- Integración de un sistema de reservas funcional.
- Conexión de los botones de contacto con WhatsApp.
- Definición de una ubicación demostrativa e integración futura con un servicio de mapas.
- Implementación del footer.
- Incorporación de fotografías reales y contenido visual adicional.

## Publicación

La demostración del proyecto se encuentra alojada en Netlify:

https://ragnarokproyect.netlify.app/

El repositorio de GitHub contiene el código fuente del proyecto. Su publicación en GitHub es independiente del alojamiento actual en Netlify.

## Autor

**Niclucca**

Proyecto personal de portfolio orientado al desarrollo web frontend.

---

**Nota:** RAGNAROK BARBER es un proyecto conceptual de portfolio. Los servicios, precios, horarios y demás contenidos representan información demostrativa y no deben interpretarse como información de un establecimiento comercial operativo. Las funcionalidades de reservas y contacto por WhatsApp todavía no están implementadas.
