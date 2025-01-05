"use client";

import { Questionnaire, Result, Student } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<
  Result & { questionnaires: Questionnaire[]; student: Student }
>[] = [
  {
    accessorKey: "score",
  },
  {
    id: "studentName",
    header: "Student Name",
    accessorFn: ({ student }) => student.fullName,
  },
];
