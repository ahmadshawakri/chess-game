import { boardInitialState } from "../states";
import produce from "immer";

export const selectPiece = "selectPiece";
export const setPlayerTurn = "setPlayerTurn";
export const setValidMoves = "setValidMoves";
export const pieceHasMoved = "pieceHasMoved";
export const setHistory = "setHistory";

export const pieceSelect = (selectedPiece) => {
  return {
    type: selectPiece,
    payload: selectedPiece,
  };
};

export const playerTurn = (player) => {
  return {
    type: setPlayerTurn,
    payload: player,
  };
};

export const validMoves = (moves) => {
  return {
    type: setValidMoves,
    payload: moves,
  };
};

export const pieceMove = (hasMoved) => {
  return {
    type: pieceHasMoved,
    payload: hasMoved,
  };
};

export const history = (moveHistory) => {
  return {
    type: setHistory,
    payload: moveHistory,
  };
};

export const boardReducer = (state = boardInitialState, action) => {
  switch (action.type) {
    case selectPiece:
      console.log(action.payload);
      return produce(state, (draft) => {
        draft.selectedPiece = action.payload;
      });
    case setPlayerTurn:
      console.log(action.type);
      return state;
    case setValidMoves:
      console.log(action.type);
      return state;
    case pieceHasMoved:
      console.log(action.payload);
      return state;
    case setHistory:
      console.log(action.type);
      return state;
    default:
      return state;
  }
};
