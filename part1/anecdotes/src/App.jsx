import { useState } from "react";
import "./App.css";

const NextAnecdoted = ({ onClick }) => {
  return <button onClick={onClick}>Next anecdote</button>;
};
const VoteAnecdote = ({ onClick }) => {
  return <button onClick={onClick}>Vote anecdote</button>;
};

function App({ anecdotes }) {
  const anecdoteVotes = new Array(anecdotes.length);
  anecdoteVotes.fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(anecdoteVotes);
  const [mostVotes, setMostVotes] = useState(0);
  const calculateMostVotes = (votes) => {
    return votes.findIndex(
      (element) =>
        element ===
        votes.reduce((max, currentValue) => {
          return currentValue > max ? currentValue : max;
        }, -Infinity)
    );
  };
  const onClickNextAnecdotes = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };
  const onClickVote = (index) => {
    const newAnecdoteVote = [...votes];
    newAnecdoteVote[index] += 1;
    setVotes(newAnecdoteVote);

    setMostVotes(calculateMostVotes(votes));
  };

  return (
    <>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <> has {votes[selected]} votes</>
      <div style={{ marginTop: "20px" }}>
        <NextAnecdoted onClick={onClickNextAnecdotes}></NextAnecdoted>
        <VoteAnecdote onClick={() => onClickVote(selected)}></VoteAnecdote>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        {anecdotes[mostVotes]}
        <> has {votes[mostVotes]} votes</>
      </div>
    </>
  );
}

export default App;
