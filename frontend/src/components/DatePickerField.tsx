import { useState } from "react";
import { format, isToday, isBefore, startOfDay } from "date-fns";
import { CalendarIcon, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface DatePickerFieldProps {
  date: Date;
  onDateChange: (date: Date) => void;
  label?: string;
}

export function DatePickerField({ date, onDateChange, label = "Entry Date" }: DatePickerFieldProps) {
  const isBackdated = isBefore(startOfDay(date), startOfDay(new Date()));

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-muted-foreground">{label}</label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full h-12 justify-start text-left font-normal rounded-xl border-border",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 rounded-xl" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d) => d && onDateChange(d)}
            initialFocus
            className={cn("p-3 pointer-events-auto")}
          />
        </PopoverContent>
      </Popover>
      {isBackdated && (
        <div className="flex items-center gap-1.5 text-warning text-xs font-medium bg-warning/8 px-3 py-1.5 rounded-lg">
          <AlertTriangle className="h-3.5 w-3.5" />
          <span>Backdated Entry</span>
        </div>
      )}
    </div>
  );
}
