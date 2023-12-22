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


document.addEventListener('DOMContentLoaded', function() {
  let arrProd = [];

 let products = document.querySelectorAll(".products")
 let prod = document.querySelectorAll(".product-card-1")
 let pushButton = document.getElementById("prodButton")
 


 let add = function() {
  let i = 0
  for (let i = 0; i < prod.length; i++) {
    arrProd.push(prod[i]);
    // console.log(prod[i]);
   }
  return arrProd.push(prod[i])
  
 }

 console.log(add());

console.log(arrProd);
});

