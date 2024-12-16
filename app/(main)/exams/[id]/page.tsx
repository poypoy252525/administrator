import prisma from "@/prisma/db";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

const page = async ({ params }: Props) => {
  const exam = await prisma.exam.findUnique({
    where: {
      id: params.id,
    },
    include: {
      form: true,
    },
  });
  return <div>{exam?.form?.title}</div>;
};

export default page;
