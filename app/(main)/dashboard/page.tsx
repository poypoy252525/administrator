import PageContainer from "@/components/page-container";
import PageHeader from "@/components/page-header";
import React from "react";
import SummaryCard from "./components/SummaryCard";
import prisma from "@/prisma/db";

const DashboardPage = async () => {
  const numberOfAllStudents = await prisma.student.count();
  // const numberOfStudentPassed = await prisma.student.count({
  //   where: {},
  // });

  return (
    <PageContainer>
      <PageHeader>Dashboard</PageHeader>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <SummaryCard title="Total students" data={numberOfAllStudents} />
        </div>
        <div className="col-span-4">
          <SummaryCard title="Passed" data={numberOfAllStudents} />
        </div>
        <div className="col-span-4">
          <SummaryCard title="Failed" data={numberOfAllStudents} />
        </div>
      </div>
    </PageContainer>
  );
};

export default DashboardPage;
