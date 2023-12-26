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

const postId = 1;
const starCountRef = ref(db, "posts/" + postId + "/starCount");

for (let i = 0; i < 8; i++) {
  const userId = i;
  get(child(dbRef, `/${userId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        var Data = snapshot.val();
        console.log(Data);
        document.getElementById(
          "grid-container"
        ).innerHTML += `<div class="grid-item grid-item-2">
        <div class="productsInformation">
          <h4>${Data.category}</h4>
          <p class="price-info">
            From <br />
            <span class="price">${Data.price} USD </span>
          </p>
        </div>

        <div class="imgProducts">
          <img class="imagesss" src="${Data.image}" alt="" />
        </div>
      </div>`;
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

let dropList = document.querySelectorAll(".dropDownList");
// for (let i = 0; i < dropList.length; i++) {
//   let list = dropList[i];
//   list.addEventListener("mouseover", function () {
//     list.classList.add("showList");
//   });

//   list.addEventListener("mouseleave", function () {
//     list.classList.remove("showList");
//   });
// }

let discountDate = new Date("Dec 28 2023 9:00:00").getTime();

let countDown = function () {
  setInterval(function () {
    let currentDate = new Date();
    let coolDown = discountDate - currentDate;

    let days = Math.floor(coolDown / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (coolDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((coolDown % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((coolDown % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
  }, 1000);
};

countDown();

let userData = sessionStorage.getItem("nameOfUser");
let isLoggedIn = sessionStorage.getItem("loginStatus");
let logoutButton = document.getElementById("headerLogout");
let loggedIn = document.getElementById("loggedInDiv");
let loggedOut = document.getElementById("loggedOutDiv");
let icons = document.getElementById("loggedInIcons");
console.log(icons.innerHTML);
console.log(isLoggedIn);
if (isLoggedIn != null) {
  // means i logged in
  icons.classList.add("icons");
  icons.classList.remove("hiddenIcons");
  logoutButton.style.display = "block";
  loggedOut.style.display = "none";
  loggedIn.style.display = "block";

  document.getElementById("uName").innerHTML = userData;
}

console.log(typeof isLoggedIn);

console.log(userData);
// alert("Hello");

// Event listener for logout button
logoutButton.addEventListener("click", handleLogout);

function handleLogout() {
  // Clear session storage and remove a specific item from local storage
  sessionStorage.clear();

  // Set a timeout before redirecting to the index page
  setTimeout(() => {
    window.location = "/home/homepage.html";
  }, 1000);
}




// for (let i = 0; i < Userdata.length; i++){
//   const isLoggedIn = sessionStorage.getItem('isLoggedIn');
//   // console.log(isLoggedIn)
//   // let User = localStorage.getItem('usersData');
//   // console.log(Userdata[i].role);
// if (Userdata[i].role == 'customer' && isLoggedIn != 'null' ){
//   console.log(` Hello  ${Userdata[i].uName} your order is aproved `);
// }
// // else{
// //   console.log("Notfound ...");
// // }
// }

const data = localStorage.getItem('usersData');
const Userdata = JSON.parse(data);
for (let i = 0; i < Userdata.length; i++){
  const isLoggedIn = sessionStorage.getItem('loginStatus');
  const User_ssion = sessionStorage.getItem('nameOfUser');
  if(User_ssion == Userdata[i].uName){
    if ( isLoggedIn != null ){
         console.log(` Hello  ${Userdata[i].uName} your order is aproved `);
      }
  }
}
