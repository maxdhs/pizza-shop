/*
Order Pizza
Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.

Allow the user to choose toppings and size for the pizza they'd like to order.
Create a pizza object constructor with properties for toppings and size.
Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes.
*/

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

var pizza1 = new Pizza(["peperoni", "salami", "pineapple", "cherries"], "large");
var pizza2 = new Pizza(["peperoni"], "small");








