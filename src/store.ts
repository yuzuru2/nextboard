import { combineReducers, createStore, applyMiddleware, Dispatch } from 'redux';

import { home, i_home } from 'src/reducer/home';
import { talks, i_talks } from 'src/reducer/talks';

export interface i_reducer {
  home: i_home;
  talks: i_talks;
}

/**
 * Props
 */
export interface Props {
  req: any;
  query: any;
  pathname: string;
  reduxStore: {
    dispatch: Dispatch;
    getState: () => i_reducer;
  };
}

export const initializeStore = (state: i_reducer) => {
  return createStore(
    combineReducers({
      home: home,
      talks: talks,
    }),
    state,
    applyMiddleware()
  );
};
