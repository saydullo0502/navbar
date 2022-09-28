let menu = document.querySelector(".menu");
let menuList = document.querySelector(".menu__list");

menu.addEventListener("click", () => {
  menuList.classList.toggle("show");
  // console.log(menuList);
});
