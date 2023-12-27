"use client";
import { useEffect, useState } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";

const AdminPage = (props) => {
  const [student, setStudent] = useState();
  const getData = async () => {
    const response = await fetch(`../../api/admin/${props.id}`);
    if (response.ok) {
      const data = await response.json();
      setStudent(data.studentData);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  if (student) {
    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto my-2 p-5 my-28">
        <img
          width="75"
          height="75"
          src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
          alt="user-male-circle"
        />{" "}
        <div className="p-5">
          <h5 className="text-lg mb-4 div-2xl font-bold tracking-tight div-gray-900 dark:div-white">
            {student.firstName + " " + student.lastName}
          </h5>
          <div className="mb-3 font-normal div-gray-700 dark:div-gray-400">
            <div className="my-2">Email: {student.email}</div>
            <div className="my-2">Contact: {student.contact}</div>
            <div className="my-2">
              Preferred Destinations:
              {student.destinations.map((dest, index) => (
                <span key={index}>{" " + (index + 1) + "." + dest}</span>
              ))}
            </div>
            <div className="my-2">City: {student.city}</div>
            <div className="my-2">Study Level: {student.studyLevel}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <LoadingSpinner />;
  }
};

export default AdminPage;
