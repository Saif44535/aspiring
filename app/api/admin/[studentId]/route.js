import { db } from "../../../../firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const studentId = params.studentId;

    const docRef = doc(db, "students", studentId);
    const docSnap = await getDoc(docRef);

    const data = docSnap.data();

    return NextResponse.json({ status: 200, studentData: data });
  } catch (e) {
    return NextResponse.json({ status: 400 });
  }
};
