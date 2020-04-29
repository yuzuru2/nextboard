import * as React from 'react';
import Router from 'next/router';
import { Modal, Button } from 'react-bootstrap';
import { constant } from 'src/constant';
import { post_request } from 'src/util/request';
import { i_responce } from 'src/interface';

const modal = () => {
  const [showModal, setshowModal] = React.useState(false);

  const [name, setName] = React.useState('');
  const [genre, setGenre] = React.useState('0');

  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => setshowModal(true)}
      >
        板をつくる
      </button>

      <Modal show={showModal} onHide={() => setshowModal(false)}>
        <Modal.Header closeButton>
          <h5 id="exampleModalLabel">板をつくる</h5>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">板名</label>
            <textarea
              className="form-control"
              rows={3}
              placeholder="50文字内"
              maxLength={50}
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">ジャンル</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              value={genre}
              onChange={(e) => {
                setGenre(e.target.value);
              }}
            >
              {Object.keys(constant.GENRE).map((key) => {
                return (
                  <option key={key} value={key}>
                    {constant.GENRE[key]}
                  </option>
                );
              })}
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={async () => {
              setshowModal(false);

              if (name.length === 0) {
                alert('板名が未入力です');
                return;
              }

              const _name = name;
              setName('');
              const _res = await post_request('/rooms', {
                name: _name,
                genreId: genre,
              });

              if (_res.status !== 200) {
                return;
              }

              const _ret: i_responce['rooms'] = await _res.json();
              Router.push(`/talks/${_ret.id}/1`);
            }}
          >
            作成
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default modal;
