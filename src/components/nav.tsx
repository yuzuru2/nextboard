import * as React from 'react';
import { constant } from 'src/constant';
import Link from 'next/link';

import { Navbar } from 'react-bootstrap';

const nav = () => {
  return (
    <>
      <Navbar expand={false}>
        <Link href="/">
          <a style={{ color: '#fff' }}>{constant.TITLE}</a>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded="false" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="nav navbar-nav ml-auto">
            {Object.keys(constant.GENRE).map((m) => {
              return (
                <li className="list-group-item" key={m}>
                  <Link href={`/genre/${m}/1`}>
                    <a>{constant.GENRE[m]}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default nav;
