import * as React from 'react';
import { i_reducer } from 'src/store';
import { useSelector } from 'react-redux';

const reactStringReplace = require('react-string-replace');

const article = () => {
  const redux: i_reducer = useSelector((state: i_reducer) => state);

  return React.useMemo(() => {
    return (
      <>
        <article className="mx-auto">
          {redux.talks.data.map((row, i) => {
            return (
              <div key={i}>
                <div className="card">
                  <div className="card-header text-center _card_header">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    {row.createdAt}
                    <br />
                    {row.name}
                  </div>
                  <div className="card-body" style={{ whiteSpace: 'pre-line' }}>
                    {reactStringReplace(
                      row.message,
                      /(https?:\/\/\S+)/g,
                      (match, j) => (
                        <a
                          href={match}
                          key={match + j}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {match}
                        </a>
                      )
                    )}
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
        `}</style>
      </>
    );
  }, [redux.talks.data]);
};

export default article;
