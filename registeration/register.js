// Clear session storage and remove a specific item from local storage
sessionStorage.clear();
localStorage.removeItem("productsInCart");

// Get DOM elements
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const repeatedPassInput = document.getElementById("repeatpass");
const registerBtn = document.getElementById("sign_up");

// Check if 'usersData' is null, initialize it with a default user
if (localStorage.getItem("usersData") === null) {
  const defaultUser = { uName: "Admin", mail: "eraserhint23@yahoo.com@gmail.com", pass: 1 };
  const usersData = [defaultUser];
  localStorage.setItem("usersData", JSON.stringify(usersData));
}

// Flags to track input validity
let flagNum1 = 0;
let flagNum2 = 0;
let flagNum3 = 0;
let flagNum4 = 0;

// Validation functions
function validateInput(inputValue, validationFunction, messageElement, flag) {
  if (inputValue !== "") {
    if (!validationFunction(inputValue)) {
      setInvalidInput(messageElement, flag);
      alert("Validation failed.");
    } else {
      setValidInput(messageElement, flag);
    }
  } else {
    setEmptyInput(messageElement, flag);
  }
}

function setValidInput(messageElement, flag) {
  messageElement.innerHTML = "<b>Valid</b>";
  flag = 1;
}

function setInvalidInput(messageElement, flag) {
  messageElement.innerHTML = "<b>Not valid</b>";
  flag = 0;
  alert("Validation failed.");
}

function setEmptyInput(messageElement, flag) {
  messageElement.innerHTML = "<b>Required</b>";
  flag = 0;
}

// Validation functions for username, email, password, and repeated password
function nameValidation(name) {
  const reg = /^[\w]{5,}$/g;
  return reg.test(name);
}

function mailValidation(email) {
  const visaRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return visaRegEx.test(email);
}

function passValidation(password) {
  return password.length >= 8;
}

function repeatValidation(repeatedPassword) {
  return repeatedPassword === passwordInput.value;
}

// Event listeners for input validation
usernameInput.addEventListener("input", () =>
  validateInput(usernameInput.value, nameValidation, document.getElementById("nameMsg"), flagNum1)
);

emailInput.addEventListener("input", () =>
  validateInput(emailInput.value, mailValidation, document.getElementById("mailMsg"), flagNum2)
);

passwordInput.addEventListener("input", () =>
  validateInput(passwordInput.value, passValidation, document.getElementById("passMsg"), flagNum3)
);

repeatedPassInput.addEventListener("input", () =>
  validateInput(
    repeatedPassInput.value,
    repeatValidation,
    document.getElementById("repeatMsg"),
    flagNum4
  )
);

// Event listener for registration
registerBtn.addEventListener("click", register);

function register(e) {
  e.preventDefault();

  if (usernameInput.value === "" || emailInput.value === "" || passwordInput.value === "" || repeatedPassInput.value === "") {
    alert("Please fill in all required fields.");
  } else if (flagNum1 === 0 || flagNum2 === 0 || flagNum3 === 0 || flagNum4 === 0 || !repeatValidation(repeatedPassInput.value)) {
    alert("Please enter valid data.");
  } else {
    const usersArray = JSON.parse(localStorage.getItem("usersData"));

    for (const user of usersArray) {
      if (user.uName === usernameInput.value) {
        alert("This username already exists.");
        return;
      } else if (user.mail === emailInput.value) {
        alert("This email already exists.");
        return;
      }
    }

    const newUser = { uName: usernameInput.value, mail: emailInput.value, pass: passwordInput.value };
    usersArray.push(newUser);

    localStorage.setItem("usersData", JSON.stringify(usersArray));

    setTimeout(() => {
      window.location = "..\registeration\registeration.html";
    }, 1000);
  }
}

// Event listener for search input
const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", function (e) {
  const contactSpecial = document.getElementById("contactSpecial");
  contactSpecial.style.display = "none";

  const aboutusSearch = document.getElementById("aboutusSearch");
  aboutusSearch.innerHTML = `<section class="home">
    <div class="container">
      <div class="products" id="products"></div>
    </div>
  </section>`;

  search(e.target.value, JSON.parse(localStorage.getItem("products")));

  if (e.target.value.trim() === "") {
    aboutusSearch.innerHTML = '<div></div>';
    contactSpecial.style.display = "block";
  }
});

// Function to filter products based on search
function search(title, productsArray) {
  const filteredProducts = productsArray.filter(
    (item) => item.title.toLowerCase().includes(title.toLowerCase())
  );
  drawProductsUI(filteredProducts);
}

const productsArray = JSON.parse(localStorage.getItem("products"));

// Function to draw product UI
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