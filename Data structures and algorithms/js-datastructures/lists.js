//Arrays
const shoppingList = ['Bread', 'butter', 'oj'];

//finding by index
const thirdItem = shoppingList[2];

//looping through list
for(const el of shoppingList) {
    console.log(el);
}


//Objects
const citizen = {
    'name' : {
        firstName: 'gio',
        lastName: 'haha'
    },
    'car': {
        carColor : 'silver',
        carAge : 4
    }
}

const maxData = citizen['name'];

/**
 * Stacks
 * Simple Build
 */

class Stack {
    constructor () {
        this.items = [];
    }

    //pushing in value into array above | stack
    push(value) {
        this.items.push(value);
    }

    //remove value in array above | stack
    pop() {
        //will remove last item of array
        //we can also return since pop returns that item that was popped
        return this.items.pop();
    }

    isEmpty(){
        return this.items.length === 0;
    }

    toArray(){
        return this.items.slice();
    }
}

const stack = new Stack();

stack.push('cook');
stack.push('wash dishes');
stack.push('buy ingredients');

console.log(stack.toArray());

stack.pop();

console.log(stack.toArray());

stack.pop();
stack.pop();

console.log(stack.toArray());

