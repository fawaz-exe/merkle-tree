import * as crypto from "crypto";

const generateHash = (content) => {
    crypto.createHash('sha256').update(content).digest('hex');
}

class MerkleTree{
    constructor(name, content , level , parent){
        this.name = name;
        this.content = content;
        this.level = level;
        this.parent = parent;

        this.children = [];
    }

    setContent(){
        this.content = content;
    }

    addChild(node){
        this.children.push(node);
    }
}

const root = new MerkleTree('rootnode', 'root', 0);
const child1 = new MerkleTree('child1', 'child 1 content', root.level + 1, root);
const child2 = new MerkleTree('child2', 'child2 content', root.level + 2, root);

root.addChild(child1);
root.addChild(child2);

console.log(root);
// console.log(child1);
// console.log(child2);