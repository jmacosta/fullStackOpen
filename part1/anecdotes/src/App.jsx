import { useState } from "react";
import "./App.css";

const NextAnecdoted = ({ onClick }) => {
  return <button onClick={onClick}>Next anecdote</button>;
};

function App({ anecdotes }) {
  const [selected, setSelected] = useState(0);
  const onClickNextAnecdotes = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  return (
    <>
      {anecdotes[selected]}
      <div style={{ marginTop: "20px" }}>
        <NextAnecdoted onClick={onClickNextAnecdotes}></NextAnecdoted>
      </div>
    </>
  );
}

export default App;
