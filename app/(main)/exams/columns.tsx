"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Exam, ExamForm } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import AddScheduleDialog from "./AddScheduleDialog";

export const columns: ColumnDef<Exam & { form: ExamForm | null }>[] = [
  {
    id: "title",
    accessorFn: ({ form }) => form?.title,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ getValue, row }) => {
      const title = getValue() as string;
      return <Link href={`/exams/${row.original.id}`}>{title}</Link>;
    },
  },
  {
    accessorKey: "id",
    header: "Actions",
    cell: ({ getValue }) => {
      const id = getValue() as string;
      return (
        <div>
          <AddScheduleDialog id={id} />
        </div>
      );
    },
  },
];
