/*
Path src/redux/messages/messages-reducers.js
Este archivo es donde se configura el reducer de Redux.
*/

import * as ACTIONS from "./message-actionTypes";

const initialState = {
  user: null,
  rooms: [], // Estado inicial para rooms
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_ROOMS:
      return {
        ...state,
        rooms: action.payload,
      };

    case ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case ACTIONS.ADD_MESSAGE:
      return {
        ...state,
        rooms: state.rooms.map((room) =>
          room._id === action.payload.roomId
            ? {
                ...room,
                roomMessages: [...room.roomMessages, action.payload.message],
              }
            : room
        ),
      };

    default:
      return state;
  }
};

export default reducer;
