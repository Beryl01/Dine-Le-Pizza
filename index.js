function Order(type, size, crust, topping) {
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
}

Order.prototype.fullOrder = function() {
  return this.type + " with the topping of " + this.topping + " and " + this.crust + " as crust";
};

function Total(price, quantity, delivery) {
  this.price = price;
  this.quantity = quantity;
  this.delivery = delivery; 
}

Total.prototype.finalTotal = function() {
  return this.price * this.quantity + this.delivery;
};

var sizePrice = [1200, 1000, 800, 550];
var deliveryPrices = [0, 300];

$(document).ready(function() {
  $('form#form1').submit(function(event) {
    event.preventDefault();
    var pizzaType = $('#type').val();
    var pizzaSize = parseInt($('#size').val());
    var pizzaCrust = $('#crust').val();
    var pizzaTop = $('#top').val();
    var pizzaQty = parseInt($('#qty').val());
    var pizzaPick = parseInt($('#pick').val());
    var price = sizePrice[pizzaSize - 1];
    var deliveryCost = deliveryPrices[pizzaPick - 1];

    newOrder = new Order(pizzaType, pizzaSize, pizzaCrust, pizzaTop);
    newTotal = new Total(price, pizzaQty, deliveryCost);
    if (pizzaPick === 1) {
      document.getElementById("specs").innerHTML =
      `Your order is ${newOrder.fullOrder()}.`
      document.getElementById("status").innerHTML =
      `Your bill is ${newTotal.finalTotal()}.You will receive your pizza in the next few minutes.`
    } else {
      if (pizzaPick === 2) {
        prompt`Enter where you want your pizza to be delivered`
        document.getElementById("specs").innerHTML =
        `Your order has been received and it will be delivered.`
        document.getElementById("status").innerHTML =
        `Your order is ${newOrder.fullOrder()}.`
        document.getElementById("total").innerHTML =
        `Your bill is ${newTotal.finalTotal()}.You pizza will be delivered in the next 30minutes.`
      }
    }
  });

$(document).ready(function() {
  $('form#form2').submit(function(event) {
    event.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#comment').val();
    document.getElementById("thank").innerHTML =
    "Hello " + name + " .Thank You for Contacting Us.";
  });
});
});


