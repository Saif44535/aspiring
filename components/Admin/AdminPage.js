"use client";
import { Fragment, useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import SignInForm from "./SignInForm";
import StudentList from "./StudentList";
// import { auth } from "@/firebase.config";
// import { signInWithEmailAndPassword } from "firebase/auth";
import LoadingSpinner from "../UI/LoadingSpinner";

const AdminPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(false);
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(false);

  // const router = useRouter();

  const authenticate = async (email, password) => {
    const response = await fetch(`../../api/admin`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "CONTENT-TYPE": "application/json",
      },
    });
    const data = await response.json();
    setError(data.error);
    setUser(data.user);

    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     setUser(true);
    //     // ...
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     // console.log(error.message);
    //     setError(true);
    //     // router.push("/admin");
    //     // throw new Error("Failed to fetch data!");
    //   });
  };
  const getData = async () => {
    setIsLoading(true);
    const response = await fetch("../../api/admin");
    if (response.ok) {
      const data = await response.json();
      setStudents(data.studentData);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Fragment>
      {!user && <SignInForm onSignIn={authenticate} error={error} />}
      {user && isLoading && <LoadingSpinner />}
      {user && !isLoading && <StudentList students={students} />}
    </Fragment>
  );
};

export default AdminPage;
