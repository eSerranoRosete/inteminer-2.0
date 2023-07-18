import { Content } from "@/components/application/Content";

import React, { Suspense } from "react";

import { TableLoader } from "./TableLoader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function MortgageQuoterLocations() {
  return (
    <>
      <Content title="Manage Locations">
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
      </Content>
    </>
  );
}
