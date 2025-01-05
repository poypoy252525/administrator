import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _request: NextRequest,
  { params }: { params: { email: string } }
) => {
  console.log(params.email);

  const student = await prisma.student.findUnique({
    where: {
      email: params.email,
    },
    include: {
      examSchedule: true,
    },
  });

  if (!student)
    return NextResponse.json({ message: "No student found" }, { status: 404 });

  return NextResponse.json(
    { schedules: student?.examSchedule },
    { status: 200 }
  );
};
