const pricesChange = document.getElementById("total-price");

function add(id) {
    var productsInCart = localStorage.getItem("cartItems");
    if (productsInCart) {
        var items = JSON.parse(productsInCart);
        var itemToUpdate = items.find((item) => item.id === id);
        if (itemToUpdate) {
            itemToUpdate.qty++;
            itemToUpdate.subPrice = itemToUpdate.qty * itemToUpdate.price;
            localStorage.setItem("cartItems", JSON.stringify(items));
            updatePrices(items);
        }
    }
}

function updatePrices(products) {
    var totalPrice = products.reduce(
      (acc, item) => Math.floor((acc + item.qty * item.price)*100)/100,
      0
    );
    pricesChange.innerHTML = `${totalPrice} $`;
    sessionStorage.setItem("totalprice",totalPrice);
  }

