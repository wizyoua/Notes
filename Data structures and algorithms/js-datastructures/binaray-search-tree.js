class Node {
    constructor(value = null){
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }

    add(value) { 
        if(this.value === null){
            this.value = value;
            return;
        }

        //if value coming in is greater than current value, we have to store to the right
        if(this.value < value){
            if(this.right) {
                this.right.add(value);
                return;
            }
            const newNode = new Node(value);
            newNode.parent = this;
            this.right = newNode;
            return;
        }

        //if value coming in is smaller than current node go to left child
        if(this.value > value) {
            if(this.left) {
                this.left.add(value);
                return;
            }
            const newNode = new Node(value);
            newNode.parent = this;
            this.left = newNode;
            return;
        }
    }

    find(value) {
        if(this.value === value) {
            return this;
        } 

        //look at the right node and make sure it exists and value coming in is greater than current value
        if(this.value < value && this.right) {
            //recursive call until it finds value or looks through all nodes
            return this.right.find(value);
        }

        if(this.value > value && this.left) {
            return this.left.find(value);
        }
    }

    remove(value) {
        const identifiedNode = this.find(value);

        //if we cannot find a node with the passed in value
        if(!identifiedNode) {
            throw new Error('could not find node with that value');
        }

        //if node does not have any children
        if(!identifiedNode.left && !identifiedNode.right){
            const identifiedParent = identifiedNode.parent;
            identifiedParent.removeChild(identifiedNode);
            return;
        }

        if(identifiedNode.left && identifiedNode.right){
            //node has 2 child nodes
            const nextBiggerNode = identifiedNode.right.findNext();

            if(nextBiggerNode !== identifiedNode.right.value) {
                this.remove(nextBiggerNode.value);
                identifiedNode.value = nextBiggerNode.value;
                
            }else {
                identifiedNode.value = identifiedNode.right.value;
                identifiedNode.right = identifiedNode.right.right;
                
            }
            
        }else {
            //probably has one or the other child
            const childNode = identifiedNode.left || identifiedNode.right;

            identifiedNode.left = childNode.left;
            identifiedNode.right = childNode.right;
            identifiedNode.value = childNode.value;
        }

        if(identifiedNode.left) {
            identifiedNode.left.parent = identifiedNode;
        }
        if(identifiedNode.right) {
            identifiedNode.right.parent = identifiedNode;
        }
        
    }

    removeChild(node){
        if(this.left && this.left === node) {
            this.left = null;
            return;
        }

        if(this.right && this.right === node) {
            this.right = null;
            return;
        }
    }

    findNext(){
        //if there is no left node
        if(!this.left) {
            return this;
        }
        return this.left.findNext();
    }
    
}

class Tree {
    constructor(){
        this.root = new Node(null);
    }

    add(value) {
        this.root.add(value);
    }

    remove(value) {
        this.root.remove(value);
    }

    find(value) {
        return this.root.find(value);
    }
}

const tree = new Tree();

tree.add(10);
tree.add(5);
tree.add(6);
tree.add(20);
tree.add(25);
tree.add(23);
tree.add(28);
//tree.add(26);
tree.add(39);
tree.remove(39);
tree.remove(20);
tree.remove(25);

console.log(tree);
console.log(find(6));
console.log(find(7));
console.log(find(39));
