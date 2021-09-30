function Node(data){
    this.data = data;
    this.children = [];
}

class Tree {
    constructor() {
        //very top root node at top of tree
        this.root = null;
    }

    add(data, toNodeData) {
        const node = new Node(data);

        const parent = toNodeData ? this.findBFS(toNodeData) : null;
        
        if(parent){
            parent.children.push(node);
        }else {
            if(!this.root) {
                this.root = node;
            }else {
                return "tried to store node at root, already exists";
            }
        }
    
    }

    findBFS(data){
        const queue = [this.root];
        let _node = null;

        //because now this is modular, we can console.log and we don't have to repeat code
        this.traverseBFS((node) => {
            if(node.data == data) {
                _node = node;
            }
        });

        return _node;
    }

    traverseBFS(cb) {
        const queue = [this.root];

        if(cb) {
            while(queue.length) {
                // store first node in queue and stores it in variable then deletes it
                const node = queue.shift();

                cb(node);

                for(const child of node.children) {
                    queue.push(child);
                }
            }
        }
    }
}



(function test(){
    let tree = new Tree();

    tree.add("Node1")
    tree.add("Node2", "Node1")
    tree.add("Node3", "Node1")
    tree.add("Node4", "Node2")
    tree.add("Node5", "Node2")
    tree.add("Node6", "Node3")
    
    //visualized
    /*
    
        Node1
    Node2 Node3
Node4 Node5 | Node6

    */

    tree.traverseBFS((node) => {
        console.log("current node: " + JSON.stringify(node));
    })
})();