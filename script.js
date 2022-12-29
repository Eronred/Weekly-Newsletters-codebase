class HashTable {
    constructor() {
        this.table = {};
        this.length = 0;
        this.size = 0;
    }

    // The hash function will take in a key and return an index for the table
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.table.length;
        }
        return hash;
    }

    // The set function will take in a key and a value, and store the value at the index determined by the hash function
    set(key, value) {
        let index = this.hash(key);
        if (!this.table.hasOwnProperty(key)) {
            this.table[index] = {}
        }
        if (!this.table[index].hasOwnProperty(key)) {
            this.length++;
        }
        this.table[index][key] = value;
    }

    // The get function will take in a key and return the value stored at the index determined by the hash function
    get(key) {
        let index = this.hash(key);
        if (
            this.table.hasOwnProperty(index)
            &&
            this.table[index].hasOwnProperty(key)
        ) {
            return this.table[index][key]
        }
        return null;
    }
}

let hashTable = new HashTable();
console.log(hashTable.get('location')); // Output: 'New York'
hashTable.set('name', 'New York');
hashTable.set('location', 'New York3');
hashTable.set('social', 'facebook');

console.log(hashTable.get('name')); // Output: 'John'
console.log(hashTable.get('social')); // Output: 30
console.log(hashTable.get('location')); // Output: 'New York'
console.log(hashTable.table);
console.log(hashTable.length);

