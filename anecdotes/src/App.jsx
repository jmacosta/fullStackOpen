/* eslint-disable react/prop-types */
import { useState } from "react";

function App({ anecdotes }) {
  const [selected, setSelected] = useState(0);
  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  return (
    <>
      {anecdotes[selected]}
      <div>
        <button onClick={nextAnecdote}>Next anecdote</button>
      </div>
    </>
  );
}

export default App;
