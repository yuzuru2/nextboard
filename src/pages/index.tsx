import * as React from 'react';
import { withRedux } from 'src/lib/redux';
import { Props } from 'src/store';
import { get_request } from 'src/util/request';
import { i_responce } from 'src/interface';
import { i_reducer } from 'src/store';
import { useSelector } from 'react-redux';
import action from 'src/actions/home';
import Home from 'src/components/home';

const index = () => {
  const redux: i_reducer = useSelector((state: i_reducer) => state);

  return (
    <>
      <Home breadcrumb={[]} url={'/info'} count={redux.home.count} />
    </>
  );
};

index.getInitialProps = async ({ reduxStore }: Props) => {
  const _res = await get_request('/info/1');

  if (_res.status !== 200) {
    return;
  }

  const _ret: i_responce['home'] = await _res.json();

  action['HOME_SET_DATA'](reduxStore.dispatch, _ret.list);
  action['HOME_SET_COUNT'](reduxStore.dispatch, _ret.count);
  action['HOME_SET_PAGINATION'](reduxStore.dispatch, 1);
};

export default withRedux(index);
