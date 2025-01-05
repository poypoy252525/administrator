import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _: NextRequest,
  { params }: { params: { email: string } }
) => {
  const student = await prisma.student.findFirst({
    where: {
      email: params.email,
    },
    select: {
      result: {
        include: {
          questionnaires: true,
        },
      },
    },
  });

  if (!student)
    return NextResponse.json({ message: "student not found" }, { status: 404 });

  return NextResponse.json(student.result, { status: 200 });
};
