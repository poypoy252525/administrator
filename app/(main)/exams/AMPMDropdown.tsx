import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React, { Dispatch, SetStateAction } from "react";

interface Props {
  AMPM: string;
  setAMPM: Dispatch<SetStateAction<string>>;
}

const AMPMDropdown = ({ AMPM, setAMPM }: Props) => {
  return (
    <Select value={AMPM} onValueChange={setAMPM}>
      <SelectTrigger className="">
        <SelectValue placeholder="AM" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="AM">AM</SelectItem>
        <SelectItem value="PM">PM</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default AMPMDropdown;
