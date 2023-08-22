/* eslint-disable react/prop-types */
import "./App.css";
import Note from "./components/Note";

function App({ notes }) {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((element) => (
          <Note key={element.id} note={element} />
        ))}
      </ul>
    </div>
  );
}

export default App;
