'use strict';

class Stack {
    constructor() {
        this.storage = new Array();
        this.top = null;
    }

    push(item) {
        this.storage.unshift(item);
        this.top = item;
    }

    peek() { return this.top; }

    pop() {
        let item = this.storage.shift();
        this.top = this.storage[0];
        return item;
    }

    isEmpty() {
        if (this.top === undefined) { return true; }
        else return false;
    }

}

class Queue {
    constructor() { this.storage = new Array(); }

    enqueue(item) { this.storage.push(item); }

    dequeue() { return this.storage.shift(); }

    peek() { return this.storage[0]; }

    isEmpty() {
        if (this.peek() === undefined) { return true; }
        else return false;
    }

}

describe('Stack Tests', () => {

    describe('Push', () => {

        it('1. Can successfully push onto a stack', () => {
            let stack = new Stack();
            stack.push(1);
            expect(stack.top).toEqual(1);
        });

        it('2. Can successfully push multiple values onto a stack', () => {
            let stack = new Stack();
            stack.push(2);
            expect(stack.top).toEqual(2);
            stack.push(3);
            expect(stack.top).toEqual(3);
        });

    });

    describe('Pop', () => {

        it('3. Can successfully pop off the stack', () => {
            let stack = new Stack();
            stack.push(4);
            stack.push(5);
            stack.push(6);
            expect(stack.pop()).toEqual(6);
            expect(stack.pop()).toEqual(5);
            expect(stack.pop()).toEqual(4);
        });

        it('4. Can successfully empty a stack after multiple pops', () => {
            let stack = new Stack();
            stack.push(7);
            stack.push(8);
            stack.push(9);
            stack.pop();
            stack.pop();
            stack.pop();
            expect(stack.isEmpty()).toEqual(true);

        });

    });

    describe('Peek', () => {

        it('5. Can successfully peek the next item on the stack', () => {
            let stack = new Stack();
            stack.push(10);
            expect(stack.peek()).toEqual(10);
            stack.push(11);
            expect(stack.peek()).toEqual(11);
        });

    });

    it('6. Can successfully instantiate an empty stack', () => {
        let stack = new Stack();
        expect(stack).toBeInstanceOf(Stack);
        expect(stack instanceof Stack).toBeTruthy();
        expect(stack.top).toBeNull();
    });

    it('7. Calling pop or peek on empty stack raises exception', () => {
        let stack = new Stack();
        let raises = stack.pop();
        expect(stack.pop()).toBeUndefined();
        expect(stack.peek()).toBeUndefined();
        expect(raises).toEqual(undefined);
    });

});

describe('Queue Tests', () => {

    it('8. Can successfully enqueue into a queue', () => {
        let queue = new Queue();
        expect(queue instanceof Queue).toBeTruthy();
    });


    it('9. Can successfully enqueue multiple values into a queue', () => {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.peek()).toEqual(1);
    });

    it('10. Can successfully dequeue out of a queue the expected value', () => {
        let queue = new Queue();
        queue.enqueue(3);
        expect(queue.dequeue()).toEqual(3);
    });

    it('11. Can successfully peek into a queue, seeing the expected value', () => {
        let queue = new Queue();
        queue.enqueue(4);
        queue.enqueue(5);
        queue.enqueue(6);
        queue.enqueue(7);
        expect(queue.peek()).toEqual(4);
    });


    it('12.Can successfully empty a queue after multiple dequeues', () => {
        let queue = new Queue();
        queue.enqueue(8);
        queue.enqueue(9);
        queue.enqueue(10);
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        expect(queue.isEmpty()).toEqual(true);
    });

    it('13. Can successfully instantiate an empty queue', () => {
        let queue = new Queue();
        expect(queue).toBeInstanceOf(Queue);
        expect(queue.isEmpty()).toEqual(true);
    });

    it('14. Calling dequeue or peek on empty queue raises exception', () => {
        let queue = new Queue();
        expect(queue.peek()).toBeUndefined();
        expect(queue.dequeue()).toBeUndefined();
        expect(queue.isEmpty()).toEqual(true);
    });

});
