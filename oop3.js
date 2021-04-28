// Object.protoType
// Person.prototype

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthDay = new Date(dob);
  // this.calculateAge = function () {
  //   let diff = Date.now() - this.birthDay.getTime();
  //   let ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
  //calculateAge(dob)
}

let person = new Person("Touqeer", "Ahmed", "12-25-1995");
let person2 = new Person("Abdul", "Jabbar", "March 12 1991");

// calucalte Age
Person.prototype.calculateAge = function () {
  let diff = Date.now() - this.birthDay.getTime();
  let ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

console.log(person2.calculateAge());

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(person2.getFullName());

// Gets Married
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
};

person2.getsMarried("Malik");
console.log(person2.getFullName());

console.log(person.hasOwnProperty("lastName"));
