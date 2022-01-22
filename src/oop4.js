//Person Constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Person Greeting
Person.prototype.greeting = function () {
  return `Hi there ${this.firstName} ${this.lastName}`;
};

let person = new Person("Touqeer", "Ali");
console.log(person.greeting());

// Customer Constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// Inherite the Person prototype Methodds
Customer.prototype = Object.create(Person.prototype);

// Make customer prototypes return Customer
Customer.prototype.constructor = Customer;

// create a customer
let customer1 = new Customer("Touqeer", "Ahmed", "03023290096", "Standard");

// Customer Greeting
Customer.prototype.greeting = function () {
  return `Hi there ${this.firstName} ${this.lastName} Welcome to the Application`;
};

console.log(customer1);
console.log(customer1.greeting());
