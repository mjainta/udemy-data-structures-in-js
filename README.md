# Udemy course - Data structures in JS

Code done with the Udemy course [learning-data-structures-in-javascript-from-scratch](https://www.udemy.com/course/learning-data-structures-in-javascript-from-scratch)

## Learnings

### 3 The Prototype Object

You can add class functions after defining a constructor method using prototype.

```javascript
User.prototype.getEmailAddress = function() {
  return this.firstName + this.lastName + this.emailDomain
}
console.log(user1.getEmailAddress())
console.log(user200.getEmailAddress())
```

### 4. What is a Linked List?

- A list where node reference each others "prev" and "next" item
- The linked list does only need to know the "head" and "tail" of the list, the nodes references make up the linking in between
