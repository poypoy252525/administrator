import prisma from "@/prisma/db";
import { StudentStatus } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const approveSchema = z.object({
  status: z.string(),
  studentId: z.string(),
});

export const PATCH = async (request: NextRequest) => {
  const body = await request.json();

  const validation = approveSchema.safeParse(body);

  console.log(body);

  if (!validation.success)
    return NextResponse.json({ message: "bad request" }, { status: 400 });

  try {
    await prisma.student.update({
      data: {
        status: validation.data.status as StudentStatus,
      },
      where: {
        id: validation.data.studentId,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: `error ${error}` }, { status: 500 });
  }

  return NextResponse.json({ message: "success" }, { status: 200 });
};
