import PageContainer from "@/components/page-container";
import { DataTable } from "@/components/ui/data-table";
import prisma from "@/prisma/db";
import { columns } from "./columns";
import CreateButton from "./CreateButton";

const Page = async () => {
  const exams = await prisma.exam.findMany({
    include: {
      form: true,
    },
  });
  return (
    <PageContainer>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-medium py-4">Exams</span>
        <CreateButton />
      </div>
      <DataTable columns={columns} data={exams} />
    </PageContainer>
  );
};

export const dynamic = "force-dynamic";

export default Page;
