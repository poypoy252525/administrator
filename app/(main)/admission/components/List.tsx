"use client";
import { useState } from "react";
import ListItem from "./ListItem";

const List = ({
  students,
}: {
  students: { fullName: string | null; id: string }[];
}) => {
  const [selectedItem, setSelectedItem] = useState<string>();
  return (
    <div>
      {students.map((student) => (
        <ListItem
          onSelect={(id) => setSelectedItem(id)}
          isActive={selectedItem === student.id}
          student={student}
          key={student.id}
        />
      ))}
    </div>
  );
};

export default List;
