const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");
const navLogo = document.querySelector("#navbar-logo");
const dropMenu = document.getElementById("drop-menu-src");
const dropList = document.getElementById("drop-list");
const dropSubMenu = document.getElementById("drop-sublist");
const petCareLink = document.querySelector(".pet-carelink");
const aboutSec = document.getElementById("about-sec")
//document.getElementById('error')

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

//Display Menu when hover and remove when mouse leaves elements

function hoverOnOpacity() {
  dropList.style.opacity = "1";
}

function hoverOnOpacity1() {
  dropMenu.style.opacity = "1";
}
function hoverRemoved() {
  dropList.style.opacity = "0";
}

/*procedures to execute once element is hovered over and off*/
dropMenu.addEventListener("mouseover", hoverOnOpacity);
dropList.addEventListener("mouseover", hoverOnOpacity1);
dropList.addEventListener("mouseleave", hoverRemoved);

function subListOnOpacity() {
  dropSubMenu.style.opacity = "1";
  dropSubMenu.style.zIndex = "99";
  dropSubMenu.style.zIndex = "99";
  aboutSec.style.visibility = "hidden";
}

function subListOffOpacity() {
  dropSubMenu.style.opacity = "0";
  dropSubMenu.style.zIndex = "-3";
  aboutSec.style.visibility = "visible";
}
petCareLink.addEventListener("click", subListOnOpacity);
menu.addEventListener("click", subListOffOpacity);

/*

dropMenu.addEventListener("click", () => {
  dropSubMenu.style.backgroundColor = "black";
  dropSubMenu.style.zIndex = "99";
  dropList.style.visibility = "hidden";

  dropList.style.zIndex = "-2";
});

petCareLink.addEventListener("mouseover", hoverOnOpacity);
dropList.addEventListener("mouseover", hoverOnOpacity1);
dropList.addEventListener("mouseleave", hoverRemoved);
function subListOnOpacity() {
  dropSubMenu.style.opacity = "1";
dropSubMenu.style.zIndex = "99";
  
}
dropMenu.addEventListener("mouseover", hoverOnOpacity);
dropList.addEventListener("mouseover", hoverOnOpacity1);
dropList.addEventListener("mouseleave", hoverRemoved);

*/
