import { getValidMoves } from "./chess-rule.service";

export const isCheckMate = (board, currentPlayer) => {
  // console.log(isCheck(board, currentPlayer));
  const checked = isCheck(board, currentPlayer);
  console.log("Is Checked:", checked);
  if (!checked) return false;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const piece = board[i][j];
      if (piece && piece?.color === currentPlayer) {
        const pieceInfo = {
          piece,
          position: {
            rowPos: i,
            columnPos: j,
          },
        };
        const moves = getValidMoves(pieceInfo, board);
        for (let k = 0; k < moves.length; k++) {
          const move = moves[k];
          const { row, col } = move;
          const temp = board[row][col];
          board[row][col] = piece;
          board[i][j] = null;

          // If the move takes the player out of check, it's not checkmate
          if (!isCheck()) {
            board[i][j] = piece;
            board[row][col] = temp;
            return false;
          }

          board[i][j] = piece;
          board[row][col] = temp;
        }
      }
    }
  }

  // If there are no valid moves that take the player out of check, it's checkmate
  return true;
};

const isCheck = (board, currentPlayer) => {
  //Find Current Player King
  let kingPosition = null;
  for (let i = 0; i < board?.length; i++) {
    for (let j = 0; j < board[0]?.length; j++) {
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
  for (let i = 0; i < board?.length; i++) {
    for (let j = 0; j < board[0]?.length; j++) {
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
