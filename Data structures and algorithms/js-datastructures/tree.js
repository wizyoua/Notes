class Node {
    //pass in parentNode or else equate that var to null
    constructor(value, parentNode = null){
        this.children = [];
        this.value = value;
        this.parent = parentNode;
    }

    addNode(value){
        const segments = value.split('/');

        if(segments.length === 0) {
            return;
        }
        if(segments.length === 1) {
            const node = new Node(segments[0], this)
            this.children.push(node);
            return {node : node, index: this.children.length - 1};
        }

        const existingChildNode = this.children.find(
            (child) => child.value === segments[0]
        );

        //this will add those other directory segments under 1 parent that was found
        if(existingChildNode) {
            existingChildNode.addNode(segments.slice(1).join('/'));
        } else {
            const node = new Node(segments[0], this);
            node.addNode(segments.slice(1).join('/'));
            this.children.push(node);
            return {node : node, index: this.children.length - 1};
        }
        
        
    }

    removeNode(value){
        const segments = value.split('/');

        if(segments.length === 0) {
            return;
        }
        if(segments.length === 1) {
            //findIndex is built in method in JS
            const existingNodeIndex = this.children.findIndex(
                child => child.value === segments[0]
            );
        
            if(existingNodeIndex < 0) {
                throw new Error("could not find matching value");
            }

            this.children.splice(existingNodeIndex, 1);
        }

        if(segments.length > 1) {
            const existingChildNode = this.children.find(
                (child) => child.value === segments[0]
            );

            if(!existingChildNode) {
                throw new Error("could not find path: " + segments[0]);
            }

            existingChildNode.removeNode(segments.slice(1).join('/'));
        }
    }

    //DFS
    find(value){
        
        //enable this console.log to see how we are hitting each node, notice we aren't hitting siblings for DFS, we are hitting child going down branch
        console.log(this);
        
        //DFS
        for(const child of this.children) {
            
            //check if value is in children of current Node
            if(child.value === value) {
                return child;
            } 

            //if not, then recursively send value to next .find and go down to each child until value is found.
            //See how this is digging deeper into path, that's DFS
            const nestedChildNode = child.find(value);
            
            if(nestedChildNode) {
                return nestedChildNode;
            }
        }
    }
    
    //BFS
    findBFS(value){
        
        //enable this console.log to see how we are hitting each node, notice we aren't hitting siblings for DFS, we are hitting child going down branch
        console.log(this);
        
        //DFS

        /**
         * Ok, notice the difference here from DFS. We actually let the for loop complete searching
         * all of the children of current node, so are are searching first children under root node, then if nothing in all children of root note
         * move onto next level and search all children that new deeper level
         * 
         * You let this for loop run for all children, then recursively call find again to dig into next level nodes.
         * */
        for(const child of this.children) {
            //check if value is in children of current Node
            if(child.value === value) {
                return child;
            } 
        }

        for(const child of this.children) {
            const nestedChildNode = child.find(value);
            if(nestedChildNode) {
                return nestedChildNode;
            }
        }
    }
}

class Tree {
    constructor(rootValue){
        this.root = new Node(rootValue);
    }

    add(path){
        this.root.addNode(path)
    }

    remove(path){
        this.root.removeNode(path);
    }

    
    find(value){
        if(this.root.value === value) {
            return this.root;
        }

        return this.root.find(value);
    }

    findBFS(value){
        if(this.root.value === value) {
            return this.root;
        }

        return this.root.find(value);
    }
}

//this creates a root node
const filesystem = new Tree('/');

//this creates new nodes under Root node above
filesystem.add('documents/personal/tax.docx');
filesystem.add('games/cod.docx');
filesystem.add('games/cod2.docx');
filesystem.remove('games/cod.docx');

//DFS
//console.log(filesystem.find('personal'));

//BFS
console.log(filesystem.findBFS('personal'));

console.log(filesystem);
