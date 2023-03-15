const isValidPos = (newPos) => {
  return;
};

export const kingMoves = (position, pieceColor, board) => {
  const { rowPos, columnPos } = position;
  console.log(rowPos, columnPos);
  return;
};
export const queenMoves = (position, pieceColor, board) => {
  const { rowPos, columnPos } = position;
  console.log(rowPos, columnPos);
  return;
};
export const bishopMoves = (position, pieceColor, board) => {
  const { rowPos, columnPos } = position;
  console.log(rowPos, columnPos);
  return;
};
export const knightMoves = (position, pieceColor, board) => {
  const { rowPos, columnPos } = position;
  console.log(rowPos, columnPos);
  return;
};
export const rookMoves = (position, pieceColor, board) => {
  const { rowPos, columnPos } = position;
  console.log(rowPos, columnPos);
  return;
};
export const pawnMoves = (position, pieceColor, board) => {
  const { rowPos, columnPos } = position;
  console.log(rowPos, columnPos);
  return;
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
      bishopMoves(position, piece.color, board);
      break;
    case "n":
      knightMoves(position, piece.color, board);
      break;
    case "r":
      rookMoves(position, piece.color, board);
      break;
    case "p":
      pawnMoves(position, piece.color, board);
      break;
    default:
      break;
  }
};
