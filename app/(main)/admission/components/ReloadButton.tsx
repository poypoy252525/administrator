"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const ReloadButton = () => {
  const router = useRouter();
  return (
    <Button size="sm" variant="outline" onClick={() => router.refresh()}>
      Reload
    </Button>
  );
};

export default ReloadButton;
