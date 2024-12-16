import prisma from "@/prisma/db";
import { examForm } from "@/schemas/examForm";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = examForm.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const { data } = validation;

  console.log(data);

  const exam = await prisma.exam.create({
    data: {
      endTime: new Date(),
      startTime: new Date(),
      form: {
        create: {
          title: data.title,
          questionnaire: {
            createMany: {
              data: data.questionnaires,
            },
          },
        },
      },
    },
  });

  return NextResponse.json(exam, { status: 200 });
};
