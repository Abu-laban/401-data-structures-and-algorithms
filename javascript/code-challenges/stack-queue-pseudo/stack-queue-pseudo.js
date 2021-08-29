'use strict';

const Stack = require('./stack');

class PseudoQueue {
    constructor() {
        this.stackA = new Stack();
        this.stackB = new Stack();
    }

    enqueue(value) {
        this.stackA.push(value);
        return this.stackA.peek();
    }

    dequeue() {

        if (this.stackB.peek() !== 'stack is empty') {
            return this.stackB.pop();
        }

        while (this.stackA.peek() !== 'stack is empty') {
            this.stackB.push(this.stackA.pop());
        }
        return this.stackB.pop();
    }
}
module.exports = PseudoQueue;
