# Udemy course - Data structures in JS

Code done with the Udemy course [learning-data-structures-in-javascript-from-scratch](https://www.udemy.com/course/learning-data-structures-in-javascript-from-scratch)

## Learnings

### Section 1: The Prototype Object

You can add class functions after defining a constructor method using prototype.

```javascript
User.prototype.getEmailAddress = function() {
  return this.firstName + this.lastName + this.emailDomain
}
console.log(user1.getEmailAddress())
console.log(user200.getEmailAddress())
```

### Section 2: What is a Linked List?

- A list where node reference each others "prev" and "next" item
- The linked list does only need to know the "head" and "tail" of the list, the nodes references make up the linking in between

Linked list O notations:

- Constant time - O(1) on:
  - Adding/removing head
  - Adding/removing tail
- Linear time complexity - O(n)
  - Searching through Linked Lists

### Section 3: Binary Search Tree (BST)

- A Tree where each node has 0, 1, or 2 subnodes
  - Each node has a parent node, except the root node
- We work with numbers only
  - The lesser number of the parent will be on the left side
  - The higher number than the parent will be on the right side
- We will not think of nodes, but think of each node as another Binary Search Tree (BST)

Binary Search Tree performance:

- Searching values is fast - O(log n)
- To have performant binary search trees, it is important that the trees are "balanced"
  - If there are only "left" or "right" child nodes, it has the structure of a linked list

Applications:

- Dictionary
- Phone book
- Users

### Section 4: Hash table

- Very efficient in lookup and insertion
  - Lookup: O(1)
  - Insertion: O(1)
- Key/Value pairs, the value being a "bucket"
- The key is a result of hashing some identifier, for example a name
  - If hash collisions occur, we store both datasets in a "bucket"
