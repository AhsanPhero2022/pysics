import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCourses = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("https://physics-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-8">
        Total Courses: {course.length}
      </h2>
      <div className="grid lg:grid-cols-3 gap-6">
        {course.map((allCourse) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={allCourse._id}>
            <figure>
              <img src={allCourse.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <Link to={`/courseUpdate/${allCourse._id}`}>
                  <button className="btn btn-success">Update</button>
                </Link>
                <button className="btn btn-warning">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
