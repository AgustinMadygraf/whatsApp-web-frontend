/*
Path: src/globalContext/reducer.js
Este archivo es el encargado de manejar el estado global de la aplicación.
*/

export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  Routes (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
