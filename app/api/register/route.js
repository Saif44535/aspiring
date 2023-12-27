import { db } from "../../../firebase.config";
import { collection, addDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const studentData = await request.json();

    await addDoc(collection(db, "students"), studentData);

    return NextResponse.json({ status: 200 });
  } catch (e) {
    return NextResponse.json({ status: 400 });
  }
};
