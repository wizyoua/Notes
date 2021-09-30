import { LinkedList } from './linkedList.js';
/**
 * Stacks
 * LinkedList
 * why? it has everything we need, we can add/remove from last and first item, so its more efficient than just popping last item from array
 */

 class Stack{
    constructor () {
        this.list = new LinkedList();
    }

    push(value){
        this.list.prepend(value);
    }

    pop(){
        return this.list.deleteHead();
    }

    //didn't do this because it changed linkedList and I need to still study the LL structure
    isEmpty(){
        return !this.list.head;
    }

    toArray(){
        return this.list.toArray();
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