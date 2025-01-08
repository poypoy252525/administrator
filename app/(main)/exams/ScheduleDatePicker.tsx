"use client";

import { format, subDays } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface Props {
  onValueChange: (date: Date) => void;
}

const ScheduleDatePicker = ({ onValueChange }: Props) => {
  const [date, setDate] = React.useState<Date>();

  React.useEffect(() => {
    if (date) {
      onValueChange(date);
    }
  }, [date, onValueChange]);

  return (
    <Popover modal={true}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          disabled={(date) => date < subDays(new Date(), 1)}
        />
      </PopoverContent>
    </Popover>
  );
};

export default ScheduleDatePicker;
