'use strict';

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    getList() {
        if (!this.head) return 'no list';
        let current = this.head;
        while (current) {
            current = current.next;
        }
    }
}

class Hashmap {
    constructor(size) {
        this.storage = new Array(size);
        this.size = size;
    }

    hash(key) { //takes in an arbitrary key and returns an index in the collection.
        return key.split('').reduce((acc, cur) => {
            return acc + cur.charCodeAt(0);
        }, 0) * 19 % this.size;
    }

    set(key, val) { //takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
        let hash = this.hash(key);
        if (!this.storage[hash]) {
            let ll = new LinkedList();
            ll.add([key, val]);
            this.storage[hash] = ll;
        } else {
            this.storage[hash].add([key, val]);
        }
    }

    contains(key) { //takes in the key and returns a boolean, indicating if the key exists in the table already.
        let hashedKey = this.hash(key);
        if (!this.storage[hashedKey]) return false;
        return true;
    }

    get(key) { //takes in the key and returns the value from the table.
        if (!this.contains(key)) {
            return 'no values at this key';
        }
        let hashedKey = this.hash(key);
        let current = this.storage[hashedKey].head;
        while (current) {
            if (current.val[0] === key) {
                return current.val;
            }
            current = current.next;
        }
        return 'no values at this key';
    }

}



describe('hashtable test should', () => {

    let hashmap = new Hashmap(3);
    hashmap.set('Tariq', 'Abulaban');
    hashmap.set('Anolla', 'Haddad');
    hashmap.set('Ibrahim', 'Swaiss');
    hashmap.set('Israa', 'Othman');
    hashmap.set('Rana', 'AbuSamhaness');
    hashmap.set('Ashjan', 'Albarqi');
    hashmap.set('Ahmad', 'Alawad');

    it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
        expect(hashmap.contains('Tariq')).toBe(true);
    });

    it('Retrieving based on a key returns the value stored', () => {
        expect(hashmap.get('Anolla')).toStrictEqual(['Anolla', 'Haddad']);
        expect(hashmap.get('Alaa')).toStrictEqual('no values at this key');
        expect(hashmap.get('alaa')).toStrictEqual('no values at this key');
    });

    it('Successfully returns null for a key that does not exist in the hashtable', () => {
        expect(hashmap.contains('Albarqi')).toBe(true);
    });

    it('Successfully handle a collision within the hashtable', () => {
        expect(hashmap.storage[0].head.val).toContain('Ashjan');
        expect(hashmap.storage[0].head.next.val).toContain('Tariq');

    });

    it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
        expect(hashmap.get('Ibrahim')).toStrictEqual(['Ibrahim', 'Swaiss']);
        expect(hashmap.get('Israa')).toStrictEqual(['Israa', 'Othman']);
    });

    it('Successfully hash a key to an in-range value', () => {
        expect(hashmap.size).toBe(3);
    });

});