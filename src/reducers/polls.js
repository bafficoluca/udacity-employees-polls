import {
  RECEIVE_POLLS,
  ADD_ANSWER_TO_QUESTION,
  CREATE_NEW_QUESTION,
} from "../actions/polls";

export default function polls(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls,
      };
    case ADD_ANSWER_TO_QUESTION:
      const { authedUser, questionId, answer } = action;

      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          [answer]: {
            ...state[questionId][answer],
            votes: [
              ...new Set(state[questionId][answer].votes.concat(authedUser)),
            ],
          },
        },
      };

    case CREATE_NEW_QUESTION:
      const { question } = action;

      return {
        ...state,
        [question.id]: { ...question },
      };
    default:
      return state;
  }
}
