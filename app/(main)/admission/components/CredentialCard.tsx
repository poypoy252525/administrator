"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Credential } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CredentialCard = ({
  credential,
  studentId,
}: {
  credential: Credential;
  studentId: string;
}) => {
  const router = useRouter();
  const handleApprove = async () => {
    try {
      await axios.patch(`/api/students/admission`, {
        status: "APPROVED",
        studentId,
      });
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{credential.fileName}</CardTitle>
        <div className="space-x-2">
          <Button size="sm" onClick={handleApprove}>
            Approve
          </Button>
          <Button size="sm" variant="destructive">
            Reject
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Image
          alt={credential.fileName}
          src={credential.url}
          width={400}
          height={400}
        />
      </CardContent>
    </Card>
  );
};

export default CredentialCard;
