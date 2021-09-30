/**
 * Linked List
 *
 */
//notice how we build up on existing JS data structures

export class LinkedList{
    //first code to execute when class is called
    constructor () {
        this.head = null; //First node of list
        this.tail = null; //Last node of list
    }


    //Adds to end of linked list
    append(value){
        //why not just make newNode = value, because we also have to store the pointer to next node ;)
        //initialize new node
        const newNode = {value: value, next : null};

        //if node with a tail is present, make that node.next point to this new node
        if(this.tail) {
            this.tail.next = newNode;
        }
        
        //update this.tail to newNode, which has next:null  so it becomes tail
        this.tail = newNode;

        //if there is no head on first run, make this.head = new node since this first node will become head 
        if(!this.head) {
            this.head = newNode;
        }
    }

    //Adds to beginning of linked list
    prepend(value){
        //So grab the current head when making a new node and store that into the next property in object below to save that node
        const newNode = {value:value, next: this.head};

        //then overwrite head node with newNode, and see how above the next:this.head is pointing to that node that was previously the head
        this.head = newNode;
        
        //if there is no tail node, we know this is the first node
        if(!this.tail) {
            this.tail = newNode;
        }

    }

    //Get rid of node in linked list
    delete(value){
        //check if list is empty, can't delete from empty list
        if(!this.head) {
            return;
        }

        //if this value is the first node we hit and we want to delete,
        while(this.head && this.head.value === value){
            this.head = this.head.next
        }

        let currentNode = this.head;

        while(currentNode.next){
            //we know we want to delete the next node
            if(currentNode.next.value === value){
                //here we are pointing the currentnode.next to the node after the one we are deleting.
                currentNode.next = currentNode.next.next;
            }else {
                currentNode = currentNode.next
            }
        }

        if(this.tail.value == value) {
            this.tail = currentNode;
        }
    }

    deleteHead(){
        if(!this.head) {
            return null;
        }
        const deletedItem = this.head;

        if(this.head.next) {
            this.head = this.head.next;
        }else {
            this.head = null;
            this.tail = null;
        }

        return deletedItem;
    }
    
    insertAfter(value, afterValue){
        //find the afterValue or in other words the value and which node we are putting this new node after
        const existingNode = this.find(afterValue);

        if(existingNode) {
            //construct new node with value, but point next to existingNode.next
            const newNode = {value:value, next:existingNode.next};
            existingNode.next = newNode;
        }
    }
    //Find a specific value in a linkedList, find first occurrence
    find(value){
        if(!this.head) {
            return;
        }

        //
        let currentNode = this.head;

        while (currentNode) {

            //find first occurance of current node value with value passed in
            if(currentNode.value == value) {

                //if yes, return currentNode
                return currentNode;
            }

            //if not, make currentNode equal to next node, continue while loop
            currentNode = currentNode.next;
        }

        //we didn't find anything
        return null;
    }



    //convert list to array to just dump out what is in linkedList
    //you would usually not do this as it defeats the purpose of the speed of linkedlist, but it is a way of logging and visualizing how to this linked list is structured
    toArray(){
        const elements = [];

        let currentNode = this.head;
        while(currentNode) {
            elements.push(currentNode);
            currentNode = currentNode.next;
        }

        return elements;
    }
}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append('hello');
linkedList1.append('max');
linkedList1.append('max');
linkedList1.append(true);
linkedList1.append(18.92);
linkedList1.prepend('First Value');
linkedList1.prepend('First Value');

console.log(linkedList1.toArray());

linkedList1.delete('max');
linkedList1.delete('First Value');
linkedList1.delete(18.92);

console.log(linkedList1.toArray());
console.log(linkedList1.find('Max'));
console.log(linkedList1.find('hello'));

linkedList1.insertAfter('new value -1' ,1);
linkedList1.insertAfter('new value -2 ' ,'hello');

console.log(linkedList1.toArray());