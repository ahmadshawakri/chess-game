const kingMoves = (position, pieceColor, board) => {
  const { rowPos, columnPos } = position;
  console.log(rowPos, columnPos);
  return;
};
const queenMoves = (position, pieceColor, board) => {
  const { rowPos, columnPos } = position;
  console.log(rowPos, columnPos);
  return;
};
const bishopMoves = (position, pieceColor, board) => {
  const { rowPos, columnPos } = position;
  const validMoves = [];

  //Top Right Moves
  for (let i = 1; i <= 7; i++) {
    const newRow = rowPos - i;
    const newColmn = columnPos + i;
    if (newRow < 0 || newColmn > 7 || newColmn < 0 || newRow > 7) break;
    if (board[newRow][newColmn] === "") {
      validMoves.push({ row: newRow, col: newColmn });
    } else if (board[newRow][newColmn].color !== pieceColor) {
      validMoves.push({ row: newRow, col: newColmn });
      break;
    } else {
      break;
    }
  }

  //Top Left
  for (let i = 1; i <= 7; i++) {
    const newRow = rowPos - i;
    const newColmn = columnPos - i;
    if (newRow < 0 || newColmn > 7 || newColmn < 0 || newRow > 7) break;
    if (board[newRow][newColmn] === "") {
      validMoves.push({ row: newRow, col: newColmn });
    } else if (board[newRow][newColmn]?.color !== pieceColor) {
      validMoves.push({ row: newRow, col: newColmn });
      break;
    } else {
      break;
    }
  }

  //Bottom Right
  for (let i = 1; i <= 7; i++) {
    const newRow = rowPos + i;
    const newColmn = columnPos + i;
    if (newRow < 0 || newColmn > 7 || newColmn < 0 || newRow > 7) break;
    if (board[newRow][newColmn] === "") {
      validMoves.push({ row: newRow, col: newColmn });
    } else if (board[newRow][newColmn]?.color !== pieceColor) {
      validMoves.push({ row: newRow, col: newColmn });
      break;
    } else {
      break;
    }
  }

  //Bottom Left
  for (let i = 1; i <= 7; i++) {
    const newRow = rowPos + i;
    const newColmn = columnPos - i;
    if (newRow < 0 || newColmn > 7 || newColmn < 0 || newRow > 7) break;
    if (board[newRow][newColmn] === "") {
      validMoves.push({ row: newRow, col: newColmn });
    } else if (board[newRow][newColmn]?.color !== pieceColor) {
      validMoves.push({ row: newRow, col: newColmn });
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
  console.log(rowPos, columnPos);
  return;
};
const rookMoves = (position, pieceColor, board) => {
  const { rowPos, columnPos } = position;
  console.log(rowPos, columnPos);
  return;
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
      queenMoves(position, piece.color, board);
      break;
    case "b":
      const bishopValidMoves = bishopMoves(position, piece.color, board);
      return bishopValidMoves;
    case "n":
      knightMoves(position, piece.color, board);
      break;
    case "r":
      rookMoves(position, piece.color, board);
      break;
    case "p":
      const pawnValidMoves = pawnMoves(position, piece.color, board);
      return pawnValidMoves;
    default:
      break;
  }
  return;
};
