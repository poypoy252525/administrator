"use client";
import { Button } from "@/components/ui/button";
import { StudentStatus } from "@prisma/client";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  studentId: string;
}

const AcceptDeclineButton = ({ studentId }: Props) => {
  const router = useRouter();
  const [approveLoading, setApproveLoading] = useState(false);
  const [declinedLoading, setDeclinedLoading] = useState(false);
  const handleApprove = async () => {
    try {
      setApproveLoading(true);
      await axios.patch(`/api/students/admission`, {
        status: StudentStatus.APPROVED,
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
      await axios.patch(`/api/students/admission`, {
        studentId,
        status: StudentStatus.DECLINED,
      });
      router.refresh();
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setDeclinedLoading(false);
    }
  };
  return (
    <div className="space-x-2 p-4 ms-auto flex justify-end">
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
  );
};

export default AcceptDeclineButton;
