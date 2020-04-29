import * as React from 'react';
import Head from 'next/head';

import Nav from 'src/components/nav';
import Sidebar from 'src/components/sidebar';
import Footer from 'src/components/footer';
import Article from 'src/components/home/article';
import Pegination from 'src/components/home/pagination';
import Search from 'src/components/home/search';
import Breadcrumb from 'src/components/breadcrumb';
import Modal from 'src/components/home/modal';

import { constant } from 'src/constant';

const home = (params: { breadcrumb: string[]; url: string; count: number }) => {
  /**
   * componentDidMount
   */
  React.useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Head>
        <title>{constant.TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link
          rel="icon"
          type="image/png"
          href="/android-touch-icon.png"
          sizes="192x192"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div id="app">
        <header>
          <Nav />
        </header>

        <main>
          <div className="row">
            <section>
              <Breadcrumb list={params.breadcrumb} count={params.count} />
              <br />

              <Search />
              <br />

              <div style={{ textAlign: 'center' }}>
                <Modal />
              </div>

              <br />

              <Article />
              <Pegination url={params.url} />
            </section>
            <Sidebar />
          </div>
        </main>

        <div className="sumaho_banner mx-auto">
          <a
            href="https://nuxtchat.itsumen.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/banner1.jpg" style={{ width: '80%' }} />
          </a>
        </div>

        <br />
        <br />

        <Footer />
      </div>
    </>
  );
};

export default home;
