export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";

export const receivePolls = (polls) => {
  return {
    type: RECEIVE_POLLS,
    polls,
  };
};

export const addAnswerToQuestion = (authedUser, questionId, answer) => {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    authedUser,
    questionId,
    answer,
  };
};
