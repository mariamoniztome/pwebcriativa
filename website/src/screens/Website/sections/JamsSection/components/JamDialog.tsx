import * as React from "react";
import { JamItem, JamDetail } from "../../../../../types/types";
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
                {activeItem.duration.toUpperCase()}
              </p>
            )}

            {activeItem.description && (
              <p className="max-w-3xl text-sm font-normal leading-relaxed text-white/90">
                {activeItem.description}
              </p>
            )}
          </section>

          {activeItem.details && activeItem.details.length > 0 && (
            <section className="space-y-2">
              <h2 className="uppercase tracking-wide text-xl font-semibold">
                MODELO DE FUNCIONAMENTO
              </h2>

              <div className="">
                {activeItem.details.map((detail, index) => {
                  const isObj = typeof detail === "object" && detail !== null;
                  const item = (detail as JamDetail);
                  const title = isObj ? item.title : undefined;
                  const description = isObj ? item.description : (detail as string);
                  const isLast = index === activeItem.details!.length - 1;
                  return (
                    <div key={index} className="py-2">
                      {title && (
                        <p className="text-lg font-semibold">{title}</p>
                      )}
                      <p className="text-sm leading-relaxed text-white/90">
                        {description}
                      </p>
                      {!isLast && <Separator className="mt-3 bg-white/40" />}
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
