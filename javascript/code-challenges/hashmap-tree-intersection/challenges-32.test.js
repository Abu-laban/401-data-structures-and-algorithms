'use strict';

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
}

class BinaryTree {
    constructor(node = null) {
        this.root = node;
    }

    preOrder() {
        // root - left - right
        let str = "";
        function preOrderTraverse(node) {
            str = `${str}${node.value} > `;
            if (node.left) {
                preOrderTraverse(node.left);
            }
            if (node.right) {
                preOrderTraverse(node.right);
            }
        }
        preOrderTraverse(this.root);
        return str;
    }

    inOrder() {
        //  left - root - right
        let str = "";
        function inOrderTraverse(node) {
            if (node.left) {
                inOrderTraverse(node.left);
            }
            str = `${str}${node.value} > `;
            if (node.right) {
                inOrderTraverse(node.right);
            }
        }

        inOrderTraverse(this.root);
        return str;
    }

    postOrder() {
        //  left - right - root
        let str = "";
        function inOrderTraverse(node) {
            if (node.left) {
                inOrderTraverse(node.left);
            }
            if (node.right) {
                inOrderTraverse(node.right);
            }
            str = `${str}${node.value} > `;
        }

        inOrderTraverse(this.root);
        return str;
    }

    //finMax - challange 16
    finMax() {
        //traverse the tree by preorder method.
        // root - left - right
        let maxValue;
        function preOrderTraverse(node) {
            if (maxValue) {
                if (node.value > maxValue) {
                    maxValue = node.value;
                }
            } else {
                maxValue = node.value;
            }

            if (node.left) {
                preOrderTraverse(node.left);
            }
            if (node.right) {
                preOrderTraverse(node.right);
            }
        }
        preOrderTraverse(this.root);
        return maxValue;
    }
}

class Hashmap {
    constructor(size) {
        this.size = size;
        this.storage = new Array(size);
    }
    //key = name ==> 400
    // hash
    hash(key) {
        const sumCharCode = key.split("").reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0);
        const hashKey = (sumCharCode * 19) % this.size;
        return hashKey;
    }

    // add
    add(key, value) {
        // get an index
        let hash;
        if (typeof key == "number") {
            hash = key;
        } else {
            hash = this.hash(key);
        }
        // console.log("Key", hash);
        // we need to check if a value already exist in the index
        if (!this.storage[hash]) {
            const ll = new LinkedList();
            ll.insert({ [key]: value });
            this.storage[hash] = ll; // [222] = {head:{value:{"key","value"},next:null}}
        } else {
            this.storage[hash].insert({ [key]: value });
        }
    }

    // get
    get(key) {
        const hash = this.hash(key);
        if (this.storage[hash]) {
            let currentNode = this.storage[hash].head;
            while (currentNode) {
                if (currentNode.value[key]) {
                    return currentNode.value[key];
                }
                currentNode = currentNode.next;
            }
        } else {
            return null;
        }
    }

    // contains
    contains(key) {
        const hash = this.hash(key);
        if (this.storage[hash]) {
            let currentNode = this.storage[hash].head;
            while (currentNode) {
                if (currentNode.value[key]) {
                    return true;
                }
                currentNode = currentNode.next;
            }
        } else {
            return false;
        }
    }

    // repeatedWord
    repeatedWord(string) {
        const arr = string.split(/[ ,]+/);
        let key;
        let hash;
        for (let i = 0; i < arr.length; i++) {
            key = arr[i].toLowerCase();
            this.add(key, "noValue");
            hash = this.hash(key);
            if (this.storage[hash].head.next) {
                return key;
            }
        }
    }

    // treeIntersection
    treeIntersection(firstTree, secondTree) {
        let key;
        let counter = 0;
        let hash;
        let results = [];
        let traverseTree = (node) => {
            key = node.value;
            this.add(key, "noValue");
            if (counter > 0) {
                typeof key == "number" ? (hash = key) : this.hash(key);
                if (this.storage[hash].head.next) {
                    results.push(hash);
                }
            }
            if (node.left) {
                traverseTree(node.left);
            }
            if (node.right) {
                traverseTree(node.right);
            }
        };
        traverseTree(firstTree.root);
        counter++;
        traverseTree(secondTree.root);

        return results;
    }
}


describe("TREES INTERSECTION TESTS", () => {
    let firstTree;
    let secondTree;
    beforeAll(() => {
        //first tree
        let one = new Node(150);
        let two = new Node(100);
        let three = new Node(250);
        let four = new Node(75);
        let five = new Node(160);
        let six = new Node(125);
        let seven = new Node(175);
        let eight = new Node(200);
        let nine = new Node(350);
        let ten = new Node(300);
        let eleven = new Node(500);

        one.left = two;
        one.right = three;
        two.left = four;
        two.right = five;
        five.left = six;
        five.right = seven;
        three.right = eight;
        three.left = nine;
        nine.left = ten;
        nine.right = eleven;

        //second tree
        let one2 = new Node(42);
        let two2 = new Node(100);
        let three2 = new Node(600);
        let four2 = new Node(15);
        let five2 = new Node(160);
        let six2 = new Node(125);
        let seven2 = new Node(175);
        let eight2 = new Node(200);
        let nine2 = new Node(350);
        let ten2 = new Node(4);
        let eleven2 = new Node(500);

        one2.left = two2;
        one2.right = three2;
        two2.left = four2;
        two2.right = five2;
        five2.left = six2;
        five2.right = seven2;
        three2.right = eight2;
        three2.left = nine2;
        nine2.left = ten2;
        nine2.right = eleven2;

        firstTree = new BinaryTree(one);
        secondTree = new BinaryTree(one2);
    });
    // successfuly return the common nodes between two trees
    it("1.successfuly return the common nodes between two trees", () => {
        let hashTable = new Hashmap(5000);
        let expectedResults = [100, 160, 125, 175, 350, 500, 200];

        expect(hashTable.treeIntersection(firstTree, secondTree)).toEqual(
            expectedResults
        );
    });

    // check the next of uncommon elements is null in the hash table
    it("2.check the next of uncommon elements is null in the hash table", () => {
        let hashTable = new Hashmap(5000);
        let expectedResults = [100, 160, 125, 175, 350, 500, 200];
        expect(hashTable.treeIntersection(firstTree, secondTree)).toEqual(
            expectedResults
        );
        expect(hashTable.storage[42].head.next).toBeNull();
        expect(hashTable.storage[100].head.next).toBeTruthy();
    });
});