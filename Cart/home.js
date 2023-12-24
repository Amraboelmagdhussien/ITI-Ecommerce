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
  let error = "Cart is Empty";
  try {
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
    <div class="price">${dataRet[i].price}$</div>
    </div>`;
      document.querySelector(".checkout-left").appendChild(cartEle);
    }
  } catch (error) {
    console.log("The Cart Is just Empty Nothing to Show Here");
  }

  checkoutLeft.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove")) {
      deleteFunction(event);
    }
  });
};
display();

let total = document.querySelector(".total-prices");
let subTotal = document.getElementsByClassName("subTotal");
console.log(dataRet.price);

function ShowMyPrice() {
  try {
    let arrPrice = [];
    dataRet.forEach((element) => {
      // console.log(element.price);
      arrPrice.push(element.price);
      // console.log(arrPrice);
    });
    let sum = arrPrice.reduce((start, current) => {
      return start + current;
    }, 0);

    document.getElementById("subTotal").innerHTML = `${sum}$`;
    // console.log(sumPrice(sumValues));
    let afterTaxes = sum * 0.15;
    let lastTotal = sum + afterTaxes;
    let finalTotal = (document.getElementById(
      "total-prices"
    ).innerHTML = `${lastTotal}$`);
    return finalTotal;
  } catch (e) {
    e.message;
  }
}
console.log(ShowMyPrice());
ShowMyPrice();

function couponDis() {
  let coupon = document.getElementById("coupon").value;
  if (coupon === "iti50") {
    document.getElementById("discount").textContent = `50%`;
    let totalbefore = parseInt(ShowMyPrice());
    console.log(totalbefore);
    let totalDisc = parseInt(totalbefore) * 0.5;
    console.log(parseInt(totalDisc));
    let wholeSome = totalbefore - totalDisc;
    console.log(wholeSome);
    document.getElementById("old-price").style.display = "block";
    document.getElementById("old-price").innerHTML = `${totalbefore}$`;
    document.getElementById("total-prices").textContent = `${wholeSome}$`;
  } else {
    alert("Error There is No Cupon");
  }
}

document.getElementById("discountBtn").addEventListener("click", () => {
  couponDis();
});

function removeDisc() {
  document.getElementById("coupon").value = "";
  document.getElementById("discount").textContent = `0%`;
  document.getElementById("old-price").style.display = "none";
  ShowMyPrice();
  console.log("Working");
}

document.getElementById("removeCpn").addEventListener("click", () => {
  removeDisc();
});

document.getElementById(
  "cart-items-number"
).textContent = `(${dataRet.length})`;
