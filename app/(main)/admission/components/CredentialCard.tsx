"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Credential } from "@prisma/client";
import axios from "axios";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CredentialCard = ({
  credential,
  studentId,
}: {
  credential: Credential;
  studentId: string;
}) => {
  const router = useRouter();
  const [approveLoading, setApproveLoading] = useState(false);
  const [declinedLoading, setDeclinedLoading] = useState(false);
  const handleApprove = async () => {
    try {
      setApproveLoading(true);
      await axios.patch(`/api/students/admission`, {
        status: "APPROVED",
        studentId,
      });
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setApproveLoading(false);
    }
  };

  const handleReject = async () => {
    try {
      setDeclinedLoading(true);
      await axios.post(`/api/students/admission/reject`, {
        studentId,
      });
      router.refresh();
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setDeclinedLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{credential.fileName}</CardTitle>
        <div className="space-x-2">
          <Button size="sm" onClick={handleApprove} disabled={approveLoading}>
            {approveLoading && <Loader2 className="animate-spin" />}
            Approve
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={handleReject}
            disabled={declinedLoading}
          >
            {declinedLoading && <Loader2 className="animate-spin" />}
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
