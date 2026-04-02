// ====================================================
//  Autor: Erika Espeche :)
//  Fecha: 22/09/2025
// ====================================================


document.addEventListener("DOMContentLoaded", () => {
  const botonMenu = document.getElementById("botonMenu");
  const menuLateral = document.getElementById("menu-lateral");
  const linksMenu = document.querySelectorAll("#lista-menu a");

  // 1. Abrir/Cerrar menú al tocar el botón hamburguesa
  botonMenu.addEventListener("click", (e) => {
    menuLateral.classList.toggle("activo");
    // Evita que el click se propague al body (útil si luego quieres cerrar al tocar fuera)
    e.stopPropagation();
  });

  // 2. Cerrar el menú automáticamente cuando se hace click en una opción
  linksMenu.forEach(link => {
    link.addEventListener("click", () => {
      menuLateral.classList.remove("activo");
    });
  });

  // 3. Opcional: Cerrar el menú si se toca cualquier parte del contenido principal
  document.addEventListener("click", (e) => {
    if (menuLateral.classList.contains("activo") && !menuLateral.contains(e.target)) {
      menuLateral.classList.remove("activo");
    }
  });
});

