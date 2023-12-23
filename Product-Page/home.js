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

// display 
function display_items(){ 
  var productContainer = JSON.parse(localStorage.getItem('allproduct'))
  for(var i =0 ; i<productContainer.length;i++){
   document.getElementById(
         "Data"
                ).innerHTML += 
                    `
                    <div class="product-card-1">
                    <div class="product-image-1">
                      <img src="${productContainer[i].pimg}"   alt="" />
                    </div>
                    <div class="product-info-1">
                      <p class="data-name">${productContainer[i].pname}</p>
                      <p id="price">${productContainer[i].price}$</p>
                      <p>
                        ${productContainer[i].desc}
                      </p>
                      <p id="shipping">Free Shipping</p>
                      <div class="cart-items">
                        <a href="#">View details</a>
                        <button>Add To Cart</button>
                      </div>
                    </div>
                  <br>`;
    }
  }
  display_items();