const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const menuList = document.querySelector(".menu-list");
const allMenuBtn = document.querySelector(".all-menu");
const breakfastBtn = document.querySelector(".breakfast");
const lunchBtn = document.querySelector(".lunch");
const shakesBtn = document.querySelector(".shakes");

let items = [];

const displayMenu = (menu) => {
  items = [];
  menu.forEach((item, index) => {
    items.push(
      `<article class="menu-item">
      <img
        src="${item.img}"
        alt="${item.title}"
        class="menu-item-image"
      />
      <div class="menu-details">
        <div class="menu-head">
          <p class="menu-title">${item.title}</p>
          <span class="menu-item-price">${item.price}</span>
        </div>
        <div class="menu-item-description">
          <p>${item.desc}</p>
        </div>
      </div>
    </article>`
    );
  });
  menuList.innerHTML = items.join("");
};

const displayButtons = () => {
  const categories = menu.reduce(
    (item, acc) => {
      item.category && acc.push(category);
      return acc;
    },
    ["all"]
  );

  console.log(categories);
};
window.onload = (event) => {
  console.log("page is fully loaded");
  displayMenu(menu);
  displayButtons();
};

breakfastBtn.addEventListener("click", () => {
  displayMenu(filterMenu("breakfast"));
});
lunchBtn.addEventListener("click", () => {
  displayMenu(filterMenu("lunch"));
});
shakesBtn.addEventListener("click", () => {
  displayMenu(filterMenu("shakes"));
});

allMenuBtn.addEventListener("click", () => {
  displayMenu(filterMenu("all"));
});

const filterMenu = (category) => {
  if (category === "all") {
    items = menu;
  } else {
    items = menu.filter((item) => item.category === category);
  }
  return items;
};
