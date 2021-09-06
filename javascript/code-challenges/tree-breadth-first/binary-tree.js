'use strict';

class BinaryTree {

	constructor(root = null) {
		this.root = root;
	}

	// ------- DEPTH FIRST SEARCH TRAVERSAL METHODS | RECURSIVE -------
	// D - data, L - left, R - right
	preOrder() { // D, L , R
		let results = [];
		let _walk = node => { // _variable means that the function is recursive. Not a loop, just an 'im here? is there a L or R? yes no.
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
		let array = this.postOrder(); //use one of the above methods
		let currentMax = array[0]; // initialized currentMax as the first value in the returned array
		for (var i = 1; i < array.length; i++) { // loop over the array starting at the second value, to compare the first two values
			if (array[i] > currentMax) { // if the second value is less than the first value
				currentMax = array[i]; // make the second value the new max, and continue looping
			}
		}
		return currentMax; // once you have gone through the entier array, return the biggest value
	}

	breadthFirstSearch() {
		let node = this.root; // your first node initalizes at the root
		let data = []; // make an empty array to hold the VALUE of the nodes
		let queue = []; // make an empty array to hold ALL of the nodes
		queue.push(node); // push the root node into the queue array
		while (queue.length) { // while queue array has items
			node = queue.shift(); // node is equal to the first item in the queue
			data.push(node.value); // push the value of that node into the data array
			if (node.left) queue.push(node.left); // if there is a left node, push it into the queue array
			if (node.right) queue.push(node.right); // if there is a right node, push it into the queue array
		}
		return data; // return the data array which will have the values in breadth first order
	}

}

module.exports = BinaryTree;
