// Get DOM elements
const userInfo = document.getElementById("user_info");
const userDom = document.getElementById("user");
const links = document.getElementById("links");
const logoutBtn = document.getElementById("logout");

// Check if user is logged in
if (sessionStorage.getItem("loginStatus") !== null) {
  links.remove();
  userInfo.style.display = "flex";
  userDom.innerHTML = sessionStorage.getItem("nameOfUser");
}

// Event listener for logout button
logoutBtn.addEventListener("click", handleLogout);

function handleLogout() {
  // Clear session storage and remove a specific item from local storage
  sessionStorage.clear();
  localStorage.removeItem("productsInCart");

  // Set a timeout before redirecting to the index page
  setTimeout(() => {
    window.location = "index.html";
  }, 1000);
}

