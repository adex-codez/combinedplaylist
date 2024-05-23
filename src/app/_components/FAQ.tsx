import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
const faqItems = [
  {
    id: 1,
    question: "Is this going to be free forever?",
    answer:
      "It would be free as long as the music streaming platform i use don't charge and when they do charge an affordable pricing model would be introduced.",
  },
  {
    id: 2,
    question: "How do i update my playlist on the app?",
    answer:
      "Anytime you create a new playlist on any of the streaming platofrm of choice the app would be updated to see the new playlist added.",
  },
  {
    id: 3,
    question: "Why use this app?",
    answer:
      "It is a hassle to get all your playlist in all the music streaming platforms this app makes it easy to do such.",
  },
];

function FAQ() {
  return (
    <div className="bg-back rounded-xl  text-gray-100">
      <Accordion type="single" collapsible className="w-full px-6 py-8">
        {faqItems.map((item) => (
          <AccordionItem value={`item-${item.id}`} key={item.id}>
            <AccordionTrigger className="text-base font-bold">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
export default FAQ;
