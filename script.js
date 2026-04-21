function searchProduct() {
    let input = document.getElementById("searchInput").value;
    alert("Searching for: " + input);
}

/* Example cart update */
function addToCart() {
    let count = document.getElementById("cart-count");
    count.textContent = parseInt(count.textContent) + 1;
}

// HERO IMAGE SLIDER
let slides = document.querySelectorAll(".hero-slide");
let current = 0;

setInterval(() => {
    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");
}, 4000);


// BUTTON NAVIGATION
function goToShop() {
    window.location.href = "clothing.html"; // change if needed
}

function goToSales() {
    window.location.href = "promotions.html";
}

// TRACK USER INTEREST
let viewedProducts = JSON.parse(localStorage.getItem("viewed")) || [];

// WHEN USER CLICKS PRODUCT
document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
        let name = card.querySelector("h3").innerText;

        if (!viewedProducts.includes(name)) {
            viewedProducts.push(name);
            localStorage.setItem("viewed", JSON.stringify(viewedProducts));
        }
    });
});


// ADD TO CART (updates your navbar counter)
function addToCart(product) {
    let count = document.getElementById("cart-count");
    count.textContent = parseInt(count.textContent) + 1;

    alert(product + " added to cart");
}