// hover over elements
// used this to method to target multiplie element

// let hoverOver = function () {
//   let hoverElements = document.getElementsByClassName("drop-down");
//   let elements = document.getElementsByClassName("test");
//   for (let i = 0; i < hoverElements.length; i++) {
//     hoverElements[i].classList.remove("drop-down");
//     hoverElements[i].classList.add("showList");
//   }
// };

// let hideElement = function () {
//   let hoverElements = document.getElementsByClassName("drop-down");
//   let elements = document.getElementsByClassName("sub-cate");
//   for (let i = 0; i < hoverElements.length; i++) {
//     hoverElements[i].classList.remove("showList");
//     elements[i].classList.add("drop-down");
//   }
// };

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

let discountDate = new Date("Dec 25 2023 9:00:00").getTime();

let countDown = function () {
  setInterval(function () {
    let currentDate = new Date();
    let coolDown = discountDate - currentDate;

    let days = Math.floor(coolDown / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (coolDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((coolDown % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((coolDown % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
  }, 1000);
};

countDown();

/*

*/
function display_items() {
  var productContainer = JSON.parse(localStorage.getItem("allproduct"));
  for (var i = 0; i < productContainer.length; i++) {
    // parent
    const dataDiv = document.getElementById("Item_wishlist");
    // child
    const div = document.createElement("div");

    const Data = dataDiv.appendChild(div);
    Data.innerHTML += `
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
                        <button onclick='' class="add-to-cart-func">Add To Cart</button>
                        <i data-active='0' class="fa-regular fa-heart"></i>
                        <i data-active='1'  class="fa-solid fa-heart added"></i>
                      </div>
                    </div>
                  <br>`;
  }
}
display_items();

