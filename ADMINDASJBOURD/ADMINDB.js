const data = localStorage.getItem("usersData");
const order = localStorage.getItem("cartItems");

const Userdata = JSON.parse(data);
const Orderdta = JSON.parse(order);
// console.log(Orderdta)

// Retrieve existing orders or initialize an empty array
const orders = JSON.parse(localStorage.getItem("userOrders")) || [];

// Add the new order to the array

// Save the updated array back to local storage
localStorage.setItem("userOrders", JSON.stringify(orders));

// console.log(orders);

// Check if data exists
if (Userdata) {
  for (i = 0; i < Userdata.length; i++) {
    //  console.log(Userdata[i].role == "customer")
    if (Userdata[i].role != "customer") {
      function display_items() {
        let getItemss = localStorage.getItem("cartItems");
        let dataRet = JSON.parse(getItemss || "[]");
        const dataDiv = document.getElementById("orderItems");
        const User_ssion = JSON.parse(localStorage.getItem("nameOfUser"));
        try {
          for (let i = 0; i < getItemss.length; i++) {
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
                        <button data-index="${i}" class="remove">Cancel</button>
                        <button data-index="${i}" class="Aprove">Aprove</button>
                        </div>
                        <div>User Name : ${User_ssion}</div>
                    </div>
                    </div>
                    <div class="price">${dataRet[i].price}$</div>
                </div>
                </div>
            </div>
        </div>
        </div><br>`;
          }
        } catch (e) {
          console.log(e.message);
        }
        dataDiv.addEventListener("click", (event) => {
          if (event.target.classList.contains("remove")) {
            CancelFunction(event);
            for (let i = 0; i < Userdata.length; i++) {
              const isLoggedIn = sessionStorage.getItem("loginStatus");
              console.log(isLoggedIn);
              if (isLoggedIn != null) {
                console.log(
                  ` Hello  ${Userdata[i].uName} your order is Canceld `
                );
              }
            }
          }
        });
        dataDiv.addEventListener("click", (event) => {
          if (event.target.classList.contains("Aprove")) {
            abroveFunction(event);
            for (let i = 0; i < Userdata.length; i++) {
              const isLoggedIn = sessionStorage.getItem("loginStatus");
              // console.log(isLoggedIn)
              if (isLoggedIn != null) {
                console.log(
                  ` Hello  ${Userdata[i].uName} your order is Abrove `
                );
                orders.push(order);
                break;
              }
            }
          }
        });
      }
    }
  }
} else {
  // Data does not exist in LocalStorage
  console.log("No data found in LocalStorage");
}

document.getElementById("final").addEventListener("click", display_items());

//

let getItemss = localStorage.getItem("cartItems");
let dataRet = JSON.parse(getItemss || "[]");

function CancelFunction() {
  const button = event.target;
  let dataIndex = button.getAttribute("data-index");
  console.log(dataIndex);
  dataRet.splice(dataIndex, 1);
  localStorage.setItem("cartItems", JSON.stringify(dataRet));
  location.reload();
}

function abroveFunction() {
  const button = event.target;
  let dataIndex = button.getAttribute("data-index");
  console.log(dataIndex);
  dataRet.splice(dataIndex, 1);
  localStorage.setItem("cartItems", JSON.stringify(dataRet));
  location.reload();
}

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
let orderItems = document.getElementById("orderItems");

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
  try {
    for (let i = 0; i < parsedProfile.length; i++) {
      if (
        parsedProfile[i].uName == userData &&
        parsedProfile[i].role === "admin"
      ) {
        ShowsError.classList.remove("errorShow");
        ShowsError.classList.add("hiddenIcons");
        orderItems.classList.add("products");
        orderItems.classList.remove("hiddenIcons");
      } else {
        ShowsError.classList.add("errorShow");
        ShowsError.classList.remove("hiddenIcons");
        orderItems.classList.remove("products");
        orderItems.classList.add("hiddenIcons");
      }
    }
  } catch (error) {
    error.message;
  }
  // means i logged in
  login.style.display = "none";
  icons.classList.add("icons");
  icons.classList.remove("hiddenIcons");
  logoutButton.style.display = "block";
  // loggedOut.style.display = "none";
  // loggedIn.style.display = "block";
  // ShowsError.classList.remove("errorShow");
  // ShowsError.classList.add("hiddenIcons");

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

//     if (j >= 0 && userdataa[j].pass == password.value) {
//       sessionStorage.setItem("loginStatus", "true");
//       sessionStorage.setItem("nameOfUser", userdataa[j].uName);
//       sessionStorage.setItem("role", userdataa[j].role);
//       if (checkbox.value == "checked") {
//         var iiii = { name: username.value, pass: password.value };
//         localStorage.setItem("rememberme", JSON.stringify(iiii));
//       } else {
//         localStorage.removeItem("rememberme");
//       }
//       setTimeout(() => {
//         console.log(sessionStorage.getItem("role"));
//         if (sessionStorage.getItem("role") == "admin") {
//           window.location = "/ITI-Ecommerce/home/homepage.html"; //crud Mahmoud
//         } else if (sessionStorage.getItem("role") == "customer")
//           window.location = "/ITI-Ecommerce/home/homepage.html"; // Home Amr
//       }, 1000);
//     } else {
//       alert("Wrong user name or Password");
//     }
//   }
// });
