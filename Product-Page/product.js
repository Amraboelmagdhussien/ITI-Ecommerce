// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
  onValue,
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
let cartItems = [];
let wishList = [];

let addToCart = async function (id) {
  const snapshot = await get(child(dbRef, id)); // btrg3 promise
  const prod = snapshot.val();
  cartItems.push(prod);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

let addToWishList = async function (id) {
  const snapshot = await get(child(dbRef, id)); // btrg3 promise
  const prod = snapshot.val();
  wishList.push(prod);
  localStorage.setItem("wishList", JSON.stringify(wishList));
};

// read Data from firebse

const postId = 1;
const starCountRef = ref(db, "posts/" + postId + "/starCount");
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
//   // console.log(data)
// });

for (let i = 0; i < 20; i++) {
  const userId = i;
  get(child(dbRef, `/${userId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        var Data = snapshot.val();
        const prodEle = document.createElement("div");
        prodEle.innerHTML = ` <div class="product-card-1">
             <div class="product-image-1">
               <img src="${Data.image}"   alt="" />
             </div>
             <div class="product-info-1">
               <p class="data-name">${Data.title}</p>
               <p id="price">${Data.price}$</p>
               <p>
                 ${Data.description}
               </p>
               <p id="shipping">Free Shipping</p>
               <div class="cart-items">
                 <a href="#">View details</a>
                 <button >Add To Cart</button>
                 <i class="fa-regular fa-heart WishListIcon"></i>
                 <i class="fa-solid fa-heart added"></i>
               </div>
             </div>
           </div>
 `;

        prodEle.querySelector("button").addEventListener("click", async () => {
          await addToCart(userId + "");
          console.log(cartItems);
        });

        prodEle
          .querySelector(".fa-regular.fa-heart.WishListIcon")
          .addEventListener("click", async () => {
            await addToWishList(userId + "");
            console.log(wishList);
          });

        document.getElementById("Data").appendChild(prodEle);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

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

let localItems = localStorage.getItem("allproduct");
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
  var productContainer = JSON.parse(localStorage.getItem("allproduct"));
  for (var i = 0; i < productContainer.length; i++) {
    // parent
    const dataDiv = document.getElementById("Data");
    // child
    const div = document.createElement("div");
    const Data = dataDiv.appendChild(div);
    Data.innerHTML += `
                    <div class="product-card-1">
                    <div class="product-image-1">
                      <img src="${productContainer[i].pimg}"   alt="" />
                    </div>
                    <div class="product-info-1">
                      <p class="data-name">${productContainer[i].pname}</p>
                      <p id="price">${productContainer[i].price}$</p>
                      <p>
                        ${productContainer[i].desc}
                      </p>
                      <p id="shipping">Free Shipping</p>
                      <div class="cart-items">
                        <a href="#">View details</a>
                        <button class="add-to-cart-btn" data-index="${i}">Add To Cart</button>
                        <i data-index='${i}' class="fa-regular fa-heart wishListIcon"></i>
                        <i  class="fa-solid fa-heart added"></i>
                  
                      </div>
                    </div>
                  <br>`;
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

  //   const addTowishButtons = document.querySelectorAll(".fa-regular");
  //   addTowishButtons.forEach((button) => {
  //     button.addEventListener("click", function (event) {
  //       const index = event.target.dataset.index;
  //       addToWishlist(index);
  //     });
  //   });
}
display_items();
