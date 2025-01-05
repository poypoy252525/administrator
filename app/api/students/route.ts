import prisma from "@/prisma/db";
import { registerSchema } from "@/schemas/registerSchema";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = registerSchema.safeParse(body);
  console.log(body);
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
        email: data.email,
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        phone: data.phone,
        address: data.address,
        sex: data.sex,
        birthdate: data.birthdate,
        studentId: `${Math.floor(Math.random() * 100)}`,
        fullName: `${data.firstName} ${data.middleName} ${data.lastName}`,
        credentials: {
          create: {
            fileName: data.fileName,
            mimeType: data.mimeType,
            size: data.size,
            url: data.url,
          },
        },
      },
    });
    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
