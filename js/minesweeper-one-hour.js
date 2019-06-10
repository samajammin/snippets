class Minesweeper {
  constructor(bombMatrix) {
    this.bombMatrix = bombMatrix;
    this.status = 'in-progress';
    this.grid = bombMatrix.map(row => {
      return row.map(col => {
        return '_';
      });
    });
  }
  checkCell(row, col) {
    if (this.bombMatrix[row][col] === 1) {
      this.endGame();
    }
    this.grid[row][col] = this.countNeighborBombs(row, col);
    // logic to check if game is won! (case 4)
    // add bombCount & cellCount count to constructor.
    // decrement cellCount after every cellCheck. if cellCount == bombCount, you win!
    return this.grid;
  }
  countNeighborBombs(row, col) {
    let count = 0;
    for (var x = -1; x <= 1; x++) {
      for (var y = -1; y <= 1; y++) {
        const isSelf = x === 0 && y === 0;
        const xCheck = this.bombMatrix[row + x];
        if (!isSelf && xCheck !== undefined && xCheck[col + y] !== undefined) {
          count += this.bombMatrix[row + x][col + y];
        }
      }
    }
    if (count === 0) {
      // recursive logic to checkCell on neighbor cells! (case 2)
    }
    return count;
  }
  endGame() {
    return this.bombMatrix.map((row, rowIndex) => {
      return row.map((cell, colIndex) => {
        if (cell === 1) {
          return 'B';
        } else {
          return this.countNeighborBombs(rowIndex, colIndex);
        }
      });
    });
  }
}

let bombMatrix = [[0, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 1]];
let game = new Minesweeper(bombMatrix);
