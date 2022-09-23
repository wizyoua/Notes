import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web ', 250);
docTwo = new Payment('mario', 'plumbing', 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
//this is telling typescript that we know there is a anchor tag
const anchor = document.querySelector('a');
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
//add event listener when a user submits the form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    //console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
    //render the doc to the list
    list.render(doc, type.value, 'end');
});
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('yoshi', 'work on the mario website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const me = {
    name: 'gianni',
    age: 21,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spent ${amount}`);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
greetPerson(me);
console.log(me);
//Generics - allows us to create a component that can work over a variety of types rather than a single one
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOneNew = addUID({ name: 'yoshi', age: 40 });
console.log(docOneNew);
//generics with interfaces & enums
//enums - set up constant enums here
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { name: 'shaun' }
};
const docFour = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: ['bread', 'milk', 'soap']
};
//tuples - array like structure where each element represents some property of a record
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
let tup = ['ryu', 25, true];
let student;
student = ['chun-li', 223423];
