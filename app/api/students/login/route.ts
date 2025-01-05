import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string(),
  studentId: z.string(),
});

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const validation = loginSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json({ message: "bad request" }, { status: 400 });

  const { data } = validation;

  try {
    const student = await prisma.student.findFirst({
      where: {
        AND: [{ email: data.email }, { studentId: data.studentId }],
      },
    });

    console.log(student);

    if (student)
      return NextResponse.json(
        { message: "success", success: true, student },
        { status: 200 }
      );
    else
      return NextResponse.json(
        { success: false, message: "student not found" },
        { status: 404 }
      );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "student not found" },
      { status: 404 }
    );
  }
};
