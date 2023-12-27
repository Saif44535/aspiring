import { db } from "../../../firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";
import { auth } from "@/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const GET = async () => {
  let data = [];
  try {
    const querySnapshot = await getDocs(collection(db, "students"));
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return NextResponse.json({ status: 200, studentData: data });
  } catch (e) {
    return NextResponse.json({ status: 408 });
  }
};
export const POST = async (request) => {
  const data = await request.json();
  const { email } = data;
  const { password } = data;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    // .then((userCredential) => {
    // Signed in
    return NextResponse.json({ status: 200, user: true, error: false });
    // ...
  } catch (e) {
    // })
    // .catch((err) => {
    // console.log(err);
    // console.log(error.message);
    return NextResponse.json({ status: 408, user: false, error: true });
    // router.push("/admin");
    // throw new Error("Failed to fetch data!");
    // });
  }
};
