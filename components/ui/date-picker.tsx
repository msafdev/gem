"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

export function DatePicker({
  onDateSelect,
}: {
  onDateSelect: (date: Date) => void;
}) {
  const [date, setDate] = React.useState<Date>();

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    onDateSelect(selectedDate as Date);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Tanggal Lahir</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="xs:-translate-x-0 mb-1 w-auto -translate-x-6 p-0 md:mb-0 md:mt-1 lg:-translate-x-0"
      >
        <Calendar
          mode="single"
          captionLayout="dropdown-buttons"
          selected={date}
          onSelect={handleDateChange}
          fromYear={1940}
          toYear={2030}
        />
      </PopoverContent>
    </Popover>
  );
}
