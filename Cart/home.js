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

function deleteFunction() {
  const button = event.target;
  let dataIndex = button.getAttribute("data-index");
  dataRet.splice(dataIndex, 1);
  localStorage.setItem("cartItems", JSON.stringify(dataRet));
  location.reload();
}

let getItemss = localStorage.getItem("cartItems");
let dataRet = JSON.parse(getItemss);

console.log(typeof dataRet);

let display = function () {
  const checkoutLeft = document.querySelector(".checkout-left");
  for (let i = 0; i < dataRet.length; i++) {
    let cartEle = document.createElement("div");
    cartEle.innerHTML = `<div class="product-card-1">
  <div class="img">
    <img src="${dataRet[i].image}" alt="" />
    <div class="check-info">
      <p>${dataRet[i].title}</p>
      <p class="prod-desc">${dataRet[i].description}</p>
      <div class="btns-sAndR">
        <button data-index="${i}" class="remove">Remove</button>
        <button class="sve-for-later">Save For later</button>
      </div>
    </div>
  </div>
  <div class="price">${dataRet[i].price}</div>
  </div>`;
    document.querySelector(".checkout-left").appendChild(cartEle);
  }
  checkoutLeft.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove")) {
      deleteFunction(event);
    }
  });
};
display();
