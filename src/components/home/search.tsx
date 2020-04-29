import * as React from 'react';
import Router from 'next/router';

const search = () => {
  const [text, setText] = React.useState('');

  return React.useMemo(() => {
    return (
      <>
        <div className="mx-auto" style={{ maxWidth: '300px' }}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="検索"
              maxLength={15}
              onChange={(e) => setText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key == 'Enter') {
                  text.length === 0
                    ? Router.push(`/`)
                    : Router.push(`/search/${text}/1`);
                }
              }}
            />

            <div className="input-group-append">
              <button
                className="btn btn-info"
                type="button"
                onClick={() =>
                  text.length === 0
                    ? Router.push(`/`)
                    : Router.push(`/search/${text}/1`)
                }
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }, [text]);
};

export default search;
