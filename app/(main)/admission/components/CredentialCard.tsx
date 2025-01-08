"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Credential } from "@prisma/client";
import Image from "next/image";

const CredentialCard = ({
  credential,
}: {
  credential: Credential;
  studentId: string;
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{credential.fileName}</CardTitle>
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
