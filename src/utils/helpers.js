export const formatPoll = (poll, authedUser, users) => {
  if (poll && authedUser) {
    const { id, author, timestamp, optionOne, optionTwo } = poll;

    return {
      id,
      author,
      authorAvatar: users[author]?.avatarURL,
      timestamp,
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

export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}
