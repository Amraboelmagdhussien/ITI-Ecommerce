// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import {
//   getDatabase,
//   ref,
//   set,
//   get,
//   child,
//   onValue,
// } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// // https://firebase.google.com/docs/web/setup#available-libraries
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyADIzVJeauTcF1WjKGMipnNNH3cu8PagDg",
//   authDomain: "gothic-album-381415.firebaseapp.com",
//   databaseURL: "https://gothic-album-381415-default-rtdb.firebaseio.com",
//   projectId: "gothic-album-381415",
//   storageBucket: "gothic-album-381415.appspot.com",
//   messagingSenderId: "474429480537",
//   appId: "1:474429480537:web:5b32b38a9a22072f965b48",
//   measurementId: "G-5TEVJS063P",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// if (app) {
//   console.log("done Worked!!");
// }
// const db = getDatabase();
// const dbRef = ref(getDatabase());

// const postId = 1;
// const starCountRef = ref(db, "posts/" + postId + "/starCount");

// for (let i = 0; i < 8; i++) {
//   const userId = i;
//   get(child(dbRef, `/${userId}`))
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         var Data = snapshot.val();
//         // console.log(Data);
//         document.getElementById(
//           "grid-container"
//         ).innerHTML += `<div class="grid-item grid-item-2">
//         <div class="productsInformation">
//           <h4>${Data.category}</h4>
//           <p class="price-info">
//             From <br />
//             <span class="price">${Data.price} USD </span>
//           </p>
//         </div>

//         <div class="imgProducts">
//           <img class="imagesss" src="${Data.image}" alt="" />
//         </div>
//       </div>`;
//       } else {
//         console.log("No data available");
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

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
  console.log("clicked");

  // Set a timeout before redirecting to the index page
  setTimeout(() => {
    window.location = "profile.html";
  }, 1000);
}

let showFunc = function () {
  var passValue = document.getElementById("userPassword");
  if (passValue.type === "password") {
    passValue.type = "text";
  } else {
    passValue.type = "password";
  }
};

let revert = function () {
  var passValue = document.getElementById("userPassword");
  if (passValue.type === "text") {
    passValue.type = "password";
  } else {
    passValue.type = "text";
  }
};

showPass.addEventListener("mouseup", () => {
  revert();
});
showPass.addEventListener("mousedown", () => {
  showFunc();
});

function changePass() {
  try {
    const passwordRegex = /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{6,16}$/;
    let newVal = document.getElementById("newPassValue").value; // Retrieve new password value
    for (let i = 0; i < parsedProfile.length; i++) {
      if (parsedProfile[i].uName === userData) {
        if (!newVal == "") {
          if (passwordRegex.test(newVal)) {
            parsedProfile[i].pass = newVal; // Update password in parsedProfile array
            localStorage.setItem("usersData", JSON.stringify(parsedProfile)); // Store updated profile in localStorage
            alert("Password updated successfully");
            chngPass.style.display = "none";
          } else {
            alert("Password Does Not match Condtion");
          }
        } else {
          alert("Field Cannot be Empty");
        }
      } else {
        console.log("Error: User not found");
      }
    }
  } catch (error) {
    console.error(error.message);
  }
}
const fucButton = document.getElementById("func");
fucButton.addEventListener("click", () => {
  changePass();
});

function editPass() {
  chngPass.style.display = "block";
}

editbtn.addEventListener("click", () => {
  editPass();
});

/*
Mahmoud Amr hassan 
*/
let localItems = localStorage.getItem("userOrders");
let parsedItem = JSON.parse(localItems);

function addToCartItems(indexedId) {
  let vaariable = parsedItem[indexedId];
  cartItems.push(vaariable);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function addToWishlistItems(indexedId) {
  let vaariable = parsedItem[indexedId];
  wishList.push(vaariable);
  localStorage.setItem("wishList", JSON.stringify(wishList));
}

// display
function display_items() {
  var productContainer = JSON.parse(localStorage.getItem("userOrders"));
  console.log();
  for (var i = 0; i < productContainer.length; i++) {
    // parent
    const dataDiv = document.getElementById("Prevorders");
    dataDiv.innerHTML += `
    <div class='full-sec'>
        <div class='products'>
                <div class="product-card-1">
                    <div class="img">
                    <img src="${dataRet[i].image || dataRet[i].pimg}" alt="" />
                    <div class="check-info">
                        <p>${dataRet[i].pname || dataRet[i].title}</p>
                        <p class="prod-desc">${
                          dataRet[i].description || dataRet[i].pname
                        }</p>
                        <div class="btns-sAndR">
                        <button class="add-to-cart-btn" data-index="${i}">Add To Cart</button>
                        <i data-index='${i}' class="fa-regular fa-heart wishListIcon"></i>
                        <i  class="fa-solid fa-heart added"></i>
                        </div>
                    </div>
                    </div>
                    <div class="price">${dataRet[i].price}$</div>
                </div>
                </div>
            </div>
        </div>
        </div><br>
    `;
  }

  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  const wishListIcons = document.querySelectorAll(
    ".fa-regular.fa-heart.wishListIcon"
  );

  wishListIcons.forEach((icon) => {
    icon.addEventListener("click", function (event) {
      const index = event.target.dataset.index;
      addToWishlistItems(index);
    });
  });

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const index = event.target.dataset.index;
      addToCartItems(index);
    });
  });
}

display_items();
