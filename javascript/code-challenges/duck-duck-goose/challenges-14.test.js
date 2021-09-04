'use strict';
const DuckDuckGoose = require('./duck-duck-goose');
const Queue = require('./queue');
describe('DuckDuckGoose Tests ', () => {
    let queue;
    beforeEach(() => {
        queue = new Queue();
        queue.enqueue('A');
        queue.enqueue('B');
        queue.enqueue('C');
        queue.enqueue('D');
        queue.enqueue('E');
    });
    it('1.Can successfully multiple enqueue into a queue', () => {
        expect(queue.front.value).toBe('A');
        expect(queue.front.next.value).toBe('B');
        expect(queue.front.next.next.value).toBe('C');
        expect(queue.front.next.next.next.value).toBe('D');
        expect(queue.front.next.next.next.next.value).toBe('E');
    });

    it('2.Can successfully DuckDuckGoose for 3 times', () => {
        let duckGooseQueue = new DuckDuckGoose();
        duckGooseQueue.DuckDuckGoose(queue, 3);

        expect(queue.front.value).toBe('D');
        expect(queue.back.value).toBe('D');
        expect(queue.front.next).toBeNull();
    });

    it('3.Can successfully DuckDuckGoose for different numbers (2 as example)', () => {
        let duckGooseQueue = new DuckDuckGoose();
        duckGooseQueue.DuckDuckGoose(queue, 2);

        expect(queue.front.value).toBe('C');
        expect(queue.back.value).toBe('C');
        expect(queue.front.next).toBeNull();
    });

    it('4.Can successfully DuckDuckGoose for different numbers (1 as example)', () => {
        let duckGooseQueue = new DuckDuckGoose();
        duckGooseQueue.DuckDuckGoose(queue, 1);

        expect(queue.front.value).toBe('E');
        expect(queue.back.value).toBe('E');
        expect(queue.front.next).toBeNull();
    });

    it('5.Can successfully DuckDuckGoose for different numbers (5 as example)', () => {
        let duckGooseQueue = new DuckDuckGoose();
        duckGooseQueue.DuckDuckGoose(queue, 5);

        expect(queue.front.value).toBe('B');
        expect(queue.back.value).toBe('B');
        expect(queue.front.next).toBeNull();
    });
});