import prisma from "@/prisma/db";
import { registerSchema } from "@/schemas/registerSchema";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = registerSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { message: validation.error.errors[0] },
      { status: 400 }
    );

  const { data } = validation;

  let student = await prisma.student.findFirst({
    where: {
      email: data.email,
    },
  });

  if (student)
    return NextResponse.json(
      { message: "student with the given email is already exist." },
      { status: 409 }
    );

  try {
    student = await prisma.student.create({
      data: {
        ...data,
        studentId: `${Math.floor(Math.random() * 100)}`,
        fullName: `${data.firstName} ${data.middleName} ${data.lastName}`,
      },
    });
    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
