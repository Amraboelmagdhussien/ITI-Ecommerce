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
        // console.log(Data);
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

// let countDown = function () {
//   setInterval(function () {
//     let currentDate = new Date();
//     let coolDown = discountDate - currentDate;

//     let days = Math.floor(coolDown / (1000 * 60 * 60 * 24));
//     let hours = Math.floor(
//       (coolDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     let minutes = Math.floor((coolDown % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((coolDown % (1000 * 60)) / 1000);

//     document.getElementById("days").innerHTML = days;
//     document.getElementById("hours").innerHTML = hours;
//     document.getElementById("min").innerHTML = minutes;
//     document.getElementById("sec").innerHTML = seconds;
//   }, 1000);
// };

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
    const passwordRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
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
