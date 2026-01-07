import { Button } from "../../../../../components/ui/button";
import { Separator } from "../../../../../components/ui/separator";

type EditionWrapperProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

export function EditionWrapper({
  title = "MAD JAM FEST",
  description = "Experimente o pulso da criatividade com uma jornada eletrizante pela experimentação artística e digital. De ritmos visuais a performances hipnóticas, este não é um festival comum—é um playground para inovadores criativos.",
  buttonText = "Ver mais",
  onButtonClick,
}: EditionWrapperProps) {
  return (
    <div className="relative bg-black w-full max-w-sm rounded-none overflow-hidden" data-name="Edição">
      <div className="p-6">
        <h2 className="font-neue-montreal text-white tracking-wide mb-3 font-bold text-lg">
          {title}
        </h2>

        <Separator className="mb-2 bg-white" />

        <p className="font-neue-montreal text-white/90 leading-7 mb-5 text-sm">
          {description}
        </p>

        <Button
          onClick={onButtonClick}
          className="bg-primary hover:bg-black hover:text-primary text-white px-8 rounded-full border-primary border-2 transition-colors"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}