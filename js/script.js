// ====================================================
//  Autor: Erika Espeche :)
//  Fecha: 22/09/2025
// ====================================================


document.addEventListener("DOMContentLoaded", () => {
  const botonMenu = document.getElementById("botonMenu");
  const menuLateral = document.getElementById("menu-lateral");
  const linksMenu = document.querySelectorAll("#lista-menu a");

  botonMenu.addEventListener("click", () => {
    menuLateral.classList.toggle("activo");
  });

  // Cierra el menú al hacer clic en un enlace
  linksMenu.forEach(link => {
    link.addEventListener("click", () => {
      menuLateral.classList.remove("activo");
    });
  });
});


