import React, { Component } from 'react';
import s from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodRev = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  addNeutralRev = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  addBadRev = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button
          className={s.feedbackButton}
          type="button"
          onClick={this.addGoodRev}
        >
          Good
        </button>
        <button
          className={s.feedbackButton}
          type="button"
          onClick={this.addNeutralRev}
        >
          Neutral
        </button>
        <button
          className={s.feedbackButton}
          type="button"
          onClick={this.addBadRev}
        >
          Bad
        </button>
        <h2>Statistics</h2>
        <p className={s.feedbackCounter}>Good: {this.state.good}</p>
        <p className={s.feedbackCounter}>Neutral: {this.state.neutral}</p>
        <p className={s.feedbackCounter}>Bad: {this.state.bad}</p>
        <p className={s.feedbackCounter}>Total: {total}</p>
        <p className={s.feedbackCounter}>
          Positive feedback: {this.state.good === 0 ? 0 : positiveFeedback}%
        </p>
      </div>
    );
  }
}

export default Feedback;
