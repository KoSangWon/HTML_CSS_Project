const modal = document.querySelector(".modal");
const openMenu = document.querySelector(".open-menu");
const modalExit = document.querySelector(".modal__exit");

openMenu.addEventListener("click", (e) => {
  modal.classList.toggle("--isActivate");
});

modalExit.addEventListener("click", (e) => {
  modal.classList.toggle("--isActivate");
});