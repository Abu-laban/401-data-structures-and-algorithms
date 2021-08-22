'use strict';

class LinkedListNode {

    constructor(value, next) {
        this.value = value;
        this.next = next;
    }

}

class LinkedList {

    constructor() {
        this.head = null;
    }

    insert(value) {
        const node = new LinkedListNode(value);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    append(value) {
        const node = new LinkedListNode(value);
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

    insertBefore(value, addValue) {
        const node = new LinkedListNode(addValue);
        let currentNode = this.head;
        if (currentNode.value === value) {
            node.next = currentNode;
            this.head = node;
            return;
        }
        while (currentNode) {
            if (currentNode.next.value === value) {
                node.next = currentNode.next;
                currentNode.next = node;
                break;
            }

            currentNode = currentNode.next;
        }
    }

    insertAfter(value, addValue) {
        let node = new LinkedListNode(addValue);
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                node.next = currentNode.next;
                currentNode.next = node;
                return;
            }
            currentNode = currentNode.next;
        }
    }
    includes(v) {
        let currentNode = this.head;

        while (currentNode) {
            if (v === currentNode.value) {
                return true;
            } else {
                currentNode = currentNode.next;
            }
        }
        return false;
    }

    tostring() {
        let str = '';
        let currentNode = this.head;
        while (currentNode) {
            str = str + `{${currentNode.value}} ->`;

            currentNode = currentNode.next;
        }
        str = str + `NULL`;

        return str;
    }

}


describe('linked-list tests- Challange 06 ', () => {
    it('Can successfully add a node to the end of the linked list', () => {
        let ll = new LinkedList();
        ll.append('10');
        expect(ll.tostring()).toEqual('{10} ->NULL');
    });

    it('Can successfully add multiple nodes to the end of a linked list', () => {
        let ll = new LinkedList();
        ll.append('1');
        ll.append('2');
        ll.append('3');
        ll.append('4');
        ll.tostring();

        expect(ll.tostring()).toEqual('{1} ->{2} ->{3} ->{4} ->NULL');
    });

    it('Can successfully insert a node before a node located i the middle of a linked list', () => {
        let ll = new LinkedList();
        ll.insert('1');
        ll.insert('2');
        ll.insert('3');
        ll.insert('4');
        ll.insertBefore('3', 'a');
        expect(ll.tostring()).toEqual('{4} ->{a} ->{3} ->{2} ->{1} ->NULL');
    });

    it('Can successfully insert a node before the first node of a linked list', () => {
        let ll = new LinkedList();
        ll.insert('1');
        ll.insert('2');
        ll.insert('3');
        ll.insert('4');
        ll.insertBefore('4', 'a');
        expect(ll.tostring()).toEqual('{a} ->{4} ->{3} ->{2} ->{1} ->NULL');
    });

    it('Can successfully insert after a node in the middle of the linked list', () => {
        let ll = new LinkedList();
        ll.insert('1');
        ll.insert('2');
        ll.insert('3');
        ll.insert('4');
        ll.insertAfter('3', 'a');
        expect(ll.tostring()).toEqual('{4} ->{3} ->{a} ->{2} ->{1} ->NULL');
    });

    it('Can successfully insert a node after the last node of the linked list', () => {
        let ll = new LinkedList();
        ll.insert('1');
        ll.insert('2');
        ll.insert('3');
        ll.insert('4');
        ll.insertAfter('1', 'a');
        expect(ll.tostring()).toEqual('{4} ->{3} ->{2} ->{1} ->{a} ->NULL');
    });
});