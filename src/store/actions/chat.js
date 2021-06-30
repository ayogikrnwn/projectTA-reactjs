import {
    FETCH_CHAT,
    WATCH_CHAT,
    STATUS_CHAT,
    MESSAGE_CHAT,
  } from "../../constants/types/chat";
  
  export const statusChat = (status) => ({
    type: STATUS_CHAT,
    payload: status,
  });
  
  export const fetchChat = (users) => ({
    type: FETCH_CHAT,
    payload: users,
  });
  
  export const watchChat = (user) => ({
    type: WATCH_CHAT,
    payload: user,
  });
  
  export const messageChat = (message) => ({
    type: MESSAGE_CHAT,
    payload: message,
  });
  