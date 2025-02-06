const openModalbtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");

openModalbtn.addEventListener("click", () => {
  modal.classList.toggle("show-modal");
});

const closeModalbtn = document.querySelector(".close-btn");

closeModalbtn.addEventListener("click", () => {
  modal.classList.toggle("show-modal");
});

modal.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.classList.contains("modal-overlay")) {
    modal.classList.toggle("show-modal");
  }
});
