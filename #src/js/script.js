@@include("settings.js");

let nav = document.querySelector("nav");
let burgerButton = document.querySelectorAll(".header__burger-button");

let navBurgerButtonTrue = document.querySelector(".header__burger-button-true");

function toggleBurger() {
  nav.classList.toggle("is-active");
  navBurgerButtonTrue.classList.toggle(
    "header__burger-button-true--display-none"
  );
}

burgerButton.forEach((element) => {
  element.onclick = toggleBurger;
});
