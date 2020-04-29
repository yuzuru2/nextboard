import { constant } from 'src/constant';
import fetch from 'isomorphic-unfetch';

export const get_request = async (url: string) => {
  return await fetch(`${constant.REQUEST_URL[process.env.NODE_ENV]}${url}`, {
    method: 'get',
    headers: constant.HEADER,
  });
};

export const post_request = async (url: string, params: {}) => {
  return await fetch(`${constant.REQUEST_URL[process.env.NODE_ENV]}${url}`, {
    method: 'post',
    headers: constant.HEADER,
    body: JSON.stringify(params),
  });
};

export const put_request = async (url: string, params: {}) => {
  return await fetch(`${constant.REQUEST_URL[process.env.NODE_ENV]}${url}`, {
    method: 'put',
    headers: constant.HEADER,
    body: JSON.stringify(params),
  });
};

export const delete_request = async (url: string, params: {}) => {
  return await fetch(`${constant.REQUEST_URL[process.env.NODE_ENV]}${url}`, {
    method: 'delete',
    headers: constant.HEADER,
    body: JSON.stringify(params),
  });
};
