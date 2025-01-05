import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  console.log(body);

  return NextResponse.json({ message: "" }, { status: 200 });
};
