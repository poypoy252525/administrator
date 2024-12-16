"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

interface Props {
  onValueChange: (value: string) => void;
}

const ExamTitleCard = ({ onValueChange }: Props) => {
  const [title, setTitle] = useState("Untitled Exam");

  useEffect(() => {
    if (title) {
      onValueChange(title);
    }
  }, [title, onValueChange]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Exam Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          placeholder="Exam title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </CardContent>
    </Card>
  );
};

export default ExamTitleCard;
