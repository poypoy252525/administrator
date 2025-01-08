import { ScrollArea } from "@/components/ui/scroll-area";
import prisma from "@/prisma/db";
import CredentialCard from "./components/CredentialCard";
import AcceptDeclineButton from "./components/AcceptDeclineButton";

interface Props {
  searchParams: {
    id: string;
  };
}
const AdmissionPage = async ({ searchParams }: Props) => {
  if (!searchParams.id) return <span>No data.</span>;

  const student = await prisma.student.findUnique({
    where: {
      id: searchParams.id,
    },
    include: {
      credentials: true,
    },
  });

  return (
    <div className="min-h-0">
      {student && <AcceptDeclineButton studentId={student.id} />}
      <ScrollArea className="h-full">
        <div className="p-6 space-y-4">
          {student?.credentials.map((credential) => (
            <CredentialCard
              studentId={student.id}
              key={credential.id}
              credential={credential}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default AdmissionPage;
