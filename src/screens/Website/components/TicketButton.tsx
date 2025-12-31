import { ArrowUpRight } from "lucide-react";

const TICKETS_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeL_L_VGwe6WE1HWFK90SUtHN6XN0jEfAIQzH1NKw11_xSNNA/closedform";

const TicketButton = () => {
  return (
    <div className="flex items-center">
      {/* Main pill */}
      <a
        href={TICKETS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center
          h-13 p-2
          px-5
          rounded-full
          bg-black/40
          backdrop-blur-md
          text-white
          border border-white
          hover:bg-black/60
          transition
        "
      >
        Garante os teus bilhetes
      </a>

      {/* Arrow pill */}
      <a
        href={TICKETS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center justify-center
          h-13 w-13
          p-2
          rounded-full
          bg-black/40
          backdrop-blur-md
          border border-white
          text-white
          hover:bg-black/60
          transition
        "
        aria-label="Abrir formulário de bilhetes"
      >
        <ArrowUpRight className="h-5 w-5" />
      </a>
    </div>
  );
};

export default TicketButton;