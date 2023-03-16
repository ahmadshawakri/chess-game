import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pieceSelect } from "../../app/reducers/board-reducer";
import { getValidMoves } from "../../services";
import "./Board.css";

export const Board = () => {
  const { board, playerTurn, selectedPiece } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleClick = async (row, col, square) => {
    if (square.color === playerTurn) {
      if (square.symbol && !selectedPiece) {
        console.log("First Click");
        const pieceInfo = {
          piece: square,
          position: {
            rowPos: row,
            columnPos: col,
          },
        };
        const validMoves = await getValidMoves(pieceInfo, board);
        console.log(validMoves);
        dispatch(pieceSelect(pieceInfo));
      }
      if (selectedPiece && square) {
        console.log(selectedPiece);
        console.log("Second Click");
      }
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
