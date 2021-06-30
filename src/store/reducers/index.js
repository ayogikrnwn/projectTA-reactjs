import { combineReducers } from "redux";

import users from "./users";
import getUser from "./getUser";

export default combineReducers({
  users,
  getUser
});
