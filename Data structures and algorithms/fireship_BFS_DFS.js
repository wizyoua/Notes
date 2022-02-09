//We can Represent Graphs as a Adjacency List 

//Data
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

// The graph
const adjacencyList = new Map();


//Add Node
function addNode(airport) {
    adjacencyList.set(airport, []);
}

//Add Edge, undirected
function addEdge(origin, destination){
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}


//create the Graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));


//BFS

function bfs(start){

    const visited = new Set();
    const queue = [start];


    while(queue.length > 0){
        const airport = queue.shift();

        const destinations = adjacencyList.get(airport);

        for(const destination of destinations){
            if(destination === 'BKK'){
                console.log('BFS found Bangkok');
            }

            if(!visited.has(destination)){
                visited.add(destination);
                queue.push(destination);
            }
        }
    }
}

bfs('PHX')



//DFS
function dfs(start, visited = new Set()){
    console.log(start);
    visited.add(start);

    const destination = adjacencyList.get(start);

    for(const destination of destinations){
        if(destination === 'BKK') {
            console.log('DFS found Bangkok')
            return;
        }

        if(!visited.has(destination)){
            dfs(destination, visited);
        }
    }
} 

dfs('PHX');