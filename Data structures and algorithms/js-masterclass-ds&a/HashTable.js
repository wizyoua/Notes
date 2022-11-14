//Big O of hash table;
// Set - O(1);
// Get - O(1);
// keys - O(n); 

// Common Interview Question: 
// write an algo if two arrays have any items in common;
/**
 *  1. 2 for loops checking each item - O(n^2)
 *  2. using hashmap - store each item of first array in hashmap 
 *     then run another for loop in second array and check against hashmap 
 *     O(n) since running though both arrays separately.  
 * 
 */

class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size);
    }

    // underscore means a method only called by other methods, not directly.
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }

    set(key, value) {
        let index = this._hash(key);

        //handle hash collisions
        if (!this.dataMap[index]) this.dataMap[index] = [];

        this.dataMap[index].push([key, value]);
        return this;
    }

    get(key) {
        let index = this._hash(key);
        if (this.dataMap[index]) {
            for (let i = 0; i < this.dataMap[index].length; i++) {
                if (this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        let allKeys = [];

        for (let i = 0; i < this.dataMap.length; i++) {
            if (this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    allKeys.push(this.dataMap[i][j][0]);
                }
            }
        }

        return allKeys;
    }
}

let myHashTable = new HashTable();
myHashTable.set