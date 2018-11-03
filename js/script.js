var Pizza = function(toppings, size) {
  this.toppings = toppings;
  this.size = size;
};

Pizza.prototype.cost = function() {
  var cost = 10;
  if (this.toppings.length > 3) {
    cost += 5;
  }
  if (this.size == "medium") {
    cost += 5;
  }
  if (this.size == "large") {
    cost += 5;
  }
  return cost;
};

var pickUpOrDelivery = "";

$(document).ready(function () {

  $("input[name='pickUpOrDelivery']").change(function(){
    pickUpOrDelivery = $("input[name='pickUpOrDelivery']:checked").val();
    if (pickUpOrDelivery == "pick-up") {
      $("#pickUpDisplay").slideDown();
      $("#deliveryDisplay").hide();
    }
    else {
      $("#deliveryDisplay").slideDown();
      $("#pickUpDisplay").hide();
    }
  });
  
  $("button").click(function() {
    var inputAddress = $("#inputAddress").val();
    var inputToppings = [];
    if (inputAddress == "" && pickUpOrDelivery == "delivery") {
      alert("Please enter your address");
      document.reload();
    }
    
    $(".chk:checked").each(function() {
      inputToppings.push($(this).val());
    });

  
    
    var inputSize = $("#inputSize").val();
    
    var newPizza = new Pizza (inputToppings, inputSize);
    
    var inputName = $("#inputName").val();
    
    var inputPhoneNumber = $("#inputPhoneNumber").val();

    if (pickUpOrDelivery == "") {
      alert("Please choose pick-up or delivery");
      document.reload();
    }

    if (pickUpOrDelivery == "delivery") {
      $("#output").text("The total for your order is: $" + newPizza.cost() + ". Your delivery is guaranteed to " + inputAddress + " in 20 minutes or less.");
    }
    else {
      $("#output").text("The total for your order is: " + newPizza.cost() + "$. We will have your order ready in our store for pick-up in 20 minutes.");
    }
  });

  

  
  
});