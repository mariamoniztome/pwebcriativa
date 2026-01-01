import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../../../../../components/ui/dialog";
import { cn } from "../../../../../lib/utils";

type JamDialogProps = {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function JamDialog({ children, open, onOpenChange }: JamDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}

      <DialogContent
        className={cn(
          "bg-[#101010] text-[#f5f5f5]",
          "w-[95vw] max-w-[1400px] max-h-[90vh]",
          "overflow-y-auto rounded-xl",
          "p-6 sm:p-10 md:p-14"
        )}
      >
        {/* Close */}
        <DialogPrimitive.Close asChild>
          <button
            className="absolute right-4 top-4 sm:right-6 sm:top-6 rounded-full p-2 hover:bg-white/10 transition"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </DialogPrimitive.Close>

        {/* HEADER */}
        <header className="border-b border-white/20 pb-6 mb-10">
          <h1
            className="
              font-black tracking-tight leading-none
              text-[clamp(3rem,10vw,13rem)]
            "
          >
            PHOTO JAM
          </h1>
        </header>

        {/* INFO */}
        <section className="space-y-4 mb-12">
          <p className="uppercase tracking-wide text-sm sm:text-base">
            Projeto Fotográfico Intensivo
          </p>

          <p className="uppercase tracking-wide text-sm sm:text-base">
            48 horas de captura criativa
          </p>

          <p className="max-w-3xl text-sm sm:text-base leading-relaxed text-white/90">
            A MAD Photo Jam desafia os participantes a desenvolver um projeto
            fotográfico original em formato intensivo e ao longo de 48h, sobre
            uma temática que apenas irão conhecer no primeiro dia do evento. Os
            trabalhos serão apresentados no final das 48 horas no evento e em
            formato expositivo após o evento.
          </p>
        </section>

        {/* DETAILS */}
        <section className="space-y-8">
          <h2 className="uppercase tracking-wide text-base sm:text-lg">
            Modelo de funcionamento
          </h2>

          <div className="divide-y divide-white/20">
            {[
              {
                title: "Categoria Única",
                description:
                  "Existe apenas uma categoria, independentemente da(s) técnica(s) utilizadas. Cada projeto deve contemplar 10 imagens.",
              },
              {
                title: "Temática",
                description:
                  "Os participantes desenvolvem os trabalhos sobre uma temática que só vão conhecer no primeiro dia do evento.",
              },
              {
                title: "Apresentação",
                description:
                  "Os trabalhos são apresentados pelo autor e projetados perante o público 48 horas depois. Os participantes devem ser autónomos no equipamento necessário.",
              },
              {
                title: "Premiação",
                description:
                  "Os 3 melhores classificados serão premiados e serão atribuídas 4 menções honrosas.",
              },
            ].map((item) => (
              <div key={item.title} className="py-6">
                <p className="font-medium">{item.title}</p>
                <p className="mt-2 text-sm sm:text-base text-white/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
}