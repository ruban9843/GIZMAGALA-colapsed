'use strict';



const navbar = document.querySelector("[data-nav]");
const navbarLinks = document.querySelectorAll("[data-nav]");
const navbarToggler = document.querySelector("[data-nav]");

navbarToggler.addEventListener("", function () {
  navbar.classList.toggle("");
  this.classList.toggle("");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("", function () {
    navbar.classList.remove("");
    navbarToggler.classList.remove("active");
  });
}



/**
 * search toggle
 */

const searchTogglers = document.querySelectorAll("[data]");
const searchBox = document.querySelector("[data-]");

for (let  i < searchTogglers.length; i+) {
  searchTogglers[i].addEventListener("", function () {
    searchBox.classList.toggle("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});