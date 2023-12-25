const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("sign_in");
const checkbox = document.getElementById("checkbox");

sessionStorage.clear();
localStorage.removeItem("productsInCart");

if (localStorage.getItem("rememberme") !== null) {
  const rememberMeData = JSON.parse(localStorage.getItem("rememberme"));
  usernameInput.value = rememberMeData.name;
  passwordInput.value = rememberMeData.pass;
}

if (localStorage.getItem("usersData") === null) {
  const usersData = [{ uName: "osama", mail: "osama@gmail.com", pass: 1 }];
  localStorage.setItem("usersData", JSON.stringify(usersData));
}

function rememberMeFunc() {
  checkbox.value = checkbox.value === "checked" ? "" : "checked";
}

const usersDataArray = JSON.parse(localStorage.getItem("usersData"));

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (usernameInput.value === "" || passwordInput.value === "") {
    alert("Please fill in all fields.");
  } else {
    const userIndex = usersDataArray.findIndex(
      (user) => user.uName === usernameInput.value && user.pass == passwordInput.value
    );

    if (userIndex >= 0) {
      sessionStorage.setItem("loginStatus", "5true");
      sessionStorage.setItem("nameOfUser", usersDataArray[userIndex].uName);

      if (checkbox.value === "checked") {
        const rememberMeData = { name: usernameInput.value, pass: passwordInput.value };
        localStorage.setItem("rememberme", JSON.stringify(rememberMeData));
      } else {
        localStorage.removeItem("rememberme");
      }

      setTimeout(() => {
        window.location = "index.html";
      }, 1000);
    } else {
      alert("Wrong username or password.");
    }
  }
});

const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", function (e) {
  const specialLogin = document.getElementById("specialLogin");
  specialLogin.style.display = "none";

  const aboutusSearch = document.getElementById("aboutusSearch");
  aboutusSearch.innerHTML = `<section class="home">
    <div class="container">
      <div class="products" id="products"></div>
    </div>
  </section>`;

  search(e.target.value, JSON.parse(localStorage.getItem("products")));

  if (e.target.value.trim() === "") {
    aboutusSearch.innerHTML = '<div></div>';
    specialLogin.style.display = "block";
  }
});

function search(title, productsArray) {
  const filteredProducts = productsArray.filter(
    (item) => item.title.toLowerCase().includes(title.toLowerCase())
  );
  drawProductsUI(filteredProducts);
}

const productsArray = JSON.parse(localStorage.getItem("products"));

const drawProductsUI = (products) => {
  const productsUI = products.map(
    (item) => `
    <div class="card">
      <img src="${item.image}" alt="">
      <div class="content">
        <h3>${item.title}</h3>
        <p>Price: ${item.price} LE</p>
        <p>Category: ${item.category}</p>
        <p>Ingredients: ${item.description}</p>
      </div>
      <div class="info">
        <button class="add-to-cart" onclick="addedToCart(${item.id})">Add to cart</button>
      </div>
    </div>
  `
  );
  document.getElementById("products").innerHTML = productsUI.join("");
};