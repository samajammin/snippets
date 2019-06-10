class Minesweeper {
  constructor(bombMatrix) {
    this.bombMatrix = bombMatrix;
    this.status = 'in-progress';
    this.rowCount = bombMatrix.length;
    this.colCount = bombMatrix[0].length; // assumes rowcount >= 1 && rowCount === colCount
    this.bombCount = 0;
    this.cellCount = 0;
    this.grid = bombMatrix.map(row => {
      return row.map(cell => {
        this.bombCount += cell;
        this.cellCount += 1;
        return '_';
      });
    });
  }
  checkCell(row, col) {
    if (this.bombMatrix[row][col] === 1) {
      this.status = 'lose';
      console.log(this.status);
      return this.endGame();
    }
    this.grid[row][col] = this.countNeighborBombs(row, col);
    this.cellCount -= 1;
    if (this.cellCount === this.bombCount) {
      this.status = 'win';
      console.log(this.status);
      return this.endGame();
    }
    return this.grid;
  }
  countNeighborBombs(row, col) {
    let count = 0;
    for (var x = -1; x <= 1; x++) {
      // x --> -1, 0, 1
      for (var y = -1; y <= 1; y++) {
        // y --> -1, 0, 1
        const isSelf = x === 0 && y === 0;
        const xCheck = this.bombMatrix[row + x];
        if (!isSelf && xCheck !== undefined && xCheck[col + y] !== undefined) {
          count += this.bombMatrix[row + x][col + y];
          // if (x === 1 && y === 1 && count === 0) {
          // }
        }
      }
    }
    if (count === 0) {
      // logic to check neighbor cells! (case 2)
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
