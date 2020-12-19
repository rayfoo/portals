// @ts-nocheck
import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';
import { stateType, actionType } from './type';

const initialState: stateType = {
  slider: {
    isOpen: false,
  },
  currentPost: 0,
  posts: [],
  error: null,
};

export const context = createContext({
  state: initialState,
  dispatch: (_: actionType) => {},
});
const { Provider } = context;

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
