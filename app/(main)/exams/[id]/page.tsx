import PageContainer from "@/components/page-container";
import prisma from "@/prisma/db";
import React from "react";
import ExamViewCard from "./ExamViewCard";

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
      form: {
        include: {
          questionnaires: true,
        },
      },
    },
  });

  if (!exam || !exam.form || !exam.form.questionnaires)
    return <span>No found</span>;

  const { form } = exam;

  return (
    <PageContainer>
      <span className="text-2xl">{form.title}</span>
      <div className="py-6 px-10">
        {form.questionnaires.map((item) => (
          <ExamViewCard key={item.id} questionnaire={item} />
        ))}
      </div>
    </PageContainer>
  );
};

export default page;
