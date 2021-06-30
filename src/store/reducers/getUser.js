import {
  FETCH_USER,
  WATCH_USER,
  STATUS_USER,
  MESSAGE_USER,
  WATCH_DETAIL_USER,
} from "../../constants/types/users";

const initialState = {
  data: [],
  total: 0,
  status: "idle",
  message: "",
  status: "error",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case STATUS_USER:
      return {
        ...state,
        status: action.payload,
      };

    case FETCH_USER:
      return {
        ...state,
        data: action.payload,
        total: action.payload?.length ?? 0,
        status: "ok",
      };

    case WATCH_USER:
      return {
        ...state,
        data: action.payload,
        status: "ok",
      };
    case WATCH_DETAIL_USER:
      return {
        ...state,
        data: action.payload,
        status: "ok",
      };

    case MESSAGE_USER:
      return {
        ...state,
        message: action.payload,
        status: "error",
      };

    default:
      return state;
  }
}
