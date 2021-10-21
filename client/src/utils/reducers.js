import { useReducer } from 'react';

import {
 ADD_TO_TEAM,
 REMOVE_FROM_TEAM
} from "./actions";

export const reducer = (state, action) => {
 switch (action.type) {
  case ADD_TO_TEAM:
   return {
    ...state,
    teamEmpty: true,
    cart: [...state.team, action.pokemon],
   };

   case REMOVE_FROM_TEAM:
    let newState = state.team.filter(pokemon => {
     return pokemon._id !== action._id;
    });

    return {
     ...state,
     teamEmpty: newState.length > 0,
     team: newState
    };

    default:
     return state;
  }
};



export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}