/* eslint-disable @typescript-eslint/no-unused-vars */
import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  //   const body = await request.json();

  //   await prisma.student.update({
  //     data: {
  //       sta
  //     },
  //     where: {
  //       id: params.id,
  //     },
  //   });

  return NextResponse.json({ message: "Updated" }, { status: 200 });
};

export const GET = async (
  _: NextRequest,
  { params }: { params: { id: string } }
) => {
  let student = null;

  if (params.id.includes("@")) {
    student = await prisma.student.findFirst({
      where: {
        email: params.id,
      },
    });
  } else {
    student = await prisma.student.findUnique({
      where: {
        id: params.id,
      },
    });
  }

  return NextResponse.json(student, { status: 200 });
};
