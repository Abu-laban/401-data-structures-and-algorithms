'use strict';

const BinaryTree = require('./BinaryTree');
const Node = require('./node');
const BinarySearchTree = require('./BinarySearchTree');
let tree = null;

describe('Binary Tree', () => {

    beforeAll(() => {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);

        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five;

        // create a tree and pass root to it
        tree = new BinaryTree(one);
    });

    it('constructor', () => {
        const newTree = new BinaryTree();
        expect(newTree.root).toBeNull();
        expect(tree.root.value).toEqual(1);
    });

    it('preOrder', () => {
        let expectedOutput = [1, 2, 6, 7, 8, 9, 3, 4, 5];
        let preOrder = tree.preOrder();
        // console.log('preOrder output ---->', preOrder);
        expect(preOrder).toEqual(expectedOutput);
    });

    it('inOrder', () => {
        let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
        let inOrder = tree.inOrder();
        // console.log('inOrder output ---->', inOrder);
        expect(inOrder).toEqual(expectedOutput);
    });

    it('postOrder', () => {
        let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
        let postOrder = tree.postOrder();
        // console.log('postOrder output ---->', postOrder);
        expect(postOrder).toEqual(expectedOutput);
    });

});

describe('Binary Search & Binary Search Tree', () => {
    it('Can successfully instantiate an empty tree', () => {
        let tree = new BinarySearchTree();
        expect(tree.root).toEqual(null);
    });

    it('Can successfully instantiate a tree with a single root node', () => {
        let tree = new BinarySearchTree();
        tree.add(1);
        expect(tree.root.value).toEqual(1);
        expect(tree.contains(1)).toEqual(true);
    });

    it('Can successfully add a left child and right child to a single root node', () => {
        let tree = new BinarySearchTree();
        tree.add(2);
        tree.add(1);
        tree.add(9);
        expect(tree.root.value).toEqual(2);
        expect(tree.root.left.value).toEqual(1);
        expect(tree.root.right.value).toEqual(9);
    });

    it('Can successfully return a collection from a preorder traversal', () => {
        let expextedValue = [20, 11, 3, 9, 14, 31, 62, 57, 72, 90]
        let tree = new BinarySearchTree();
        tree.add(20)
        tree.add(31)
        tree.add(11)
        tree.add(3)
        tree.add(9)
        tree.add(62)
        tree.add(57)
        tree.add(72)
        tree.add(14)
        tree.add(90)
        // console.log('=======>>>>', tree.preOrder());
        expect(tree.preOrder()).toEqual(expextedValue);
    });

    it('Can successfully return a collection from an inorder traversal', () => {
        let expextedValue = [3, 9, 11, 14, 20, 31, 57, 62, 72, 90]
        let tree = new BinarySearchTree();
        tree.add(20)
        tree.add(31)
        tree.add(11)
        tree.add(3)
        tree.add(9)
        tree.add(62)
        tree.add(57)
        tree.add(72)
        tree.add(14)
        tree.add(90)
        // console.log('=======>>>>', tree.inOrder());
        expect(tree.inOrder()).toEqual(expextedValue);
    });

    it('Can successfully return a collection from a postorder traversal', () => {
        let expextedValue = [9, 3, 14, 11, 57, 90, 72, 62, 31, 20]
        let tree = new BinarySearchTree();
        tree.add(20)
        tree.add(31)
        tree.add(11)
        tree.add(3)
        tree.add(9)
        tree.add(62)
        tree.add(57)
        tree.add(72)
        tree.add(14)
        tree.add(90)
        // console.log('=======>>>>', tree.postOrder());
        expect(tree.postOrder()).toEqual(expextedValue);
    });

});
