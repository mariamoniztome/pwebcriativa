import { ChevronRightIcon } from "lucide-react";
import { eventDays } from "../../../../assets/data/eventDay";

interface EventDaysSectionProps {
  onDayClick: (day: string, date: string) => void;
}

export const EventDaysSection: React.FC<EventDaysSectionProps> = ({
  onDayClick,
}) => {
  return (
    <section className="flex flex-col w-full">
      {eventDays.map((event, index) => (
        <div
          key={index}
          onClick={() => onDayClick(event.day, event.date)}
          className="relative w-full h-80 border-b-2 border-border flex items-center justify-between px-10 cursor-pointer transition-all duration-300 hover:bg-primary/5 group"
        >
          <div className="flex items-center justify-center font-montreal-bold font-bold text-foreground text-9xl leading-tight whitespace-nowrap">
            {event.day}
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center justify-center font-montreal font-normal text-primary text-3xl text-right whitespace-nowrap">
              {event.date}
            </div>

            <ChevronRightIcon
              className="w-28 h-28 text-foreground transition-transform duration-300 group-hover:translate-x-2"
              strokeWidth={1}
            />
          </div>
        </div>
      ))}
    </section>
  );
};
