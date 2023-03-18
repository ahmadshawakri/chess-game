import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  pieceHasSelected,
  validMovesCalculated,
  changedBoard,
  playerTurnChanged,
} from "../../app/reducers/board-reducer";
import { getValidMoves } from "../../services";
import "./Board.css";

export const Board = () => {
  const { board, playerTurn, selectedPiece, validMoves } = useSelector(
    (state) => state
  );
  Object.freeze(board);
  const dispatch = useDispatch();

  const handleClick = (row, col, square) => {
    const handleFirstClick = () => {
      if (square.color === playerTurn && square.symbol) {
        const pieceInfo = {
          piece: square,
          position: {
            rowPos: row,
            columnPos: col,
          },
        };
        const pieceValidMoves = getValidMoves(pieceInfo, board);
        dispatch(pieceHasSelected(pieceInfo));
        dispatch(validMovesCalculated(pieceValidMoves));
      }
    };

    const handleSecondClick = () => {
      if (selectedPiece) {
        if (validMoves?.some((move) => move.row === row && move.col === col)) {
          if (board[row][col] !== "") {
            board[row][col] = "";
            board[row][col] = selectedPiece.piece;
            board[selectedPiece.position.rowPos][
              selectedPiece.position.columnPos
            ] = "";
          } else {
            [
              board[selectedPiece.position.rowPos][
                selectedPiece.position.columnPos
              ],
              board[row][col],
            ] = [
              board[row][col],
              board[selectedPiece.position.rowPos][
                selectedPiece.position.columnPos
              ],
            ];
          }

          dispatch(changedBoard(board));
          const newTurnColor = playerTurn === "white" ? "black" : "white";
          dispatch(playerTurnChanged(newTurnColor));
        } else {
          handleFirstClick();
        }
      }
    };

    if (!selectedPiece) {
      handleFirstClick();
    } else {
      handleSecondClick();
    }
  };

  return (
    <div className="board">
      {board.map((row, i) => (
        <div className="row" key={i}>
          {row.map((square, j) => (
            <div
              className={`square ${i % 2 === j % 2 ? "white" : "black"}`}
              key={j}
              onClick={() => handleClick(i, j, square)}
            >
              {square.image && <img src={square.image} alt={square.symbol} />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
