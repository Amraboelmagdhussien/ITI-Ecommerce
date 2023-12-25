var username = document.getElementById("username");
var password = document.getElementById("password");
var loginBtn = document.getElementById("sign_in");
var checkbox = document.getElementById("checkbox");
sessionStorage.clear();
localStorage.removeItem("productsInCart");
if(localStorage.getItem("rememberme")!=null){
  
  username.value=JSON.parse(localStorage.getItem("rememberme")).name;
 password.value=JSON.parse(localStorage.getItem("rememberme")).pass;
}
if((window.localStorage.getItem("usersData"))==null){
  var usersData=[{uName:"Admin",mail:"eraserhint23@gmail.com",pass:1,role:"admin"}];
  window.localStorage.setItem("usersData",JSON.stringify(usersData));
  };

function remembermefun(){
  if(checkbox.value=="checked"){
    checkbox.value="";
    
  }
  else if(checkbox.value==""){
    checkbox.value="checked";
  }
}


var userdataa=JSON.parse(window.localStorage.getItem("usersData"));

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (username.value === "" || password.value === "") {
    alert("Please, Fill in all data");
  } 
  else {
    var j=-1;
    for(let i=0;i<(userdataa.length);i++){
      if(userdataa[i].uName==username.value){
        j=i;
        break;
      }
    }
    if (j>=0&&userdataa[j].pass==password.value) 
    {sessionStorage.setItem("loginStatus","true");
    sessionStorage.setItem("nameOfUser",userdataa[j].uName);
    sessionStorage.setItem("role",userdataa[j].role);
      if(checkbox.value=="checked"){
        var iiii={name:username.value,pass:password.value};
        localStorage.setItem("rememberme",JSON.stringify(iiii));
        
      }
      else{
        localStorage.removeItem("rememberme");
      }
      setTimeout(() => {
        console.log(sessionStorage.getItem("role"));
        if(sessionStorage.getItem("role")=="admin"){
          window.location = "admin.html"; //crud Mahmoud
        }else if(sessionStorage.getItem("role")=="customer")
        window.location = "customer.html"; // Home Amr
      }, 1000);
    } 
    else {
      alert("Wrong user name or Password");
    }
  }
});


// var input = document.getElementById("search");

// input.addEventListener("keyup", function (e) {
//   document.getElementById("specialLogin").style.display="none";
//   document.getElementById("aboutusSearch").innerHTML=`<section class="home">
//   <div class="container">
//     <div class="products" id="products"></div>
//   </div>
//   </section>`;
//   search(e.target.value, JSON.parse(localStorage.getItem("products")));
//   if (e.target.value.trim() === ""){
//     document.getElementById("aboutusSearch").innerHTML = '<div></div>';
//     document.getElementById("specialLogin").style.display="block";
//     // `<h2>Login User</h2>
//     // <form action="">
//     //   <input type="text" placeholder="Enter username" id="username" />
//     //   <input type="password" placeholder="Enter password" id="password" />
//     //   <input type="submit" value="Sign in" id="sign_in" />
//     //   Not have acount? <a href="./register.html">Register</a>
//     // </form>`
// }
// });

// function search(title, myArray) {
//   let arr = myArray.filter(
//     (item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1
//   );
//   drawProductsUi(arr);
// }
// var products = JSON.parse(localStorage.getItem("products"));

// //!!!!!!!!! Display  Products !!!!!!!!!//

// var drawProductsUi = (products) => {
//   var productsUi = products.map(
//     (item) => `
//     <div class="card">
//       <img src="${item.image}" alt="">
//       <div class="content">
//       <!--onclick="saveItemData(${item.id})"-->
//         <h3 >${item.title}</h3>
//         <p>
//           Price: ${item.price} LE
//         </p>
//         <p>
//           Category: ${item.category}
//         </p>
//         <p>
//         Ingrediants: ${item.description}
//         </p>
//       </div>
//       <div class="info">
//         <button class="add-to-cart" onclick="addedToCart(${item.id})">Add to cart</button>
//       </div>
//     </div>
//   `
//   );
//   document.getElementById("products").innerHTML = productsUi.join("");
// };
