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

// let discountDate = new Date("Dec 25 2023 9:00:00").getTime();

// let countDown = function () {
//   setInterval(function () {
//     let currentDate = new Date();
//     let coolDown = discountDate - currentDate;

//     let days = Math.floor(coolDown / (1000 * 60 * 60 * 24));
//     let hours = Math.floor(
//       (coolDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     let minutes = Math.floor((coolDown % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((coolDown % (1000 * 60)) / 1000);

//     document.getElementById("days").innerHTML = days;
//     document.getElementById("hours").innerHTML = hours;
//     document.getElementById("min").innerHTML = minutes;
//     document.getElementById("sec").innerHTML = seconds;
//   }, 1000);
// };
// countDown();

/*

*/
const dataDiv = document.getElementById("Item_wishlist");
function display_items() {
  let getItemss = localStorage.getItem("wishList");
  let dataRet = JSON.parse(getItemss || "[]");
  try {
    for (var i = 0; i < getItemss.length; i++) {
      // parent
      const dataDiv = document.getElementById("Item_wishlist");
      // child
      // const div = document.createElement("div");
      // const Data = dataDiv.appendChild(div);
      dataDiv.innerHTML += `<div id="Item_wishlist" class="container">
      <div class="checkout-left">
        <div class="product-card-1">
          <div class="img">
            <img src="${dataRet[i].image || dataRet[i].pimg}" alt="" />
            <div class="check-info">
              <p>${dataRet[i].pname || dataRet[i].title}</p>
              <p class="prod-desc">${dataRet[i].title || dataRet[i].pname}</p>
              <div class="btns-sAndR">
                <button data-index="${i}" class="remove">Remove</button>
              </div>
            </div>
          </div>
          <div class="price">${dataRet[i].price}$</div>
        </div>
      </div>
    </div>`;
    }
  } catch (e) {
    console.log(e.message);
  }
  dataDiv.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove")) {
      deleteFunction(event);
      console.log("Working");
    }
  });
}
display_items();

let getItemss = localStorage.getItem("wishList");
let dataRet = JSON.parse(getItemss || "[]");

function deleteFunction() {
  const button = event.target;
  let dataIndex = button.getAttribute("data-index");
  dataRet.splice(dataIndex, 1);
  localStorage.setItem("wishList", JSON.stringify(dataRet));
  location.reload();
}


// function display_itemsofLocal() {
//   let getItemss = localStorage.getItem("wishList");
//   let dataRet = JSON.parse(getItemss);
//   try {
//     for (var i = 0; i < getItemss.length; i++) {
//       const dataDiv = document.getElementById("Item_wishlist");
//       dataDiv.innerHTML += `<div id="Item_wishlist" class="container">
//       <div class="checkout-left">
//         <div class="product-card-1">
//           <div class="img">
//             <img src="${   dataRet[i].pimg}" alt="" />
//             <div class="check-info">
//               <p>${   dataRet[i].pname}</p>
//               <p class="prod-desc">${   dataRet[i].desc}</p>
//               <div class="btns-sAndR">
//                 <button data-index="${i}" class="remove">Remove</button>
//               </div>
//             </div>
//           </div>
//           <div class="price">${dataRet[i].price}$</div>
//         </div>
//       </div>
//     </div>`;
//     }
//   } catch (e) {
//     console.log(e.message);
//   }
//   dataDiv.addEventListener("click", (event) => {
//     if (event.target.classList.contains("remove")) {
//       deleteFunction(event);
//       console.log("Working");
//     }
//   });
// }
// display_itemsofLocal();