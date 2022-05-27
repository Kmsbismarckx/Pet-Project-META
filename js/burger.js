let burgerMenu = document.querySelector(".header__burger");
let navigationMenu = document.querySelector(".header__navigation");

burgerMenu.addEventListener("click", function() {
  burgerMenu.classList.toggle("active");
  navigationMenu.classList.toggle("active");
});
