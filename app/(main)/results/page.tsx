import PageContainer from "@/components/page-container";
import PageHeader from "@/components/page-header";
import { DataTable } from "@/components/ui/data-table";
import prisma from "@/prisma/db";
import React from "react";
import { columns } from "./columns";

const page = async () => {
  const results = await prisma.result.findMany({
    include: {
      questionnaires: true,
      student: true,
    },
  });
  return (
    <PageContainer>
      <PageHeader>Results</PageHeader>
      <DataTable columns={columns} data={results} />
    </PageContainer>
  );
};

export default page;
