import { kingMoves } from "./chess-rule.service";

function isCheckMate(board, attackingPlayer, playerTurn) {
  // Get the king's position
  // const kingPosition = findKing(board, attackingPlayer);
  const kingPosition =
    playerTurn === "white" ? { row: 7, col: 4 } : { row: 0, col: 4 };

  // Check if the king can move out of check
  const kingValidMoves = kingMoves(kingPosition, playerTurn, board);
  if (kingValidMoves.length > 0) {
    return false;
  }

  // Check if any piece can block the check
  //   const checkingPiecePosition = getCheckingPiece(
  //     board,
  //     attackingPlayer,
  //     kingPosition
  //   );
  //   const blockingMoves = getBlockingMoves(
  //     board,
  //     checkingPiecePosition,
  //     kingPosition
  //   );
  //   if (blockingMoves.length > 0) {
  //     return false;
  //   }

  //   // Check if any attacking piece can be captured
  //   const attackingMoves = getAttackingMoves(
  //     board,
  //     attackingPlayer,
  //     kingPosition
  //   );
  //   for (let move of attackingMoves) {
  //     const testBoard = getTestBoard(board, kingPosition, move);
  //     const opponentMoves = getAllMoves(testBoard, getOpponent(attackingPlayer));
  //     if (
  //       !opponentMoves.some(
  //         (opponentMove) =>
  //           opponentMove.row === move.row && opponentMove.col === move.col
  //       )
  //     ) {
  //       return false;
  //     }
  //   }

  // If none of the above conditions are met, then it is checkmate
  return true;
}
