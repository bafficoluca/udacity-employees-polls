import React from "react";
import { connect } from "react-redux";
import { useParams, Navigate, useNavigate } from "react-router-dom";

import PollVotingComponent from "../components/PollVotingComponent";
import PollStatisticsComponent from "../components/PollStatisticsComponent";
import { voteForPoll } from "../actions/shared";

const PollPage = ({ polls, users, authedUser, dispatch }) => {
  const navigate = useNavigate();

  const { question_id } = useParams();
  const poll = polls[question_id];
  const author = users[poll?.author];

  const isAlreadyAnswered =
    poll?.optionOne?.votes.includes(authedUser) ||
    poll?.optionTwo?.votes.includes(authedUser);

  const handleVoteForPoll = (questionId, answer) => {
    dispatch(voteForPoll(authedUser, questionId, answer));
    navigate("/");
  };

  return (
    <>
      {authedUser ? (
        <>
          {!poll ? (
            <Navigate to="/not-found-page" />
          ) : (
            <>
              {isAlreadyAnswered ? (
                <PollStatisticsComponent author={author} poll={poll} />
              ) : (
                <PollVotingComponent
                  users={users}
                  polls={polls}
                  handleVoteForPoll={handleVoteForPoll}
                />
              )}
            </>
          )}
        </>
      ) : (
        <Navigate
          to="/login-page"
          state={{ questionId: question_id }}
          replace
        />
      )}
    </>
  );
};

const mapStateToProps = ({ polls, users, authedUser }) => {
  return {
    authedUser,
    users,
    polls,
  };
};

export default connect(mapStateToProps)(PollPage);
