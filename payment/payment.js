// Get DOM elements
const option1 = document.getElementById("option1");
const checkoutBtn = document.getElementById("final");
const nameMsg = document.getElementById("nameMsg");
const creditMsg = document.getElementById("creditMsg");
const cvvMsg = document.getElementById("cvvMsg");
const nameInput = document.getElementById("name");
const cardNumInput =document.getElementById("creditCradNum");
const ccvInput = document.getElementById("cvv");
const cardTypeImg = document.getElementById('cardImg');
let displayPrice = 0;

// Display credit options
function displayCredit() {
    option1.style.display = "block";
    flagSpecial = 1;
}

function displayCredit2() {
    option1.style.display = "none";
    flagSpecial = 0;
}

// Initialize display price
if (sessionStorage.getItem("totalprice") !== null) {
    displayPrice = sessionStorage.getItem("totalprice");
}
checkoutBtn.innerHTML = "Confirm & Pay Your Order" + "    " + displayPrice + " " + "LE";

// Validation functions
function validateInput(oldValue, validationFunc, errorMsgElem, flagNum) {
    if (oldValue.value !== "") {
        if (!validationFunc(oldValue.value)) {
            oldValue.style.background = "lightpink";
            errorMsgElem.innerHTML = "<span class='star'>Not valid</span>";
            flagNum = 0;
            alert(errorMsgElem.innerText);
        } else {
            errorMsgElem.innerHTML = "<span class='star'>Valid</span>";
            oldValue.style.background = "palegreen";
            flagNum = 1;
        }
    } else {
        oldValue.style.background = "white";
        flagNum = 0;
        errorMsgElem.innerHTML = "<span class='star'>Required</span>";
    }
}

// Validation functions for name, credit card, and CVV
function nameValidation(name) {
    const reg = /^([a-z]{3,10})+((\s+([a-z]{3,10})){1,2})$/gi;
    return reg.test(name);
}

function creditValidation(name) {
    const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    // const amexpRegEx = /^(?:3[47][0-9]{13})$/;
    // const discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    return visaRegEx.test(name) || mastercardRegEx.test(name) 
    // || amexpRegEx.test(name) || discovRegEx.test(name)
    ;
}

function cvvValidation(name) {
    const reg = /^([0-9]{3,3})$/gi;
    return reg.test(name);
}

// Event listeners for input validation
function addInputValidationEventListener(oldValue, validationFunc, errorMsgElem, flagNum) {
    oldValue.addEventListener("blur", function () {
        validateInput(oldValue, validationFunc, errorMsgElem, flagNum);
    });
}

addInputValidationEventListener(nameInput, nameValidation, nameMsg, flagNum1);
addInputValidationEventListener(cardNumInput, creditValidation, creditMsg, flagNum2);
addInputValidationEventListener(ccvInput, cvvValidation, cvvMsg, flagNum3);

// Event listener for checkout button
checkoutBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (flagSpecial === 1) {
        if (flagNum1 === 1 && flagNum2 === 1 && flagNum3 === 1) {
            window.location.href = "delvirey.html";
        } else {
            alert("Some data are missing or invalid");
        }
    } else if (flagSpecial === 0) {
        window.location.href = "delvirey.html";
    }
});

// Show Image of Card Type
cardNumInput.addEventListener("blur", function(){
    if(cardNumInput.value[0]==4){
        cardTypeImg.src='../Utilites/visa.svg';
    }else if(cardNumInput.value[0]==5){
        cardTypeImg.src='../Utilites/mastercard.svg';
    }else{
        cardTypeImg.src='../Utilites/generic.svg';
    }
});