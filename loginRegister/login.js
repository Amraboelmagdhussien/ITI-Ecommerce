// Retrieve HTML elements
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("sign_in");
const checkbox = document.getElementById("checkbox");

// Clear sessionStorage and remove 'productsInCart' from localStorage
console.log(sessionStorage);
console.log("before");
sessionStorage.clear();
console.log("After");

localStorage.removeItem("productsInCart");

// Check if 'rememberme' data is stored in localStorage and set the values if available
if (localStorage.getItem("rememberme") != null) {
  const rememberMeData = JSON.parse(localStorage.getItem("rememberme"));
  username.value = rememberMeData.name;
  password.value = rememberMeData.pass;
}

// Initialize usersData in localStorage if not available
if (localStorage.getItem("usersData") == null) {
  const usersData = [
    { uName: "Admin", mail: "eraserhint23@gmail.com", pass: 1, role: "admin" },
  ];
  localStorage.setItem("usersData", JSON.stringify(usersData));
}

// Function to handle 'Remember Me' checkbox
function rememberMeFunc() {
  checkbox.value = checkbox.value === "checked" ? "" : "checked";
}

// Retrieve usersData from localStorage
const userData = JSON.parse(localStorage.getItem("usersData"));

// Event listener for login button
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // Validate username and password
  if (username.value === "" || password.value === "") {
    alert("Please fill in all data");
  } else {
    let userIndex = -1;

    // Check if the user exists in usersData
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].uName == username.value) {
        userIndex = i;
        break;
      }
    }

    // If the user exists and the password matches, set session and localStorage data
    if (userIndex >= 0 && userData[userIndex].pass == password.value) {
      sessionStorage.setItem("loginStatus", "true");
      sessionStorage.setItem("nameOfUser", userData[userIndex].uName);
      sessionStorage.setItem("role", userData[userIndex].role);

      // Set 'rememberme' data in localStorage if the checkbox is checked
      if (checkbox.value == "checked") {
        const rememberMeData = { name: username.value, pass: password.value };
        localStorage.setItem("rememberme", JSON.stringify(rememberMeData));
      } else {
        localStorage.removeItem("rememberme");
      }

      // Redirect based on user role after a delay
      setTimeout(() => {
        if (sessionStorage.getItem("role") == "admin") {
          window.location = "/ADMINDASJBOURD/ADMINDB.html"; // Admin homepage (CRUD)
        } else if (sessionStorage.getItem("role") == "customer") {
          window.location = "/home/homepage.html"; // Regular user homepage
        }
      }, 1000);
    } else {
      alert("Wrong username or password");
    }
  }
});
