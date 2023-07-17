import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SidebarItem } from "./SidebarItem";
import { CalculatorIcon, MapIcon, BarChart2 } from "lucide-react";

type SidebarItemProps = {
  icon?: React.ReactNode;
  label?: string;
};

export const SidebarItemParent = ({ icon, label }: SidebarItemProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem className="border-0" value="item-1">
        <AccordionTrigger className="flex relative justify-start items-center gap-2 text-sm p-4 py-3 rounded-xl -mx-3 hover:bg-indigo-950/30">
          <div>
            <CalculatorIcon className="w-4" />
          </div>
          Mortgage Quoter
        </AccordionTrigger>
        <AccordionContent asChild className="relative p-5 py-3 -mx-3">
          <div className="border-l pl-4 border-zinc-700">
            <SidebarItem
              icon={<MapIcon className="w-5" />}
              label="Manage Locations"
              href="/mortgage-quoter/locations"
            />
            <SidebarItem
              icon={<BarChart2 className="w-5" />}
              label="Usage"
              href="/mortgage-quoter/usage"
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
