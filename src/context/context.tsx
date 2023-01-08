import React, { useContext } from 'react';
import { createContext, useReducer } from 'react';
import { Action, IBet, IContext, Props, State } from '../models/context';

export const AppContext = createContext({} as IContext);

export const useMyContext = () => {
  return useContext(AppContext);
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'setBet':
      return { ...state, bet: action.bet };
    default:
      return state;
  }
};

const initialState: State = {
  bet: null,
};

export const AppContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setBet = (bet: IBet | null) => {
    dispatch({ type: 'setBet', bet });
  };

  return (
    <AppContext.Provider
      value={{
        bet: state.bet,
        setBet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
