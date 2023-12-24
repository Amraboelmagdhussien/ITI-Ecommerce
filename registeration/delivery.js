var checkoutBtn = document.getElementById("final");
var displayPrice = 0;

if (sessionStorage.getItem("totalprice") != null) {
  displayPrice = sessionStorage.getItem("totalprice");
}

checkoutBtn.innerHTML = "Confirm Your Order" + "    " + displayPrice + " LE";

var flagNum1 = 0;
var flagNum2 = 0;

function validateInput(oldValue, validationFn, errMsgId, validMsg, requiredMsg) {
  if (oldValue.value !== "") {
    if (!validationFn(oldValue.value)) {
      oldValue.style.background = "lightpink";
      document.getElementById(errMsgId).innerHTML = "<span class='star'>Not valid</span>";
      flagNum1 = 0;
      alert(requiredMsg);
    } else {
      document.getElementById(errMsgId).innerHTML = "<span class='star'>Valid</span>";
      oldValue.style.background = "palegreen";
      flagNum1 = 1;
    }
  } else {
    oldValue.style.background = "white";
    flagNum1 = 0;
    document.getElementById(errMsgId).innerHTML = "<span class='star'>Required</span>";
  }
}

function nameValidation(name) {
  var reg = /^[\w\s]{1,}$/g;
  return reg.test(name);
}

function phoneValidation(phone) {
  var phoneRegEx = /^01+([0125]{1,1})+([0-9]{8,8})$/gi;
  return phoneRegEx.test(phone);
}

checkoutBtn.addEventListener("click", function (e) {
  e.preventDefault();

  validateInput(
    document.getElementById("nameInput"),
    nameValidation,
    "nameMsg",
    "Valid",
    "Address can be alphanumeric & spaces only"
  );

  validateInput(
    document.getElementById("phoneInput"),
    phoneValidation,
    "phoneMsg",
    "Valid",
    "Please enter a valid phone number"
  );

  if (flagNum1 == 1 && flagNum2 == 1) {
    localStorage.removeItem("productsInCart");
    sessionStorage.removeItem("totalprice");
    window.location.href = "index.html";
    alert("Thanks for using our store");
  } else {
    alert("Some data are missing or invalid");
  }
});