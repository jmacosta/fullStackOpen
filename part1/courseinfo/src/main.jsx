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
      <Part
        part={props.content.parts[0].name}
        exercise={props.content.parts[0].exercises}
      />
      <Part
        part={props.content.parts[1].name}
        exercise={props.content.parts[1].exercises}
      />
      <Part
        part={props.content.parts[2].name}
        exercise={props.content.parts[2].exercises}
      />
    </div>
  );
};
const Total = (props) => (
  <p>
    Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}
  </p>
);
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      { name: "State of a component", exercises: 14 },
    ],
  };
  return (
    <div>
      <Header course={course.name} />
      <Content content={course} />

      <Total
        exercise1={course.parts[0].exercises}
        exercise2={course.parts[1].exercises}
        exercise3={course.parts[2].exercises}
      />
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
