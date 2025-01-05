import { DataTable } from "@/components/ui/data-table";
import React from "react";
import { columns } from "../../students/columns";

const Admission = () => {
  return (
    <div>
      <DataTable columns={columns} data={[]} />
    </div>
  );
};

export default Admission;
