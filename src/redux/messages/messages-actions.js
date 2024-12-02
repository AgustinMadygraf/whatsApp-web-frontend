/*
Path: src/redux/messages/messages-actions.js
Este archivo es donde se definen las acciones de Redux.
*/

import * as ACTIONS from "./message-actionTypes";
import * as api from "../../api/api";

export const getRooms = () => async (dispatch) => {
  try {
    const rooms = await api.getRooms();
    console.log("Rooms fetched:", rooms.data); // Add this line
    return dispatch({
      type: ACTIONS.GET_ROOMS,
      payload: rooms.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setUser = (data) => {
  console.log("User set:", data); // Add this line
  return {
    type: ACTIONS.SET_USER,
    payload: data,
  };
};

export const addMessage = (roomId, message) => {
  console.log("Message added to room:", roomId, message); // Add this line
  return {
    type: ACTIONS.ADD_MESSAGE,
    payload: { roomId, message },
  };
};
