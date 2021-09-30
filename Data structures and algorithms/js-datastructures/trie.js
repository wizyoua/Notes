class TrieNode {
    constructor() {
        this.value = null;
        //generates array with 26 empty items
        this.children = Array(26);
    }
}

class Trie {

    constructor(){
        this.root = new TrieNode(null);
    }

    insert(key, value) {

        let node = this.root;
        for (let i = 0; i < key.length; i++) {
            //gets the correct Char code of alphabet index
            const alphabetIndex = key[i].charCodeAt(0) -97;
            
            if(!node.children[alphabetIndex]){
                const newNode = new TrieNode(null);
                node.children[alphabetIndex] = newNode;
            }

            //overwrite node with nested node to walk through entire string of characters
            node = node.children[alphabetIndex];
        }
        node.value = value;
    }

    find(key){
        let node = this.root;

        for (let i = 0; i < key.length; i++) {
            const alphabetIndex = key[i].charCodeAt(0) -97;
            
            if(!node.children[alphabetIndex]){
                return false;
            }

            node = node.children[alphabetIndex];
        }

        if(node.value === null) {
            return false;
        }
        return node;
    }

    remove(key){
        //its important to just delete last node that has our value, not really delete node just set it to null
        const node = this.find(key);

        node.value = null;
    }
}

const trie = new Trie();

trie.insert('age', 31);
trie.insert('name', 'Max');
trie.insert('names', ['Max','Manual']);

trie.remove('name');

console.log(trie);

console.log(trie.find('age'));
console.log(trie.find('names'));
console.log(trie.find('name'));
console.log(trie.find('hobby'));