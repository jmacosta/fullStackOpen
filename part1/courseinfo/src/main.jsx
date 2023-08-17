/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
/*
react basico 

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};
const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
};
const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((element, index) => (
        <Part key={index} part={element.name} exercise={element.exercises} />
      ))}
      ;
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
      <Content course={course} />

      <Total
        exercise1={course.parts[0].exercises}
        exercise2={course.parts[1].exercises}
        exercise3={course.parts[2].exercises}
      />
    </div>
  );
};
*/

/* Estado del componente, controladores de eventos*/
// const Hello = ({ name, age }) => {
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear();
//     return yearNow - age;
//   };
//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>so you were probably born in {bornYear()}</p>
//     </div>
//   );
// };

// const App = () => {
//   const name = "Juanma";
//   const age = 44;
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Ines" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   );
// };

//                 Re-renderizado de la página

const App = (props) => {
  const { counter } = props;
  return <div>{counter}</div>;
};
let counter = 1;

const refresh = () => {
  // root.unmount(<App />);
  root.render(<App counter={counter} />);
};

setInterval(() => {
  refresh();
  counter += 1;
}, 1000);

root.render(
  <React.StrictMode>
    <App counter={counter} />
  </React.StrictMode>
);
