var checkoutBtn = document.getElementById("final");
var displayPrice = 0;
if (sessionStorage.getItem("totalprice") != null) {
  displayPrice = sessionStorage.getItem("totalprice");
}
checkoutBtn.innerHTML = "Confirm Your Order" + "    " + displayPrice + " LE";

var flagNum1 = 0;
var flagNum2 = 0;
function oldCondition(oldValue) {
  if (oldValue.value != "") {
    if (!nameValidation(oldValue.value)) {
      oldValue.style.background = "lightpink";
      document.getElementById("nameMsg").innerHTML =
        "<span class='star'>Not valid</span>";
      flagNum1 = 0;
      alert("Adress can be alphanumeric & spaces only");
    } else {
      document.getElementById("nameMsg").innerHTML =
        "<span class='star'>Valid</span>";
      oldValue.style.background = "palegreen";
      flagNum1 = 1;
    }
  } else {
    oldValue.style.background = "white";
    flagNum1 = 0;
    document.getElementById("nameMsg").innerHTML =
      "<span class='star'>Required</span>";
  }
}
function nameValidation(name) {
  var reg = /^[\w\s]{1,}$/g;
  if (reg.test(name)) return true;
  else return false;
}
function oldCondition1(oldValue) {
  if (oldValue.value != "") {
    if (!creditValidation(oldValue.value)) {
      oldValue.style.background = "lightpink";
      document.getElementById("creditMsg").innerHTML =
        "<span class='star'>Not valid</span>";
      flagNum2 = 0;
      alert("please enter valid phone number");
    } else {
      document.getElementById("creditMsg").innerHTML =
        "<span class='star'>Valid</span>";
      oldValue.style.background = "palegreen";
      flagNum2 = 1;
    }
  } else {
    oldValue.style.background = "white";
    flagNum2 = 0;
    document.getElementById("creditMsg").innerHTML =
      "<span class='star'>Required</span>";
  }
}
function creditValidation(name) {
  var visaRegEx = /^01+([0125]{1,1})+([0-9]{8,8})$/gi;
  if (visaRegEx.test(name)) return true;
  else return false;
}

// function checkout() {

//         }
checkoutBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (flagNum1 == 1 && flagNum2 == 1) {
    localStorage.removeItem("productsInCart");
    sessionStorage.removeItem("totalprice");

    window.location.href = "/home/homepage.html";
    alert("Thanks for using our store");
  } else {
    alert("Some data are missing or invalid");
  }
});

// let userData1 = sessionStorage.getItem("nameOfUser");
// let isLoggedIn = sessionStorage.getItem("loginStatus");
// let logoutButton = document.getElementById("headerLogout");
// let loggedIn = document.getElementById("loggedInDiv");
// let loggedOut = document.getElementById("loggedOutDiv");
// let icons = document.getElementById("loggedInIcons");
// let login = document.getElementById("loginButton");
// let ShowsError = document.getElementById("ifNotLoggedIn");
// let userName = document.getElementById("userName");
// let userPassword = document.getElementById("userPassword");
// let userEmail = document.getElementById("userEmail");

const loginStatus = sessionStorage.getItem("loginStatus");
const errorDiv = document.getElementById("errorShow");
const sectionAppear = document.getElementById("specialLogin");

if (loginStatus != null) {
  sectionAppear.classList.add("section-form");
  sectionAppear.classList.remove("hiddenIcons");
  errorDiv.classList.remove("errorShow");
  errorDiv.classList.add("hiddenIcons");
}
// let profile = localStorage.getItem("usersData");
// let parsedProfile = JSON.parse(profile);

// if (isLoggedIn != null) {
//   // means i logged in
//   login.style.display = "none";
//   icons.classList.add("icons");
//   icons.classList.remove("hiddenIcons");
//   logoutButton.style.display = "block";

//   section.classList.add("section-form");
//   section.classList.remove("hiddenIcons");

//   ShowsError.classList.remove("errorShow");
//   ShowsError.classList.add("hiddenIcons");
// }

// logoutButton.addEventListener("click", handleLogout);

// function handleLogout() {
//   // Clear session storage and remove a specific item from local storage
//   sessionStorage.clear();
//   console.log("clicked");

//   // Set a timeout before redirecting to the index page
//   setTimeout(() => {
//     window.location = "delivery.html";
//   }, 1000);
// }

// // admin.js
// const data = localStorage.getItem('usersData');
// const order = localStorage.getItem("cartItems")

// const Userdata = JSON.parse(data);
// const Orderdta = JSON.parse(order);
// // console.log(Orderdta)

// // Retrieve existing orders or initialize an empty array
// const orders = JSON.parse(localStorage.getItem('userOrders')) || [];

// // Add the new order to the array

// // Save the updated array back to local storage
// localStorage.setItem('userOrders', JSON.stringify(orders));

// // console.log(orders);

// // Check if data exists
// if (Userdata) {
// for(i=0;i<Userdata.length;i++){
// //  console.log(Userdata[i].role == "customer")
// if(Userdata[i].role != "customer"){
// function display_items(){
//     let getItemss = localStorage.getItem("cartItems");
//     let dataRet = JSON.parse(getItemss || "[]");
//     const dataDiv = document.getElementById("orderItems");
//     const User_ssion =JSON.parse(localStorage.getItem('nameOfUser'));
//  try {
// for (let i = 0; i < getItemss.length; i++){
//         dataDiv.innerHTML += `
//         <div class='full-sec'>
//         <div class='products'>
//                 <div class="product-card-1">
//                     <div class="img">
//                     <img src="${dataRet[i].image || dataRet[i].pimg}" alt="" />
//                     <div class="check-info">
//                         <p>${dataRet[i].pname || dataRet[i].title}</p>
//                         <p class="prod-desc">${dataRet[i].description || dataRet[i].pname}</p>
//                         <div class="btns-sAndR">
//                         <button data-index="${i}" class="remove">Cancel</button>
//                         <button data-index="${i}" class="Aprove">Aprove</button>
//                         </div>
//                         <div>User Name : ${User_ssion}</div>
//                     </div>
//                     </div>
//                     <div class="price">${dataRet[i].price}$</div>
//                 </div>
//                 </div>
//             </div>
//         </div>
//         </div><br>`;
//       }
//     } catch (e) {
//       console.log(e.message);
//     }
//     dataDiv.addEventListener("click", (event) => {
//         if (event.target.classList.contains("remove")) {
//           CancelFunction(event);
//           for (let i = 0; i < Userdata.length; i++){
//             const isLoggedIn = sessionStorage.getItem('loginStatus');
//             console.log(isLoggedIn)
//           if ( isLoggedIn != null ){
//             console.log(` Hello  ${Userdata[i].uName} your order is Canceld `);
//           }
//           }
//         }
//       });
//     dataDiv.addEventListener("click", (event) => {
//         if (event.target.classList.contains("Aprove")) {
//             abroveFunction(event);
//           for (let i = 0; i < Userdata.length; i++){
//             const isLoggedIn = sessionStorage.getItem('loginStatus');
//             // console.log(isLoggedIn)
//           if ( isLoggedIn != null ){
//             console.log(` Hello  ${Userdata[i].uName} your order is Abrove `);
//             orders.push(order);
//             break;
//           }

//           }
//         }
//       });
//   }
// }
// }
// } else {
//   // Data does not exist in LocalStorage
//   console.log('No data found in LocalStorage');
// }

// document.getElementById("final").addEventListener("click",display_items());

// //

// let getItemss = localStorage.getItem("cartItems");
// let dataRet = JSON.parse(getItemss || "[]");

// function CancelFunction() {
//   const button = event.target;
//   let dataIndex = button.getAttribute("data-index");
//   console.log(dataIndex);
//   dataRet.splice(dataIndex, 1);
//   localStorage.setItem("cartItems", JSON.stringify(dataRet));
//   location.reload();

// }

// function abroveFunction() {
//     const button = event.target;
//     let dataIndex = button.getAttribute("data-index");
//     console.log(dataIndex);
//     dataRet.splice(dataIndex, 1);
//     localStorage.setItem("cartItems", JSON.stringify(dataRet));
//     location.reload();

//   }
