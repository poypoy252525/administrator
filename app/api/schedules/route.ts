import prisma from "@/prisma/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  const schedules = await prisma.schedule.findMany({
    where: {
      OR: [{ status: "PENDING" }, { status: "ONGOING" }],
    },
  });

  if (!schedules)
    return NextResponse.json({ message: "No schedules data" }, { status: 404 });

  return NextResponse.json(schedules, { status: 200 });
};
