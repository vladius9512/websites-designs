class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.nextNode;
        }
        return count;
    }

    headNode() {
        return this.head;
    }

    tail() {
        let lastNode = this.head;
        while (lastNode.nextNode != null) {
            lastNode = lastNode.nextNode;
        }
        return lastNode;
    }

    at(index) {
        let lastNode = this.head;
        if (index < 0 || index > this.size()) {
            console.log("Enter a valid index");
            return;
        }
        while (index !== 0) {
            lastNode = lastNode.nextNode;
            index--;
        }
        return lastNode;
    }

    contains(value) {
        let lastNode = this.head;
        while (lastNode) {
            if (lastNode.value == value) {
                return true;
            }
            lastNode = lastNode.nextNode;
        }
        return false;
    }

    find(value) {
        let index = 0;
        let lastNode = this.head;
        while (lastNode) {
            if (lastNode.value === value) {
                return index;
            }
            index++;
            lastNode = lastNode.nextNode;
        }
        return null;
    }

    append(newValue) {
        let newNode = new Node(newValue);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let lastNode = this.head;
        while (lastNode.nextNode != null) {
            lastNode = lastNode.nextNode;
        }
        lastNode.nextNode = newNode;
        return;
    }

    prepend(newValue) {
        let newNode = new Node(newValue);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }

    pop() {
        if (this.head == null) {
            return;
        } else if (this.head === this.tail()) {
            this.head = null;
        } else {
            let lastNode = this.head;
            let preLastNode = this.head;
            while (lastNode.nextNode !== null) {
                preLastNode = lastNode;
                lastNode = lastNode.nextNode;
            }
            preLastNode.nextNode = null;
            console.log("Poped value is:" + lastNode.value);
        }
    }

    toString() {
        let lastNode = this.head;
        let stringList = "";
        while (lastNode) {
            stringList += `(${lastNode.value}) -> `;
            lastNode = lastNode.nextNode;
        }
        return (stringList += "null");
    }
}

class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

let node1 = new Node(3);
let node2 = new Node(5);
let node3 = new Node(6);
node1.nextNode = node2;
node2.nextNode = node3;
let list = new LinkedList(node1);
list.append(23);
list.prepend(1);
console.log(JSON.stringify(list.toString()));
