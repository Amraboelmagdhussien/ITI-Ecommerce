sessionStorage.clear();
localStorage.removeItem("productsInCart");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var repeatedPass=document.getElementById("repeatpass");
var registerBtn = document.getElementById("sign_up");
var roleSelect = document.getElementById("id-reg-usertype");

if((window.localStorage.getItem("usersData"))==null){
var usersData=[{uName:"Admin",mail:"eraserhint23@gmail.com",pass:1,role:"admin"}];
window.localStorage.setItem("usersData",JSON.stringify(usersData));
};

var flagNum1=0;
var flagNum2=0;
var flagNum3=0;
var flagNum4=0;
function oldCondition(oldValue){
    if(oldValue.value!="")
    {
        if(!nameValidation(oldValue.value)){
            oldValue.style.background="lightpink";
            document.getElementById("nameMsg").innerHTML="<b>Not valid</b>";
            flagNum1=0;
            alert("username can be alphanumeric & underscore with 5 digit minimum length");
        }
        else
        {
            document.getElementById("nameMsg").innerHTML="<b>valid</b>";
            oldValue.style.background="palegreen";
            flagNum1=1;
        }
    }
    else{
        oldValue.style.background="white";
        flagNum1=0;
        document.getElementById("nameMsg").innerHTML="<b>Required</b>";
    }
}
function nameValidation(name)
{
    var reg=/^[\w]{3,}$/g;
    if(reg.test(name))
    return true;
    else
    return false;
}
function oldCondition1(oldValue){
    if(oldValue.value!="")
    {
        if(!mailValidation(oldValue.value)){
            oldValue.style.background="lightpink";
            document.getElementById("mailMsg").innerHTML="<b>Not valid</b>";
            flagNum2=0;
            alert("please enter valid email adress");
        }
        else
        {
            document.getElementById("mailMsg").innerHTML="<b>valid</b>";
            oldValue.style.background="palegreen";
            flagNum2=1;
        }
    }
    else{
        oldValue.style.background="white";
        flagNum2=0;
        document.getElementById("mailMsg").innerHTML="<b>Required</b>";
    }
}
function mailValidation(name)
{
  var visaRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    
    if(visaRegEx.test(name))
    return true;
    else
    return false;
}

function oldCondition2(oldValue){
  
  if(oldValue.value!="")
    {   
        if(!passValidation(oldValue.value)){
            oldValue.style.background="lightpink";
            document.getElementById("passMsg").innerHTML="<b>Not valid</b>";
            flagNum3=0;
            alert("Password must have at least 8 digits");
            
        }
        else
        {
            document.getElementById("passMsg").innerHTML="<b>valid</b>";
            oldValue.style.background="palegreen";
            flagNum3=1;
        }
    }
    else{
        oldValue.style.background="white";
        flagNum3=0;
        document.getElementById("passMsg").innerHTML="<b>Required</b>";
    }
}
function passValidation(name)
{
   
    if(name.length>=8)
    return true;
    else
    return false;
}
function oldCondition3(oldValue){
  if(oldValue.value!="")
  {
      if(!repeatValidation(oldValue.value)){
          oldValue.style.background="lightpink";
          document.getElementById("repeatMsg").innerHTML="<b>Not valid</b>";
          flagNum4=0;
          alert("Password Not match");
          
      }
      else
      {
          document.getElementById("repeatMsg").innerHTML="<b>valid</b>";
          oldValue.style.background="palegreen";
          flagNum4=1;
      }
  }
  else{
      oldValue.style.background="white";
      flagNum4=0;
      document.getElementById("repeatMsg").innerHTML="<b>Required</b>";
  }
}
function repeatValidation(name)
{
 
  if(name==password.value)
  return true;
  else
  return false;
}


registerBtn.addEventListener("click", register);
function register(e) {
  e.preventDefault();

  if (username.value === "" || email.value === "" || password.value === ""||repeatedPass.value==="") {
    alert("Please fill required data");
  } else if (flagNum1==0||flagNum2==0||flagNum3==0||flagNum4==0||!repeatValidation(repeatedPass.value)) {
    alert("Please enter valid data");
  } 
  else {
    var xx=JSON.parse(localStorage.getItem("usersData"));
    for(let i=0;i<xx.length;i++){
      if(xx[i].uName==username.value){
        alert("this user name already exisit");
        break;
      }
      else if(xx[i].mail==email.value){
        alert("this email already exisit");
        break;
      }
      else{
        var yy={uName:"f",mail:"f",pass:1,role:"customer"}
        yy.uName=username.value;
        yy.pass=password.value;
        yy.mail=email.value;
        yy.role=roleSelect.value;
        xx.push(yy);
        window.localStorage.setItem("usersData",JSON.stringify(xx));
        console.log(localStorage.getItem("usersData"));
        setTimeout(() => {
          window.location = "login.html";
        }, 1000);
        break;
      }
    }
    
  }
}



// var input = document.getElementById("search");

// input.addEventListener("keyup", function (e) {
//   // document.getElementById("contactSpecial").innerHTML='<div></div>';
//   document.getElementById("contactSpecial").style.display="none";
//   document.getElementById("aboutusSearch").innerHTML=`<section class="home">
//   <div class="container">
//     <div class="products" id="products"></div>
//   </div>
//   </section>`;
//   search(e.target.value, JSON.parse(localStorage.getItem("products")));
//   if (e.target.value.trim() === ""){
//     document.getElementById("aboutusSearch").innerHTML = '<div></div>';
//     document.getElementById("contactSpecial").style.display="block";
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