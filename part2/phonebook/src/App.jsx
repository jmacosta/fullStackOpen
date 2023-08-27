import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterWord, setFilterWord] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter filterWord={filterWord} setFilterWord={setFilterWord} />
      </div>
      <h3>Add a New</h3>
      <PersonForm
        newName={newName}
        newPhone={newPhone}
        persons={persons}
        setNewName={setNewName}
        setNewPhone={setNewPhone}
        setPersons={setPersons}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} filterWord={filterWord} />
    </div>
  );
};

export default App;
