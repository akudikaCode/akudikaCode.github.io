// Navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// darkMode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");
const toggleCircleSun = document.querySelector(".toggle-circle-sun");
const toggleCircleMoon = document.querySelector(".toggle-circle-moon");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    toggleCircleSun.classList.add("hidden");
    toggleCircleMoon.classList.remove("hidden");
  } else {
    html.classList.remove("dark");
    toggleCircleSun.classList.remove("hidden");
    toggleCircleMoon.classList.add("hidden");
  }
});
