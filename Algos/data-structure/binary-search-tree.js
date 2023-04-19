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
    buildTree(array, start = 0, end = array.length - 1) {
        if (start > end) return null;

        const mid = parseInt((start + end) / 2);
        const root = new Node(
            array[mid],
            this.buildTree(array, start, mid - 1),
            this.buildTree(array, mid + 1, end)
        );

        return root;
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

let binaryTree = new Tree([1, 2, 3, 4, 5]);
prettyPrint(binaryTree.root);
