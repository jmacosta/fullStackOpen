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
    </>
  );
};
export default Course;
