import { receiveUsers, addAnswerToUser, addQuestionToUser } from "./users";
import { receivePolls, addAnswerToQuestion, saveNewQuestion } from "./polls";
import { getInitialData, saveQuestion, saveQuestionAnswer } from "../utils/api";

export const handleInitialData = () => {
  return (dispatch) => {
    return getInitialData().then(({ users, polls }) => {
      dispatch(receiveUsers(users));
      dispatch(receivePolls(polls));
    });
  };
};

export const voteForPoll = (authedUser, qid, answer) => {
  return (dispatch) => {
    return saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(addAnswerToUser(authedUser, qid, answer));
      dispatch(addAnswerToQuestion(authedUser, qid, answer));
    });
  };
};

export const createNewQuestion = (question, authedUser) => {
  return (dispatch) => {
    return saveQuestion(question).then((newQuestion) => {
      dispatch(saveNewQuestion(newQuestion));
      dispatch(addQuestionToUser(authedUser, newQuestion));
    });
  };
};
