function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
;

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
