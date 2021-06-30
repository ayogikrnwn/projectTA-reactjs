import { POPULATE_PROFILE ,
  FETCH_USER,
  WATCH_USER,
  STATUS_USER,
  MESSAGE_USER, } from "../../constants/types/users";

const initialState = {
  data: {},
  total: 0,
  status: "idle",
  message: "",
};

export const populateProfile = (profile = {}) => ({
  type: POPULATE_PROFILE,
  payload: profile,
});




