const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

const img = document.querySelector(".profile-pic");
const author = document.querySelector(".author");
const job = document.querySelector(".job");
const review = document.querySelector(".review-text");

let currentReview = reviews[0];
let currentIndex = 0;

window.addEventListener("DOMContentLoaded", () => {
  showReview(0);
});
const showReview = (currentIndex) => {
  currentReview = reviews[currentIndex];
  img.src = currentReview.img;
  author.innerText = currentReview.name;
  job.innerText = currentReview.job;
  review.innerText = currentReview.text;
};

prevBtn.addEventListener("click", () => {
  currentIndex = getPreviousIndex(currentIndex);
  showReview(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = getNextIndex(currentIndex);
  showReview(currentIndex);
});

randomBtn.addEventListener("click", () => {
  currentIndex = getRandomIndex();
  console.log(currentIndex);
  showReview(currentIndex);
});

const getPreviousIndex = (currentIndex) => {
  currentIndex -= 1;
  currentIndex =
    currentIndex < 0
      ? (reviews.length - Math.abs(currentIndex)) % reviews.length
      : currentIndex;
  return currentIndex;
};

const getNextIndex = (currentIndex) => {
  currentIndex++;
  currentIndex = currentIndex % reviews.length;
  return currentIndex;
};

const getRandomIndex = () => Math.floor(Math.random() * reviews.length);
