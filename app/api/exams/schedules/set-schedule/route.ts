import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  console.log(body);

  const schedule = await prisma.schedule.update({
    data: {
      student: {
        connect: {
          email: body.email,
        },
      },
    },
    where: {
      id: body.id,
    },
  });

  if (!schedule)
    return NextResponse.json({ message: "No schedule found" }, { status: 404 });

  return NextResponse.json(
    { message: "success", success: true, schedule },
    { status: 200 }
  );
};
