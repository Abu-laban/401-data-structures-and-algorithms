'use strict';

// BT, not a BST. BST are presorted
class BinaryTree {

    constructor(root = null) {
        this.root = root;
    }

    // ------- DEPTH FIRST SEARCH TRAVERSAL METHODS | RECURSIVE -------
    // D - data, L - left, R - right
    preOrder() { // D, L , R
        let results = [];
        let _walk = node => { // _variable means that the function is recursive
            // Not a loop, just an 'im here? is there a L or R? yes no.
            results.push(node.value); // read the data
            if (node.left) _walk(node.left); //go left. If null we are at a leaf
            if (node.right) _walk(node.right); // go right. If null we are at a leaf
        };
        // because it's recursive it adds to the callstack. That's how it knows how to navigate
        // back to the root node after traversing down to a leaf
        _walk(this.root);
        return results;
    }

    inOrder() { // L, D ,R
        let results = [];
        let _walk = node => {
            if (node.left) _walk(node.left);
            results.push(node.value);
            if (node.right) _walk(node.right);
        };
        _walk(this.root);
        return results;
    }

    postOrder() { // L, R ,D
        let results = [];
        let _walk = node => {
            if (node.left) _walk(node.left);
            if (node.right) _walk(node.right);
            results.push(node.value);
        };
        _walk(this.root);
        return results;
    }

    findMaxValue() {
        let array = this.postOrder();
        // console.log(array);
        let currentMax = array[0];
        for (var i = 1; i < array.length; i++) {
            if (array[i] > currentMax) {
                currentMax = array[i];
            }
        }
        return currentMax;
    }

}

module.exports = BinaryTree;
