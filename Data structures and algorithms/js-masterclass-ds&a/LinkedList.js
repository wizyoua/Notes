// pushing an item to the end of a linked list is O(1) because we are not looping through anything
// removing a node from the end of a linked list we need to loop through the list to find the node before the last node. O(n)
// shift is removing a node to the beginning of a linked list. O(1)
// unshift is adding a node from the beginning of a linked list. O(1)
// insert is adding a node to the middle of a linked list. O(n)
// removing a node from the middle of a linked list is O(n)
// finding a node by value or index is O(n)

//A Node consists of a value and a pointer to the next node


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
//const newNode = new Node(4);

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);

        //EDGE CASE: consider an empty linked list
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop(value) {
        //three edge cases: empty list, one item in list, multiple items in list
        if (!this.head) return undefined;

        let temp = this.head;
        let pre = this.head;

        //multiple items in list
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;

        //one item in list
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(value) {
        const newNode = newNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (!this.head) return undefined;

        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return temp;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;

        let temp = this.head

        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }

        return temp;
    }

    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        //edge case: index is 0 
        if (index === 0) return this.unshift(value);

        //edge case: index is added to the end of the list
        if (index === this.length) return this.push(value);

        //trying to add to an index that is out of bounds
        if (index < 0 || index > this.length) return false;

        const newNode = new Node(value);
        const temp = this.get(index - 1);
        newNode.next = temp.next
        temp.next = newNode;
        this.length++;

        return true;

    }

    remove(index) {
        if (index === 0) return this.shift();

        if (index === this.length - 1) return this.pop();

        if (index < 0 || index >= this.length) return undefined;

        const prev = this.get(index - 1);
        const temp = before.next;
        prev.next = temp.next;
        temp.next = null;
        this.length--;

        return temp;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let next = temp.next
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return this;
    }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);

