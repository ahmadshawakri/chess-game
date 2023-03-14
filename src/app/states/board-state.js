import { piecesInitialState } from "./pieces-state";

export const chessBoard = [
  [
    piecesInitialState.black.rightRock,
    piecesInitialState.black.rightKnight,
    piecesInitialState.black.rightBishop,
    piecesInitialState.black.king,
    piecesInitialState.black.queen,
    piecesInitialState.black.leftBishop,
    piecesInitialState.black.leftKnight,
    piecesInitialState.black.leftRock,
  ],
  [
    piecesInitialState.black.pawn1,
    piecesInitialState.black.pawn2,
    piecesInitialState.black.pawn3,
    piecesInitialState.black.pawn4,
    piecesInitialState.black.pawn5,
    piecesInitialState.black.pawn6,
    piecesInitialState.black.pawn7,
    piecesInitialState.black.pawn8,
  ],

  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
  [
    piecesInitialState.white.pawn1,
    piecesInitialState.white.pawn2,
    piecesInitialState.white.pawn3,
    piecesInitialState.white.pawn4,
    piecesInitialState.white.pawn5,
    piecesInitialState.white.pawn6,
    piecesInitialState.white.pawn7,
    piecesInitialState.white.pawn8,
  ],
  [
    piecesInitialState.white.leftRock,
    piecesInitialState.white.leftKnight,
    piecesInitialState.white.leftBishop,
    piecesInitialState.white.queen,
    piecesInitialState.white.king,
    piecesInitialState.white.rightBishop,
    piecesInitialState.white.rightKnight,
    piecesInitialState.white.rightRock,
  ],
];

export const boardInitialState = {
  board: chessBoard,
  playerTurn: "white",
  selectedPiece: null,
  validMoves: [],
  check: false,
  checkMate: false,
};
