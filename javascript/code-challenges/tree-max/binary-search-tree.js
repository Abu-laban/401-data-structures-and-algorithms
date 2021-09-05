'use strict';

const Node = require('./node');

class BinarySearchTree {

    constructor(root = null) {
        this.root = root;
    }

    // ------- ADD/INSERT new node in the correct location -------
    add(value) {
        let newNode = new Node(value); // instantiate new node
        if (!this.root) { // If there is no root
            this.root = newNode; // This node becomes the root of the tree
            return this; // return the tree
        } else { // otherwise
            let current = this.root; // create variable current which you are going to compare the node you created to. Comparison starts at the root
            while (current) { // creates the traversal
                if (value === current.value) return null; // EDGE CASE: If the value already exists in the tree return null
                if (value < current.value) { // if value of the newNode is less than the current value, go LEFT
                    if (current.left === null) { // is there a left child?
                        current.left = newNode; // NOPE! Make this node the left child of the current node
                        return this; // return the tree
                    }
                    current = current.left; // otherwise, update current to be this left node, and start the comparison (while loop) again
                } else if (value > current.value) { // if value of the newNode is greater than the current value, go RIGHT
                    if (current.right === null) { // is there a right child?
                        current.right = newNode; // NOPE! make this node the right child of the current node
                        return this; // return the tree
                    }
                    current = current.right; // otherwise, update current to be this right node, and start the comparison (while loop) again
                }
            }
        }
    }

    // ------- TRUE or FALSE if value does or does not exist -------
    contains(value) {
        if (!this.root) return false; // There there is no tree, obviously this is false
        let current = this.root; // start at the root
        while (current) { // while there is something to compare it
            if (value < current.value) { // if the value is less than the current value being compared to
                current = current.left; // Move to the left. make this node to the left the new thing you are comparing to
            }
            else if (value > current.value) { // if the value is greater than the current value being compared to
                current = current.right; // Move to the right. Make this node to the right the new thing you are comparing to
            }
            else { // otherwise, the value must be equal to current
                return true; // so return TRUE becuase the BST does contain the value
            }
        }
        return false; // otherwise, you wen through the whole tree and found no matching values, so return false
    }

}

module.exports = BinarySearchTree;