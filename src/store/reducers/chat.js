import {
    FETCH_CHAT,
    WATCH_CHAT,
    STATUS_CHAT,
    MESSAGE_CHAT,
  } from "../../constants/types/chat";
  
  const initialState = {
    data: [],
    total: 0,
    status: "idle",
    message: "",
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case STATUS_CHAT:
        return {
          ...state,
          status: action.payload,
        };
  
      case FETCH_CHAT:
        return {
          ...state,
          data: action.payload,
          total: action.payload?.length ?? 0,
          status: "ok",
        };
  
      case WATCH_CHAT:
        return {
          ...state,
          data: action.payload,
          status: "ok",
        };
  
      case MESSAGE_CHAT:
        return {
          ...state,
          message: action.payload,
          status: "error",
        };
  
      default:
        return state;
    }
  }
  