"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Student } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

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
    cell: ({ getValue, row }) => {
      const fullName = getValue() as string;

      return (
        <Button asChild variant="link">
          <Link href={`students/${row.original.id}`}>{fullName}</Link>
        </Button>
      );
    },
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
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ getValue }) => {
      const status = getValue() as string;

      return <Badge variant="secondary">{status.toLowerCase()}</Badge>;
    },
  },
];
