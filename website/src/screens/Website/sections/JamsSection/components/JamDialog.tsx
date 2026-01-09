import * as React from "react";
import { JamItem } from "../../../../../types/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../../components/ui/dialog";
import { Separator } from "../../../../../components/ui/separator";

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
        <DialogHeader className="p-0 m-0 h-52">
          <DialogTitle>
            {activeItem.title.toUpperCase()}
          </DialogTitle>
        </DialogHeader>

        <div className="border-t-2 border-white/40 pt-4 space-y-6">
          <section className="space-y-2">
            {activeItem.subtitle && (
              <p className="uppercase tracking-wide text-lg font-semibold">
                {activeItem.subtitle}
              </p>
            )}

            {activeItem.duration && (
              <p className="uppercase tracking-wide text-md font-regular">
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
            <section className="space-y-2">
              <h2 className="uppercase tracking-wide text-xl font-semibold">
                Detalhes
              </h2>

              <div className="">
                {activeItem.details.map((detail, index) => (
                  <div key={index} className="py-2">
                    <p className="text-lg font-semibold">Titulo</p>
                    <p className="text-sm leading-relaxed text-white/90">
                      {detail}
                    </p>
                    <Separator className="mt-3 bg-white/40" />
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
