// const questionBtns = document.querySelectorAll(".question-btn");
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const quetsionBtn = question.querySelector(".question-btn");
  const plusIcon = quetsionBtn.querySelector(".plus-icon");
  const minusIcon = quetsionBtn.querySelector(".minus-icon");

  quetsionBtn.addEventListener("click", () => {
    question.classList.toggle("show-text");
    if (question.classList.contains("show-text")) {
      plusIcon.classList.remove("show-icon");
      minusIcon.classList.add("show-icon");
    } else {
      plusIcon.classList.add("show-icon");
      minusIcon.classList.remove("show-icon");
    }
    questions.forEach((item) => {
      if (item !== question && item.classList.contains("show-text")) {
        item.classList.remove("show-text");
        item.querySelector(".minus-icon").classList.remove("show-icon");
        item.querySelector(".plus-icon").classList.add("show-icon");
      }
    });
  });
});
/**
questionBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const question = e.currentTarget.parentElement.parentElement;
    const questionText = question.querySelector(".question-text");
    const plusIcon = btn.querySelector(".plus-icon");
    const minusIcon = btn.querySelector(".minus-icon");
    questionText.classList.toggle("show-text");
    if (questionText.classList.contains("show-text")) {
      plusIcon.classList.remove("show-icon");
      minusIcon.classList.add("show-icon");
    } else {
      plusIcon.classList.add("show-icon");
      minusIcon.classList.remove("show-icon");
    }
  });
});
 */
