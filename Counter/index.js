const counter = document.querySelector(".counter");

const buttons = document.querySelectorAll("button");

let currentCounter = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    /**
     The contains() method of the Node interface returns a boolean value indicating whether a node is a descendant of a given node, that is the node itself, one of its direct children (childNodes), one of the children's direct children, and so on.      
     */

    if (styles.contains("increase")) {
      currentCounter++;
    } else if (styles.contains("decrease")) {
      currentCounter--;
    } else {
      currentCounter = 0;
    }

    if (currentCounter > 0) {
      counter.style.color = "green";
    }
    if (currentCounter < 0) {
      counter.style.color = "#B20000";
    }
    if (currentCounter === 0) {
      counter.style.color = "black";
    }

    counter.innerText = currentCounter;
  });
});

/**
const incrementBtn = document.querySelector(".increase");
const decrementBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");

incrementBtn.addEventListener("click", () => {
  currentCounter += 1;
  counter.innerText = currentCounter;
  if (currentCounter > 0) {
    counter.style.color = "green";
  } else if (currentCounter === 0) {
    counter.style.color = "black";
  }
});

decrementBtn.addEventListener("click", () => {
  currentCounter -= 1;
  counter.innerText = currentCounter;

  if (currentCounter < 0) {
    counter.style.color = "salmon";
  } else if (currentCounter === 0) {
    counter.style.color = "black";
  }
});

resetBtn.addEventListener("click", () => {
  currentCounter = 0;
  counter.innerText = currentCounter;
  counter.style.color = "black";
});
 */
