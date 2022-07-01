import { receiveUsers, addAnswerToUser } from "./users";
import { receivePolls, addAnswerToQuestion } from "./polls";
import { setAuthedUser } from "./authedUser";
import { getInitialData, saveQuestionAnswer } from "../utils/api";

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

export const voteForPoll = (authedUser, qid, answer) => {
  return (dispatch) => {
    dispatch(showLoading);
    return saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(addAnswerToUser(authedUser, qid, answer));
      dispatch(addAnswerToQuestion(authedUser, qid, answer));
    });
  };
};
