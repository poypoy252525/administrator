import { UserPen } from "lucide-react";
import Link from "next/link";

const ListItem = ({
  student,
  onSelect,
  isActive,
}: {
  student: { id: string; fullName: string | null };
  onSelect: (id: string) => void;
  isActive: boolean;
}) => {
  return (
    <Link
      href={`/admission?id=${student.id}`}
      onClick={() => onSelect(student.id)}
    >
      <div
        className={`flex items-center px-4 py-2 hover:bg-muted cursor-pointer border-b ${
          isActive && "bg-muted"
        }`}
      >
        <UserPen className="w-4 h-4 mr-2" />
        <span className="text-sm truncate">{student.fullName}</span>
      </div>
    </Link>
  );
};

export default ListItem;
