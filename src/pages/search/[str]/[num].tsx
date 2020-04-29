import * as React from 'react';
import { useRouter } from 'next/router';
import { withRedux } from 'src/lib/redux';
import { Props } from 'src/store';
import { get_request } from 'src/util/request';
import { i_responce } from 'src/interface';
import { i_reducer } from 'src/store';
import { useSelector } from 'react-redux';
import action from 'src/actions/home';
import Home from 'src/components/home';

const search = () => {
  const redux: i_reducer = useSelector((state: i_reducer) => state);
  const { str } = useRouter().query;

  return (
    <>
      <Home
        breadcrumb={['検索', String(str)]}
        url={`/search/${str}`}
        count={redux.home.count}
      />
    </>
  );
};

search.getInitialProps = async ({ reduxStore, query }: Props) => {
  try {
    const { str, num } = query;
    const _res = await get_request(encodeURI(`/search/${str}/${num}`));

    if (_res.status !== 200) {
      return;
    }

    const _ret: i_responce['home'] = await _res.json();
    action['HOME_SET_DATA'](reduxStore.dispatch, _ret.list);
    action['HOME_SET_COUNT'](reduxStore.dispatch, _ret.count);
    action['HOME_SET_PAGINATION'](reduxStore.dispatch, Number(num));
    // console.log(process.browser);
  } catch (err) {}
};

export default withRedux(search);
