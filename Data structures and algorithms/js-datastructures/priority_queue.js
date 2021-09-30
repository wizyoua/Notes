//Build a linked list first

class Node {
    constructor(value, priority) {
        this.value = value;
        this.next = null;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.first = null;
    }

    insert(value, priority){
        const newNode = new Node(value, priority);

        if(!this.first || priority > this.first.priority) {
            //save existing first el
            newNode.next = this.first;

            
            this.first = newNode;
        }else {
            let currentNode = this.first;

            while(currentNode.next && priority < currentNode.next.priority){
                //walk through entire linked list until there is no next node
                currentNode = currentNode.next;
            }

            newNode.next = currentNode.next;
            //point at new node
            currentNode.next = newNode;
        }
    }

    process(){
        const first = this.first;
        this.first = this.first.next;
        return first;
    }
}

const queue = new PriorityQueue();

queue.insert('clean up room', 1);
queue.insert('do taxes', 99);
queue.insert('learn to code', 105);

console.log(queue);
console.log(queue.process());
console.log(queue.process());
console.log(queue.process());
