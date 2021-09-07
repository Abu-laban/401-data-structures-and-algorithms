'use strict';

class Queue {
    constructor() { this.storage = new Array(); }

    enqueue(item) { this.storage.push(item); }

    dequeue() { return this.storage.shift(); }

    peek() { return this.storage[0]; }

    isEmpty() {
        if (this.peek() === undefined) { return true; }
        else return false;
    }

}

class Node {
    constructor(value, parent = null, children = []) {
        this.value = value;
        this.parent = parent;
        this.children = children;
    }
}

class K_aryTree {
    constructor(value) {
        var node = new Node(value);
        this.root = node;
    }

    fizzBuzzTree() {
        var currentNode = this.root;
        var queue = new Queue();
        while (currentNode && currentNode.children) {
            for (let i = 0; i < currentNode.children.length; i++) {
                queue.enqueue(currentNode.children[i]);
            }
            if (currentNode.value % 15 === 0) {
                currentNode.value = 'FizzBuzz';
            } else if (currentNode.value % 5 === 0) {
                currentNode.value = 'Buzz';
            } else if (currentNode.value % 3 === 0) {
                currentNode.value = 'Fizz';
            } else {
                currentNode.value = String(currentNode.value);
            }
            currentNode = queue.dequeue();
        }
        return this;
    }

}

describe('With the Binary Tree constructor class', () => {

    var tree = new K_aryTree(1);
    tree.root.children.push(new Node(3));
    tree.root.children[0].parent = tree;
    tree.root.children.push(new Node(5));
    tree.root.children[1].parent = tree;
    tree.root.children.push(new Node(7));
    tree.root.children[2].parent = tree;
    tree.root.children[0].children.push(new Node(15));
    tree.root.children[0].children[0].parent = tree.root.children[0];
    tree.root.children[0].children.push(new Node(30));
    tree.root.children[0].children[1].parent = tree.root.children[0];
    tree.fizzBuzzTree();

    it('It should replace values divisible by 3 with "Fizz"', () => {
        expect(tree.root.children[0].value).toBe('Fizz');
    });


    it('It should replace values divisible by 5 with "Buzz"', () => {
        expect(tree.root.children[1].value).toBe('Buzz');
    });


    it('It should replace values divisible by 3 and 5 with "FizzBuzz"', () => {
        expect(tree.root.children[0].children[0].value).toBe('FizzBuzz');
        expect(tree.root.children[0].children[1].value).toBe('FizzBuzz');
    });


    it('It should turn the value into a string if the value is not divisiable by 3 and/or 5', () => {
        expect(tree.root.value).toBe('1');
        expect(tree.root.children[2].value).toBe('7');
    });

});
