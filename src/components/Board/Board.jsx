import React from "react";
import { History } from "../History/History";
import { useSelector, useDispatch } from "react-redux";
import {
  pieceHasSelected,
  validMovesCalculated,
  changedBoard,
  playerTurnChanged,
  historyChanged,
} from "../../app/reducers/board-reducer";
import { getValidMoves } from "../../services";
import "./Board.css";

export const Board = () => {
  const { board, playerTurn, selectedPiece, validMoves, history } = useSelector(
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
      if (validMoves?.some((move) => move.row === row && move.col === col)) {
        const columnLetter = ["A", "B", "C", "D", "E", "F", "G", "H"];
        const hist = `${selectedPiece.piece.symbol}${
          columnLetter[selectedPiece.position.columnPos]
        }${selectedPiece.position.rowPos} -> ${columnLetter[col]}${row}`;
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
        const newTurnColor = playerTurn === "white" ? "black" : "white";
        dispatch(historyChanged(hist));
        dispatch(changedBoard(board));
        dispatch(playerTurnChanged(newTurnColor));
      } else {
        handleFirstClick();
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
              className={`square ${i % 2 === j % 2 ? "white" : "black"} `}
              key={j}
              onClick={() => handleClick(i, j, square)}
            >
              <div
                className={`${
                  validMoves?.some((move) => move.row === i && move.col === j)
                    ? "validMove"
                    : ""
                }`}
              >
                {square.image && <img src={square.image} alt={square.symbol} />}
              </div>
            </div>
          ))}
        </div>
      ))}
      {history.length > 0 && <History />}
    </div>
  );
};

export default Board;
