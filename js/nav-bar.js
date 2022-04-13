const navBar = document.querySelector(".nav-bar");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const bordeBajoHero = hero.getBoundingClientRect().bottom;
  if (bordeBajoHero > 0) {
    navBar.style.backgroundColor = "var(--transparente)";
    navBar.style.height = "4rem";
  } else {
    navBar.style.transition = "1s all ease";
    navBar.style.backgroundColor = "var(--obscuro)";
    navBar.style.height = "2.5rem";
  }
});
