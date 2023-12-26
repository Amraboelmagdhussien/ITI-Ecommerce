// hover over elements
// used this to method to target multiplie element

// let hoverOver = function () {
//   let hoverElements = document.getElementsByClassName("drop-down");
//   let elements = document.getElementsByClassName("test");
//   for (let i = 0; i < hoverElements.length; i++) {
//     hoverElements[i].classList.remove("drop-down");
//     hoverElements[i].classList.add("showList");
//   }
// };

// let hideElement = function () {
//   let hoverElements = document.getElementsByClassName("drop-down");
//   let elements = document.getElementsByClassName("sub-cate");
//   for (let i = 0; i < hoverElements.length; i++) {
//     hoverElements[i].classList.remove("showList");
//     elements[i].classList.add("drop-down");
//   }
// };

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

// countDown();
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
    window.location = "Find%20Us.html";
  }, 1000);
}
