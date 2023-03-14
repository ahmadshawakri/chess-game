import whiteKing from "./img/White_King.png";
import whiteQueen from "./img/White_Queen.png";
import whiteBishop from "./img/White_Bishop.png";
import whiteKnight from "./img/White_Knight.png";
import whiteRook from "./img/White_rook.png";
import whitePawn from "./img/White_Pawn.png";

import blackKing from "./img/Black_King.png";
import blackQueen from "./img/Black_Queen.png";
import blackBishop from "./img/Black_Bishop.png";
import blackKnight from "./img/Black_Knight.png";
import blackRook from "./img/Black_Rook.png";
import blackPawn from "./img/Black_Pawn.png";

const piecesInitialState = {
  white: {
    king: {
      hasMoved: false,
      symbol: "K",
      image: whiteKing,
    },
    queen: {
      hasMoved: false,
      symbol: "Q",
      image: whiteQueen,
    },
    rightRock: {
      hasMoved: false,
      symbol: "R",
      image: whiteRook,
    },
    leftRock: {
      hasMoved: false,
      symbol: "R",
      image: whiteRook,
    },
    rightKnight: {
      hasMoved: false,
      symbol: "N",
      image: whiteKnight,
    },
    leftKnight: {
      hasMoved: false,
      symbol: "N",
      image: whiteKnight,
    },
    rightBishop: {
      hasMoved: false,
      symbol: "B",
      image: whiteBishop,
    },
    leftBishop: {
      hasMoved: false,
      symbol: "B",
      image: whiteBishop,
    },
    pawn1: {
      hasMoved: false,
      symbol: "P",
      image: whitePawn,
    },
    pawn2: {
      hasMoved: false,
      symbol: "P",
      image: whitePawn,
    },
    pawn3: {
      hasMoved: false,
      symbol: "P",
      image: whitePawn,
    },
    pawn4: {
      hasMoved: false,
      symbol: "P",
      image: whitePawn,
    },
    pawn5: {
      hasMoved: false,
      symbol: "P",
      image: whitePawn,
    },
    pawn6: {
      hasMoved: false,
      symbol: "P",
      image: whitePawn,
    },
    pawn7: {
      hasMoved: false,
      symbol: "P",
      image: whitePawn,
    },
    pawn8: {
      hasMoved: false,
      symbol: "P",
      image: whitePawn,
    },
  },
  black: {
    king: {
      hasMoved: false,
      symbol: "k",
      image: blackKing,
    },
    queen: {
      hasMoved: false,
      symbol: "q",
      image: blackQueen,
    },
    rightRock: {
      hasMoved: false,
      symbol: "r",
      image: blackRook,
    },
    leftRock: {
      hasMoved: false,
      symbol: "r",
      image: blackRook,
    },
    rightKnight: {
      hasMoved: false,
      symbol: "n",
      image: blackKnight,
    },
    leftKnight: {
      hasMoved: false,
      symbol: "n",
      image: blackKnight,
    },
    rightBishop: {
      hasMoved: false,
      symbol: "b",
      image: blackBishop,
    },
    leftBishop: {
      hasMoved: false,
      symbol: "b",
      image: blackBishop,
    },
    pawn1: {
      hasMoved: false,
      symbol: "p",
      image: blackPawn,
    },
    pawn2: {
      hasMoved: false,
      symbol: "p",
      image: blackPawn,
    },
    pawn3: {
      hasMoved: false,
      symbol: "p",
      image: blackPawn,
    },
    pawn4: {
      hasMoved: false,
      symbol: "p",
      image: blackPawn,
    },
    pawn5: {
      hasMoved: false,
      symbol: "p",
      image: blackPawn,
    },
    pawn6: {
      hasMoved: false,
      symbol: "p",
      image: blackPawn,
    },
    pawn7: {
      hasMoved: false,
      symbol: "p",
      image: blackPawn,
    },
    pawn8: {
      hasMoved: false,
      symbol: "p",
      image: blackPawn,
    },
  },
};

export const boardInitialState = {
  board: [
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
  ],
  playerTurn: "white",
  selectedPiece: null,
  validMoves: [],
  check: false,
  checkMate: false,
};
