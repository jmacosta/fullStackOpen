/* eslint-disable react/prop-types */
function Button({ onClick, label }) {
  return (
    <button onClick={onClick} style={{ margin: "5px" }}>
      {label}
    </button>
  );
}

export default Button;
