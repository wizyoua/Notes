class maxHeap {
    constructor () {
        this.heapElements = [];
    }

    insert(value){
        //O(1)
        this.heapElements.push(value);

        let currentElementIndex = this.heapElements.length - 1;
        let parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;

        //Max Heap
        while(
            parentElementIndex >= 0 && 
            this.heapElements[currentElementIndex] > this.heapElements[parentElementIndex]){
            const parentElement = this.heapElements[parentElementIndex];
            this.heapElements[parentElementIndex] = value;
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
            this.heapElements[rightChildIndex] >= this.heapElements[leftChildIndex] 
            ? rightChildIndex 
            : leftChildIndex;

        while (this.heapElements[childElementIndex] && this.heapElements[currentElementIndex] <= this.heapElements[childElementIndex]) {
            const currentNode = this.heapElements(currentElementIndex);
            const currentChildNode = this.heapElements[childElementIndex];

            this.heapElements[childElementIndex] = currentNode;
            this.heapElements[currentElementIndex] = currentChildNode;
        }
        return topElement;

    }
}

const heap = new maxHeap();

heap.insert(250);
heap.insert(197);
heap.insert(85);
heap.insert(101);
heap.insert(12);
heap.insert(40);
heap.insert(15);

console.log(heap);

heap.process();