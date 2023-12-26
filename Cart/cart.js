// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADIzVJeauTcF1WjKGMipnNNH3cu8PagDg",
  authDomain: "gothic-album-381415.firebaseapp.com",
  databaseURL: "https://gothic-album-381415-default-rtdb.firebaseio.com",
  projectId: "gothic-album-381415",
  storageBucket: "gothic-album-381415.appspot.com",
  messagingSenderId: "474429480537",
  appId: "1:474429480537:web:5b32b38a9a22072f965b48",
  measurementId: "G-5TEVJS063P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (app) {
  console.log("done Worked!!");
}
const db = getDatabase();
const dbRef = ref(getDatabase());

let dropList = document.querySelectorAll(".dropDownList");
for (let i = 0; i < dropList.length; i++) {
  let list = dropList[i];
  list.addEventListener("mouseover", function () {
    list.classList.add("showList");
  });

  list.addEventListener("mouseleave", function () {
    list.classList.remove("showList");
  });
}

function deleteFunction() {
  const button = event.target;
  let dataIndex = button.getAttribute("data-index");
  dataRet.splice(dataIndex, 1);
  localStorage.setItem("cartItems", JSON.stringify(dataRet));
  location.reload();
}

let getItemss = localStorage.getItem("cartItems");
let dataRet = JSON.parse(getItemss || "[]");

let display = function () {
  const checkoutLeft = document.querySelector(".checkout-left");
  try {
    for (let i = 0; i < dataRet.length; i++) {
      let cartEle = document.createElement("div");
      cartEle.innerHTML = `<div class="product-card-1">
    <div class="img">
      <img src="${dataRet[i].image || dataRet[i].pimg}" alt="" />
      <div class="check-info">
        <p>${dataRet[i].title || dataRet[i].pname}</p>
        <p class="prod-desc">${dataRet[i].description || dataRet[i].desc}</p>
        <div class="btns-sAndR">
          <button data-index="${i}" class="remove">Remove</button>
          <button class="sve-for-later">Save For later</button>
        </div>
      </div>
    </div>
    <div class="price">
    ${dataRet[i].price}$
    <input id="qty" type="text" placeholder="QTY..." value="1">
    <button class="addQtys" data-index="${i}" id="add-qty" onclick="add(${i})">Add</button>
    </div>
    </div>`;
      document.querySelector(".checkout-left").appendChild(cartEle);
    }
  } catch (error) {
    console.log("The Cart Is just Empty Nothing to Show Here");
  }
  checkoutLeft.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove")) {
      deleteFunction(event);
    }
  });
};

display();

let lastTotal;

function ShowMyPrice() {
  try {
    let arrPrice = [];
    dataRet.forEach((element) => {
      // console.log(element.price);
      arrPrice.push(element.price);
      // console.log(arrPrice);
    });
    let sum = arrPrice.reduce((start, current) => {
      return start + current;
    }, 0);
    let quantity = document.getElementById("qty").value;
    console.log(quantity);
    let numberQty = parseInt(quantity);
    console.log(numberQty);
    let wholeTotal = sum * numberQty;
    console.log(wholeTotal);
    document.getElementById("subTotal").innerHTML = `${wholeTotal}$`;
    // console.log(sumPrice(sumValues));

    let afterTaxes = wholeTotal * 0.15;
    lastTotal = wholeTotal + afterTaxes;
    let finalTotal = (document.getElementById(
      "total-prices"
    ).innerHTML = `${lastTotal}$`);
    
    sessionStorage.setItem("totalprice",lastTotal);

    return finalTotal;
  } catch (e) {
    e.message;
  }
}
console.log(ShowMyPrice());
ShowMyPrice();

async function couponDis() {
  let couponCode = document.getElementById("coupon").value;
  if (!couponCode) {
    return;
  }
  const couponRef = ref(db, `coupons/${couponCode}`); // path in db
  const couponSnapshot = await get(couponRef); // reading snapshot that contains every info about the obj
  if (!couponSnapshot.exists()) {
    return console.log("Error Coupon Does not exists");
  } else {
    const coupon = couponSnapshot.val();
    console.log(coupon);
    document.getElementById("discount").textContent = `${coupon.title}`;
    let totalbefore = parseInt(ShowMyPrice());
    console.log(totalbefore);
    let totalDisc = parseInt(totalbefore) * coupon.totaldiscount;
    console.log(parseInt(totalDisc));
    let wholeSome = totalbefore - totalDisc;
    console.log(wholeSome);
    document.getElementById("old-price").style.display = "block";
    document.getElementById("old-price").innerHTML = `${totalbefore}$`;
    document.getElementById("total-prices").textContent = `${wholeSome}$`;
  }
}

document.getElementById("discountBtn").addEventListener("click", () => {
  couponDis();
});

function removeDisc() {
  document.getElementById("coupon").value = "";
  document.getElementById("discount").textContent = `0%`;
  document.getElementById("old-price").style.display = "none";
  ShowMyPrice();
  console.log("Working");
}

document.getElementById("removeCpn").addEventListener("click", () => {
  removeDisc();
});

document.getElementById(
  "cart-items-number"
).textContent = `(${dataRet.length})`;

let userData = sessionStorage.getItem("nameOfUser");
let isLoggedIn = sessionStorage.getItem("loginStatus");
let logoutButton = document.getElementById("headerLogout");
let icons = document.getElementById("loggedInIcons");
let login = document.getElementById("loginButton");
let ShowsError = document.getElementById("ifNotLoggedIn");
let userName = document.getElementById("userName");
let userPassword = document.getElementById("userPassword");
let userEmail = document.getElementById("userEmail");
let profConfig = document.getElementById("pro-config");
let showPass = document.getElementById("showpassword");
let chngPass = document.getElementById("change-password");
let editbtn = document.getElementById("edit");
let paymentButton = document.getElementById("paymentButton");
// let addButton = document.getElementById("add-qty");


paymentButton.addEventListener("click", () => {
  sessionStorage.setItem("totalprice",lastTotal);
  console.log(sessionStorage.getItem("totalprice"));
  setTimeout(() => {
    window.location = "/payment/payment.html";
  }, 10);
});



let profile = localStorage.getItem("usersData");
let parsedProfile = JSON.parse(profile);

try {
  for (let i = 0; i < parsedProfile.length; i++) {
    if (parsedProfile[i].uName == userData) {
      userName.innerHTML = `${parsedProfile[i].uName}`;
      userEmail.innerHTML = `${parsedProfile[i].mail}`;
      userPassword.value = `${parsedProfile[i].pass}`;
    } else {
      console.log("Error");
    }
  }
} catch (error) {
  error.message;
}

if (isLoggedIn != null) {
  // means i logged in
  login.style.display = "none";
  icons.classList.add("icons");
  icons.classList.remove("hiddenIcons");
  logoutButton.style.display = "block";
  // loggedOut.style.display = "none";
  // loggedIn.style.display = "block";
  ShowsError.classList.remove("errorShow");
  ShowsError.classList.add("hiddenIcons");

  profConfig.classList.add("prof-config");
  profConfig.classList.add("container");
  profConfig.classList.remove("hiddenIcons");
  // document.getElementById("uName").innerHTML = userData;
}

// alert("Hello");

// Event listener for logout button
logoutButton.addEventListener("click", handleLogout);

function handleLogout() {
  // Clear session storage and remove a specific item from local storage
  sessionStorage.clear();
  localStorage.removeItem("productsInCart");
  console.log("clicked");

  // Set a timeout before redirecting to the index page
  setTimeout(() => {
    window.location = "profile.html";
  }, 1000);
}