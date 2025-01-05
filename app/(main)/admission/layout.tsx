import prisma from "@/prisma/db";
import { ReactNode } from "react";
import List from "./components/List";
import ReloadButton from "./components/ReloadButton";

const Layout = async ({ children }: { children: ReactNode }) => {
  const students = await prisma.student.findMany({
    select: {
      fullName: true,
      id: true,
    },
    where: {
      status: "PENDING",
    },
  });
  return (
    <div className="flex flex-col flex-1 border rounded-lg min-h-0">
      {/* Header */}
      <div className="flex items-center justify-between h-10 w-full border-b px-4 bg-muted">
        <span className="text-sm">All requests</span>
        <ReloadButton />
      </div>

      {/* Content */}
      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <aside className="h-full w-[250px] border-r overflow-auto">
          <List students={students} />
        </aside>

        {/* Main Content */}
        <main className="grow shrink basis-0">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
