// import { Component } from 'react';
import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { StyledAppWrap } from './App.styled';

export const App = () => {
  // в useState передається початкове значення станів good, neutral, bad

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const leaveFeedback = e => {
    // console.log(e.target.name);
    switch (e.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    console.log('countTotalFeedback: ', good + neutral + bad);
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    console.log(
      'countPositiveFeedbackPercentage: ',
      Math.round((good * 100) / countTotalFeedback() || 0)
    );
    return Math.round((good * 100) / countTotalFeedback() || 0);
  }
 

  return (
    <StyledAppWrap>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </StyledAppWrap>
  );
};

