import { constant } from 'src/constant';
import { Dispatch } from 'react-redux';

const home = {
  HOME_SET_DATA: (
    dispatch: Dispatch,
    data: {
      id: string;
      name: string;
      genreId: string;
      updatedAt: string;
      count: number;
    }[]
  ) => {
    dispatch({
      type: constant.HOME_SET_DATA,
      data: data,
    });
  },
  HOME_SET_COUNT: (dispatch: Dispatch, count: number) => {
    dispatch({
      type: constant.HOME_SET_COUNT,
      count: count,
    });
  },
  HOME_SET_PAGINATION: (dispatch: Dispatch, pagination: number) => {
    dispatch({
      type: constant.HOME_SET_PAGINATION,
      pagination: pagination,
    });
  },
};

export default home;
