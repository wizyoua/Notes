import {LinkedList} from './linkedList.js';

class Queue{
    constructor(){
        this.list = new LinkedList();
    }

    enqueue(value){
        this.list.append(value);
    }

    dequeue(){
        return this.list.deleteHead();
    }

    isEmpty(){
        return !this.list.head;
    }

    toArray(){
        return this.list.toArray();
    }
}

const queue = new Queue();

queue.enqueue('max 1');
queue.enqueue('max 2');
queue.enqueue('max 3');

console.log(queue.toArray());

console.log(queue.dequeue());

console.log(queue.toArray());

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.toArray());
