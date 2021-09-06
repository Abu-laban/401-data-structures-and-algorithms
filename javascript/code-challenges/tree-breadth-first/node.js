'use strict';

class Node {
    constructor(value, left = null, right = null) { // new with E6
        this.value = value;
        this.left = left; // left subtree (not value). Obj with left & right
        this.right = right; // right subtree (not a value) Obj with left & right
    }
}

module.exports = Node;