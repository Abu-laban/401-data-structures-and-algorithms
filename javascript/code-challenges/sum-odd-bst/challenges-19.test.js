'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }
    addValue(value) {
        let myNode = new Node(value);
        if (this.root === null) {
            this.root = myNode;
        } else {
            this.checkMax(this.root, myNode);
        }
    }
    contains(value) {
        let temp = this.root;
        while (temp) {
            if (temp.value === value) {
                return true;
            }
            if (value < temp.value) {
                temp = temp.left;
            } else {
                temp = temp.right;
            }
        }
        return false;
    }

    checkMax(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.checkMax(root.left, node);
            }
        } else if (node.value > root.value) {
            if (root.right === null) {
                root.right = node;
            } else {
                this.checkMax(root.right, node);
            }
        }
    }
    //sumOddNumbers function
    sumOddNumbers() {
        let result = [];
        let oddNum = (node) => {
            if (node !== null && node.value % 2 !== 0) {
                result.push(node.value);
            }
            if (node.left) {
                oddNum(node.left);
            }
            if (node.right) {
                oddNum(node.right);
            }
        };
        oddNum(this.root);
        let sum = 0;
        for (let i = 0; i < result.length; i++) {
            sum += result[i];
        }
        return sum;
    }
}




describe('Binary Search Tree Working', () => {
    let bst = new BinarySearchTree();

    it('successfully instantiate an empty tree', () => {
        expect(bst.root).toBeNull();
    });
    it('successfully instantiate a tree with a single root node', () => {
        bst.addValue(10);
        expect(bst.root.value).toEqual(10);
        expect(bst.left).toBeFalsy();
        expect(bst.right).toBeFalsy();
    });
    it('successfully add a left child and right child to a single root node', () => {
        bst.addValue(10);
        bst.addValue(5);
        bst.addValue(15);
        expect(bst.root.value).toEqual(10);
        expect(bst.root.left.value).toEqual(5);
        expect(bst.root.right.value).toEqual(15);
    });
    it('successfully add a left child and right child to a single root node', () => {
        bst.addValue(10);
        bst.addValue(5);
        bst.addValue(15);
        expect(bst.contains(5)).toBe(true);
        expect(bst.contains(3)).toBe(false);
    });
    //test for sum odd numbers
    it('successfully return the sum of odd numbers', () => {
        bst.addValue(10);
        bst.addValue(5);
        bst.addValue(15);
        bst.addValue(9);
        expect(bst.sumOddNumbers()).toBe(29);
    });

});