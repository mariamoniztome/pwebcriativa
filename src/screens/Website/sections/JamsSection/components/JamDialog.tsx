import * as React from "react";
import { JamItem } from "../../../../../types/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../../components/ui/dialog";

type JamDialogProps = {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  activeItem?: JamItem | null;
};

export function JamDialog({ children, open, onOpenChange, activeItem }: JamDialogProps) {
  if (!activeItem) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        {children && <DialogTrigger asChild>{children}</DialogTrigger>}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Loading...</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {activeItem.title.toUpperCase()}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-12 space-y-12">
          <section className="space-y-4">
            {activeItem.subtitle && (
              <p className="uppercase tracking-wide text-sm sm:text-base">
                {activeItem.subtitle}
              </p>
            )}

            {activeItem.duration && (
              <p className="uppercase tracking-wide text-sm sm:text-base">
                {activeItem.duration}
              </p>
            )}

            {activeItem.description && (
              <p className="max-w-3xl text-sm sm:text-base leading-relaxed text-white/90">
                {activeItem.description}
              </p>
            )}
          </section>

          {activeItem.details && activeItem.details.length > 0 && (
            <section className="space-y-8">
              <h2 className="uppercase tracking-wide text-base sm:text-lg">
                Detalhes
              </h2>

              <div className="divide-y divide-white/20">
                {activeItem.details.map((detail, index) => (
                  <div key={index} className="py-6">
                    <p className="text-sm sm:text-base leading-relaxed text-white/90">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
