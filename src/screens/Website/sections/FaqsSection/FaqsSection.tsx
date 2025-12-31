import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt aliquam non dolor maecenas sed tortor.",
  },
  {
    id: "item-2",
    question:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt aliquam non dolor maecenas sed tortor.",
  },
  {
    id: "item-3",
    question:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt aliquam non dolor maecenas sed tortor.",
  },
  {
    id: "item-4",
    question:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt aliquam non dolor maecenas sed tortor.",
  },
];

export const FaqsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[30px] pt-0 pb-[100px] px-[15px] relative">
      <img
        className="relative self-stretch w-full h-px object-cover"
        alt="Divider"
        src="/divider.svg"
      />

      <div className="flex flex-col lg:flex-row w-full items-start gap-[30px] relative">
        <h2 className="w-full lg:w-[625px] [font-family:'Instrument_Sans',Helvetica] font-bold text-neutral-100 text-8xl tracking-[0] leading-[105.6px]">
          FAQs
        </h2>

        <div className="flex flex-col w-full lg:w-[705px] items-start gap-[36.15px] px-0 lg:px-[26.51px] py-[36.15px]">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-[36.15px]"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-none"
              >
                <AccordionTrigger className="flex items-center gap-[9.64px] w-full hover:no-underline [&[data-state=open]>svg]:rotate-45 transition-transform">
                  <span className="flex-1 text-left [font-family:'Montserrat',Helvetica] font-semibold text-neutral-100 text-base tracking-[-0.32px] leading-[normal]">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
