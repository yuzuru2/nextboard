import * as React from 'react';
import Link from 'next/link';

import { constant } from 'src/constant';
import { i_reducer } from 'src/store';
import { useSelector } from 'react-redux';

const article = () => {
  const redux: i_reducer = useSelector((state: i_reducer) => state);

  return React.useMemo(() => {
    return (
      <>
        <article className="mx-auto">
          {redux.home.data.map((row, i) => {
            return (
              <div key={i}>
                <div className="card">
                  <div className="card-header text-center _card_header">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    {row.updatedAt}
                    &nbsp;&nbsp;
                    <br />
                    <Link href={`/genre/${row.genreId}/1`}>
                      <a className="it-Tags_item">
                        {constant.GENRE[row.genreId]}
                      </a>
                    </Link>
                    <br />
                    投稿数: {row.count}
                  </div>
                  <div className="card-body">
                    <Link href={`/talks/${row.id}/1`}>
                      <a>{row.name}</a>
                    </Link>
                  </div>
                </div>
                <br />
              </div>
            );
          })}
        </article>

        {/* styled-jsx */}
        <style jsx>{`
          ._card_header {
            font-size: 13px;
            padding: 0 1.25rem;
          }

          .it-Tags_item {
            color: #666;
            font-size: 12px;
          }
        `}</style>
      </>
    );
  }, [redux.home.data]);
};

export default article;
