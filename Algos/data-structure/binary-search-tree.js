class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }

    sortAndRemoveDuplicates(array) {
        const sorted = [...new Set(array)].sort((a, b) => a - b);
        return sorted;
    }
    buildTree(array, start = 0, end = array.length - 1) {
        let sorted = this.sortAndRemoveDuplicates(array);
        if (start > end) return null;

        const mid = parseInt((start + end) / 2);
        const root = new Node(
            sorted[mid],
            this.buildTree(sorted, start, mid - 1),
            this.buildTree(sorted, mid + 1, end)
        );

        return root;
    }

    insert(value, root = this.root) {
        if (root === null) return new Node(value);
        if (root.value < value) {
            root.right = this.insert(value, root.right);
        } else {
            root.left = this.insert(value, root.left);
        }
        return root;
    }

    findMinNode(node) {
        if (node.left === null) {
            return node;
        } else return this.findMinNode(node.left);
    }

    remove(value) {
        this.root = this.removeNode(this.root, value);
    }

    removeNode(value, node) {
        if (node === null) return null;
        else if (value < node.value) {
            node.left = this.removeNode(value, node.left);
            return node;
        } else if (value > node.value) {
            node.right = this.removeNode(value, node.right);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            let aux = this.findMinNode(node.right);
            node.value = aux.value;

            node.right = this.removeNode(node.value, node.right);
            return node;
        }
    }

    find(value, root = this.root) {
        if (root === null) return null;
        if (value < root.value) {
            return this.find(value, root.left);
        } else if (value > root.value) {
            return this.find(value, root.right);
        } else {
            return root;
        }
    }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

let binaryTree = new Tree([1, 5, 10, 17, 25]);
binaryTree.insert(6, binaryTree.root);
binaryTree.removeNode(5, binaryTree.root);
binaryTree.find(1, binaryTree.root);
prettyPrint(binaryTree.root);
