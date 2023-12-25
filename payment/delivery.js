// localStorage.removeItem("productsInCart");
//     sessionStorage.removeItem("totalprice");
// alert("Thanks for using our store");
var checkoutBtn = document.getElementById("final");
var displayPrice=0;
if(sessionStorage.getItem("totalprice")!=null){
    displayPrice=sessionStorage.getItem("totalprice");
}
  checkoutBtn.innerHTML="Confirm Your Order"+"    "+displayPrice+" LE";

  var flagNum1=0;
  var flagNum2=0;
  function oldCondition(oldValue){
    if(oldValue.value!="")
    {
        if(!nameValidation(oldValue.value)){
            oldValue.style.background="lightpink";
            document.getElementById("nameMsg").innerHTML="<span class='star'>Not valid</span>";
            flagNum1=0;
            alert("Adress can be alphanumeric & spaces only");
            
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
    var reg=/^[\w\s]{1,}$/g;
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
            alert("please enter valid phone number");
            
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
    var visaRegEx = /^01+([0125]{1,1})+([0-9]{8,8})$/gi;
    if(visaRegEx.test(name))
    return true;
    else
    return false;
}

// function checkout() {
    
        
//         }
      checkoutBtn.addEventListener("click", function(e){
        e.preventDefault();

        if(flagNum1==1&&flagNum2==1){
            localStorage.removeItem("productsInCart");
            sessionStorage.removeItem("totalprice");
            
            window.location.href = "index.html";
            alert("Thanks for using our store");
            }
        else{
            alert("Some data are missing or invalid")
            }



      });