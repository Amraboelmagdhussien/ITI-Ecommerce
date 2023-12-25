const data = localStorage.getItem('usersData');
const order = localStorage.getItem("cartItems")

const Userdata = JSON.parse(data);
const Orderdta = JSON.parse(order);
console.log(Orderdta)
// Check if data exists
if (Userdata) {
for(i=0;i<Userdata.length;i++){
 console.log(Userdata[i].role == "customer")
}
} else {
  // Data does not exist in LocalStorage
  console.log('No data found in LocalStorage');
}

function display_items(){
    let getItemss = localStorage.getItem("cartItems");
    let dataRet = JSON.parse(getItemss || "[]");
    const dataDiv = document.getElementById("orderItems");
    try {
      for (var i = 0; i < getItemss.length; i++){
        dataDiv.innerHTML += `
        <div class='full-sec'>
        <div class='products'>
                <div class="product-card-1">
                    <div class="img">
                    <img src="${dataRet[i].image || dataRet[i].pimg}" alt="" />
                    <div class="check-info">
                        <p>${dataRet[i].pname || dataRet[i].title}</p>
                        <p class="prod-desc">${dataRet[i].title || dataRet[i].pname}</p>
                        <div class="btns-sAndR">
                        <button data-index="${i}" class="remove">Cancel</button>
                        <button data-index="${i}" class="Aprove">Aprove</button>
                        </div>
                    </div>
                    </div>
                    <div class="price">${dataRet[i].price}$</div>
                </div>
                </div>
            </div>
        </div>
        </div> <br>`;
      }
    } catch (e) {
      console.log(e.message);
    }
    dataDiv.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove")) {
          CancelFunction(event);
          console.log("Working");
        }
      });

  }
const Btn = document.getElementById("final");
Btn.addEventListener('click',  display_items())

function CancelFunction() {
  const button = event.target;
  let dataIndex = button.getAttribute("data-index");
  console.log(dataIndex);
  dataRet.splice(dataIndex, 1);
  localStorage.setItem("wishList", JSON.stringify(dataRet));
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





























