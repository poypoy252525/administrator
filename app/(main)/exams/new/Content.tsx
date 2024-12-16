"use client";
import ExamTitleCard from "@/components/exam-title-card";
import QuestionnaireCard from "@/components/questionnaire-card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader2, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export interface Questionnaire {
  question: string | null;
  choices: string[] | null;
  answer: string | null;
  number: number;
}

const Content = () => {
  const router = useRouter();

  const [questionnaires, setQuestionnaires] = useState<Questionnaire[]>([]);
  const [title, setTitle] = useState<string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(questionnaires.length);
  }, [questionnaires]);

  const handlePost = async () => {
    try {
      setLoading(true);
      await axios.post(`/api/exams`, { questionnaires, title });
      router.back();
      router.refresh();
    } catch (error) {
      console.error("Failed to Post new Exam: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="container max-w-screen-lg mx-auto space-y-4">
        <ExamTitleCard onValueChange={(value) => setTitle(value)} />
        {questionnaires.map((_, index) => (
          <QuestionnaireCard
            key={index}
            index={index}
            setQuestionnaires={setQuestionnaires}
          />
        ))}
      </div>
      <Button
        disabled={loading || questionnaires.length === 0}
        onClick={handlePost}
      >
        {loading && <Loader2 />}
        Post
      </Button>
      <Button
        size="icon"
        className="fixed bottom-8 right-8"
        onClick={() =>
          setQuestionnaires((prev) => [
            ...prev,
            { answer: "", choices: [], question: "", number: prev.length + 1 },
          ])
        }
      >
        <Plus />
      </Button>
    </div>
  );
};

export default Content;
