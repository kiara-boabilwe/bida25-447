let count = 0;

function addToCart() {
    count++;
    document.getElementById("cart-count").innerText = count;
}

/* SLIDER */
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 4000);

const searchBar = document.getElementById("searchBar");
const products = document.querySelectorAll(".product");

searchBar.addEventListener("keyup", function () {
  const value = this.value.toLowerCase();

  products.forEach(product => {
    const name = product.getAttribute("data-name").toLowerCase();

    if (name.includes(value)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});

document.getElementById("cartBtn").addEventListener("click", function () {
  alert("Cart opened!");
});

const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg"
];

let index = 0;
const hero = document.querySelector(".hero");

function changeBackground() {
  hero.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 5000);