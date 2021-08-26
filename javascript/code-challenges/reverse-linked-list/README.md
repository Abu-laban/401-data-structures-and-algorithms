# linked list zip

<!-- Description of the challenge -->

Reverse a Singly Linked List

## Whiteboard Process

<!-- Embedded whiteboard image -->

![linked-list-kth](./reverseLinkedList.png)

## Approach & Efficiency

<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->

1. Understood the problem first
2. Avoid utilizing any of the built-in methods available in your language.
3. Avoid creating a copy of the Linked List.
4. Iterating over the linked list and storing a reference to a current node, its previous node, and its next node.
5. In every iteration, after the next node is stored, the current’s node next pointer is pointed at the stored reference to the previous node.
