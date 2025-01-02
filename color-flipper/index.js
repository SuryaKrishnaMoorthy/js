const colors = ["red", "green", "blue", "alpha", "yellow", "gray"];
const hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const generateHexColor = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexDigits[Math.floor(Math.random() * hexDigits.length)];
  }
  return hexColor;
};

const simpleBtn = document.querySelector(".simple");
const hexBtn = document.querySelector(".hex");

const btn = document.querySelector(".btn");

let isHex = false;

hexBtn.addEventListener("click", () => {
  isHex = !isHex;
  if (isHex) {
    const hexColor = generateHexColor();
    document.querySelector("main").style.background = hexColor;
    document.querySelector(".color-name").textContent = hexColor;
    hexBtn.style.textUnderlineOffset = "10px";
    hexBtn.style.textDecoration = "underline";
  } else {
    hexBtn.style.textDecoration = "none";
  }
});

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
btn.addEventListener("click", () => {
  const currentColor = getRandomColor();
  const currentHex = generateHexColor();
  document.querySelector("main").style.background = isHex
    ? currentHex
    : currentColor;
  document.querySelector(".color-name").textContent = isHex
    ? currentHex
    : currentColor;
});
