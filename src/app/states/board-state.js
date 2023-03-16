import { piecesInitialState } from "./pieces-state";

export const chessBoard = [
  [
    piecesInitialState.black.rightRock,
    piecesInitialState.black.rightKnight,
    piecesInitialState.black.rightBishop,
    piecesInitialState.black.queen,
    piecesInitialState.black.king,
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

  [
    piecesInitialState.white.pawn1,
    "",
    "",
    "",
    "",
    "",
    "",
    piecesInitialState.white.pawn1,
  ],
  ["", "", "", "", "", "", "", ""],
  [piecesInitialState.black.pawn8, "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", piecesInitialState.black.pawn8],
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
