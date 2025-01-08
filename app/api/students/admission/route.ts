import prisma from "@/prisma/db";
import { StudentStatus } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const approveSchema = z.object({
  status: z.string(),
  studentId: z.string(),
});

async function sendPushNotification(
  expoPushToken: string,
  title: string,
  body: string,
  data?: object
) {
  const message = {
    to: expoPushToken,
    sound: "default",
    title,
    body,
    data,
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
}

export const PATCH = async (request: NextRequest) => {
  const body = await request.json();

  const validation = approveSchema.safeParse(body);

  console.log(body);

  if (!validation.success)
    return NextResponse.json({ message: "bad request" }, { status: 400 });

  try {
    const student = await prisma.student.update({
      data: {
        status: validation.data.status as StudentStatus,
      },
      where: {
        id: validation.data.studentId,
      },
    });

    sendPushNotification(
      student.expoPushToken,
      "Credential Result",
      `Your credentials was ${validation.data.status}`,
      { result: validation.data.status }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: `error ${error}` }, { status: 500 });
  }

  return NextResponse.json({ message: "success" }, { status: 200 });
};
