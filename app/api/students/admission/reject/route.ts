import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

async function sendPushNotification(expoPushToken: string) {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Original Title",
    body: "And here is the body!",
    data: { someData: "goes here" },
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

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const student = await prisma.student.update({
    data: {
      status: "DECLINED",
    },
    where: {
      id: body.studentId,
    },
  });

  sendPushNotification("ExponentPushToken[81LjDxEApYoquzK8lKhPKh]");

  if (!student)
    return NextResponse.json(
      { message: "student not found in /api/students/admission/reject" },
      { status: 404 }
    );

  return NextResponse.json({ message: "success" }, { status: 200 });
};
