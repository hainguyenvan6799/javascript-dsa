class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

function printLinkedList(head) {
    if (head === null) return;
    console.log(head.value);
    return printLinkedList(head.next);
}

function getLinkedListValue(head, values = []) {
    if (head === null) return values;
    values.push(head.value);
    return getLinkedListValue(head.next, values);
}

function sumList(head) {
    if (head === null) return 0;
    return head.value + sumList(head.next);
}

function findValue(head, target) {
    if (head === null) return false;
    if (head.value === target) return true;
    return findValue(head.next, target);
}

function getNodeValue(head, index) {
    if (head === null) return null;
    if (index === 0) return head.value;
    return getNodeValue(head.next, index - 1); 
}

function reverse(current, prev = null) {
    if (current === null) return prev;
    const next = current.next;
    current.next = prev;
    return reverse(next, current);
}

function reverse(current, prev = null) {
    if (current === null) return prev;
    const next = current.next;
    current.next = prev;
    return reverse(next, current);
}

function zipperList(head1, head2) {
    if (head1 === null && head2 === null) return null;
    if (head1 === null) return head2;
    if (head2 === null) return head1;

    const next1 = head1.next;
    const next2 = head2.next;
    head1.next = head2;
    head2.next = zipperList(next1, next2);
}

printLinkedList(a);

const linkedListValues = getLinkedListValue(a);
console.log({linkedListValues});

const isBExist = findValue(a, 'B');
console.log({isBExist});

const nodeValue = getNodeValue(a, 2);
console.log({nodeValue});

const reversedLinkedList = reverse(a);
console.log({reversedLinkedList})
printLinkedList(d);