import { Content } from "@/components/application/Content";
import { Separator } from "@/components/ui/separator";
import { Sidebar } from "lucide-react";
import React from "react";

export default function MortgageQuoter() {
  return (
    <>
      <Sidebar>
        <Content>
          <div className="w-full">
            <header>
              <h2 className="text-3xl font-semibold mb-5">Mortgage Quoter</h2>
              <Separator className="mb-10" />
            </header>
          </div>
        </Content>
      </Sidebar>
    </>
  );
}
