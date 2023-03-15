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

export const piecesInitialState = {
  white: {
    king: {
      id: "whiteKing",
      symbol: "K",
      color: "white",
      image: whiteKing,
      hasMoved: false,
    },
    queen: {
      id: "whiteQueen",
      hasMoved: false,
      symbol: "Q",
      color: "white",
      image: whiteQueen,
    },
    rightRock: {
      id: "whiteRightRock",
      hasMoved: false,
      symbol: "R",
      color: "white",
      image: whiteRook,
    },
    leftRock: {
      id: "whiteLeftRock",
      hasMoved: false,
      symbol: "R",
      color: "white",
      image: whiteRook,
    },
    rightKnight: {
      id: "whiteRightKnight",
      hasMoved: false,
      symbol: "N",
      color: "white",
      image: whiteKnight,
    },
    leftKnight: {
      id: "whiteLeftKnight",
      hasMoved: false,
      symbol: "N",
      color: "white",
      image: whiteKnight,
    },
    rightBishop: {
      id: "whiteRightBishop",
      hasMoved: false,
      symbol: "B",
      color: "white",
      image: whiteBishop,
    },
    leftBishop: {
      id: "whiteLeftBishop",
      hasMoved: false,
      symbol: "B",
      color: "white",
      image: whiteBishop,
    },
    pawn1: {
      id: "whitePawn1",
      hasMoved: false,
      symbol: "P",
      color: "white",
      image: whitePawn,
    },
    pawn2: {
      id: "whitePawn2",
      hasMoved: false,
      symbol: "P",
      color: "white",
      image: whitePawn,
    },
    pawn3: {
      id: "whitePawn3",
      hasMoved: false,
      symbol: "P",
      color: "white",
      image: whitePawn,
    },
    pawn4: {
      id: "whitePawn4",
      hasMoved: false,
      symbol: "P",
      color: "white",
      image: whitePawn,
    },
    pawn5: {
      id: "whitePawn5",
      hasMoved: false,
      symbol: "P",
      color: "white",
      image: whitePawn,
    },
    pawn6: {
      id: "whitePawn6",
      hasMoved: false,
      symbol: "P",
      color: "white",
      image: whitePawn,
    },
    pawn7: {
      id: "whitePawn7",
      hasMoved: false,
      symbol: "P",
      color: "white",
      image: whitePawn,
    },
    pawn8: {
      id: "whitePawn8",
      hasMoved: false,
      symbol: "P",
      color: "white",
      image: whitePawn,
    },
  },
  black: {
    king: {
      id: "blackKing",
      hasMoved: false,
      symbol: "k",
      color: "black",
      image: blackKing,
    },
    queen: {
      id: "blackQueen",
      hasMoved: false,
      symbol: "q",
      color: "black",
      image: blackQueen,
    },
    rightRock: {
      id: "blackRightRock",
      hasMoved: false,
      symbol: "r",
      color: "black",
      image: blackRook,
    },
    leftRock: {
      id: "blackLeftRock",
      hasMoved: false,
      symbol: "r",
      color: "black",
      image: blackRook,
    },
    rightKnight: {
      id: "blackRightKnight",
      hasMoved: false,
      symbol: "n",
      color: "black",
      image: blackKnight,
    },
    leftKnight: {
      id: "blackLeftKnight",
      hasMoved: false,
      symbol: "n",
      color: "black",
      image: blackKnight,
    },
    rightBishop: {
      id: "blackRightBishop",
      hasMoved: false,
      symbol: "b",
      color: "black",
      image: blackBishop,
    },
    leftBishop: {
      id: "blackLeftBishop",
      hasMoved: false,
      symbol: "b",
      color: "black",
      image: blackBishop,
    },
    pawn1: {
      id: "blackPawn1",
      hasMoved: false,
      symbol: "p",
      color: "black",
      image: blackPawn,
    },
    pawn2: {
      id: "blackPawn2",
      hasMoved: false,
      symbol: "p",
      color: "black",
      image: blackPawn,
    },
    pawn3: {
      id: "blackPawn3",
      hasMoved: false,
      symbol: "p",
      color: "black",
      image: blackPawn,
    },
    pawn4: {
      id: "blackPawn4",
      hasMoved: false,
      symbol: "p",
      color: "black",
      image: blackPawn,
    },
    pawn5: {
      id: "blackPawn5",
      hasMoved: false,
      symbol: "p",
      color: "black",
      image: blackPawn,
    },
    pawn6: {
      id: "blackPawn6",
      hasMoved: false,
      symbol: "p",
      color: "black",
      image: blackPawn,
    },
    pawn7: {
      id: "blackPawn7",
      hasMoved: false,
      symbol: "p",
      color: "black",
      image: blackPawn,
    },
    pawn8: {
      id: "blackPawn8",
      hasMoved: false,
      symbol: "p",
      color: "black",
      image: blackPawn,
    },
  },
};
