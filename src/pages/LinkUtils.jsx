import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DataLink from "@/composant/DataLink";

const LinkUtils = () => {
  return (
    <div className="flex flex-col gap-3 w-2/6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Solving</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2">
            <DataLink
              describe={"Lien 1 de solving"}
              title={"je suis le lien 1 de solving"}
              url={"#"}
            />
            <DataLink
              describe={"Lien 2 de solving"}
              title={"je suis le lien 2 de solving"}
              url={"#"}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Pack</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2">
            <DataLink
              describe={"Lien 1 de pack"}
              title={"je suis le lien 1 pack"}
              url={"#"}
            />
            <DataLink
              describe={"Lien 2 de pack"}
              title={"je suis le lien 2 pack"}
              url={"#"}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Pick</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2">
            <DataLink
              describe={"Lien 1 de pick"}
              title={"je suis le lien 1 pick"}
              url={"#"}
            />
            <DataLink
              describe={"Lien 2 de pick"}
              title={"je suis le lien 2 pick"}
              url={"#"}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Ship</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2">
            <DataLink
              describe={"Lien 1 de ship"}
              title={"je suis le lien 1 ship"}
              url={"#"}
            />
            <DataLink
              describe={"Lien 2 de ship"}
              title={"je suis le lien 2 ship"}
              url={"#"}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>V-return</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2">
            <DataLink
              describe={"Lien 1 de v-return"}
              title={"je suis le lien 1 v-return"}
              url={"#"}
            />
            <DataLink
              describe={"Lien 2 de v-return"}
              title={"je suis le lien 2 v-return"}
              url={"#"}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LinkUtils;
