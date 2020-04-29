import moment from 'moment';
import { constant } from 'src/constant';

export interface i_talks {
  type: string;
  count?: number;
  pagination?: number;
  data?: {
    talkId: string;
    roomId: string;
    name: string;
    message: string;
    createdAt: string;
    updatedAt: string;
  }[];
}

const initialState: i_talks = {
  type: '',
  count: 0,
  pagination: 1,
  data: [],
};

export const talks = (state = initialState, action: i_talks) => {
  let param: i_talks = {
    type: action.type,
  };

  switch (action.type) {
    case constant.TALKS_SET_COUNT:
      param.count = action.count;
      return Object.assign({}, state, param);
    case constant.TALKS_SET_PAGINATION:
      param.pagination = action.pagination;
      return Object.assign({}, state, param);
    case constant.TALKS_SET_DATA:
      param.data = action.data.map((m) => {
        return {
          talkId: m.talkId,
          roomId: m.roomId,
          name: m.name,
          message: m.message,
          createdAt: moment(m.createdAt).format('YYYY-MM-DD HH:mm:ss'),
          updatedAt: moment(m.updatedAt).format('YYYY-MM-DD HH:mm:ss'),
        };
      });
      return Object.assign({}, state, param);
    default:
      return state;
  }
};
