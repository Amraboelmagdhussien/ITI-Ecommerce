
function displayCredit(){
    document.getElementById("option1").style.display="block";
    flagSpecial=1;
}
function displayCredit2(){
    document.getElementById("option1").style.display="none";
    flagSpecial=0;
}

var checkoutBtn = document.getElementById("final");
var displayPrice=0;
if(sessionStorage.getItem("totalprice")!=null){
    displayPrice=sessionStorage.getItem("totalprice");
}
  checkoutBtn.innerHTML="Confirm & Pay Your Order"+"    "+displayPrice+" "+"LE";
//   var regEx = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
//   if(creditCradNum.value.match(regEx))
//     {
//      return true;
//     }
//   else
//     {
//     alert("Please enter a valid credit card number.");
//     return false;
//     }

var flagNum1=0;
var flagNum2=0;
var flagNum3=0;
var flagSpecial=1;
function oldCondition(oldValue){
    if(oldValue.value!="")
    {
        if(!nameValidation(oldValue.value)){
            oldValue.style.background="lightpink";
            document.getElementById("nameMsg").innerHTML="<span class='star'>Not valid</span>";
            flagNum1=0;
            alert("name must be 2 or 3 words seprated by space with min length 3 digit");
            
        }
        else
        {
            document.getElementById("nameMsg").innerHTML="<span class='star'>Valid</span>";
            oldValue.style.background="palegreen";
            flagNum1=1;
        }
    }
    else{
        oldValue.style.background="white";
        flagNum1=0;
        document.getElementById("nameMsg").innerHTML="<span class='star'>Required</span>";
    }
}
function nameValidation(name)
{
    var reg=/^([a-z]{3,10})+((\s+([a-z]{3,10})){1,2})$/gi;
    if(reg.test(name))
    return true;
    else
    return false;
}
function oldCondition1(oldValue){
    if(oldValue.value!="")
    {
        if(!creditValidation(oldValue.value)){
            oldValue.style.background="lightpink";
            document.getElementById("creditMsg").innerHTML="<span class='star'>Not valid</span>";
            flagNum2=0;
            alert("please enter valid credit card number");
            
        }
        else
        {
            document.getElementById("creditMsg").innerHTML="<span class='star'>Valid</span>";
            oldValue.style.background="palegreen";
            flagNum2=1;
        }
    }
    else{
        oldValue.style.background="white";
        flagNum2=0;
        document.getElementById("creditMsg").innerHTML="<span class='star'>Required</span>";
    }
}
function creditValidation(name)
{
    var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    // var amexpRegEx = /^(?:3[47][0-9]{13})$/;
    // var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/; 
    if(visaRegEx.test(name)||mastercardRegEx.test(name)
    // ||amexpRegEx.test(name)||discovRegEx.test(name)
        )
    return true;
    else
    return false;
}
function oldCondition2(oldValue){
    if(oldValue.value!="")
    {
        if(!cvvValidation(oldValue.value)){
            oldValue.style.background="lightpink";
            document.getElementById("cvvMsg").innerHTML="<span class='star'>Not valid</span>";
            flagNum3=0;
            alert("please enter valid CVV number");
            
        }
        else
        {
            document.getElementById("cvvMsg").innerHTML="<span class='star'>Valid</span>";
            oldValue.style.background="palegreen";
            flagNum3=1;
        }
    }
    else{
        oldValue.style.background="white";
        flagNum3=0;
        document.getElementById("cvvMsg").innerHTML="<span class='star'>Required</span>";
    }
}
function cvvValidation(name)
{
    var reg=/^([0-9]{3,3})$/gi;
    if(reg.test(name))
    return true;
    else
    return false;
}



// function checkout(e) {
    
    
// }
// }
  checkoutBtn.addEventListener("click", function(e){
    e.preventDefault();
    if(flagSpecial==1){
        if(flagNum1==1&&flagNum2==1&&flagNum3==1){
            window.location.href = "delivery.html";
            // alert("Thanks for using our store");
            }
        else{
            alert("Some data are missing or invalid")
            }
    }
    else if(flagSpecial==0){
        
        window.location.href="delivery.html";
        // alert("Thanks for using our store");

     }
})