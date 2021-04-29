class Person {
  constructor(firstName, LastName, dob) {
    this.firstName = firstName;
    this.LastName = LastName;
    this.birthDay = new Date(dob);
  }

  greeting() {
    return `Hello Welocome ${this.firstName} ${this.LastName}`;
  };

  calculateAge() {
    let diff = Date.now() - this.birthDay.getTime();
    let getAge = new Date(diff);
    return Math.abs(getAge.getUTCFullYear() - 1970);
  };

  getsMarried(newLastName){
    this.LastName= newLastName;
  };

  static addNumber(x,y){
    return x+y;
  }
}

const person = new Person("Touqeer", "Ahmed", '12-25-1995');

person.getsMarried('Soomro')

console.log(Person.addNumber(1,2))