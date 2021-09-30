class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

class priorityQueue {
    constructor () {
        this.heapElements = [];
    }

    insert(value, priority){
        const newNode = new Node(value, priority);

        //O(1)
        this.heapElements.push(newNode);

        let currentElementIndex = this.heapElements.length - 1;
        let parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;

        //Max Heap
        while(
            parentElementIndex >= 0 && 
            this.heapElements[currentElementIndex] > this.heapElements[parentElementIndex].priority){
            const parentElement = this.heapElements[parentElementIndex].priority;
            this.heapElements[parentElementIndex] = newNode;
            this.heapElements[currentElementIndex] = parentElement;
            currentElementIndex = parentElementIndex;
            parentElementIndex  = Math.floor((currentElementIndex + 1) / 2) - 1
        }
    }

    process(){
        if(this.heapElements.length === 0) {
            return null;
        }

        if(this.heapElements.lenth === 1) {
            return this.heapElements.pop();
        }

        //top element
        const topElement = this.heapElements[0];

        //set last element  as  new top element but it's not necessarily the correct val that should be there so keep processing
        this.heapElements[0] = this.heapElements.pop();

        let currentElementIndex = 0;
        //this finds correct child indexes
        let leftChildIndex = 2 * currentElementIndex + 1;
        let rightChildIndex = 2 * currentElementIndex + 2;
        let childElementIndex = 
            this.heapElements[rightChildIndex] && 
            this.heapElements[rightChildIndex].priority >= this.heapElements[leftChildIndex].priority
            ? rightChildIndex 
            : leftChildIndex;

        while (this.heapElements[childElementIndex] && this.heapElements[currentElementIndex].priority <= this.heapElements[childElementIndex].priority) {
            const currentNode = this.heapElements(currentElementIndex);
            const currentChildNode = this.heapElements[childElementIndex];

            this.heapElements[childElementIndex] = currentNode;
            this.heapElements[currentElementIndex] = currentChildNode;
        }
        return topElement;

    }
}

const heap = new priorityQueue();

heap.insert('clean up room', 1);
heap.insert('code', 5);
heap.insert('cook', 10);


console.log(heap);

heap.process();