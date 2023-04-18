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

    append(newValue) {
        let newNode = new Node(newValue);
        console.log(newNode);
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

console.log(JSON.stringify(list.head));
