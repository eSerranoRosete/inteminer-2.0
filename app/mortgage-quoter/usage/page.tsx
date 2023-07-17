import { Content } from "@/components/application/Content";
import { Sidebar } from "@/components/application/Sidebar";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default function MortgageQuoterUsage() {
  return (
    <>
      <Sidebar />
      <Content>
        <div className="w-full">
          <header>
            <h2 className="text-3xl font-semibold mb-5">Usage Overview</h2>
            <Separator className="mb-10" />
          </header>
        </div>
      </Content>
    </>
  );
}
