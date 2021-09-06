'use strict';

const Node = require('./node');
const BinaryTree = require('./binary-tree');
const BinarySearchTree = require('./binary-search-tree');

// =============== BT tests ===============
describe('With the Binary Tree constructor class', () => {

    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    let bt = new BinaryTree(one);

    it('a new node can be created and added to the tree', () => {
        expect(bt.root).toBeTruthy();
        expect(bt.root.left).toBeTruthy();
        expect(bt.root.right).toBeTruthy();
    });

    it('a node has a value left & right property', () => {
        expect(bt.root.left.value).toBe(2);
        expect(bt.root.right.value).toBe(3);
    });

    it('preOrder will log or traverse in the right way', () => {
        expect(bt.preOrder()).toEqual([1, 2, 3, 4, 5]);
    });

    it('inOrder will log or traverse in the right way', () => {
        expect(bt.inOrder()).toEqual([2, 1, 4, 3, 5]);
    });

    it('postOrder will log or traverse in the right way', () => {
        expect(bt.postOrder()).toEqual([2, 4, 5, 3, 1]);
    });

});

describe('With the findMaxValue method on the Binary Tree constructor class', () => {

    it('should return the highest value in a binary tree', () => {
        let a = new Node(1);
        let b = new Node(2);
        let c = new Node(3);
        let d = new Node(4);
        let e = new Node(5);
        let f = new Node(6);
        let g = new Node(7);
        let h = new Node(8);
        let i = new Node(9);
        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        e.left = g;
        e.right = h;
        c.right = f;
        f.left = i;
        let bt = new BinaryTree(a);
        expect(bt.findMaxValue()).toBe(9);
    });

    it('should work on negative numbers', () => {
        let a = new Node(-1);
        let b = new Node(-2);
        let c = new Node(-3);
        let d = new Node(-4);
        let e = new Node(-5);
        let f = new Node(-6);
        let g = new Node(-7);
        let h = new Node(-8);
        let i = new Node(-9);
        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        e.left = g;
        e.right = h;
        c.right = f;
        f.left = i;
        let bt = new BinaryTree(a);
        expect(bt.findMaxValue()).toBe(-1);
    });

    it('It should work on a non-sorted tree', () => {
        let a = new Node(21);
        let b = new Node(4);
        let c = new Node(90);
        let d = new Node(17);
        let e = new Node(6);
        let f = new Node(10);
        let g = new Node(54);
        let h = new Node(100);
        let i = new Node(-7);
        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        e.left = g;
        e.right = h;
        c.right = f;
        f.left = i;
        let bt = new BinaryTree(a);
        expect(bt.findMaxValue()).toBe(100);
    });

});

describe('With the breadthFirstSearch method on the Binary Tree constructor class', () => {
    it('should return an array with the values in breadth first order', () => {
        let a = new Node(2);
        let b = new Node(7);
        let c = new Node(5);
        let d = new Node(2);
        let e = new Node(6);
        let f = new Node(9);
        let g = new Node(5);
        let h = new Node(11);
        let i = new Node(4);
        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        e.left = g;
        e.right = h;
        c.right = f;
        f.left = i;
        let bt = new BinaryTree(a);
        expect(bt.breadthFirstSearch()).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
    });
});

// =============== BST tests ===============
describe('With the binary search tree constructor class,', () => {

    let sortedTree = new BinarySearchTree();
    sortedTree.add(7);
    sortedTree.add(3);
    sortedTree.add(9);
    sortedTree.add(5);
    sortedTree.add(11);
    sortedTree.add(8);
    sortedTree.add(1);
    sortedTree.add(2);
    // console.log(sortedTree);

    it('a new node can be created and added to the tree, keeping the tree appropriately sorted', () => {
        expect(sortedTree.root.value).toBe(7);
        expect(sortedTree.root.left.value).toBe(3);
        expect(sortedTree.root.left.left.value).toBe(1);
        expect(sortedTree.root.left.right.value).toBe(5);
        expect(sortedTree.root.left.left.right.value).toBe(2);
        expect(sortedTree.root.right.value).toBe(9);
        expect(sortedTree.root.right.right.value).toBe(11);
        expect(sortedTree.root.right.left.value).toBe(8);
    });

    it('contains will return true if the tree contains the value', () => {
        expect(sortedTree.contains(2)).toBe(true);
    });

    it('contains will return false if the tree contains the value', () => {
        expect(sortedTree.contains(20)).toBe(false);
    });

});