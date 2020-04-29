import * as React from 'react';
import { useDispatch, Dispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { constant } from 'src/constant';
import { post_request, get_request } from 'src/util/request';
import { i_responce } from 'src/interface';
import { useRouter } from 'next/router';
import action from 'src/actions/talks';

const modal = () => {
  const { id, num } = useRouter().query;
  const dispatch: Dispatch = useDispatch();

  const [showModal, setshowModal] = React.useState(false);
  const [name, setName] = React.useState('名無し');
  const [message, setMessage] = React.useState('');

  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => setshowModal(true)}
      >
        投稿
      </button>

      <Modal show={showModal} onHide={() => setshowModal(false)}>
        <Modal.Header closeButton>
          <h5 id="exampleModalLabel">投稿</h5>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">なまえ</label>
            <textarea
              className="form-control"
              rows={1}
              placeholder="15文字内"
              maxLength={15}
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">メッセージ</label>
            <textarea
              className="form-control"
              rows={3}
              placeholder="150文字内"
              maxLength={150}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={async () => {
              setshowModal(false);

              if (name.length === 0) {
                alert('なまえが未入力です');
                return;
              }

              if (message.length === 0) {
                alert('メッセージが未入力です');
                return;
              }

              const _name = name;
              const _message = message;
              setName('名無し');
              setMessage('');

              const _res = await post_request('/talks', {
                roomId: id,
                name: _name,
                message: _message,
              });

              if (_res.status !== 200) {
                return;
              }

              (async () => {
                const _res = await get_request(
                  encodeURI(`/talks/${id}/${num}`)
                );

                if (_res.status !== 200) {
                  return;
                }

                const _ret: i_responce['talks'] = await _res.json();

                action[constant.TALKS_SET_DATA](dispatch, _ret.list);
                action[constant.TALKS_SET_COUNT](dispatch, _ret.count);
                action[constant.TALKS_SET_PAGINATION](dispatch, Number(num));
              })();
            }}
          >
            投稿
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default modal;
