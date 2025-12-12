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
        className="absolute inset-0 bg-background/90 opacity-0"
        onClick={handleClose}
      />
      <div
        ref={contentRef}
        className="relative bg-card border-2 border-border rounded-lg p-10 max-w-[800px] w-[90%] opacity-0 shadow-lg"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 p-0 hover:bg-muted hover:rotate-90 transition-all duration-300"
        >
          <X className="w-6 h-6 text-foreground" />
        </Button>

        <div className="mb-8">
          <h2 className="[font-family:'Neue_Montreal-Bold',Helvetica] font-bold text-foreground text-[80px] leading-tight">
            {day}
          </h2>
          <p className="[font-family:'Neue_Montreal-Regular',Helvetica] text-primary text-[40px] mt-2">
            {date}
          </p>
        </div>

        <div className="space-y-6">
          <div className="border-l-4 border-primary pl-6">
            <h3 className="[font-family:'Neue_Montreal-Medium',Helvetica] text-foreground text-h3 mb-2">
              10:00 - 12:00
            </h3>
            <p className="[font-family:'Neue_Montreal-Regular',Helvetica] text-muted-foreground text-body">
              Workshop de produção musical
            </p>
          </div>

          <div className="border-l-4 border-primary pl-6">
            <h3 className="[font-family:'Neue_Montreal-Medium',Helvetica] text-foreground text-h3 mb-2">
              14:00 - 16:00
            </h3>
            <p className="[font-family:'Neue_Montreal-Regular',Helvetica] text-muted-foreground text-body">
              Painel: O futuro da música independente
            </p>
          </div>

          <div className="border-l-4 border-primary pl-6">
            <h3 className="[font-family:'Neue_Montreal-Medium',Helvetica] text-foreground text-h3 mb-2">
              20:00 - 23:00
            </h3>
            <p className="[font-family:'Neue_Montreal-Regular',Helvetica] text-muted-foreground text-body">
              Concertos ao vivo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
