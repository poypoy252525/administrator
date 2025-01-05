import PageContainer from "@/components/page-container";
import { DataTable } from "@/components/ui/data-table";
import prisma from "@/prisma/db";
import { columns } from "./columns";

const page = async () => {
  const schedules = await prisma.schedule.findMany();
  return (
    <PageContainer>
      <div className="flex items-center justify-between">
        <span className="text-2xl py-4">Schedules</span>
      </div>
      <DataTable columns={columns} data={schedules} />
    </PageContainer>
  );
};

export default page;
