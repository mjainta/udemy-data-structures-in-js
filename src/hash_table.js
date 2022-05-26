function HashTable(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
}

HashTable.prototype.hash = function(key) {
    let total = 0;

    for (let i = 0; i < key.length; i++) {
        total += key[i].charCodeAt();
    }

    const bucket = total % this.numBuckets;
    return bucket;
}

HashTable.prototype.insert = function(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
    else if (this.buckets[index].key === key) {
        this.buckets[index].value = value;
    }
    else {
        let currentNode = this.buckets[index];
        while (currentNode.next) {
            if (currentNode.next.key === key) {
                currentNode.next.value = value;
                return;
            }
            currentNode = currentNode.next
        }
        currentNode.next = new HashNode(key, value);
    }
}

HashTable.prototype.get = function(key) {
    const index = this.hash(key);

    if (!this.buckets[index]) return null;
    else {
        let currentNode = this.buckets[index];
        while (currentNode) {
            if (currentNode.key === key) return currentNode;
            currentNode = currentNode.next;
        }
        return null;
    }
}

const myHT = new HashTable(30);

myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com');
myHT.insert('Dean', 'deanmachine@gmail.com');
myHT.insert('Megan', 'megansmith@gmail.com');
myHT.insert('Dane', 'dane1010@outlook.com');

console.log(myHT.buckets);
console.log(myHT.get('Dean'))
console.log(myHT.get('Megan'))
console.log(myHT.get('Dane'))
console.log(myHT.get('John'))
console.log(myHT.get('Daen'))
