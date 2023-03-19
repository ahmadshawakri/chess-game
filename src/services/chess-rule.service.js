const kingMoves = (position, pieceColor, board) => {
  const { rowPos, columnPos } = position;
  console.log(rowPos, columnPos);
  return;
};
const queenMoves = (position, pieceColor, board) => {
  const { rowPos, columnPos } = position;
  const validMoves = [];

  //Right
  for (let i = 1; i <= 7; i++) {
    const newColumn = columnPos + i;
    if (newColumn > 7 || newColumn < 0) break;
    if (board[rowPos][newColumn] === "") {
      validMoves.push({ row: rowPos, col: newColumn });
    } else if (board[rowPos][newColumn].color !== pieceColor) {
      validMoves.push({ row: rowPos, col: newColumn });
      break;
    } else {
      break;
    }
  }

  //Left
  for (let i = 1; i <= 7; i++) {
    const newColumn = columnPos - i;
    if (newColumn > 7 || newColumn < 0) break;
    if (board[rowPos][newColumn] === "") {
      validMoves.push({ row: rowPos, col: newColumn });
    } else if (board[rowPos][newColumn]?.color !== pieceColor) {
      validMoves.push({ row: rowPos, col: newColumn });
      break;
    } else {
      break;
    }
  }

  //Top
  for (let i = 1; i <= 7; i++) {
    const newRow = rowPos - i;
    if (newRow < 0 || newRow > 7) break;
    if (board[newRow][columnPos] === "") {
      validMoves.push({ row: newRow, col: columnPos });
    } else if (board[newRow][columnPos]?.color !== pieceColor) {
      validMoves.push({ row: newRow, col: columnPos });
      break;
    } else {
      break;
    }
  }

  //Bottom
  for (let i = 1; i <= 7; i++) {
    const newRow = rowPos + i;
    if (newRow < 0 || newRow > 7) break;
    if (board[newRow][columnPos] === "") {
      validMoves.push({ row: newRow, col: columnPos });
    } else if (board[newRow][columnPos]?.color !== pieceColor) {
      validMoves.push({ row: newRow, col: columnPos });
      break;
    } else {
      break;
    }
  }

  //Top Right Moves
  for (let i = 1; i <= 7; i++) {
    const newRow = rowPos - i;
    const newColumn = columnPos + i;
    if (newRow < 0 || newColumn > 7 || newColumn < 0 || newRow > 7) break;
    if (board[newRow][newColumn] === "") {
      validMoves.push({ row: newRow, col: newColumn });
    } else if (board[newRow][newColumn].color !== pieceColor) {
      validMoves.push({ row: newRow, col: newColumn });
      break;
    } else {
      break;
    }
  }

  //Top Left
  for (let i = 1; i <= 7; i++) {
    const newRow = rowPos - i;
    const newColumn = columnPos - i;
    if (newRow < 0 || newColumn > 7 || newColumn < 0 || newRow > 7) break;
    if (board[newRow][newColumn] === "") {
      validMoves.push({ row: newRow, col: newColumn });
    } else if (board[newRow][newColumn]?.color !== pieceColor) {
      validMoves.push({ row: newRow, col: newColumn });
      break;
    } else {
      break;
    }
  }

  //Bottom Right
  for (let i = 1; i <= 7; i++) {
    const newRow = rowPos + i;
    const newColumn = columnPos + i;
    if (newRow < 0 || newColumn > 7 || newColumn < 0 || newRow > 7) break;
    if (board[newRow][newColumn] === "") {
      validMoves.push({ row: newRow, col: newColumn });
    } else if (board[newRow][newColumn]?.color !== pieceColor) {
      validMoves.push({ row: newRow, col: newColumn });
      break;
    } else {
      break;
    }
  }

  //Bottom Left
  for (let i = 1; i <= 7; i++) {
    const newRow = rowPos + i;
    const newColumn = columnPos - i;
    if (newRow < 0 || newColumn > 7 || newColumn < 0 || newRow > 7) break;
    if (board[newRow][newColumn] === "") {
      validMoves.push({ row: newRow, col: newColumn });
    } else if (board[newRow][newColumn]?.color !== pieceColor) {
      validMoves.push({ row: newRow, col: newColumn });
      break;
    } else {
      break;
    }
  }

  console.log(rowPos, columnPos);
  return validMoves;
};
const bishopMoves = (position, pieceColor, board) => {
  const { rowPos, columnPos } = position;
  const validMoves = [];

  //Top Right Moves
  for (let i = 1; i <= 7; i++) {
    const newRow = rowPos - i;
    const newColumn = columnPos + i;
    if (newRow < 0 || newColumn > 7 || newColumn < 0 || newRow > 7) break;
    if (board[newRow][newColumn] === "") {
      validMoves.push({ row: newRow, col: newColumn });
    } else if (board[newRow][newColumn].color !== pieceColor) {
      validMoves.push({ row: newRow, col: newColumn });
      break;
    } else {
      break;
    }
  }

  //Top Left
  for (let i = 1; i <= 7; i++) {
    const newRow = rowPos - i;
    const newColumn = columnPos - i;
    if (newRow < 0 || newColumn > 7 || newColumn < 0 || newRow > 7) break;
    if (board[newRow][newColumn] === "") {
      validMoves.push({ row: newRow, col: newColumn });
    } else if (board[newRow][newColumn]?.color !== pieceColor) {
      validMoves.push({ row: newRow, col: newColumn });
      break;
    } else {
      break;
    }
  }

  //Bottom Right
  for (let i = 1; i <= 7; i++) {
    const newRow = rowPos + i;
    const newColumn = columnPos + i;
    if (newRow < 0 || newColumn > 7 || newColumn < 0 || newRow > 7) break;
    if (board[newRow][newColumn] === "") {
      validMoves.push({ row: newRow, col: newColumn });
    } else if (board[newRow][newColumn]?.color !== pieceColor) {
      validMoves.push({ row: newRow, col: newColumn });
      break;
    } else {
      break;
    }
  }

  //Bottom Left
  for (let i = 1; i <= 7; i++) {
    const newRow = rowPos + i;
    const newColumn = columnPos - i;
    if (newRow < 0 || newColumn > 7 || newColumn < 0 || newRow > 7) break;
    if (board[newRow][newColumn] === "") {
      validMoves.push({ row: newRow, col: newColumn });
    } else if (board[newRow][newColumn]?.color !== pieceColor) {
      validMoves.push({ row: newRow, col: newColumn });
      break;
    } else {
      break;
    }
  }

  console.log(validMoves);
  return validMoves;
};
const knightMoves = (position, pieceColor, board) => {
  const { rowPos, columnPos } = position;
  const validMoves = [];

  const checkMove = (rowOffset, colOffset) => {
    const newRow = rowPos + rowOffset;
    const newColumn = columnPos + colOffset;
    if (newRow < 0 || newRow > 7 || newColumn < 0 || newColumn > 7) return;
    if (board[newRow][newColumn].color === pieceColor) return;
    validMoves.push({ row: newRow, col: newColumn });
  };

  checkMove(-2, 1);
  checkMove(-2, -1);
  checkMove(-1, 2);
  checkMove(-1, -2);
  checkMove(2, 1);
  checkMove(2, -1);
  checkMove(1, 2);
  checkMove(1, -2);

  console.log(rowPos, columnPos);
  console.log(validMoves);
  return validMoves;
};
const rookMoves = (position, pieceColor, board) => {
  const { rowPos, columnPos } = position;
  const validMoves = [];

  //Right
  for (let i = 1; i <= 7; i++) {
    const newColumn = columnPos + i;
    if (newColumn > 7 || newColumn < 0) break;
    if (board[rowPos][newColumn] === "") {
      validMoves.push({ row: rowPos, col: newColumn });
    } else if (board[rowPos][newColumn].color !== pieceColor) {
      validMoves.push({ row: rowPos, col: newColumn });
      break;
    } else {
      break;
    }
  }

  //Left
  for (let i = 1; i <= 7; i++) {
    const newColumn = columnPos - i;
    if (newColumn > 7 || newColumn < 0) break;
    if (board[rowPos][newColumn] === "") {
      validMoves.push({ row: rowPos, col: newColumn });
    } else if (board[rowPos][newColumn]?.color !== pieceColor) {
      validMoves.push({ row: rowPos, col: newColumn });
      break;
    } else {
      break;
    }
  }

  //Top
  for (let i = 1; i <= 7; i++) {
    const newRow = rowPos - i;
    if (newRow < 0 || newRow > 7) break;
    if (board[newRow][columnPos] === "") {
      validMoves.push({ row: newRow, col: columnPos });
    } else if (board[newRow][columnPos]?.color !== pieceColor) {
      validMoves.push({ row: newRow, col: columnPos });
      break;
    } else {
      break;
    }
  }

  //Bottom
  for (let i = 1; i <= 7; i++) {
    const newRow = rowPos + i;
    if (newRow < 0 || newRow > 7) break;
    if (board[newRow][columnPos] === "") {
      validMoves.push({ row: newRow, col: columnPos });
    } else if (board[newRow][columnPos]?.color !== pieceColor) {
      validMoves.push({ row: newRow, col: columnPos });
      break;
    } else {
      break;
    }
  }

  console.log(rowPos, columnPos);
  console.log(validMoves);
  return validMoves;
};

const pawnMoves = (position, pieceColor, board) => {
  const { rowPos, columnPos } = position;
  const validMoves = [];

  const moveForward = (row) => {
    const newRow = rowPos + row;
    if (newRow < 0 || newRow >= 8) return;
    if (board[newRow][columnPos] !== "") return;
    validMoves.push({ row: newRow, col: columnPos });

    if (rowPos === 6 || rowPos === 1) {
      const twoStepsRow = newRow + row;
      if (board[twoStepsRow][columnPos] === "") {
        validMoves.push({ row: twoStepsRow, col: columnPos });
      }
    }
  };

  const moveDiagonal = (row) => {
    const newRow = row + rowPos;
    //Left Pos for white & Right Pos for Black
    if (
      columnPos > 0 &&
      board[newRow][columnPos - 1].symbol &&
      board[newRow][columnPos - 1].color !== pieceColor
    ) {
      validMoves.push({ row: newRow, col: columnPos - 1 });
    }
    //Right Pos for White & Left Pos for Black
    if (
      columnPos < 7 &&
      board[newRow][columnPos + 1]?.symbol &&
      board[newRow][columnPos + 1].color !== pieceColor
    ) {
      validMoves.push({ row: newRow, col: columnPos + 1 });
    }
  };

  switch (pieceColor) {
    case "white":
      moveForward(-1);
      moveDiagonal(-1);
      return validMoves;
    case "black":
      moveForward(1);
      moveDiagonal(1);
      return validMoves;
    default:
      return;
  }
};

export const getValidMoves = (selectedPiece, board) => {
  const { piece, position } = selectedPiece;

  switch (piece.symbol.toLowerCase()) {
    case "k":
      kingMoves(position, piece.color, board);
      break;
    case "q":
      const queenValidMoves = queenMoves(position, piece.color, board);
      return queenValidMoves;
    case "b":
      const bishopValidMoves = bishopMoves(position, piece.color, board);
      return bishopValidMoves;
    case "n":
      const knightValidMoves = knightMoves(position, piece.color, board);
      return knightValidMoves;
    case "r":
      const rookValidMoves = rookMoves(position, piece.color, board);
      return rookValidMoves;
    case "p":
      const pawnValidMoves = pawnMoves(position, piece.color, board);
      return pawnValidMoves;
    default:
      break;
  }
  return;
};
