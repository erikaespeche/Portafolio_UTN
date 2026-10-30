// ====================================================
//  Autor: Erika Espeche :)
//  Fecha: 22/09/2025
// ====================================================


document.addEventListener("DOMContentLoaded", () => {
  const botonMenu = document.getElementById("botonMenu");
  const menuLateral = document.getElementById("menu-lateral");
  const linksMenu = document.querySelectorAll("#lista-menu a");

  function abrirMenu() {
    menuLateral.classList.add("activo");
    botonMenu.classList.add("abierto");
    botonMenu.setAttribute("aria-expanded", "true");
    botonMenu.setAttribute("aria-label", "Cerrar menú");
  }

  function cerrarMenu() {
    menuLateral.classList.remove("activo");
    botonMenu.classList.remove("abierto");
    botonMenu.setAttribute("aria-expanded", "false");
    botonMenu.setAttribute("aria-label", "Abrir menú");
  }

  // 1. Abrir/Cerrar menú al tocar el botón hamburguesa
  botonMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    if (menuLateral.classList.contains("activo")) {
      cerrarMenu();
    } else {
      abrirMenu();
    }
  });

  // 2. Cerrar el menú cuando se elige una opción
  linksMenu.forEach((link) => {
    link.addEventListener("click", cerrarMenu);
  });

  // 3. Cerrar el menú al tocar fuera de él
  document.addEventListener("click", (e) => {
    if (menuLateral.classList.contains("activo") && !menuLateral.contains(e.target)) {
      cerrarMenu();
    }
  });

  // 4. Cerrar el menú con la tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuLateral.classList.contains("activo")) {
      cerrarMenu();
      botonMenu.focus();
    }
  });

  // 5. Si se agranda la pantalla con el menú abierto, se resetea
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      cerrarMenu();
    }
  });
});
