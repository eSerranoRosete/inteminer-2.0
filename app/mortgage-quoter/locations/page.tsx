import { Content } from "@/components/application/Content";
import { Separator } from "@/components/ui/separator";
import React, { Suspense } from "react";

import { TableLoader } from "./TableLoader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sidebar } from "@/components/application/Sidebar";

export default function MortgageQuoterLocations() {
  return (
    <>
      <Sidebar />
      <Content>
        <div className="w-full">
          <header>
            <h2 className="text-3xl font-semibold mb-5">Manage Locations</h2>
            <Separator className="mb-10" />
          </header>
          <Suspense fallback={<>Loading...</>}>
            <div className="w-full grid grid-cols-2 gap-4">
              <TableLoader />
              <Card>
                <CardHeader>
                  <CardTitle>Location Details</CardTitle>
                  <CardDescription>Manage and edit location</CardDescription>
                </CardHeader>
                <CardContent></CardContent>
              </Card>
            </div>
          </Suspense>
        </div>
      </Content>
    </>
  );
}
