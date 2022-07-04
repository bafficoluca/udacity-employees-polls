import { receiveUsers, addAnswerToUser, addQuestionToUser } from "./users";
import { receivePolls, addAnswerToQuestion, saveNewQuestion } from "./polls";
import { getInitialData, saveQuestion, saveQuestionAnswer } from "../utils/api";

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

export const createNewQuestion = (question, authedUser) => {
  return (dispatch) => {
    dispatch(showLoading);
    return saveQuestion(question).then((newQuestion) => {
      dispatch(saveNewQuestion(newQuestion));
      dispatch(addQuestionToUser(authedUser, newQuestion));
    });
  };
};
