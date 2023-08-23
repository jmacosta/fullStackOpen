import Subject from "./Subject";

/* eslint-disable react/prop-types */
const Course = ({ course }) => {
  return (
    <>
      <h2>{course.name}</h2>
      <div>
        {course.parts.map((element) => {
          return <Subject key={element.id} part={element} />;
        })}
      </div>
      <div>
        <h3>
          Total of{" "}
          {course.parts.reduce((accumulator, currentvalue) => {
            return accumulator + currentvalue.exercises;
          }, 0)}{" "}
          exercises
        </h3>
      </div>
    </>
  );
};
export default Course;
