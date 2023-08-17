/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
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

// const App = () => {
//   const [counter, setCounter] = useState(345);
//   setTimeout(() => setCounter(counter + 1), 1000);
//   return <div>{counter}</div>;
// };

//Manejo de eventos

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const increaseByOne = () => {
//     setCounter(counter + 1);
//   };
//   const setToZero = () => {
//     setCounter(0);
//   };
//   return (
//     <div>
//       <div>{counter}</div>

//       <button
//         style={{ margin: "25px", padding: "10px" }}
//         onClick={increaseByOne}
//       >
//         Plus
//       </button>
//       <button style={{ margin: "25px", padding: "10px" }} onClick={setToZero}>
//         Zero
//       </button>
//     </div>
//   );
// };

// passing state to child components

// const Display = ({ counter }) => <div>{counter}</div>;

// const Button = ({ actionFunction, labelButton }) => (
//   <button style={{ margin: "25px", padding: "10px" }} onClick={actionFunction}>
//     {labelButton}
//   </button>
// );

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const increaseByOne = () => {
//     setCounter(counter + 1);
//   };
//   const setToZero = () => {
//     setCounter(0);
//   };
//   const decreaseByOne = () => {
//     setCounter(counter - 1);
//   };
//   return (
//     <div>
//       <Display counter={counter} />
//       <Button actionFunction={increaseByOne} labelButton="Plus" />
//       <Button actionFunction={setToZero} labelButton="Zero" />
//       <Button actionFunction={decreaseByOne} labelButton="Minus" />
//     </div>
//   );
// };

//complex state

// const App = () => {
//   const [clicks, setClicks] = useState({ left: 0, right: 0 });
//   const handleLeftClick = () => {
//     setClicks({ ...clicks, left: clicks.left + 1 });
//   };
//   const handleRightClick = () => {
//     setClicks({ ...clicks, right: clicks.right + 1 });
//   };

//   return (
//     <div>
//       {clicks.left}
//       <button style={{ margin: "10px" }} onClick={handleLeftClick}>
//         Left
//       </button>
//       {clicks.right}
//       <button style={{ margin: "10px" }} onClick={handleRightClick}>
//         Right
//       </button>
//     </div>
//   );
// };

// conditional render
const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history:{allClicks.join(" ")}</div>;
};
const Button = ({ actionFunction, labelButton }) => (
  <button style={{ margin: "25px", padding: "10px" }} onClick={actionFunction}>
    {labelButton}
  </button>
);
const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleRightClick = () => {
    setRight(right + 1);
    setAll(allClicks.concat("R"));
  };

  return (
    <div>
      {left}
      <Button
        actionFunction={() => {
          setLeft(left + 1);
          setAll(allClicks.concat("L"));
        }}
        labelButton="Left"
      />
      <Button actionFunction={handleRightClick} labelButton="Right" />
      {right}
      <History allClicks={allClicks} />
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
