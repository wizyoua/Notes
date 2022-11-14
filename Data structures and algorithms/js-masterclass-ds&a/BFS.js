//Using this method pass in a tree and traverse it using BFS

function bfs() {
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