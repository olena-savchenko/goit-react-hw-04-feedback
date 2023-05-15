import { Component } from 'react';
// import { FeedbackBox } from './App.styled';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
// import { Notification } from './Notification/Notification';
import { StyledAppWrap } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) =>
    Math.round((good * 100) / this.countTotalFeedback(this.state));

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <StyledAppWrap>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}
          />
        </Section>
      </StyledAppWrap>
    );
  }
}
