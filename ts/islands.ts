class IslandGraph {
  private matrix: number[][];
  private visited: boolean[][];

  constructor(matrix: number[][]) {
    this.matrix = matrix;
  }

  private resetVisited() {
    this.visited = matrix.map(row => {
      return row.map(() => false);
    });
  }

  // calculate the number of islands (connected 1s) in matrix.
  public countIslands(): number {
    this.resetVisited();
    let count = 0;

    // iterate through matrix cells. if cell is island, increment count & traverse island cells
    for (let x = 0; x < this.matrix.length; x++) {
      for (let y = 0; y < this.matrix[x].length; y++) {
        if (this.matrix[x][y] === 1 && !this.visited[x][y]) {
          this.traverseIsland(x, y);
          count++;
        }
      }
    }
    return count;
  }

  // traverse all neighbor island cells via DFS
  private traverseIsland(x: number, y: number): void {
    this.visited[x][y] = true;

    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (this.matrix[i] === undefined || this.matrix[i][j] === undefined) {
          continue;
        }
        if (this.visited[i][j]) {
          continue;
        }
        if (this.matrix[i][j] === 1) {
          this.traverseIsland(i, j);
        }
      }
    }
  }

  // calculate the largest island (connected 1s) of the matrix
  public getLargestIslandSize(): number {
    this.resetVisited();
    let biggestIslandSize = 0;

    // iterate through matrix cells. if cell is island, count island cells
    for (let x = 0; x < this.matrix.length; x++) {
      for (let y = 0; y < this.matrix[x].length; y++) {
        if (this.matrix[x][y] === 1 && !this.visited[x][y]) {
          const islandSize = this.countIslandCells(x, y, 0);
          if (islandSize > biggestIslandSize) {
            biggestIslandSize = islandSize;
          }
        }
      }
    }
    return biggestIslandSize;
  }

  // traverse & count all neighbor island cells via DFS
  private countIslandCells(x: number, y: number, count: number): number {
    this.visited[x][y] = true;
    count++;

    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (this.matrix[i] === undefined || this.matrix[i][j] === undefined) {
          continue;
        }
        if (this.visited[i][j]) {
          continue;
        }
        if (this.matrix[i][j] === 1) {
          count += this.countIslandCells(i, j, 0);
        }
      }
    }
    return count;
  }
}

const matrix = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1]
];

const matrixTwo = [
  [1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 1]
];

const graph = new IslandGraph(matrix);
console.log(graph.countIslands());
console.log(graph.getLargestIslandSize());

const graphB = new IslandGraph(matrixTwo);
console.log(graphB.countIslands());
console.log(graphB.getLargestIslandSize());
