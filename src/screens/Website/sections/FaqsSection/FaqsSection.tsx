import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt aliquam non dolor maecenas sed tortor.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: "item-2",
    question:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt aliquam non dolor maecenas sed tortor.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: "item-3",
    question:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt aliquam non dolor maecenas sed tortor.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: "item-4",
    question:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt aliquam non dolor maecenas sed tortor.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
];

export const FaqsSection = (): JSX.Element => {
  return (
    <section className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Divider */}
        <img
          src="/divider.svg"
          alt=""
          className="mb-12 w-full"
        />

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          {/* Title */}
          <h2 className="text-[clamp(3rem,6vw,6rem)] font-bold leading-none text-white lg:w-1/2">
            FAQs
          </h2>

          {/* Accordion */}
          <div className="lg:w-1/2">
            <Accordion type="single" collapsible className="space-y-6">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-white/20"
                >
                  <AccordionTrigger className="text-left text-white hover:no-underline [&[data-state=open]>svg]:rotate-45">
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent className="text-white/80">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};