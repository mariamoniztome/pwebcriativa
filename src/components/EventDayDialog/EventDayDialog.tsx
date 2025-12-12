import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "../ui/button";
import { X } from "lucide-react";

interface EventDayDialogProps {
  isOpen: boolean;
  onClose: () => void;
  day: string;
  date: string;
}

export const EventDayDialog: React.FC<EventDayDialogProps> = ({
  isOpen,
  onClose,
  day,
  date,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dialogRef.current || !overlayRef.current || !contentRef.current)
      return;

    if (isOpen) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.fromTo(
        contentRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(1.7)",
        }
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    if (!contentRef.current || !overlayRef.current) return;

    gsap.to(contentRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: onClose,
    });
  };

  if (!isOpen) return null;

  return (
    <div ref={dialogRef} className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/90 opacity-0"
        onClick={handleClose}
      />
      <div
        ref={contentRef}
        className="relative bg-[#1a1a1a] border-2 border-neutral-100 rounded-lg p-10 max-w-[800px] w-[90%] opacity-0"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          className="absolute top-4 right-4 w-[40px] h-[40px] p-0 hover:bg-neutral-800 hover:rotate-90 transition-all duration-300"
        >
          <X className="w-6 h-6 text-neutral-100" />
        </Button>

        <div className="mb-8">
          <h2 className="[font-family:'Neue_Montreal-Bold',Helvetica] font-bold text-neutral-100 text-[80px] leading-tight">
            {day}
          </h2>
          <p className="[font-family:'Neue_Montreal-Regular',Helvetica] text-[#fa5302] text-[40px] mt-2">
            {date}
          </p>
        </div>

        <div className="space-y-6">
          <div className="border-l-4 border-[#fa5302] pl-6">
            <h3 className="[font-family:'Neue_Montreal-Medium',Helvetica] text-neutral-100 text-2xl mb-2">
              10:00 - 12:00
            </h3>
            <p className="[font-family:'Neue_Montreal-Regular',Helvetica] text-neutral-300 text-lg">
              Workshop de produção musical
            </p>
          </div>

          <div className="border-l-4 border-[#fa5302] pl-6">
            <h3 className="[font-family:'Neue_Montreal-Medium',Helvetica] text-neutral-100 text-2xl mb-2">
              14:00 - 16:00
            </h3>
            <p className="[font-family:'Neue_Montreal-Regular',Helvetica] text-neutral-300 text-lg">
              Painel: O futuro da música independente
            </p>
          </div>

          <div className="border-l-4 border-[#fa5302] pl-6">
            <h3 className="[font-family:'Neue_Montreal-Medium',Helvetica] text-neutral-100 text-2xl mb-2">
              20:00 - 23:00
            </h3>
            <p className="[font-family:'Neue_Montreal-Regular',Helvetica] text-neutral-300 text-lg">
              Concertos ao vivo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
