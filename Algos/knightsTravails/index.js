function graph() {
    return {
        chessBoard: new Map(),

        addVertices(size = 8) {
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                    this.chessBoard.set(`${[i, j]}`, []);
                }
            }
        },

        addEdge(board = this.chessBoard) {
            for (let [pos] of board) {
                const posArr = pos.split(",");
                const x = parseInt(posArr[0]);
                const y = parseInt(posArr[1]);
                const direction = {
                    1: [x + 1, y + 2],
                    2: [x + 2, y + 1],
                    4: [x + 2, y - 1],
                    5: [x + 1, y - 2],
                    7: [x - 1, y - 2],
                    8: [x - 2, y - 1],
                    10: [x - 2, y + 1],
                    11: [x - 1, y + 2],
                };
                for (let clock in direction) {
                    const move = direction[clock].toString();
                    if (board.has(move) && !board.get(pos).includes(move)) {
                        this.chessBoard.get(pos).push(move);
                    }
                }
            }
        },

        printGraph() {
            let get_keys = this.chessBoard.keys();
            for (let i of get_keys) {
                let get_values = this.chessBoard.get(i);
                let conc = "";
                for (let j of get_values) {
                    conc += j + " ";
                }
                console.log(i + " -> " + conc);
            }
        },

        knightTravail(start, end) {
            const paths = [];
            const visited = new Set();
            const queue = [];
            queue.push([start, [start]]);
            while (queue.length > 0) {
                let [current, path] = queue.shift();
                visited.add(current);
                if (current === end) {
                    paths.push(path);
                }
                const neighbors = this.chessBoard.get(current);
                for (let pos of neighbors) {
                    if (!visited.has(pos)) {
                        queue.push([pos, [...path, pos]]);
                    }
                }
            }
            paths.forEach((element) => console.log(element));
        },
    };
}

let g = new graph();
g.addVertices();
g.addEdge();
g.knightTravail("0,0", "0,4");
