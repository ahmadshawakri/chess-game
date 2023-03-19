import { boardInitialState } from "../states";
import produce from "immer";

export const boardHasChanged = "boardHasChanged";
export const selectPiece = "selectPiece";
export const setPlayerTurn = "setPlayerTurn";
export const setValidMoves = "setValidMoves";
export const setHistory = "setHistory";

export const changedBoard = (newBoard) => {
  return {
    type: boardHasChanged,
    payload: newBoard,
  };
};

export const pieceHasSelected = (selectedPiece) => {
  return {
    type: selectPiece,
    payload: selectedPiece,
  };
};

export const playerTurnChanged = (player) => {
  return {
    type: setPlayerTurn,
    payload: player,
  };
};

export const validMovesCalculated = (moves) => {
  return {
    type: setValidMoves,
    payload: moves,
  };
};

export const historyChanged = (moveHistory) => {
  return {
    type: setHistory,
    payload: moveHistory,
  };
};

export const boardReducer = (state = boardInitialState, action) => {
  switch (action.type) {
    case boardHasChanged:
      return produce(state, (draft) => {
        draft.board = action.payload;
        draft.selectedPiece = null;
        draft.validMoves = [];
      });
    case selectPiece:
      return produce(state, (draft) => {
        draft.selectedPiece = action.payload;
      });
    case setPlayerTurn:
      return produce(state, (draft) => {
        draft.playerTurn = action.payload;
      });
    case setValidMoves:
      // console.log(action.payload);
      return produce(state, (draft) => {
        draft.validMoves = action.payload;
      });
    case setHistory:
      return produce(state, (draft) => {
        draft.history = [...state.history, action.payload];
      });

    default:
      return state;
  }
};
