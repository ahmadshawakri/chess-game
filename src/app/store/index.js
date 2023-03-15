import { legacy_createStore } from "redux";
import { boardReducer } from "../reducers";

const store = legacy_createStore(boardReducer);

export default store;
