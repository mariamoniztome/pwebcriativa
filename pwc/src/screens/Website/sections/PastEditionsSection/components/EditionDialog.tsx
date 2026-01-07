import { Edition } from "../../../../../types/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../../../components/ui/dialog";
import { Separator } from "../../../../../components/ui/separator";

type EditionDialogProps = {
  edition: Edition | null;
  onClose: () => void;
};

export function EditionDialog({ edition, onClose }: EditionDialogProps) {
  return (
    <Dialog
      open={!!edition}
      onOpenChange={(open: boolean) => !open && onClose()}
    >
      <DialogContent
        className="
          bg-[#101010] text-white
          max-w-[95vw] sm:max-w-[1200px]
          max-h-[90vh]
          overflow-y-auto
          rounded-xl
          p-6 sm:p-10
        "
      >
        {edition && (
          <>
            <DialogHeader>
              <DialogTitle className="text-left">{edition.year}</DialogTitle>
            </DialogHeader>
            <Separator className="bg-white" />
            {edition.image && (
              <div
                className="
                  grid gap-4
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-3
                "
              >
                {edition.gallery && (
                  <div
                    className="
      grid gap-4
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
    "
                  >
                    {edition.gallery.map((img, index) => (
                      <div
                        key={index}
                        className="relative aspect-[4/3] overflow-hidden bg-black"
                      >
                        <img
                          src={img}
                          alt={`Edição ${edition.year} ${index + 1}`}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {edition.description && (
              <p className="max-w-3xl text-white/80 leading-relaxed">
                {edition.description}
              </p>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}