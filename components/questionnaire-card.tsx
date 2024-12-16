"use client";
import { Questionnaire } from "@/app/(main)/exams/new/Content";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Plus, X } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

interface Props {
  index: number;
  // question: string | null;
  // answer: string | null;
  // choices: string[] | null;
  setQuestionnaires: Dispatch<SetStateAction<Questionnaire[]>>;
}

const QuestionnaireCard = ({ index, setQuestionnaires }: Props) => {
  const [options, setOptions] = useState<string[]>([]);
  const [option, setOption] = useState<string>();
  const [question, setQuestion] = useState<string>("Untitled Question");
  const [answer, setAnswer] = useState<string>("");

  const handleAddChoices = () => {
    if (!option?.trim()) return;
    if (
      options
        .map((opt) => opt.toLowerCase().trim())
        .includes(option.toLowerCase())
    )
      return;
    setOptions((prev) => [...prev, option]);
    setOption("");
  };

  const handleRemoveOption = (choice: string) => {
    setOptions((prev) => prev.filter((pr) => pr !== choice));
  };

  useEffect(() => {
    setQuestionnaires((prev) =>
      prev.map((item, i) =>
        i === index ? { question, choices: options, answer, number: i } : item
      )
    );
  }, [options, question, setQuestionnaires, index, answer]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Question {index + 1}</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          value={question}
          onChange={({ target }) => setQuestion(target.value)}
        />
        <div className="max-w-[350px] w-full px-4">
          <RadioGroup
            className="mt-4"
            onValueChange={(value) => setAnswer(value)}
          >
            {options.map((choice, index) => (
              <div
                key={index}
                className="flex items-center w-full justify-between"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={choice} id={choice} />
                  <Label htmlFor={choice}>{choice}</Label>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => handleRemoveOption(choice)}
                >
                  <X />
                </Button>
              </div>
            ))}
          </RadioGroup>
          <div className="flex space-x-2 mt-2">
            <Input
              placeholder="Add Option"
              value={option}
              onChange={({ target }) => setOption(target.value)}
            />
            <div className="flex-grow">
              <Button size="icon" variant="ghost" onClick={handleAddChoices}>
                <Plus />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionnaireCard;
