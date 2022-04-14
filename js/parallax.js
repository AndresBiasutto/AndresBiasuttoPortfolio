(function () {
  const titulo = document.querySelector(".hero__titulo");
  const boton = document.querySelector(".btn_cv");
  console.log(titulo, boton);

  window.addEventListener("scroll", () => {
    const altura = document.documentElement.scrollTop;
    titulo.style.transform = `translate(-50%, ${-50 + altura / 10}%)`;
    boton.style.transform = `translate7-50%, ${-50 + altura / 5}%)`;
  });
})();
