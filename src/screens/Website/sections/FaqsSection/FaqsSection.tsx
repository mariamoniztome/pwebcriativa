import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/accordion";
import { Separator } from "../../../../components/ui/separator";

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
    <section className="relative bg-black py-24 px-4">
      <div className="mx-auto  ">
        {/* Divider */}
        <Separator className="mb-12 bg-white/20" />

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Title */}
        <h2 className="mb-12 text-[clamp(3rem,8vw,6rem)] font-bold leading-none text-white">
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