/* eslint-disable react/prop-types */
const Persons = ({ persons, filterWord }) => {
  const newPersons = persons.filter((person) =>
    person.name.toUpperCase().includes(filterWord.toUpperCase())
  );
  const personsToShow = filterWord === "" ? persons : newPersons;
  console.log(newPersons);
  return (
    <ul>
      {personsToShow.map((person) => {
        return (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        );
      })}
    </ul>
  );
};

export default Persons;
