import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Loader2, Plus } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import AMPMDropdown from "./AMPMDropdown";
import ScheduleDatePicker from "./ScheduleDatePicker";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

const AddScheduleDialog = ({ id }: Props) => {
  const router = useRouter();
  const [date, setDate] = useState<Date>();
  const [duration, setDuration] = useState<number>();
  const [open, setOpen] = useState<boolean>(false);
  const [minute, setMinute] = useState<number>();
  const [hour, setHour] = useState<number>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await axios.post(`/api/exams/schedules`, {
        date,
        examId: id,
        duration,
        minute,
        hour,
      });
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.error("error: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="secondary">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Schedule</DialogTitle>
          <DialogDescription>New schedule for examination</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <ScheduleDatePicker onValueChange={(date) => setDate(date)} />
          <div className="flex space-x-2">
            <TimePicker
              date={date}
              onHourChange={setHour}
              onMinuteChange={setMinute}
            />
            <Input
              value={duration}
              onChange={({ target }) => {
                try {
                  const duration = parseInt(target.value);
                  if (isNaN(duration)) {
                    setDuration(0);
                  } else {
                    setDuration(duration);
                  }
                } catch (error) {
                  console.error(error);
                  setDuration(-1);
                }
              }}
              placeholder="Input duration in minutes"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading && <Loader2 />}Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const TimePicker = ({
  date,
  onHourChange,
  onMinuteChange,
}: {
  date: Date | undefined;
  onHourChange: Dispatch<SetStateAction<number | undefined>>;
  onMinuteChange: Dispatch<SetStateAction<number | undefined>>;
}) => {
  const [hour, setHour] = useState<number>();
  const [minute, setMinute] = useState<number>();
  const [AMPM, setAMPM] = useState<string>("AM");

  return (
    <div className="w-full flex items-center">
      <Input
        value={hour}
        disabled={!date}
        placeholder="Hour"
        onChange={({ target }) => {
          const h = parseInt(target.value);
          if (!isNaN(h)) {
            if (h <= 12) {
              setHour(h);
              onHourChange(h);
            }
          } else {
            setHour(0);
            onHourChange(h);
          }
        }}
      />
      <span className="text-xl mx-1">:</span>
      <Input
        value={minute}
        disabled={!date}
        placeholder="Minute"
        onChange={({ target }) => {
          const m = parseInt(target.value);
          if (!isNaN(m)) {
            if (m < 60) {
              setMinute(m);
              onMinuteChange(m);
            }
          } else {
            setMinute(0);
            onMinuteChange(0);
          }
        }}
      />
      <div className="ms-2">
        <AMPMDropdown AMPM={AMPM} setAMPM={setAMPM} />
      </div>
    </div>
  );
};

export default AddScheduleDialog;
