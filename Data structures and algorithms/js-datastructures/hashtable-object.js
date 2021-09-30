/**
 * Here is building an object under the hood, so we handle the
 * Input, Hashing, and List. This is how objects work under the hood in JS but we can see the exact code here :)
 * A Hashtable under the hood, is just an array that works with indexes
 */

class HashTable {
    constructor(){
        this.size = 1000;
        //why use Array method instead of []? come back later to answer this
        this.buckets = Array(1000).fill(null);
    }

    hash(key) { 
        let hash = 0;
        for(const char of key) {
            //build in method in js that grabs letter of string and gives you the UTF-16 code unit
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
            hash += char.charCodeAt(0);
        }

        return hash % this.size;

    }

    set(key, value) {
        const keyHash = this.hash(key);

        this.buckets[keyHash] = value;
    }

    get(key){
        const keyHash = this.hahs(key);
        return this.buckets[keyHash];
    }

    showInfo(){
        for(const key in this.buckets){
            if(this.buckets[key] !== null){
                console.log(key, this.buckets[key]);
            }
        }
    }
}


const table1 = new HashTable();
for(const char of 'acedemind') {
    table1.set(char, char);
}

for(const char of 'hello') {
    table1.set(char, char);
}

for(const char of 'works?') {
    table1.set(char, char);
}

console.log(table1.showInfo());


// const word = 'hello';

// function findFirstRep (str){
//     const table = new HashTable();

//     for(const char of str) {
//         if(table.get(char)) {
//             return char;
//         }
//         table.set(char, 1);
//     }
// }


// console.log(findFirstRep(word));