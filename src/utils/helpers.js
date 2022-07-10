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

export const getAnsweredQuestions = (polls, authedUser) => {
  const answeredQuestions = [];
  Object.entries(polls)?.map((poll) => {
    if (
      poll[1].optionOne.votes.includes(authedUser) ||
      poll[1].optionTwo.votes.includes(authedUser)
    ) {
      answeredQuestions.push(poll[1]);
    }
    answeredQuestions.sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
  });

  return [...answeredQuestions];
};

export const getNewQuestions = (polls, authedUser) => {
  const newQuestions = [];
  Object.entries(polls)?.map((poll) => {
    if (
      !poll[1].optionOne.votes.includes(authedUser) &&
      !poll[1].optionTwo.votes.includes(authedUser)
    ) {
      newQuestions.push(poll[1]);
    }
    newQuestions.sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
  });
  return [...newQuestions];
};

export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}
