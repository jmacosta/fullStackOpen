import { useState } from "react";
import Button from "./Button";
import PullData from "./PullData";

function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

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
        <PullData label="Good" counter={feedback.good} />
        <PullData label="Neutral" counter={feedback.neutral} />
        <PullData label="Bad" counter={feedback.bad} />
      </div>
    </>
  );
}

export default App;
