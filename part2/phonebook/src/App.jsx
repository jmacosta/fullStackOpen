import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "999 999 999" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      phone: newPhone,
    };

    if (
      !persons.find((person) => {
        return person.name === personObject.name;
      })
    ) {
      setPersons(persons.concat(personObject));
    } else {
      alert(`${personObject.name} is already added to the phoneBook`);
    }
    setNewName("");
    setNewPhone("");
  };
  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handlePersonChange} /> Phone:{" "}
          <input value={newPhone} onChange={handlePhoneChange} />{" "}
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => {
          return (
            <li key={person.name}>
              {person.name} {person.phone}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
