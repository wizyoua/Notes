import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web ', 250);
docTwo = new Payment('mario', 'plumbing', 200);

let docs: HasFormatter[] = [];

docs.push(docOne);
docs.push(docTwo);



//this is telling typescript that we know there is a anchor tag
const anchor = document.querySelector('a')!;

//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

//add event listener when a user submits the form
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number] = [toFrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    //console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);

    //render the doc to the list
    list.render(doc, type.value, 'end');

});



const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('yoshi', 'work on the mario website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});


//interfaces- enforce a structure of class and object
interface isPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: isPerson = {
    name: 'gianni',
    age: 21,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log(`I spent ${amount}`);
        return amount;
    }
}

const greetPerson = (person: isPerson) => {
    console.log('hello ', person.name);
}

greetPerson(me);

console.log(me)

//Generics - allows us to create a component that can work over a variety of types rather than a single one
const addUID = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

let docOneNew = addUID({ name: 'yoshi', age: 40 });
console.log(docOneNew)

//generics with interfaces & enums

//enums - set up constant enums here
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { name: 'shaun' }
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: ['bread', 'milk', 'soap']
}

//tuples - array like structure where each element represents some property of a record

let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];

let student: [string, number];
student = ['chun-li', 223423];