function searchProduct() {
    let input = document.getElementById("searchInput").value;
    alert("Searching for: " + input);
}

/* Example cart update */
function addToCart() {
    let count = document.getElementById("cart-count");
    count.textContent = parseInt(count.textContent) + 1;
}