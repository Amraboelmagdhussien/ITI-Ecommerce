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
// hi amr
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
