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



  let arrProd = [];

 let products = document.querySelectorAll(".products")
 let prod = document.querySelectorAll(".product-card-1")
 let pushButton = document.getElementById("prodButton")
 




 let add = function(button) {
   // Get the parent div with class 'product-card-1' from the clicked button
   let currentProduct = document.querySelector(".product-card-1");
   let nameProduct = document.querySelector(".data-name")
   console.log(nameProduct.innerHTML);
   if (currentProduct) {
     arrProd.push(currentProduct);
     console.log(currentProduct.title);
   } else {
     console.error("Product card not found");
   }
 };


