import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
  const { feedbackButton } = s;
  return (
    <button
      className={feedbackButton}
      data-feedback={feedback}
      type="button"
      onClick={onLeaveFeedback}
    >
      {feedback}
    </button>
  );
};

FeedbackButton.propTypes = {
  feedback: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackButton;
