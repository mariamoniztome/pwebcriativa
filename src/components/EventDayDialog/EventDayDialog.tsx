import React, { useState, useEffect } from "react";
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={`absolute inset-0 bg-black/90 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <div
        className={`relative bg-card border-2 border-border rounded-lg p-10 max-w-3xl w-11/12 shadow-lg transition-all duration-400 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 p-0 hover:bg-muted hover:rotate-90 transition-all duration-300"
        >
          <X className="w-6 h-6 text-foreground" />
        </Button>

        <div className="mb-8">
          <h2 className="font-montreal-bold font-bold text-foreground text-8xl leading-tight">
            {day}
          </h2>
          <p className="font-montreal text-primary text-4xl mt-2">
            {date}
          </p>
        </div>

        <div className="space-y-6">
          <div className="border-l-4 border-primary pl-6">
            <h3 className="font-montreal-medium text-foreground text-h3 mb-2">
              10:00 - 12:00
            </h3>
            <p className="font-montreal text-muted-foreground text-body">
              Workshop de produção musical
            </p>
          </div>

          <div className="border-l-4 border-primary pl-6">
            <h3 className="font-montreal-medium text-foreground text-h3 mb-2">
              14:00 - 16:00
            </h3>
            <p className="font-montreal text-muted-foreground text-body">
              Painel: O futuro da música independente
            </p>
          </div>

          <div className="border-l-4 border-primary pl-6">
            <h3 className="font-montreal-medium text-foreground text-h3 mb-2">
              20:00 - 23:00
            </h3>
            <p className="font-montreal text-muted-foreground text-body">
              Concertos ao vivo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
