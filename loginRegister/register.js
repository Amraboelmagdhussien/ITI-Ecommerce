// Clear sessionStorage and remove 'productsInCart' from localStorage
sessionStorage.clear();
localStorage.removeItem("productsInCart");

// Retrieve HTML elements
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var repeatedPass = document.getElementById("repeatpass");
var registerBtn = document.getElementById("sign_up");
var roleSelect = document.getElementById("id-reg-usertype");

// Initialize usersData in localStorage with default admin user if not available
if (window.localStorage.getItem("usersData") == null) {
  var usersData = [{ uName: "Admin", mail: "eraserhint23@gmail.com", pass: 1, role: "admin" }];
  window.localStorage.setItem("usersData", JSON.stringify(usersData));
}

// Flags to check validation status
var flagNum1 = 0;
var flagNum2 = 0;
var flagNum3 = 0;
var flagNum4 = 0;

// Function to validate username
function oldCondition(oldValue) {
  if (oldValue.value != "") {
    if (!nameValidation(oldValue.value)) {
      oldValue.style.background = "lightpink";
      document.getElementById("nameMsg").innerHTML = "<b>Not valid</b>";
      flagNum1 = 0;
      alert("Username can be alphanumeric & underscore with a minimum length of 5 characters");
    } else {
      document.getElementById("nameMsg").innerHTML = "<b>Valid</b>";
      oldValue.style.background = "palegreen";
      flagNum1 = 1;
    }
  } else {
    oldValue.style.background = "white";
    flagNum1 = 0;
    document.getElementById("nameMsg").innerHTML = "<b>Required</b>";
  }
}

// Function to validate email
function oldCondition1(oldValue) {
  if (oldValue.value != "") {
    if (!mailValidation(oldValue.value)) {
      oldValue.style.background = "lightpink";
      document.getElementById("mailMsg").innerHTML = "<b>Not valid</b>";
      flagNum2 = 0;
      alert("Please enter a valid email address");
    } else {
      document.getElementById("mailMsg").innerHTML = "<b>Valid</b>";
      oldValue.style.background = "palegreen";
      flagNum2 = 1;
    }
  } else {
    oldValue.style.background = "white";
    flagNum2 = 0;
    document.getElementById("mailMsg").innerHTML = "<b>Required</b>";
  }
}

// Function to validate password
function oldCondition2(oldValue) {
  if (oldValue.value != "") {
    if (!passValidation(oldValue.value)) {
      oldValue.style.background = "lightpink";
      document.getElementById("passMsg").innerHTML = "<b>Not valid</b>";
      flagNum3 = 0;
      alert("Password must have at least 8 characters");
    } else {
      document.getElementById("passMsg").innerHTML = "<b>Valid</b>";
      oldValue.style.background = "palegreen";
      flagNum3 = 1;
    }
  } else {
    oldValue.style.background = "white";
    flagNum3 = 0;
    document.getElementById("passMsg").innerHTML = "<b>Required</b>";
  }
}

// Function to validate repeated password
function oldCondition3(oldValue) {
  if (oldValue.value != "") {
    if (!repeatValidation(oldValue.value)) {
      oldValue.style.background = "lightpink";
      document.getElementById("repeatMsg").innerHTML = "<b>Not valid</b>";
      flagNum4 = 0;
      alert("Passwords do not match");
    } else {
      document.getElementById("repeatMsg").innerHTML = "<b>Valid</b>";
      oldValue.style.background = "palegreen";
      flagNum4 = 1;
    }
  } else {
    oldValue.style.background = "white";
    flagNum4 = 0;
    document.getElementById("repeatMsg").innerHTML = "<b>Required</b>";
  }
}

// Event listener for register button
registerBtn.addEventListener("click", register);

// Function to handle registration
function register(e) {
  e.preventDefault();

  // Check if required fields are filled
  if (username.value === "" || email.value === "" || password.value === "" || repeatedPass.value === "") {
    alert("Please fill in required data");
  } else if (flagNum1 == 0 || flagNum2 == 0 || flagNum3 == 0 || flagNum4 == 0 || !repeatValidation(repeatedPass.value)) {
    alert("Please enter valid data");
  } else {
    // Validate if the username and email are unique
    var usersData = JSON.parse(localStorage.getItem("usersData"));
    for (let i = 0; i < usersData.length; i++) {
      if (usersData[i].uName == username.value) {
        alert("This username already exists");
        return;
      } else if (usersData[i].mail == email.value) {
        alert("This email already exists");
        return;
      }
    }

    // Add the new user to usersData
    var newUser = { uName: "f", mail: "f", pass: 1, role: "customer" };
    newUser.uName = username.value;
    newUser.pass = password.value;
    newUser.mail = email.value;
    newUser.role = roleSelect.value;
    usersData.push(newUser);

    // Save updated usersData to localStorage
    window.localStorage.setItem("usersData", JSON.stringify(usersData));

    // Redirect to login page after a delay
    setTimeout(() => {
      window.location = "login.html";
    }, 1000);
  }
}