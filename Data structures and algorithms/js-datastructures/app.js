/**
 * Arrays
 */
const names = ['max' , 'man' , 'julie'];

console.log(names[1]);

//arrays are iterable
for(const el of names) {
    console.log(el);
}


names.push('Julie');

//have to iterate between every element in array
const julieIndex = names.findIndex(el => el === 'julie')

//we have to move all elements after removed, so it is intensive
names.splice(2,1);



/**
 * Sets - are sort of like objects but not really... lol
 * also order is not guaranteed
 * use Sets if you need lists of data but don't care about order or position
 */

//if duplicates are passed into a set only 1 occurrence of it will be stored.
const ids = new Set();

ids.add('abc');
ids.add(1);
ids.add('bb2');
ids.add(1);

//for of loop es6 -
for(const el of ids) {
    //console log each element in this Set
    console.log(el);

    /**
     * will spit out:
     * abc
     * 1
     * bb2
     * 
     * Notice: ^^ how only 1 value of 1 is present, Sets don't take in duplicates
     * Notice: how order does not matter since we can't access it like traditional array using index
     */
}


//If you want to retrieve a value in a Set use has()
console.log(ids.has('abc')); //will return true

//add new values
ids.add(2);

//delete values
ids.delete('bb2'); //will remove bb2 from line 33 ^^ 




/**
 * Objects
 * 
 */

const person = {
    firstName: "gianni",
    age: 10,
    hobbies: [
        'sports',
        'cooking'
    ],
    greet() {
        console.log("hi, " + this.firstName);
    }
};
//cant iterate with for loop nor can access via index like array

//can access by key name
console.log(person['firstName']);
console.log(person.firstName);


//add new properties to objects with dot notation
person.lastName = "lastname";

//delete properties with delete operator, there are more ways to do this
delete person.age;

//access methods in object
person.greet();


/**
 * Maps 
 * 
 */

const resultData = new Map();

resultData.set('average', 1.5);
resultData.set('lastresult', null);

//maps allow objects to be keys, but with normal objects the keys can't be other objects
const germany = {name: "germany" , population: 82}

resultData.set(germany, 0.89);

//you can iterate through map
for(const el of resultData) {
    console.log(el);
}

//can't input duplicates so will overwrite existing key/value
resultData.set('average',33);

//retrieve a value by key, you cannot access keys with dot notation in maps but in normal objects you can
resultData.get('average');

//delete by key
resultData.delete(germany);



