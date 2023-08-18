import { useState } from "react";
import Button from "./Button";
import Statistics from "./Staistics";

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

      <Statistics feedback={feedback} />
    </>
  );
}

export default App;
