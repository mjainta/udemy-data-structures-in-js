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

let myLinkedList = new LinkedList()
myLinkedList.addToHead(100)
console.log(myLinkedList)
myLinkedList.addToHead(200)
console.log(myLinkedList)
myLinkedList.addToHead(300)
console.log(myLinkedList)
