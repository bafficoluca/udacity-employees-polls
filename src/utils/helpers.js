export const formatPoll = (poll, authedUser) => {
  if (poll && authedUser) {
    const { id, author, timestamp, optionOne, optionTwo } = poll;
    const { name, avatarURL } = author;

    return {
      id,
      authorName: name,
      timestamp,
      authorAvatar: avatarURL,
      optionOne,
      optionTwo,
      alreadyAnswered:
        optionOne.votes.includes(authedUser) ||
        optionTwo.votes.includes(authedUser),
    };
  }
  return null;
};

export const getNewQuestions = (polls, authedUser, users) => {
  return {
    id: "id",
  };
};

export const getAnsweredQuestions = (polls, authedUser, users) => {
  return {
    id: "id",
  };
};
