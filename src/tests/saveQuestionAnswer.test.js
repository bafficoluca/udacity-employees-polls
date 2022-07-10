import { _saveQuestionAnswer } from "../utils/_DATA";

describe("_saveQuestionAnswer", () => {
  it("will return true if the question gets correctly updated with a new anser", async () => {
    const answer = {
      authedUser: "zoshikanlu",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionTwo",
    };
    var result = await _saveQuestionAnswer(answer);
    expect(result).toEqual(true);
  });

  it("will return an error if the question is not correctly formatted", async () => {
    const answer = {
      authedUser: null,
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionTwo",
    };
    await expect(_saveQuestionAnswer(answer)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
