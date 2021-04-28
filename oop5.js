const personProtoTypes = {
  greeting: function () {
    return `Hi there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};

const mary = Object.create(personProtoTypes);

mary.firstName = "Mary";
mary.lastName = "Williums";
mary.age = 30;

console.log(mary);
console.log(mary.getsMarried("Smith"));

console.log(mary.greeting());

const mary1 = Object.create(personProtoTypes, {
  firstName: { value: "Marry2" },
  lastName: { value: "John" },
  age: { value: 30 },
});

console.log(mary1);
console.log(mary1.greeting());
