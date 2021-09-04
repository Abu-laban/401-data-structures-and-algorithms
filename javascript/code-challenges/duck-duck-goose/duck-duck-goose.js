'use strict';
const Node = require('./node');
class DuckDuckGoose {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }
    DuckDuckGoose(queue, k) {
        let counter = 0;

        let currentNode = queue.front;

        while (currentNode.next) {
            counter++;
            if (counter !== k) {
                queue.enqueue(queue.dequeue());
            } else {
                queue.dequeue();
                counter = 0;
            }
            currentNode = currentNode.next;
        }
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
module.exports = DuckDuckGoose;
