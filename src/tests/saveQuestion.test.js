import { _saveQuestion } from "../utils/_DATA";

describe("_saveQuestion", () => {
  it("will return the new saved quesition", async () => {
    var question = {
      author: "mtsamis",
      optionOneText: "eat sandwiches",
      optionTwoText: "eat kebub",
    };
    var result = await _saveQuestion(question);
    expect(result.author).toEqual(question.author);
    expect(result.optionOne.text).toEqual("eat sandwiches");
    expect(result.optionTwo.text).toEqual("eat kebub");
  });

  it("will return an error if the question is not correctly formatted", async () => {
    var question = {
      qid: "3dchs1bqm25b708cmbf3g",
      author: "mtsamis",
      firstOption: "eat sandwiches",
      secondOption: "eat kebub",
    };
    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});
