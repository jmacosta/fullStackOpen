import React from "react";
import ReactDOM from "react-dom";

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello World {props.name} you are {props.age}
      </p>
    </div>
  );
};

const App = () => {
  const dog = "Arya";
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Juanma" age="44" />
      <Hello name="Ines" />
      <Hello name={dog} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
