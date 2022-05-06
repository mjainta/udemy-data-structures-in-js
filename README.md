# Udemy course - Data structures in JS

Code done with the Udemy course [learning-data-structures-in-javascript-from-scratch](https://www.udemy.com/course/learning-data-structures-in-javascript-from-scratch)

## Learnings

1.3 The Prototype Object

You can add class functions after defining a constructor method using prototype.

```javascript
User.prototype.getEmailAddress = function() {
  return this.firstName + this.lastName + this.emailDomain
}
console.log(user1.getEmailAddress())
console.log(user200.getEmailAddress())
```
