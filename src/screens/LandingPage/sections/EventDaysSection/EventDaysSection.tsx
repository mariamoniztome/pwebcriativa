import { ChevronRightIcon } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

interface EventDaysSectionProps {
  onDayClick: (day: string, date: string) => void;
}

export const EventDaysSection: React.FC<EventDaysSectionProps> = ({
  onDayClick,
}) => {
  const daysRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    daysRef.current.forEach((day, index) => {
      if (!day) return;

      gsap.fromTo(
        day,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: day,
            start: "top 85%",
            end: "top 65%",
            scrub: 1,
          },
        }
      );

      day.addEventListener("mouseenter", () => {
        gsap.to(day, {
          backgroundColor: "hsl(var(--primary) / 0.05)",
          duration: 0.3,
          ease: "power2.out",
        });

        const arrow = day.querySelector(".arrow-icon");
        if (arrow) {
          gsap.to(arrow, {
            x: 10,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      });

      day.addEventListener("mouseleave", () => {
        gsap.to(day, {
          backgroundColor: "rgba(0, 0, 0, 0)",
          duration: 0.3,
          ease: "power2.out",
        });

        const arrow = day.querySelector(".arrow-icon");
        if (arrow) {
          gsap.to(arrow, {
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      });
    });
  }, []);

  return (
    <section className="flex flex-col w-full">
      {eventDays.map((event, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) daysRef.current[index] = el;
          }}
          onClick={() => onDayClick(event.day, event.date)}
          className="relative w-full h-[350px] border-b-2 border-border flex items-center justify-between px-10 cursor-pointer transition-colors"
        >
          <div className="flex items-center justify-center [font-family:'Neue_Montreal-Bold',Helvetica] font-bold text-foreground text-[140px] tracking-[0] leading-[204.9px] whitespace-nowrap">
            {event.day}
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center justify-center [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-primary text-[30.4px] text-right tracking-[0] leading-[39.5px] whitespace-nowrap">
              {event.date}
            </div>

            <ChevronRightIcon
              className="arrow-icon w-[108px] h-[109px] text-foreground"
              strokeWidth={1}
            />
          </div>
        </div>
      ))}
    </section>
  );
};
