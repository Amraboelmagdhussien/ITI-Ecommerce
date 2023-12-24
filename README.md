# ITI-Ecommerce

Font used Inter

      async function test() {
        await addToCart("0");
        await addToCart("1");
        await addToCart("2");

        console.log(cartItems);
      }

      // addToCart("0").then((value) => {
      //   console.log(value.val());
      // });

let localItems = localStorage.getItem("allproduct");
let parsedItem = JSON.parse(localItems);

let localButton = document.getElementsByClassName("add-to-cart-func");

async function pushToLocal() {
cartItems.push(parsedItem[0]);
}
