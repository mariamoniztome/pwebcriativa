import { JamItem } from "../../../../../types/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../../../components/ui/dialog";
type GalleryDialogProps = {
  item: JamItem | null;
  onClose: () => void;
};

export const GalleryDialog = ({ item, onClose }: GalleryDialogProps) => {
  if (!item) return null;

  return (
    <Dialog open={!!item} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-neutral-950 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-orange-500">
            {item.title}
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 md:grid-cols-2">
          <img
            src={item.image}
            alt={item.title}
            className="w-full rounded-lg object-cover"
          />

          <p className="text-lg leading-relaxed text-white/80">
            {item.description}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};