class Queue{
    constructor() {
        this.items = [];
    }

   //adding to beginning to array 
    enqueue(value){
        this.items.unshift(value);
    }

    //remove from end of array
    dequeue(){
        return this.items.pop();
    }

    isEmpty(){
        return this.items.length === 0;
    }

    toArray(){
        return this.items.slice();
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
