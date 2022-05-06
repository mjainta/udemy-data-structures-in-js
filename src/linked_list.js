// Linked List

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  let newNode = new Node(value, this.head, null);

  if (this.head) {
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }

  this.head = newNode;
};

let myList = new LinkedList()
myList.addToHead('value 1')
console.log(myList)
myList.addToHead('value 2')
console.log(myList)
myList.addToHead('value 3')
console.log(myList)
