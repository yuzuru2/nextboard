import * as React from 'react';

const sidebar = () => {
  return (
    <>
      <aside>
        <div style={{ textAlign: 'center' }}>
          <a
            href="https://nuxtchat.itsumen.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/banner1.jpg" style={{ width: '70%' }} />
          </a>
        </div>

        <br />
        <div style={{ textAlign: 'center' }}>
          <a
            href="https://yuzuru.itsumen.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/banner3.jpg" style={{ width: '70%' }} />
          </a>
        </div>
      </aside>
    </>
  );
};

export default sidebar;
