import { getValidMoves } from "./chess-rule.service";

export const isCheckMate = (board, currentPlayer) => {
  console.log(isCheck(board, currentPlayer));
  return;
};

const isCheck = (board, currentPlayer) => {
  //Find Current Player King
  let kingPosition = null;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const kingPiece = board[i][j];
      if (
        kingPiece &&
        kingPiece?.color === currentPlayer &&
        kingPiece?.symbol.toLowerCase() === "k"
      ) {
        kingPosition = { rowPos: i, columnPos: j };
        break;
      }
    }
    if (kingPosition) break;
  }

  // Check if any of the opponent's pieces can attack the king
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const piece = board[i][j];
      if (piece && piece?.color !== currentPlayer) {
        const pieceInfo = {
          piece,
          position: {
            rowPos: i,
            columnPos: j,
          },
        };
        const moves = getValidMoves(pieceInfo, board);
        if (
          moves?.some(
            (move) =>
              move.row === kingPosition.rowPos &&
              move.col === kingPosition.columnPos
          )
        ) {
          return true;
        }
      }
    }
  }
  return false;
};
