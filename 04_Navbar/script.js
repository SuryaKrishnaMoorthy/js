const hamburgerMenu = document.querySelector(".hamburger-menu-container");
const hamburgerLinks = document.querySelector(".nav-links-hamburger");
const hamburgerIcon = document.querySelector(".hamburger-menu-container>i");

let showHamburgerLinks = false;
const toggleHamburger = () => {
  if (!showHamburgerLinks) {
    hamburgerLinks.style.display = "none";
    hamburgerIcon.classList.contains("rotated") &&
      hamburgerIcon.classList.remove("rotated");
  } else {
    hamburgerLinks.style.display = "block";
    hamburgerIcon.classList.add("rotated");
  }
};
hamburgerMenu.addEventListener("click", () => {
  showHamburgerLinks = !showHamburgerLinks;
  toggleHamburger();
});
