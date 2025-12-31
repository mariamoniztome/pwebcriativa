import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../../../components/ui/dialog";
import { Edition } from "../../../../../types/types";

type EditionDialogProps = {
  edition: Edition | null;
  onClose: () => void;
};

export const EditionDialog = ({
  edition,
  onClose,
}: EditionDialogProps) => {
  if (!edition) return null;

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-neutral-950 text-white">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-orange-500">
            {edition.title ?? `Edição ${edition.year}`}
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 md:grid-cols-2">
          <img
            src={edition.image}
            alt={edition.year}
            className="w-full rounded-lg object-cover"
          />

          <p className="text-white/80">
            {edition.description ??
              "Conteúdo detalhado desta edição será disponibilizado em breve."}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
