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

const myHT = new HashTable(30);

console.log(myHT.hash('Becca'));
