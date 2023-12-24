// Get DOM elements
const cartProductsMenu = document.querySelector(".carts-products");
const cartProductsDivDom = document.querySelector(".carts-products div");
const shoppingCartIcon = document.querySelector(".shoppingCart");
const badgeDom = document.querySelector(".badge");

// Display cart items count
function displayCartItemsCount() {
  const addedItem = localStorage.getItem("productsInCart") !== null
    ? JSON.parse(localStorage.getItem("productsInCart"))
    : [];

  cartProductsDivDom.innerHTML = "";
  if (addedItem.length > 0) {
    addedItem.forEach((item) => {
      cartProductsDivDom.innerHTML += "<p>" + item.title + "</p>";
    });
    badgeDom.style.display = "block";
    badgeDom.innerHTML = addedItem.length;
  }
}

// Initialize cart items count
displayCartItemsCount();

// Add to cart function
function addedToCart(id) {
  if (sessionStorage.getItem("loginStatus")) {
    const choosenItem = products.find((item) => item.id === id);
    const item = allItems.find((i) => i.id === choosenItem.id);

    if (item) {
      item.qty = item.qty ? item.qty + 1 : 1;
    } else {
      choosenItem.qty = 1;
      allItems.push(choosenItem);
    }

    let addedItem = localStorage.getItem("productsInCart") !== null
      ? JSON.parse(localStorage.getItem("productsInCart"))
      : [];
    addedItem = [...addedItem, choosenItem];

    const uniqueProducts = getUniqueArr(addedItem, "id");
    localStorage.setItem("productsInCart", JSON.stringify(uniqueProducts));

    badgeDom.style.display = "block";
    badgeDom.innerHTML = uniqueProducts.length;
    displayCartItemsCount();
  } else {
    window.location = "login.html";
  }
}

// Open Cart Menu function
function openCartMenu() {
  if (cartProductsDivDom.innerHTML !== "") {
    cartProductsMenu.style.display =
      cartProductsMenu.style.display === "block" ? "none" : "block";
  }
  if (cartProductsDivDom.innerHTML === "") {
    cartProductsDivDom.innerHTML = "No Item Yet !!";
  }
}

// Event listener for shopping cart icon
shoppingCartIcon.addEventListener("click", openCartMenu);

// Search function
function search(title, myArray) {
  const arr = myArray.filter(
    (item) => item.title.toLowerCase().includes(title.toLowerCase())
  );
  drawProductsUi(arr);
}

// Filter products by category function
function getProductsByCategory(e) {
  const cat = e.target.value;
  const products = JSON.parse(localStorage.getItem("products"));
  const filteredProducts = cat === "all"
    ? products
    : products.filter((i) => i.category === cat);

  drawProductsUi(filteredProducts);
}

// Event listener for category filter
categoryFilter.addEventListener("change", getProductsByCategory);

// Function to filter products based on price range
function filterProducts() {
  const minPrice = parseFloat(document.getElementById("minPrice").value) || 0;
  const maxPrice =
    parseFloat(document.getElementById("maxPrice").value) || Number.MAX_VALUE;

  const filteredProducts = products.filter((product) => {
    return product.price >= minPrice && product.price <= maxPrice;
  });

  drawProductsUi(filteredProducts);
}

// Initial display of products
drawProductsUi(products);