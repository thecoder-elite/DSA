class TrieNode {
    children: { [key: string]: TrieNode };
    isEnd: boolean;
}

function createNode(): TrieNode {
    return {
        children: {},
        isEnd: false
    }
}

class Trie{
    root = createNode();

    addString(word:string){
        let node = this.root;
        for(let char of word){
            if(!(char in node.children)){
                node.children[char] = createNode();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }

    lookup(word:string){
        let node = this.root;
        for(let char of word){
            if(!(char in node.children)){
                return `Couldn't find: ${word}`
            }
            node = node.children[char];
        }
        return node.isEnd ? `Found word: ${word}` : `Couldn't find: ${word}`
    }
}

let trie = new Trie();
trie.addString('apple');
trie.addString('apply');
trie.addString('ape');
console.log(trie.lookup('apply'));
console.log(trie.lookup('ape'));