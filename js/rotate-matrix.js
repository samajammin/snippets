// Rotate a 2D JavaScript array in place by 90 degrees

/* 
  Questions.
  Can we assume matrix rows/arrays all have equal length?
  Rotate clockwise...?
*/

const rotate = matrix => {
  // first row becomes last column...
  // const rotated = new Array(matrix[0].length).fill([]);
  const rotated = [[], [], [], []];
  for (let rowIdx = matrix[0].length - 1; rowIdx >= 0; rowIdx--) {
    const row = matrix[rowIdx];
    row.forEach((val, idx) => {
      rotated[idx].push(val);
    });
  }

  // hack to mutate matrix
  rotated.forEach((_, idx) => {
    matrix[idx] = rotated[idx];
  });
  return matrix.map((_, idx) => rotated[idx]);
};

const transpose = matrix => {
  const length = matrix[0].length;
  for (let row = 0; row < length; row++) {
    for (let col = row; col < length; col++) {
      console.log({
        row,
        col,
        rowcol: matrix[row][col],
        colrow: matrix[col][row]
      });
      const temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }

  for (const row of matrix) {
    row.reverse();
  }
};

let matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

transpose(matrix);

// rotate(matrix);

// [ [ 1, 2, 3, 4 ],
//   [ 5, 6, 7, 8 ],
//   [ 9, 10, 11, 12 ],
//   [ 13, 14, 15, 16 ] ]

console.log(matrix);
/*
	Output:
	[ 
		[ 13, 9, 5, 1 ],
	  	[ 14, 10, 6, 2 ],
	  	[ 15, 11, 7, 3 ],
	  	[ 16, 12, 8, 4 ] 
  	];
 */

// [ [ 1, 5, 9, 13 ],
// [ 2, 6, 10, 14 ],
// [ 3, 7, 11, 15 ],
// [ 4, 8, 12, 16 ] ]
