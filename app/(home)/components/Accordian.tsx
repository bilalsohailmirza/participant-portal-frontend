import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function HomeAccordion() {
    return 
      <Accordion type="single" collapsible className="w-[70%] text-xl">
        <AccordionItem value="item-1">
          <AccordionTrigger className="">What is Campus Connect?</AccordionTrigger>
          <AccordionContent>
            Campus Connect is the online portal where participants can register for Events and Competiions being held at FAST-NUCES Karachi Campus.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How can I register for a competition?</AccordionTrigger>
          <AccordionContent>
           Registration in a competition can be done through the page of that particular competition. The competition page can be found through the societie&apos;s page that is organizing that competition.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is registration fee refundable?</AccordionTrigger>
          <AccordionContent>
            Registration fee for any Event or Competition is non refundable.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger className="">What is Campus Connect?</AccordionTrigger>
          <AccordionContent>
            Campus Connect is the online portal where participants can register for Events and Competiions being held at FAST-NUCES Karachi Campus.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How can I register for a competition?</AccordionTrigger>
          <AccordionContent>
           Registration in a competition can be done through the page of that particular competition. The competition page can be found through the societie&apos;s page that is organizing that competition.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is registration fee refundable?</AccordionTrigger>
          <AccordionContent>
            Registration fee for any Event or Competition is non refundable.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    
  }
  