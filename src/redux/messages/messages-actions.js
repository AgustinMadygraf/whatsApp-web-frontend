/*
Path: src/redux/messages/messages-actions.js
Este archivo es donde se definen las acciones de Redux.
*/

import * as ACTIONS from "./message-actionTypes";
import * as api from "../../api/api";

export const getRooms = () => async (dispatch) => {
  try {
    const rooms = await api.getRooms();
    return dispatch({
      type: ACTIONS.GET_ROOMS,
      payload: rooms.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setUser = (data) => {
  return {
    type: ACTIONS.SET_USER,
    payload: data,
  };
};

export const addMessage = (roomId, message) => {
  return {
    type: ACTIONS.ADD_MESSAGE,
    payload: { roomId, message },
  };
};
