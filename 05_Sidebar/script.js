const closeBtn = document.querySelector(".close-btn");
const hamburgerButton = document.querySelector(".hamburger-menu-container");

const sideBar = document.querySelector("aside");
let displaySidebar = true;
const toggleSidebar = () => {
  if (displaySidebar) {
    sideBar.style.display = "none";
    displaySidebar = false;
  } else {
    sideBar.style.display = "block";
    displaySidebar = true;
  }
  return;
};

closeBtn.addEventListener("click", () => {
  toggleSidebar();
});

hamburgerButton.addEventListener("click", () => {
  toggleSidebar();
});
