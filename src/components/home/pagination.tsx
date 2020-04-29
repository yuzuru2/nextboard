import * as React from 'react';
import Pagination from 'react-js-pagination';
import { useDispatch, Dispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import { i_reducer } from 'src/store';
import action from 'src/actions/home';

const pagination = (params: { url: string }) => {
  const dispatch: Dispatch = useDispatch();
  const redux: i_reducer = useSelector((state: i_reducer) => state);

  return (
    <>
      <div className="d-flex justify-content-center">
        <Pagination
          activePage={redux.home.pagination}
          itemsCountPerPage={10}
          totalItemsCount={redux.home.count}
          onChange={async (num: number) => {
            action['HOME_SET_PAGINATION'](dispatch, num);
            Router.push(`${params.url}/${num}`);
          }}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    </>
  );
};

export default pagination;
