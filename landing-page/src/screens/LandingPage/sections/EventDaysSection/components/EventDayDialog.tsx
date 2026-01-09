import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../../../../components/ui/dialog";

type ProgramItem = {
  time: string;
  title: string;
  location: string;
  description: string;
};

type DaysDialogBlackProps = {
  date?: string;
  title?: string;
  venue?: string;
  location?: string;
  description?: string;
  ticketsLink?: string;
  volunteerLink?: string;
  program?: ProgramItem[];
  selectedIndex?: number | null;
  eventDays?: Array<{ 
    day: string; 
    date: string; 
    title?: string; 
    venue?: string; 
    location?: string; 
    description?: string;
    ticketsLink?: string;
    volunteerLink?: string;
    program?: ProgramItem[];
  }>;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export default function DaysDialogBlack({
  date,
  title,
  venue,
  location,
  description,
  ticketsLink,
  volunteerLink,
  program,
  selectedIndex,
  eventDays,
  isOpen,
  onOpenChange,
}: DaysDialogBlackProps) {
  const selectedDay =
    selectedIndex !== null && selectedIndex !== undefined && eventDays
      ? eventDays[selectedIndex]
      : null;

  const selectedDate = selectedDay?.date || date;
  const selectedTitle = selectedDay?.title || title;
  const selectedVenue = selectedDay?.venue || venue;
  const selectedLocation = selectedDay?.location || location;
  const selectedDescription = selectedDay?.description || description;
  const selectedTicketsLink = selectedDay?.ticketsLink || ticketsLink;
  const selectedVolunteerLink = selectedDay?.volunteerLink || volunteerLink;
  const selectedProgram = selectedDay?.program || program || [];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <button className="hidden" />
      </DialogTrigger>

      <DialogContent className="p-0 bg-transparent border-none max-w-[1400px] w-full h-[900px]">
        <div className="bg-black overflow-y-auto relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] w-full h-full px-[55px] py-[64px]">
          {/* Date Header */}
          <div className="border-white border-b pb-6 mb-8">
            <h1 className="text-white text-[180px] leading-[1] tracking-[-5.5px] font-bold">
              {selectedDate}
            </h1>
          </div>

          {/* Links and Event Info */}
          <div className="flex gap-16 mb-12">
            {/* Left Column - Links */}
            <div className="flex flex-col gap-3 text-white min-w-[200px]">
              {selectedTicketsLink && (
                <a
                  href={selectedTicketsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] hover:opacity-70 transition-opacity"
                >
                  → BILHETES
                </a>
              )}
              {selectedVolunteerLink && (
                <a
                  href={selectedVolunteerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] hover:opacity-70 transition-opacity"
                >
                  → VOLUNTARIADO
                </a>
              )}
            </div>

            {/* Right Column - Event Details */}
            <div className="flex-1 text-white">
              {selectedTitle && (
                <h2 className="text-[24px] font-bold tracking-wide mb-2">
                  {selectedTitle}
                </h2>
              )}
              {selectedVenue && (
                <p className="text-[14px] uppercase tracking-wide mb-1">
                  {selectedVenue}
                </p>
              )}
              {selectedLocation && (
                <p className="text-[14px] uppercase tracking-wide mb-4">
                  {selectedLocation}
                </p>
              )}
              {selectedDescription && (
                <p className="text-[14px] leading-relaxed max-w-[520px]">
                  {selectedDescription}
                </p>
              )}
            </div>
          </div>

          {/* Program Section */}
          <div className="border-t border-white pt-8 mt-12">
            <h3 className="text-white text-[24px] font-bold tracking-wide mb-8">
              PROGRAMA
            </h3>

            <div className="space-y-8">
              {selectedProgram.map((item, index) => (
                <div
                  key={`${item.time}-${index}`}
                  className="text-white"
                >
                  <p className="font-bold text-[20px] mb-2">{item.time}</p>
                  <p className="text-[20px] font-semibold mb-1">{item.title}</p>
                  <p className="uppercase text-[12px] tracking-wide mb-2 opacity-80">
                    {item.location}
                  </p>
                  <p className="text-[14px] max-w-[520px] opacity-90 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}