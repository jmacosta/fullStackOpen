/* eslint-disable react/prop-types */
const Filter = ({ filterWord, setFilterWord }) => {
  const handleFilterChange = (event) => {
    setFilterWord(event.target.value);
  };
  return (
    <>
      Filter shown with{" "}
      <input value={filterWord} onChange={handleFilterChange} />
    </>
  );
};
export default Filter;
