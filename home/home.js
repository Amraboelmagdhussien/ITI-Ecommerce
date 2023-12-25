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
for (let i = 0; i < dropList.length; i++) {
  let list = dropList[i];
  list.addEventListener("mouseover", function () {
    list.classList.add("showList");
  });

  list.addEventListener("mouseleave", function () {
    list.classList.remove("showList");
  });
}

let discountDate = new Date("Dec 25 2023 9:00:00").getTime();

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
