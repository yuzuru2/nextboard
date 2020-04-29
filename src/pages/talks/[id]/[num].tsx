import * as React from 'react';
import { useRouter } from 'next/router';
import { withRedux } from 'src/lib/redux';
import { Props } from 'src/store';
import { get_request } from 'src/util/request';
import { i_responce } from 'src/interface';
import { i_reducer } from 'src/store';
import { useSelector } from 'react-redux';
import action from 'src/actions/talks';
import Talks from 'src/components/talks';
import { constant } from 'src/constant';

const index = () => {
  const { id } = useRouter().query;
  const redux: i_reducer = useSelector((state: i_reducer) => state);

  return (
    <>
      <Talks
        breadcrumb={['トーク']}
        url={`/talks/${id}`}
        count={redux.talks.count}
      />
    </>
  );
};

index.getInitialProps = async ({ reduxStore, query }: Props) => {
  try {
    const { id, num } = query;
    const _res = await get_request(encodeURI(`/talks/${id}/${num}`));

    if (_res.status !== 200) {
      return;
    }

    const _ret: i_responce['talks'] = await _res.json();

    action[constant.TALKS_SET_DATA](reduxStore.dispatch, _ret.list);
    action[constant.TALKS_SET_COUNT](reduxStore.dispatch, _ret.count);
    action[constant.TALKS_SET_PAGINATION](reduxStore.dispatch, Number(num));
  } catch (err) {}
};

export default withRedux(index);
