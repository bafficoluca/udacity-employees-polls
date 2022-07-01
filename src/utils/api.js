import { _getUsers, _getQuestions, _saveQuestionAnswer } from "./_DATA";

export const getInitialData = () => {
  return Promise.all([_getUsers(), _getQuestions()]).then(([users, polls]) => ({
    users,
    polls,
  }));
};

export const saveQuestionAnswer = (authedUser, questionId, answer) => {
  return _saveQuestionAnswer(authedUser, questionId, answer).then(
    (response) => response
  );
};
