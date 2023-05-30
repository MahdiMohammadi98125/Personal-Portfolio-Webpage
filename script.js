const btn = document.querySelector(".mobile-nav-btn");
const menuOutline = document.querySelector("#menu-outline");
const closeOutline = document.querySelector("#close-outline");
const mainNavMob = document.querySelector(".main-nav-list-mobile");
const toggler = () => {
  mainNavMob.classList.toggle("nav-open");
  menuOutline.classList.toggle("nav-open");
  closeOutline.classList.toggle("nav-open");
};
btn.addEventListener("click", toggler);
