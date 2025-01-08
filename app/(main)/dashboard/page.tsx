import PageContainer from "@/components/page-container";
import PageHeader from "@/components/page-header";
import React from "react";
import SummaryCard from "./components/SummaryCard";
import prisma from "@/prisma/db";
import { BookmarkX, BookOpenCheck, User2 } from "lucide-react";

const DashboardPage = async () => {
  const numberOfAllStudents = await prisma.student.count();
  const numberOfStudentPassed = await prisma.result.count({
    where: {
      remarks: "PASSED",
    },
  });
  const numberOfStudentFailed = await prisma.result.count({
    where: {
      remarks: "FAILED",
    },
  });

  return (
    <PageContainer>
      <PageHeader>Dashboard</PageHeader>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <SummaryCard
            Icon={User2}
            title="Total students"
            data={numberOfAllStudents}
          />
        </div>
        <div className="col-span-4">
          <SummaryCard
            Icon={BookOpenCheck}
            title="Passed"
            data={numberOfStudentPassed}
          />
        </div>
        <div className="col-span-4">
          <SummaryCard
            Icon={BookmarkX}
            title="Failed"
            data={numberOfStudentFailed}
          />
        </div>
      </div>
      <div></div>
    </PageContainer>
  );
};

export const dynamic = "force-dynamic";

export default DashboardPage;
