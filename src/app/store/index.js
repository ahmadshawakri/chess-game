import { legacy_createStore } from "redux";
import { boardReducer } from "../reducers";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = legacy_createStore(boardReducer, enhancer());

export default store;
