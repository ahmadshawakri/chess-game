import React from "react";
import "./Board.css";
import { boardInitialState } from "../../app/states/board-state";

export const Board = () => {
  const boardArray = boardInitialState.board;
  const handleClick = (row, col, square) => {
    console.log(row, col);
    console.log(square);
  };
  return (
    <div className="board">
      {boardArray.map((row, i) => (
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
