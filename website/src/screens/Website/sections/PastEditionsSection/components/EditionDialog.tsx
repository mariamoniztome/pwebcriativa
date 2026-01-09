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
  const galleryLayout = [
    "col-span-12 md:col-span-5 lg:col-span-4",
    "col-span-12 md:col-span-4 lg:col-span-3",
    "col-span-12 md:col-span-3 lg:col-span-3",
    "col-span-12 md:col-span-6 lg:col-span-4",
    "col-span-12 md:col-span-6 lg:col-span-5",
  ];

  return (
    <Dialog
      open={!!edition}
      onOpenChange={(open: boolean) => !open && onClose()}
    >
      <DialogContent
        className="
          bg-[#0b0b0b] text-white
          max-w-[95vw] sm:max-w-[1200px]
          max-h-[90vh]
          overflow-y-auto
          rounded-[18px]
          p-6 sm:p-10
        "
      >
        {edition && (
          <div className="space-y-10">
            <DialogHeader className="p-0 space-y-0">
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-3">
                  <DialogTitle className="text-left h-52">{edition.year}</DialogTitle>
                </div>
              </div>
            </DialogHeader>
            <Separator className="mt-3 bg-white/40" />
            {edition.gallery && edition.gallery.length > 0 && (
              <div className="grid grid-cols-12 auto-rows-[160px] gap-4">
                {edition.gallery.map((img, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-md bg-black/40 ${
                      galleryLayout[index] ?? "col-span-12 sm:col-span-6"
                    }`}
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

            {edition.winners && edition.winners.length > 0 && (
              <section className="space-y-4">
              <h3 className="uppercase tracking-wide text-xl font-semibold">
                  Vencedores
                </h3>
                <div className="space-y-4">
                  {edition.winners.map((winner, index) => (
                    <div
                      key={`${winner.title}-${index}`}
                      className="space-y-1 pb-4 border-b border-white/10 last:border-b-0 last:pb-0"
                    >
                      <p className="text-lg font-semibold">{winner.title}</p>
                      <p className="text-sm leading-relaxed text-white/80">
                        {winner.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {edition.partners && edition.partners.length > 0 && (
              <section className="space-y-4">
               <h3 className="uppercase tracking-wide text-xl font-semibold">
                  Parceiros
                </h3>
                <div className="space-y-4">
                  {edition.partners.map((partner, index) => (
                    <div
                      key={`${partner.name}-${index}`}
                      className="space-y-1 pb-4 border-b border-white/10 last:border-b-0 last:pb-0"
                    >
                      <p className="text-lg font-semibold">{partner.name}</p>
                      <p className="text-sm leading-relaxed text-white/80">
                        {partner.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {edition.prizes && edition.prizes.length > 0 && (
              <section className="space-y-4">
                <h3 className="uppercase tracking-wide text-xl font-semibold">
                  Prémios
                </h3>
                <div className="space-y-4">
                  {edition.prizes.map((prize, index) => (
                    <div
                      key={`${prize.title}-${index}`}
                      className="space-y-1 pb-4 border-b border-white/10 last:border-b-0 last:pb-0"
                    >
                      <p className="text-lg font-semibold">{prize.title}</p>
                      <p className="text-sm leading-relaxed text-white/80">
                        {prize.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}