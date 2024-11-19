"use client";

import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Student } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Student>[] = [
  {
    accessorKey: "studentId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Student ID" />
    ),
  },
  {
    accessorKey: "fullName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Full name" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "sex",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sex" />
    ),
  },
];
