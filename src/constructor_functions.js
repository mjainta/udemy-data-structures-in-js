// Constructor functions
function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
};

var user1 = new User('John', 'Smith', 26, 'male');

console.log(user1.firstName)
console.log(user1)

var user200 = new User('Jill', 'Robinson', 25, 'female');

console.log(user200)
console.log(user1)
