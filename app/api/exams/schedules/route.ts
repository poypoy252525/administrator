import prisma from "@/prisma/db";
import { scheduleForm } from "@/schemas/scheduleSchema";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = scheduleForm.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { message: validation.error.message },
      { status: 400 }
    );

  const { data } = validation;

  console.log(data);

  const date = new Date(data.date);
  date.setHours(data.hour, data.minute);

  const schedule = await prisma.schedule.create({
    data: {
      date,
      duration: data.duration,
      examId: data.examId,
    },
  });

  return NextResponse.json(schedule, { status: 201 });
};
