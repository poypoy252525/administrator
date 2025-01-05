import PageContainer from "@/components/page-container";
import PageHeader from "@/components/page-header";
import prisma from "@/prisma/db";
import Image from "next/image";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

const StudentInfoPage = async ({ params }: Props) => {
  const student = await prisma.student.findUnique({
    where: {
      id: params.id,
    },
    include: {
      credentials: true,
    },
  });

  if (!student) return <div>404 student not found</div>;

  return (
    <PageContainer>
      <PageHeader>
        {student.fullName}
        <div>
          <span className="text-sm capitalize text-muted-foreground">
            {student.status.toLowerCase()}
          </span>
        </div>
      </PageHeader>
      <span className="text-lg">Credentials</span>
      {student.credentials.map((credential, index) => (
        <Image
          key={index}
          alt={credential.fileName}
          src={credential.url}
          className="w-[200px]"
          width={200}
          height={200}
        />
      ))}
    </PageContainer>
  );
};

export default StudentInfoPage;
