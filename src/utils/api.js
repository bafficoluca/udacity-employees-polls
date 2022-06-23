import { _getUsers, _getQuestions } from "./_DATA";

export const getInitialData = () => {
  return Promise.all([_getUsers(), _getQuestions()]).then(([users, polls]) => ({
    users,
    polls,
  }));
};
