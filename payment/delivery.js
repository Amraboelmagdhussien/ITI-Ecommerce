// localStorage.removeItem("productsInCart");
//     sessionStorage.removeItem("totalprice");
// alert("Thanks for using our store");
var checkoutBtn = document.getElementById("final");
var displayPrice = 0;
if (sessionStorage.getItem("totalprice") != null) {
  displayPrice = sessionStorage.getItem("totalprice");
}
checkoutBtn.innerHTML = "Confirm Your Order" + "    " + displayPrice + " LE";

var flagNum1 = 0;
var flagNum2 = 0;
function oldCondition(oldValue) {
  if (oldValue.value != "") {
    if (!nameValidation(oldValue.value)) {
      oldValue.style.background = "lightpink";
      document.getElementById("nameMsg").innerHTML =
        "<span class='star'>Not valid</span>";
      flagNum1 = 0;
      alert("Adress can be alphanumeric & spaces only");
    } else {
      document.getElementById("nameMsg").innerHTML =
        "<span class='star'>Valid</span>";
      oldValue.style.background = "palegreen";
      flagNum1 = 1;
    }
  } else {
    oldValue.style.background = "white";
    flagNum1 = 0;
    document.getElementById("nameMsg").innerHTML =
      "<span class='star'>Required</span>";
  }
}
function nameValidation(name) {
  var reg = /^[\w\s]{1,}$/g;
  if (reg.test(name)) return true;
  else return false;
}
function oldCondition1(oldValue) {
  if (oldValue.value != "") {
    if (!creditValidation(oldValue.value)) {
      oldValue.style.background = "lightpink";
      document.getElementById("creditMsg").innerHTML =
        "<span class='star'>Not valid</span>";
      flagNum2 = 0;
      alert("please enter valid phone number");
    } else {
      document.getElementById("creditMsg").innerHTML =
        "<span class='star'>Valid</span>";
      oldValue.style.background = "palegreen";
      flagNum2 = 1;
    }
  } else {
    oldValue.style.background = "white";
    flagNum2 = 0;
    document.getElementById("creditMsg").innerHTML =
      "<span class='star'>Required</span>";
  }
}
function creditValidation(name) {
  var visaRegEx = /^01+([0125]{1,1})+([0-9]{8,8})$/gi;
  if (visaRegEx.test(name)) return true;
  else return false;
}

// function checkout() {

//         }
checkoutBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (flagNum1 == 1 && flagNum2 == 1) {
    localStorage.removeItem("productsInCart");
    sessionStorage.removeItem("totalprice");

    window.location.href = "index.html";
    alert("Thanks for using our store");
  } else {
    alert("Some data are missing or invalid");
  }
});

let userData = sessionStorage.getItem("nameOfUser");
let isLoggedIn = sessionStorage.getItem("loginStatus");
let logoutButton = document.getElementById("headerLogout");
let loggedIn = document.getElementById("loggedInDiv");
let loggedOut = document.getElementById("loggedOutDiv");
let icons = document.getElementById("loggedInIcons");
let login = document.getElementById("loginButton");
let ShowsError = document.getElementById("ifNotLoggedIn");
let userName = document.getElementById("userName");
let userPassword = document.getElementById("userPassword");
let userEmail = document.getElementById("userEmail");

let section = document.getElementById("specialLogin");

let profile = localStorage.getItem("usersData");
let parsedProfile = JSON.parse(profile);

if (isLoggedIn != null) {
  // means i logged in
  login.style.display = "none";
  icons.classList.add("icons");
  icons.classList.remove("hiddenIcons");
  logoutButton.style.display = "block";

  section.classList.add("section-form");
  section.classList.remove("hiddenIcons");

  ShowsError.classList.remove("errorShow");
  ShowsError.classList.add("hiddenIcons");
}

logoutButton.addEventListener("click", handleLogout);

function handleLogout() {
  // Clear session storage and remove a specific item from local storage
  sessionStorage.clear();
  console.log("clicked");

  // Set a timeout before redirecting to the index page
  setTimeout(() => {
    window.location = "delivery.html";
  }, 1000);
}
