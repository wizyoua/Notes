/**
 * Here is a copy of our hash table, but we are implementing protection
 * for hash collisions
 */

 class HashTable {
    constructor(){
        this.size = 16;
        //buckets full of arrays, per key we can store multiple values since hash collisions won't overwrite, they we be added to array
        this.buckets = Array(16).fill(null).map(() => []);
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
        const bucketArray = this.buckets[keyHash];
        const storedElement = bucketArray.find((element) => {
            return element.key === key;
        });

        if(storedElement) {
            storedElement.val = value;
        }else {
            bucketArray.push({key: key, val : value});
        }
    }

    get(key){
        const keyHash = this.hash(key);
        const bucketArray = this.buckets[keyHash];
        const storedElement = bucketArray.find(element => {
            return element.key === key;
        });
        return storedElement;
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

/**
 * Did you check the console.log? notice how now we can prevent key collisions when generating hashed with chaining
 * basically just storing multiple key value pair objects in another array on same generate key hash number
 */