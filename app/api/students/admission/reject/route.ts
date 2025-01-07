import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const student = await prisma.student.update({
    data: {
      status: "DECLINED",
    },
    where: {
      id: body.studentId,
    },
  });

  if (!student)
    return NextResponse.json(
      { message: "student not found in /api/students/admission/reject" },
      { status: 404 }
    );

  return NextResponse.json({ message: "success" }, { status: 200 });
};
