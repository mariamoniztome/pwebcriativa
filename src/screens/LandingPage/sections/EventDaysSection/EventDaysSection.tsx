import { ChevronRightIcon } from "lucide-react";
import React from "react";

const eventDays = [
  {
    day: "DIA 1",
    date: "25/02",
  },
  {
    day: "DIA 2",
    date: "25/02",
  },
  {
    day: "DIA 3",
    date: "25/02",
  },
];

export const EventDaysSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full">
      {eventDays.map((event, index) => (
        <div
          key={index}
          className="relative w-full h-[350px] border-b-2 border-neutral-100 flex items-center justify-between px-10 cursor-pointer hover:bg-neutral-900/5 transition-colors"
        >
          <div className="flex items-center justify-center [font-family:'Neue_Montreal-Bold',Helvetica] font-bold text-neutral-100 text-[140px] tracking-[0] leading-[204.9px] whitespace-nowrap">
            {event.day}
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center justify-center [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#fa5302] text-[30.4px] text-right tracking-[0] leading-[39.5px] whitespace-nowrap">
              {event.date}
            </div>

            <ChevronRightIcon
              className="w-[108px] h-[109px] text-neutral-100"
              strokeWidth={1}
            />
          </div>
        </div>
      ))}
    </section>
  );
};
