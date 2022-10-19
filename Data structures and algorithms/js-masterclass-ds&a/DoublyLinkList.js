class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;

        return this;
    }
    pop() {
        //three edge cases
        //if Doubly linked list empty
        if (this.length === 0) return undefined;

        //if we are removing the last node left in list
        let temp = this.tail
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            //if there are 2 or more items
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }

        this.length--;
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        //if there are no nodes in list
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        //there are 3 edge cases 
        //if there are no items in list
        if (this.length === 0) return undefined;

        let temp = this.head;

        //if there is 1 node left
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            //if there are 2 or more nodes
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;

    }
    get(index) {
        //if there are no items in list
        if (index < 0 || index >= this.get.length - 1) return undefined;

        //in a doubly linked list we loop from whichever end the index is closest to via half
        let temp = this.head;
        if (index < this.length / 2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
        } else {
            temp = this.tail
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev;
            }
        }
        return temp;
    }

    set(index, value) {
        let temp = this.get(index);

        //if the get method worked and brought us back a node in list
        if (temp) {
            temp.value = value;
            return true;
        }

        //if get method returned undefined
        return false;
    }
    insert(index, value) {
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);
        if (index < 0 || index > this.length) return false;

        const newNode = new Node(value);
        const before = this.get(index - 1);
        const after = before.next;

        before.next = newNode;
        newNode.next = after;
        newNode.prev = before;
        after.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (this.length === 0) return this.shift();
        if (index === this.length) return this.pop();
        if (index < 0 || index >= this.length) return undefined;

        const temp = this.get(index);

        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.next = null;
        temp.prev = null;

        this.length--;
        return temp;
    }

    reverse() {

    }
}

let myDoublyLinkedList = new DoublyLinkedList(7);