import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const ParticipationSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start pt-0 pb-[100px] px-[15px] relative">
      <img
        className="w-full h-px object-cover"
        alt="Divider"
        src="/divider.svg"
      />

      <h2 className="w-[625px] mt-[-1px] [font-family:'Instrument_Sans',Helvetica] font-bold text-neutral-100 text-8xl tracking-[0] leading-[105.6px]">
        Participa
      </h2>

      <div className="w-full mt-[60px] mb-[167px]">
        <img
          className="w-full h-[448px] object-cover"
          alt="Scroll"
          src="/scroll.png"
        />
      </div>

      <div className="w-full max-w-[643px] mx-auto flex items-center gap-3">
        <Input
          placeholder="Enter your name"
          className="flex-1 h-[42px] px-3 py-1 rounded-md border-[0.8px] border-neutral-100 bg-transparent text-neutral-100 [font-family:'Inter',Helvetica] font-normal text-sm"
        />

        <Button className="h-10 px-4 py-2 bg-[#fa5302] hover:bg-[#fa5302]/90 rounded-[26843500px] [font-family:'Inter',Helvetica] font-medium text-neutral-100 text-sm text-center whitespace-nowrap">
          Inscreve-te
        </Button>
      </div>
    </section>
  );
};
