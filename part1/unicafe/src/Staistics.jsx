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
const StatisticsBody = ({ feedback }) => {
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
const Statistics = ({ feedback }) => {
  return (
    <table>
      <thead>
        <h1>Statistics</h1>
      </thead>
      <tbody>
        <StatisticsBody feedback={feedback} />
      </tbody>
    </table>
  );
};

export default Statistics;
