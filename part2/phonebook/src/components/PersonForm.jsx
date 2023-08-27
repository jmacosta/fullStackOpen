/* eslint-disable react/prop-types */
const PersonForm = ({
  newName,
  newPhone,
  persons,
  setNewName,
  setNewPhone,
  setPersons,
}) => {
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
    <form onSubmit={addPerson}>
      <div>
        Name: <input value={newName} onChange={handlePersonChange} /> Phone:{" "}
        <input value={newPhone} onChange={handlePhoneChange} />{" "}
        <button type="submit">add</button>
      </div>
    </form>
  );
};
export default PersonForm;
