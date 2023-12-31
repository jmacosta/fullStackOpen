/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);
  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };
    setNotes(notes.concat(noteObject));
    console.log(notes);
    setNewNote("");
  };
  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };
  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("pomise fullfilled");
      setNotes(response.data);
    });
  };
  useEffect(hook, []);
  console.log("render", notes.length, "notes");
  return (
    <>
      <h1>Notes</h1>
      <div>
        <button
          onClick={() => {
            setShowAll(!showAll);
          }}
        >
          show {showAll ? "Important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </>
  );
};

export default App;
