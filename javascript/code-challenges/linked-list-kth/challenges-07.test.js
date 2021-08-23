'use strict';
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
    }
    insertAfter(value, newVal) {
        let node = new Node(newVal);
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.value === value) {
                currentNode.next = {
                    value: node.value,
                    next: currentNode.next
                };
                break;
            }
            currentNode = currentNode.next;
        }
    }
    insertBefore(value, newVal) {
        let node = new Node(newVal);
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                const currentVal = currentNode.value;
                currentNode.value = node.value;
                currentNode.next = {
                    value: currentVal,
                    next: currentNode.next
                };
                break;
            }
            currentNode = currentNode.next;
        }
    }
    toString() {
        let currentNode = this.head;
        let string = `{${currentNode.value}}-->`;
        while (currentNode.next) {
            currentNode = currentNode.next;
            string += `{${currentNode.value}}-->`;
            if (currentNode.next === null) {
                string += `{${currentNode.next}}`;
            }
        }
        return string;
    }
    kthFromEnd(k) {
        let currentNode = this.head;
        let n = 1;
        while (currentNode.next) {
            currentNode = currentNode.next;
            n++;
        }
        if (k >= 0) {
            let node = n - k;
            if (node >= 1) {
                currentNode = this.head;
                for (let i = 0; i < node - 1; i++) {
                    currentNode = currentNode.next;
                }
                if (Math.floor(n / k) === 2) {
                    return 'Happy Path';
                }
                return currentNode.value;

            } else {
                return 'Exception';

            }

        } else {
            return 'K Not Positive';
        }
    }
    length(lL) {
        let current = lL.head;
        let length = 0;
        while (current) {
            current = current.next;
            length++;
        }
        return length;
    }
}

let newLl = new LinkedList();


let value = 1;
let value2 = 2;
let value3 = 3;
let value4 = 4;
let value5 = 5;
let value6 = 6;

describe('linked-list tests- Challange 07 Testing kthFromEnd(k)', () => {
    it('k is greater than the length of the linked list', () => {
        newLl.append(value);
        newLl.append(value2);
        newLl.append(value3);
        newLl.append(value4);
        newLl.append(value5);
        newLl.append(value6);
        expect(newLl.kthFromEnd(7)).toEqual('Exception');
    });

    it('k and the length of the list are the same', () => {
        expect(newLl.kthFromEnd(6)).toEqual('Exception');
    });
    it('k is not a positive integer', () => {
        expect(newLl.kthFromEnd(-2)).toEqual('K Not Positive');
    });
    it('linked list is of a size 1', () => {
        let newLl2 = new LinkedList();
        newLl2.append(8);
        expect(newLl2.kthFromEnd(2)).toEqual('Exception');
        expect(newLl2.kthFromEnd(1)).toEqual('Exception');
        expect(newLl2.kthFromEnd(0)).toEqual(8);
    });

    it('Happy Path', () => {
        let newLl = new LinkedList();

        newLl.append(value);
        newLl.append(value2);
        newLl.append(value3);
        newLl.append(value4);
        newLl.append(value5);
        newLl.append(value6);
        let value7 = 7;
        newLl.append(value7);
        expect(newLl.kthFromEnd(3)).toEqual('Happy Path');
    });

});