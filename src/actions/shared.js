import { receiveUsers } from "./users";
import { receivePolls } from "./polls";
import { setAuthedUser } from "./authedUser";
import { getInitialData } from "../utils/api";

import { showLoading, hideLoading } from "react-redux-loading-bar";

export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading);
    return getInitialData().then(({ users, polls }) => {
      dispatch(receiveUsers(users));
      dispatch(receivePolls(polls));
      dispatch(hideLoading);
    });
  };
};
