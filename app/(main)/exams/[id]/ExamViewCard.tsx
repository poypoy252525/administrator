import { Questionnaire } from "@prisma/client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";

interface Props {
  questionnaire: Questionnaire;
}

const ExamViewCard = ({ questionnaire }: Props) => {
  return (
    <div className="">
      <span>{`${questionnaire.number}. ${questionnaire.question}`}</span>
      <RadioGroup
        defaultValue={questionnaire.answer}
        disabled
        className="ps-10 py-2"
      >
        {questionnaire.choices.map((item) => (
          <div key={item} className="flex items-center space-x-2">
            <RadioGroupItem value={item} id={item} />
            <Label htmlFor={item}>{item}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default ExamViewCard;
