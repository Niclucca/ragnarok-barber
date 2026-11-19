// ============================================================================
// RAGNAROK BARBER — main.js
// Punto de entrada de la aplicación.
// La lógica de cada funcionalidad (galería, reservas, etc.) se agregará
// de forma incremental. Esta etapa cubre Navbar, Hero y el scroll reveal
// de "The Ragnarok Standard".
// ============================================================================

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

initPreloader();
initNavbar();
initMobileMenu();
initScrollReveal();

/**
 * Preloader: muestra el nombre de la marca brevemente antes de revelar
 * el Hero. Si el usuario prefiere movimiento reducido, se omite el
 * tiempo de espera y se revela el contenido de inmediato.
 */
function initPreloader() {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  const delay = prefersReducedMotion ? 0 : 700;

  window.setTimeout(() => {
    preloader.classList.add("preloader--hidden");
    revealHero();
  }, delay);
}

/**
 * Aparición escalonada del contenido del Hero (etiqueta, título,
 * subtítulo, descripción, botones e indicador de scroll), en el orden
 * definido en la especificación.
 */
function revealHero() {
  const selectors = [
    ".hero__eyebrow",
    ".hero__title",
    ".hero__subtitle",
    ".hero__description",
    ".hero__actions",
    ".hero__scroll",
  ];

  selectors.forEach((selector, index) => {
    const element = document.querySelector(selector);
    if (!element) return;

    const delay = prefersReducedMotion ? 0 : index * 120;
    window.setTimeout(() => {
      element.classList.add("is-visible");
    }, delay);
  });
}

/**
 * Navbar dinámica: transparente sobre el Hero, y con fondo oscuro +
 * blur al hacer scroll. Se usa un umbral pequeño para evitar el
 * cambio apenas se mueve la página un pixel.
 */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const SCROLL_THRESHOLD = 40;

  function updateNavbarState() {
    navbar.classList.toggle(
      "navbar--scrolled",
      window.scrollY > SCROLL_THRESHOLD
    );
  }

  updateNavbarState();
  window.addEventListener("scroll", updateNavbarState, { passive: true });
}

/**
 * Menú mobile de pantalla completa: alterna visibilidad y sincroniza
 * el estado accesible (aria-expanded) del botón hamburguesa. Se cierra
 * al seleccionar un enlace para no interrumpir la navegación.
 */
function initMobileMenu() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("mobileMenu");
  if (!toggle || !menu) return;

  function closeMenu() {
    menu.classList.remove("mobile-menu--open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
  }

  function openMenu() {
    menu.classList.add("mobile-menu--open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Cerrar menú");
  }

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.contains("mobile-menu--open");
    isOpen ? closeMenu() : openMenu();
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

/**
 * Revela progresivamente, al hacer scroll, cualquier elemento marcado
 * con la clase ".reveal" (por ejemplo, en "The Ragnarok Standard").
 * Reutiliza la misma clase ".is-visible" que ya activa las
 * animaciones del Hero. El desfase de cada elemento se toma de su
 * atributo "data-reveal-delay" cuando existe.
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) return;

  if (prefersReducedMotion) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const delay = Number(element.dataset.revealDelay) || 0;

        window.setTimeout(() => {
          element.classList.add("is-visible");
        }, delay);

        currentObserver.unobserve(element);
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((element) => observer.observe(element));
}
