import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pieceSelect } from "../../app/reducers/board-reducer";
import { getValidMoves } from "../../services";
import "./Board.css";

export const Board = () => {
  const [clickedPiece, setClickedPiece] = useState();
  const [validSquareSelect, setValidSquareSelect] = useState();
  const { board, playerTurn } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleClick = async (row, col, square) => {
    if (square.symbol && square.color === playerTurn) {
      const selectedPiece = {
        piece: square,
        position: {
          rowPos: row,
          columnPos: col,
        },
      };
      getValidMoves(selectedPiece, board);

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
