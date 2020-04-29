import { constant } from 'src/constant';
import { Dispatch } from 'react-redux';

const TALKS = {
  TALKS_SET_DATA: (
    dispatch: Dispatch,
    data: {
      talkId: string;
      roomId: string;
      name: string;
      message: string;
      createdAt: string;
      updatedAt: string;
    }[]
  ) => {
    dispatch({
      type: constant.TALKS_SET_DATA,
      data: data,
    });
  },
  TALKS_SET_COUNT: (dispatch: Dispatch, count: number) => {
    dispatch({
      type: constant.TALKS_SET_COUNT,
      count: count,
    });
  },
  TALKS_SET_PAGINATION: (dispatch: Dispatch, pagination: number) => {
    dispatch({
      type: constant.TALKS_SET_PAGINATION,
      pagination: pagination,
    });
  },
};

export default TALKS;
