// Constructor functions

function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
};

const user1 = new User('John', 'Smith', 26, 'male');
console.log(user1.firstName)
console.log(user1)

const user200 = new User('Jill', 'Robinson', 25, 'female');
console.log(user200)
console.log(user1)

User.prototype.emailDomain = '@facebook.com'
console.log(user1) // Does not show the emailDomain
console.log(user1.emailDomain) // Shows the emailDomain

User.prototype.getEmailAddress = function() {
  return this.firstName + this.lastName + this.emailDomain
}
console.log(user1.getEmailAddress())
console.log(user200.getEmailAddress())

