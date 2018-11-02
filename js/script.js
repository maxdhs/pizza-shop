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

$(document).ready(function () {
  
  $("button").click(function() {
    var inputAddress = $("#inputAddress").val();
    var inputToppings = [];
    if (inputAddress == "") {
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
    
    
    $("#output").text("The total for your order is: " + newPizza.cost() + "$. Your delivery is guaranteed to " + inputAddress + " in 20 minutes or less.");
    
  });

  

  
  
});