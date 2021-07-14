import React, { Component } from 'react';
// import s from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodRev = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  addNeutralRev = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  addBadRev = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.addGoodRev}>
          Good
        </button>
        <button type="button" onClick={this.addNeutralRev}>
          Neutral
        </button>
        <button type="button" onClick={this.addBadRev}>
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </div>
    );
  }
}

export default Feedback;
