(function () {
  const menuHam = document.querySelector(".menu-ham");
  const menu = document.querySelector("nav");

  const mostrarMenu = () => {
    menu.classList.toggle("navCelular");
  };

  menuHam.addEventListener("click", mostrarMenu);
})();
