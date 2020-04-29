import moment from 'moment';
import { constant } from 'src/constant';

export interface i_home {
  type: string;
  pagination?: number;
  data?: {
    id: string;
    name: string;
    genreId: string;
    updatedAt: string;
    count: number;
  }[];
  count?: number;
}

const initialState: i_home = {
  type: '',
  pagination: 1,
  data: [],
  count: 0,
};

export const home = (state = initialState, action: i_home) => {
  let param: i_home = {
    type: action.type,
  };

  switch (action.type) {
    case constant.HOME_SET_COUNT:
      param.count = action.count;
      return Object.assign({}, state, param);
    case constant.HOME_SET_DATA:
      param.data = action.data.map((m) => {
        return {
          id: m.id,
          name: m.name,
          genreId: m.genreId,
          updatedAt: moment(m.updatedAt).format('YYYY-MM-DD HH:mm:ss'),
          count: m.count,
        };
      });
      return Object.assign({}, state, param);
    case constant.HOME_SET_PAGINATION:
      param.pagination = action.pagination;
      return Object.assign({}, state, param);
    default:
      return state;
  }
};
