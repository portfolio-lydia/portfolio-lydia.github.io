import React, { Component } from "react";
import ReactDOM from "react-dom";
import {refactoredDataBase} from "./quizService";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";
import "./assets/style.css";

class AnimalQuiz extends Component {
  state = {
    questionBank: refactoredDataBase,
  };
  getQuestions = () => {
    this.setState({
      questionBank: refactoredDataBase.sort(() => 0.5 - Math.random())
      .slice(0, 5),
      score: 0,
      responses: 0,
      correctAnswers: []
    });
  };
  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({ score: this.state.score + 1 });
    }
    this.setState((prevState) => ({
      responses: prevState.responses < 5 ? prevState.responses + 1 : 5,
      correctAnswers: [...prevState.correctAnswers, correctAnswer]
    }))
  };

  
  componentDidMount() {
    this.getQuestions();
  }
  render() {
    return (
      <div className="container">
        <div className="title">QuizBee</div>
        {this.state.questionBank.length > 0 &&
          this.state.responses < 5 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => {
              return (
                <QuestionBox
                  question={question}
                  options={answers}
                  key={questionId}
                  selected={(answer) => this.computeAnswer(answer, correct)}
                />
              );
            }
          )}
        {this.state.responses === 5 ? (
          <Result score={this.state.score} playAgain={this.getQuestions} correctAnswers={this.state.correctAnswers} />
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(<AnimalQuiz />, document.getElementById("root"));
