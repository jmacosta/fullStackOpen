import Subject from "./Subject";

/* eslint-disable react/prop-types */
const Course = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
      <div>
        {course.parts.map((element) => {
          return <Subject key={element.id} part={element} />;
        })}
      </div>
      <div>
        <h4>
          Total of{" "}
          {course.parts.reduce((accumulator, currentvalue) => {
            return accumulator + currentvalue.exercises;
          }, 0)}{" "}
          exercises
        </h4>
      </div>
    </>
  );
};
export default Course;
