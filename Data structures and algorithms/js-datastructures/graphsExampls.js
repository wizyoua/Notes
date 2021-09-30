//this is a example adj matrix with Node 1,2,3 and connections are:  1 -> 2,3 & 3 -> 2
//Adjacency Matrix
const adjMatrix = [
    [ 0, 1, 1],
    [ 0, 0, 0],
    [ 0, 1, 0]
]

//access:
adjMatrix[1][2]


//Adjacency List
//same example connections as above

const adjList = {
    1: [2, 3],
    2: [],
    3: [2]
}

adjList[1].find(connectedNode => connectedNode === 2)
