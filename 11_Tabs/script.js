// event delegation

const aboutContent = document.querySelector(".about-content");
const tabBtns = document.querySelectorAll(".tab-btn");

const singleContents = document.querySelectorAll(".single-content");
aboutContent.addEventListener("click", (e) => {
  if (e.target.classList.contains("tab-btn")) {
    tabBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    const dataId = e.target.dataset.id;

    const aboutDescr = document.getElementById(dataId);

    singleContents.forEach((content) => {
      content.classList.remove("active");
    });
    aboutDescr.classList.add("active");
  }
});
