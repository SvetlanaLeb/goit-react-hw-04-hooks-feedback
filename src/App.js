import React, { useState } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const total = good + neutral + bad;

  const handleBtnClick = type => {
    switch (type) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = (good, total) => {
    let positiveFeedbackPercentage = 0;
    if (good) {
      positiveFeedbackPercentage = Math.round((good * 100) / total);
    }
    return positiveFeedbackPercentage;
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onCountFeedback={handleBtnClick}
        />
      </Section>
      <Section title={'Statistics'}>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage(good, total)}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
      )
    </>
  );
}

export default App;
