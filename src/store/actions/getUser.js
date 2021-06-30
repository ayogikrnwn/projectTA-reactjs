import {
  FETCH_USER,
  WATCH_USER,
  STATUS_USER,
  MESSAGE_USER,
  WATCH_DETAIL_USER,
} from "../../constants/types/users";

export const statusUser = (status) => ({
  type: STATUS_USER,
  payload: status,
});

export const fetchUsers = (users) => ({
  type: FETCH_USER,
  payload: users,
});

export const watchUser = (user) => ({
  type: WATCH_USER,
  payload: user,
});
export const watchDetailUser = (dataDetail) => ({
  type: WATCH_DETAIL_USER,
  payload: dataDetail,
});

export const messageUser = (message) => ({
  type: MESSAGE_USER,
  payload: message,
});
