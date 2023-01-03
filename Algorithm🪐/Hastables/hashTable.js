class HashTable {
    constructor() {
        this.table = {};
    }

    /*The hash function will take in a key and return an index for the table*/
    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.table.length;
    }

    /* The set function will take in a key and a value, 
     and store the value at the index determined by the hash function */

    set(key, value) {
        let index = this.hash(key);
        this.table[index] = value;
    }

    /* The get function will take in a key and return 
     the value stored at the index determined by the hash function */
    get(key) {
        let index = this.hash(key);
        return this.table[index];
    }
}


let myAssets = new HashTable();
hashTable.set('name', 'Bitcoin');
hashTable.set('rank', 1);
hashTable.set('price', 16000);

console.log(hashTable.get('name')); // Output: 'Bitcoin'
console.log(hashTable.get('rank')); // Output: 1
console.log(hashTable.get('price')); // Output: 16000