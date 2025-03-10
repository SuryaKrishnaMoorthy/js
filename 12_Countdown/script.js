const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let futureDate = new Date();
const tempYear = futureDate.getFullYear();
const tempMonth = futureDate.getMonth();
const tempDate = futureDate.getDate();
const tempTime = futureDate.getTime();
futureDate = new Date(tempYear, tempMonth, tempDate + 10, 11, 30, 0);
// futureDate = new Date(2025, 2, 10, 11, 55, 0);
const futureYear = futureDate.getFullYear();
const futureMonth = futureDate.getMonth();
const futureDateDigit = futureDate.getDate();
const futureDay = futureDate.getDay();
const futureHour = futureDate.getHours();
const futureMinutes = futureDate.getMinutes();

const deadline = document.querySelector(".deadline");
const daysElement = document.querySelector(".countdown");
const items = document.querySelectorAll(".item-digit");

deadline.innerHTML = `giveaway ends on ${days[futureDay]}, ${futureDateDigit} ${
  months[futureMonth]
} ${futureYear} ${futureHour}:${futureMinutes} <span>${
  futureHour < 12 ? "am" : "pm"
}</span>`;

/**
 
1sec = 1000ms
1 min = 60 sec
1hour = 60 min
1 day = 24 hours
 */

const getRemainingTime = () => {
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  const diff = futureDate - new Date();

  const remainingDays = Math.floor(diff / oneDay);
  const hours = Math.floor((diff % oneDay) / oneHour);
  const minutes = Math.floor((diff % oneHour) / oneMinute);
  const seconds = Math.floor((diff % oneMinute) / 1000);
  if (futureDate.getTime() < new Date().getTime()) {
    clearInterval(interval);
    deadline.innerHTML = `<h4>Giveaway expired</h4>`;
    daysElement.style.display = "none";
  }
  return [remainingDays, hours, minutes, seconds];
};

const displayCountdown = () => {
  const remainingTime = getRemainingTime();
  items.forEach((item, index) => {
    item.textContent = remainingTime[index];
  });
};

const interval = setInterval(() => {
  displayCountdown();
}, 1000);
