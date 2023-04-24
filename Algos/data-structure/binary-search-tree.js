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

    levelOrder(callback) {
        if (!this.root) return [];
        const queue = [this.root];
        const results = [];
        while (queue.length) {
            let level = [];
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                const node = queue.shift();
                level.push(node.value);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
                if (callback) callback(node);
            }
            results.push(level);
        }
        if (!callback) return results;
    }

    preorder(callback) {
        if (!this.root) return [];
        const stack = [this.root];
        const results = [];
        while (stack.length) {
            const node = stack.pop();
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
            if (callback) callback(node);
            results.push(node.value);
        }
        if (!callback) return results;
    }

    inorder(node = this.root, callback, result = []) {
        if (!this.root) return [];
        if (node === null) return;
        this.inorder(node.left, callback, result);
        if (callback) {
            callback(node);
        } else {
            result.push(node.value);
        }
        this.inorder(node.right, callback, result);
        if (result) return result;
    }

    postorder(callback) {
        if (!this.root) return [];
        const stack = [this.root];
        const results = [];
        while (stack.length) {
            const node = stack.pop();
            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);
            if (callback) callback(node);
            results.push(node.value);
        }
        if (!callback) return results.reverse();
    }

    height(node = this.root) {
        if (node === null) return -1;
        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    depth(node, root = this.root, level = 0) {
        if (!node) return null;
        if (root === null) return 0;
        if (root.value === node.value) return level;
        let count = this.depth(node, root.left, level + 1);
        if (count !== 0) return count;
        return this.depth(node, root.right, level + 1);
    }

    isBalanced(node = this.root) {
        if (node === null) return true;
        const heightDiff = Math.abs(
            this.height(node.left) - this.height(node.right)
        );
        return (
            heightDiff <= 1 &&
            this.isBalanced(node.left) &&
            this.isBalanced(node.right)
        );
    }

    rebalance() {
        if (this.root === null) return;
        const sorted = [...new Set(this.inorder().sort((a, b) => a - b))];
        this.root = this.buildTree(sorted);
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
binaryTree.find(1, binaryTree.root);
binaryTree.rebalance();
prettyPrint(binaryTree.root);
