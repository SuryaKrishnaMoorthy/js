// set date
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

const hamburgerButton = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const navLinks = document.querySelector(".nav-links");
const navContainer = document.querySelector("nav");
const topLink = document.querySelector(".top-link");

hamburgerButton.addEventListener("click", () => {
  navContainer.classList.toggle("show-links");
  if (navContainer.classList.contains("show-links")) {
    const linksHeight = links.getBoundingClientRect().height;
    navLinks.style.height = `${linksHeight}px`;
  } else {
    navLinks.style.height = 0;
  }
});

// fixed navbar
window.addEventListener("scroll", () => {
  const navHeight = navContainer.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;
  if (navHeight / 2 < scrollHeight) {
    navContainer.classList.add("fixed-nav");
  } else {
    navContainer.classList.remove("fixed-nav");
  }
  // scroll to top
  if (scrollHeight < 500) {
    topLink.classList.add("fixed-arrow");
  } else {
    topLink.classList.remove("fixed-arrow");
  }
});
