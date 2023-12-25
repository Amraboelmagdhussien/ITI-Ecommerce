
let userData = sessionStorage.getItem("nameOfUser");
let isLoggedIn = sessionStorage.getItem("loginStatus");
console.log(userData)
console.log(isLoggedIn)































// let logoutButton = document.getElementById("headerLogout");
// let loggedIn = document.getElementById("loggedInDiv");
// let loggedOut = document.getElementById("loggedOutDiv");
// let icons = document.getElementById("loggedInIcons");
// console.log(icons.innerHTML);
// console.log(isLoggedIn);
// if (isLoggedIn != null) {
//   // means i logged in
//   icons.classList.add("icons");
//   icons.classList.remove("hiddenIcons");
//   logoutButton.style.display = "block";
//   loggedOut.style.display = "none";
//   loggedIn.style.display = "block";

//   document.getElementById("uName").innerHTML = userData;
// }

// console.log(typeof isLoggedIn);

// console.log(userData);
// // alert("Hello");

// // Event listener for logout button
// logoutButton.addEventListener("click", handleLogout);

// function handleLogout() {
//   // Clear session storage and remove a specific item from local storage
//   sessionStorage.clear();

//   // Set a timeout before redirecting to the index page
//   setTimeout(() => {
//     window.location = "/home/homepage.html";
//   }, 1000);
// }
