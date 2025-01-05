import { Schedule } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Schedule>[] = [
  {
    accessorKey: "date",
  },
  {
    accessorKey: "duration",
  },
  {
    accessorKey: "status",
  },
];
