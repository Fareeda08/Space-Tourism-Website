const menuBtn = document.querySelector(".icon-hamburger");
const navDiv = document.querySelector("nav div");
const closeMenu = document.querySelector(".close-menu");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  navDiv.classList.add("menu-clicked");
  menuBtn.classList.add("none");
  closeMenu.classList.add("menu-clicked-close-menu");
  nav.classList.add("menu-clicked-nav");
});

closeMenu.addEventListener("click", () => {
  navDiv.classList.remove("menu-clicked");
  menuBtn.classList.remove("none");
  closeMenu.classList.remove("menu-clicked-close-menu");
  nav.classList.remove("menu-clicked-nav");
});
