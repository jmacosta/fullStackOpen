import { useState } from "react";
import Button from "./Button";
import DisplayData from "./DisplayData";

function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const allValues = feedback.good + feedback.neutral + feedback.bad;
  const average =
    (feedback.good * 1 + feedback.neutral * 0 + feedback.bad * -1) / allValues;
  const positivePercentage =
    Math.floor((feedback.good * 100) / allValues) + " %";
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
      <div>
        <DisplayData label="Good" dataValue={feedback.good} />
        <DisplayData label="Neutral" dataValue={feedback.neutral} />
        <DisplayData label="Bad" dataValue={feedback.bad} />
        <DisplayData label="All" dataValue={allValues} />
        <DisplayData label="Average" dataValue={average} />
        <DisplayData label="Positive" dataValue={positivePercentage} />
      </div>
    </>
  );
}

export default App;
