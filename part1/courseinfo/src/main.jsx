/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom/client";
const Header = (props) => {
  return <h1>{props.course}</h1>;
};
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};
const Content = (props) => {
  return (
    <div>
      <Part part={props.content1.name} exercise={props.content1.exercises} />
      <Part part={props.content2.name} exercise={props.content2.exercises} />
      <Part part={props.content3.name} exercise={props.content3.exercises} />
    </div>
  );
};
const Total = (props) => (
  <p>
    Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}
  </p>
);
const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };

  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = { name: "State of a component", exercises: 14 };
  return (
    <div>
      <Header course={course} />
      <Content content1={part1} content2={part2} content3={part3} />

      <Total
        exercise1={part1.exercises}
        exercise2={part2.exercises}
        exercise3={part3.exercises}
      />
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
