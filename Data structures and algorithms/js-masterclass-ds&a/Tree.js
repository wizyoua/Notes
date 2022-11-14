//Binary tree node

//perfect tree means every line that has items in it has nodes
// full tree means every node has 2 children
// complete means
// you cant have more than one parent in a tree

//Binary Search Trees - smaller nodes are to the left of parent, and bigger nodes are to the right
// Big O:  Best: O(log n) Worst:O(n) if we end up never forking, pretty much making iterate through every node
// lookup: O(log n) - faster in tree
// insert: O(log n) - which loses to linked list since it's O(1) for LL
// remove: O(log n) - faster in tree

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        //if there is no root node
        if (this.root = null) {
            this.root = newNode
            return this;
        };

        let temp = this.root;

        while (true) {
            if (newNode.value === temp.value) return undefined;
            //if newNode < root node go left
            if (newNode.value < temp.value) {
                //if spot is open
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                //else go right
                //if spot is open
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    contains(value) {
        if (!root) return false;
        let temp = this.root;

        while (temp) {
            if (value < temp.value) {
                temp = temp.left;
            } else if (value > temp.value) {
                temp = temp.right;
            } else {
                return true;
            }
        }
        return false;
    }

    bfs() {
        let currNode = this.root;
        let queue = [];
        let results = [];
        queue.push(currNode);

        while (queue.length) {
            //this makes the currnode the first item in the queue
            currNode = queue.shift();

            //push the currnode into the results array
            results.push(currNode.value);

            //if the currnode has a left property push it into the queue
            if (currNode.left) queue.push(currNode.left);

            //if the currnode has a right property push it into the queue
            if (currNode.right) queue.push(currNode.right);
        }

        return results;
    }
}

//const myBST = new BST(9)

let myTree = new BST();
