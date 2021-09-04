'use strict';
const Node = require('./node');
class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }
    enqueue(value) {
        let node = new Node(value);
        if (this.front) {
            this.back.next = node;
            this.back = node;
            this.length++;
        } else {
            this.back = node;
            this.front = this.back;
            this.length++;
        }
    }
    dequeue() {
        if (this.front) {
            let lastNode = this.front;
            let popedNode = lastNode.value;
            this.front = this.front.next;
            this.length--;
            return popedNode;
        } else {
            return 'empty queue';
        }
    }
    peek() {
        let peek;
        if (this.front) {
            peek = this.front.value;
            return peek;
        } else {
            return 'empty queue';
        }
    }
    isEmpty() {
        if (this.front) {
            return 'full queue';
        } else {
            return 'empty queue';
        }
    }
}
module.exports = Queue;