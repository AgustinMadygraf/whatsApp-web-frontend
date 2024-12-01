/*
Path: src/redux/rootReducer.js
Este archivo es el encargado de combinar todos los reducers de la aplicación.
*/

import { combineReducers } from "redux";
import rooms from "./messages/messages-reducers";

const rootReducer = combineReducers({
  rooms,
});

export default rootReducer;
