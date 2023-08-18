import { useState } from "react";
import Button from "./Button";
import DisplayData from "./DisplayData";

const Allvalues = ({ feedback }) => {
  <DisplayData
    label="ALL"
    dataValue={feedback.good + feedback.neutral + feedback.bad}
  />;
};

const Average = ({ feedback }) => (
  <DisplayData
    label="Average"
    dataValue={
      (feedback.good * 1 + feedback.neutral * 0 + feedback.bad * -1) /
      (feedback.good + feedback.neutral + feedback.bad)
    }
  />
);

const PositivePercentage = ({ feedback }) => (
  <DisplayData
    label="Positive"
    dataValue={
      Math.floor(
        (feedback.good * 100) /
          (feedback.good + feedback.neutral + feedback.bad)
      ) + " %"
    }
  />
);
const Statistics = ({ feedback }) => {
  if (feedback.good + feedback.neutral + feedback.bad === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <DisplayData label="Good" dataValue={feedback.good} />
      <DisplayData label="Neutral" dataValue={feedback.neutral} />
      <DisplayData label="Bad" dataValue={feedback.bad} />
      <Allvalues feedback={feedback} />
      <Average feedback={feedback} />
      <PositivePercentage feedback={feedback} />
    </div>
  );
};

function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  // const positivePercentage =
  //   Math.floor((feedback.good * 100) / allValues) + " %";
  return (
    <>
      <div>
        <h1>Give feedback</h1>
      </div>
      <div>
        <Button
          onClick={() => setFeedback({ ...feedback, good: feedback.good + 1 })}
          label="Good"
        />
        <Button
          onClick={() =>
            setFeedback({ ...feedback, neutral: feedback.neutral + 1 })
          }
          label="Neutral"
        />
        <Button
          onClick={() => setFeedback({ ...feedback, bad: feedback.bad + 1 })}
          label="Bad"
        />
      </div>
      <div>
        <h1>Statistics</h1>
      </div>
      <Statistics feedback={feedback} />
    </>
  );
}

export default App;
