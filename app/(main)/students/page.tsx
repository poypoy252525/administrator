import PageContainer from "@/components/page-container";
import { DataTable } from "@/components/ui/data-table";
import React from "react";
import { columns } from "./columns";
import prisma from "@/prisma/db";
import { Student } from "@prisma/client";

const ListOfStudents = async () => {
  let students: Student[];
  try {
    students = await prisma.student.findMany();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    students = [];
  }
  return (
    <PageContainer>
      <span className="text-2xl font-medium py-4">Students</span>
      <DataTable columns={columns} data={students} />
    </PageContainer>
  );
};

export default ListOfStudents;
