"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const CreateButton = () => {
  const router = useRouter();
  return (
    <Button size="sm" onClick={() => router.push("/exams/new")}>
      <Plus />
      New Exam
    </Button>
  );
};

export default CreateButton;
