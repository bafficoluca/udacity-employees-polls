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

export const getAnsweredQuestionsIds = (polls, authedUser) => {
  const answeredQuestionsIds = [];
  Object.entries(polls)?.map((poll) => {
    if (
      poll[1].optionOne.votes.includes(authedUser) ||
      poll[1].optionTwo.votes.includes(authedUser)
    ) {
      answeredQuestionsIds.push(poll[0]);
    }
  });

  return [...answeredQuestionsIds];
};

export const getNewQuestionsIds = (polls, authedUser) => {
  const newQuestionsIds = [];
  Object.entries(polls)?.map((poll) => {
    if (
      !poll[1].optionOne.votes.includes(authedUser) &&
      !poll[1].optionTwo.votes.includes(authedUser)
    ) {
      newQuestionsIds.push(poll[0]);
    }
  });
  return [...newQuestionsIds];
};
