import { receiveUsers } from "./users";
import { receivePolls } from "./polls";
import { receiveAuthedUser } from "./authedUser";
import { setAuthedUser } from "./authedUser";
import { getInitialData } from "../utils/api";

const AUTHED_ID = "zoshikanlu";

export const handleInitialData = () => {
  return (dispatch) => {
    return getInitialData().then(({ users, polls }) => {
      dispatch(receiveUsers(users));
      dispatch(receivePolls(polls));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
};
