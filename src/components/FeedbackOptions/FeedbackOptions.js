import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
  const { feedbackButton } = s;
  return (
    <button
      key={feedback}
      className={feedbackButton}
      data-feedback={feedback}
      type="button"
      onClick={onLeaveFeedback}
    >
      {feedback}
    </button>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option =>
    FeedbackButton({ feedback: option, onLeaveFeedback }),
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
