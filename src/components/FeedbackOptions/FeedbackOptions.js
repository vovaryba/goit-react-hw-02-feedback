import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options }) => {
  const { addGood } = options;
  const { addNeutral } = options;
  const { addBad } = options;
  const { feedbackButton } = s;
  return (
    <>
      <button className={feedbackButton} type="button" onClick={addGood}>
        Good
      </button>
      <button className={feedbackButton} type="button" onClick={addNeutral}>
        Neutral
      </button>
      <button className={feedbackButton} type="button" onClick={addBad}>
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
};

export default FeedbackOptions;
