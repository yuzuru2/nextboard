import * as React from 'react';
import Link from 'next/link';
import { constant } from 'src/constant';

const footer = () => {
  return (
    <>
      <footer>
        <Link href="/">
          <a style={{ color: '#fff' }}>{constant.TITLE}</a>
        </Link>
      </footer>
    </>
  );
};

export default footer;
