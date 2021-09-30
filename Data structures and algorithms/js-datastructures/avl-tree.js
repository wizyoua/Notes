class Node {
    constructor(value = null){
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }

    //getters are like dynamically calculated property
    get leftDepth(){

        //no left child
        if(!this.left) {
            return 0;
        }
        
        //will access depth getter, and will add 1
        return this.left.depth + 1;
    }

    get rightDepth(){
        //no left child
        if(!this.right) {
            return 0;
        }

        //will access depth getter, and will add 1
        return this.right.depth + 1;
    }

    get depth() {

        //drill down into node tree until we at some point don't find any more left and right children

        return Math.max(this.leftDepth, this.rightDepth);
    }

    get balanceFactor(){
        return this.leftDepth - this.rightDepth;
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

class AVLTree extends Tree {
    add(value){
        super.add(value);

        let curNode = this.root.find(value);

        while (curNode) {
            //gradually move up in tree from node to node until we have no parents
            this.balance(curNode);
            curNode = curNode.parent;
        }
        
    }

    remove(value){
        super.remove(value);

        this.balance(this.root);
    }

    balance(node) {
        
        if(node.balanceFactor < -1) {
            //left rotation && right-left rotation because we have a node with a balanceFactor of -1

            
            if(node.right.balanceFactor < 0) {
                //rotate left
                this.rotateLeft(node);
            }else if(node.right.balanceFactor > 0) {
                //rotate Right-Left
                this.rotateRightLeft(node);
            }
        }else if (node.balanceFactor > 1) {
            //right rotation && left-right rotation because we have a node with a balanceFactor of > 1

            if(node.left.balanceFactor < 0) {
                //rotate right
                this.rotateLeftRight(node);                
            }else if (node.left.balanceFactor > 0) {
                //rotate Left-Right
                this.rotateRight(node);
            }
        }
    }

    rotateLeft(node) {
        //access right node
        const rightNode = node.right;

        //this clears pointer on this node we are trying to rotate but see how we saved up there 
        node.right = null;

        if(node.parent){
            node.parent.right = rightNode;
            node.parent.right.parent = node.parent;
        }else if(node === this.root){
            this.root = rightNode;
            this.root.parent = null;
        }

        if(rightNode.left) {
            node.right = rightNode.left;
            node.right.parent = node;
        }

        rightNode.left = node;
        rightNode.left.parent = rightNode;
    }

    rotateRight(node){
        //access left node
        const leftNode = node.left;

        //this clears pointer on this node we are trying to rotate but see how we saved up there 
        node.left = null;

        if(node.parent){
            node.parent.left = leftNode;
            node.parent.left.parent = node.parent;
        }else if(node === this.root){
            this.root = leftNode;
            this.root.parent = null;
        }

        if(leftNode.right) {
            node.left = leftNode.right;
            node.left.parent = node;
        }

        leftNode.right = node;
        leftNode.right.parent = leftNode;
    }

    rotateLeftRight(node){

        //get left node of current Node 
        const leftNode = node.left;
        node.left = null;

        const leftRightNode = leftNode.right;
        leftNode.right = null;

        if(leftRightNode.left) {
            leftNode.right = leftRightNode.left;
            leftNode.right.parent = leftNode;
            leftRightNode.left = null;
        }

        node.left = leftRightNode;
        node.left.parent = node;

        leftRightNode.left = leftNode;
        leftRightNode.parent = leftRightNode;

        this.rotateRight(node);
    }

    rotateRightLeft(node){
        //get right node of current Node
        const rightNode = node.right;
        node.right = null;

        const rightLeftNode = rightNode.left;
        rightNode.left = null;

        if(rightLeftNode.right) {
            rightNode.left = rightLeftNode.right;
            rightNode.left.parent = rightNode;
            rightLeftNode.right = null;
        }

        node.right = rightLeftNode;
        node.right.parent = node;

        rightLeftNode.right = rightNode;
        rightLeftNode.right.parent = rightLeftNode;

        this.rotateLeft(node);
    }
}


const tree = new AVLTree();

//Rotate Left
// tree.add(1);
// tree.add(2);
// tree.add(3);

//Rotate Right
// tree.add(3);
// tree.add(2);
// tree.add(1);

//rotateLeftRight
// tree.add(3);
// tree.add(1);
// tree.add(2);

//rotateRightLeft
tree.add(1);
tree.add(3);
tree.add(2);
tree.add(10);
tree.add(-5);
tree.add(100);
tree.add(-3);

console.log(tree);
