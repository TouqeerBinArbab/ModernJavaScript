function Person(name, dob) {
  this.name = name;
  this.birthDay = new Date(dob);
  this.calculateAge = function () {
    let diff = Date.now() - this.birthDay.getTime();
    let ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
  //calculateAge(dob)
}
//asdfasdfadsfgs
//asdfasfasfas
let person = new Person("Touqeer", "12-25-1995");
let person2 = new Person("Abdul Jabbar", "03-12-1996");

console.log(person.calculateAge());
