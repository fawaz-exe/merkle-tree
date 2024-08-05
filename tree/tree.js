import * as crypto from "crypto";

const generateHash = (content) => {
    return crypto.createHash('sha256').update(content).digest('hex');
}

class MerkleTree{
    constructor(name, content , level , parent){
        this.name = name;
        this.content = content;
        this.level = level;
        this.parent = parent;

        this.children = [];

        this.hash = generateHash(JSON.stringify({
            name, level, content
        }))
    }

    setContent(content){
        this.content = content;

        this.hash = generateHash(JSON.stringify({
            type: this.type,
            name: this.name,
            level: this.level,
            content: this.content
        }))

        this.parent.updateChildrenHashes()
    }

    updateChildrenHashes(){
        this.hash = generateHash(this.getChildHashes());
        this.parent && this.parent.updateChildrenHashes();
    }

    getChildHashes(){
        return this.children.reduce((previous, current)=>  previous += current.hash,'');
    }

    addChild(node){
        this.children.push(node);
        this.hash = generateHash(this.getChildHashes());
    }
}

const root = new MerkleTree('rootnode', 'root', 0);
const child1 = new MerkleTree('child1', 'child 1 content', root.level + 1, root);
const child2 = new MerkleTree('child2', 'child2 content', root.level + 1, root);
const child3 = new MerkleTree('child3', 'child3 content', child1.level + 1, child1);

child1.addChild(child3);

root.addChild(child1);
root.addChild(child2);

child3.setContent(`Hey I'm Changing!`);

console.log('Root.Hash : ',root.hash);
// console.log(child1);
// console.log(child2);

// Root.hash: bee1360917ba70222e1407031c2831510dec4c6f0eef53c4e43591b9b8533d75

/**
 *          Root [bee1360917ba70222e1407031c2831510dec4c6f0eef53c4e43591b9b8533d75]
 *          /   \
 *   Child1[#x] Child2 [#y] 
 * 
 * 
 *  Child1# + Child2# => #x + #y = Root#
 *  Root# = #x#y  
 */