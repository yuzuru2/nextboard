import * as React from 'react';
import Link from 'next/link';

const breadcrumb = (params: { list: string[]; count: number }) => {
  return (
    <>
      <div aria-label="パンくずリスト">
        <ol className="breadcrumb mb-1">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>ホーム</a>
            </Link>
          </li>

          {params.list.map((m, i) => {
            return (
              <li className="breadcrumb-item active" key={i}>
                {m}
              </li>
            );
          })}

          <li className="breadcrumb-item active" aria-current="page">
            {params.count}件
          </li>
        </ol>
      </div>
    </>
  );
};

export default breadcrumb;
